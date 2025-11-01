"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft, BookOpen, Wand2, Download, Share2, Palette, ImageIcon, Sparkles } from "lucide-react"
import Link from "next/link"

const coverTemplates = [
  {
    id: 1,
    name: "Morning Warrior",
    image: "/covers/cover-woke-up-behind.png",
    style: "Epic Fantasy",
    description: "Perfect for stories about morning struggles and daily battles",
    tags: ["Morning", "Resilience", "Adventure"],
  },
  {
    id: 2,
    name: "Office Dragon",
    image: "/covers/cover-office-dragon.png",
    style: "Workplace Epic",
    description: "Ideal for workplace challenges and professional quests",
    tags: ["Work", "Perseverance", "Epic"],
  },
]

const aiCoverStyles = [
  { name: "Epic Fantasy", description: "Dragons, warriors, and mystical landscapes" },
  { name: "Urban Adventure", description: "Modern settings with heroic elements" },
  { name: "Mystical Journey", description: "Ethereal and magical atmospheres" },
  { name: "Steampunk Quest", description: "Victorian-era technology meets adventure" },
  { name: "Space Opera", description: "Cosmic adventures and stellar battles" },
  { name: "Dark Fantasy", description: "Gothic and mysterious themes" },
]

export default function BookCoverCreator() {
  const [activeTab, setActiveTab] = useState("templates")
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [coverTitle, setCoverTitle] = useState("Your Epic Tale")
  const [coverSubtitle, setCoverSubtitle] = useState("A Hero's Journey")
  const [authorName, setAuthorName] = useState("Your Name")
  const [selectedStyle, setSelectedStyle] = useState("Epic Fantasy")
  const [storyPrompt, setStoryPrompt] = useState("")
  const [generatedCover, setGeneratedCover] = useState(null)

  const handleGenerateAICover = () => {
    // Simulate AI cover generation
    setGeneratedCover({
      image: "/covers/cover-woke-up-behind.png", // Using template as placeholder
      title: coverTitle,
      subtitle: coverSubtitle,
      author: authorName,
      style: selectedStyle,
    })
  }

  const handleCustomizeTemplate = (template) => {
    setSelectedTemplate({
      ...template,
      customTitle: coverTitle,
      customSubtitle: coverSubtitle,
      customAuthor: authorName,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto bg-white min-h-screen shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              <h1 className="text-xl font-bold">Book Cover Creator</h1>
            </div>
          </div>
          <p className="text-purple-100 text-sm">Transform your story and yourself into legend</p>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Panel - Controls */}
          <div className="lg:w-1/2 p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="ai-generate">AI Generate</TabsTrigger>
                <TabsTrigger value="customize">Customize</TabsTrigger>
              </TabsList>

              {/* Template Selection */}
              <TabsContent value="templates" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-blue-500" />
                      Choose a Template
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {coverTemplates.map((template) => (
                        <div
                          key={template.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            selectedTemplate?.id === template.id ? "border-purple-500 bg-purple-50" : "border-gray-200"
                          }`}
                          onClick={() => setSelectedTemplate(template)}
                        >
                          <div className="flex gap-4">
                            <img
                              src={template.image || "/placeholder.svg"}
                              alt={template.name}
                              className="w-16 h-24 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold">{template.name}</h3>
                              <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {template.tags.map((tag, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* AI Generation */}
              <TabsContent value="ai-generate" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-500" />
                      AI Cover Generation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Story Description</label>
                      <Textarea
                        placeholder="Describe your story or the experience you want to transform into a book cover..."
                        value={storyPrompt}
                        onChange={(e) => setStoryPrompt(e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Art Style</label>
                      <div className="grid grid-cols-2 gap-2">
                        {aiCoverStyles.map((style) => (
                          <Button
                            key={style.name}
                            variant={selectedStyle === style.name ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedStyle(style.name)}
                            className="text-xs h-auto py-2 px-3"
                          >
                            <div className="text-center">
                              <div className="font-medium">{style.name}</div>
                              <div className="text-xs opacity-70">{style.description}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button onClick={handleGenerateAICover} className="w-full" disabled={!storyPrompt.trim()}>
                      <Wand2 className="w-4 h-4 mr-2" />
                      Generate AI Cover
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Customization */}
              <TabsContent value="customize" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-green-500" />
                      Customize Your Cover
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Title</label>
                      <Input
                        value={coverTitle}
                        onChange={(e) => setCoverTitle(e.target.value)}
                        placeholder="Enter your story title..."
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Subtitle</label>
                      <Input
                        value={coverSubtitle}
                        onChange={(e) => setCoverSubtitle(e.target.value)}
                        placeholder="Enter a subtitle..."
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Author</label>
                      <Input
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Your name..."
                      />
                    </div>

                    <Button
                      onClick={() => handleCustomizeTemplate(selectedTemplate || coverTemplates[0])}
                      className="w-full"
                    >
                      <Palette className="w-4 h-4 mr-2" />
                      Apply Customization
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:w-1/2 p-6 bg-gray-50">
            <Card>
              <CardHeader>
                <CardTitle>Cover Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  {selectedTemplate || generatedCover ? (
                    <div className="relative">
                      <img
                        src={(selectedTemplate || generatedCover)?.image}
                        alt="Book Cover Preview"
                        className="w-64 h-96 object-cover rounded-lg shadow-lg"
                      />
                      {/* Text Overlay Simulation */}
                      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                        <div className="text-center">
                          <h2 className="text-lg font-bold text-shadow-lg">{coverTitle}</h2>
                          <p className="text-sm text-shadow-lg">{coverSubtitle}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-shadow-lg">{authorName}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-64 h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <BookOpen className="w-12 h-12 mx-auto mb-2" />
                        <p>Select a template or generate a cover</p>
                      </div>
                    </div>
                  )}
                </div>

                {(selectedTemplate || generatedCover) && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button size="sm" className="flex-1">
                      Save to Story
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Cover Gallery */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Template Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-48">
                  <div className="grid grid-cols-3 gap-2">
                    {coverTemplates.map((template) => (
                      <div
                        key={template.id}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedTemplate(template)}
                      >
                        <img
                          src={template.image || "/placeholder.svg"}
                          alt={template.name}
                          className="w-full h-24 object-cover rounded"
                        />
                        <p className="text-xs text-center mt-1">{template.name}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
