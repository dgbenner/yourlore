"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, BookOpen, Wand2, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function ChapterCreation() {
  const [chapterTitle, setChapterTitle] = useState("")
  const [generatedChapter, setGeneratedChapter] = useState("")

  const selectedStories = [
    { title: "The Morning Trial", theme: "Resilience" },
    { title: "The Social Labyrinth", theme: "Courage" },
    { title: "The Deadline Dragon", theme: "Perseverance" },
    { title: "The Coffee Quest", theme: "Adaptability" },
  ]

  const handleGenerateChapter = () => {
    const sampleChapter = `# Chapter 1: The Awakening of Strength

## Prologue
In the chronicles of personal legend, there comes a time when scattered trials reveal themselves as connected threads in a greater tapestry. This is the story of four trials that awakened the hero within.

## The Morning Trial: When Paths Choose Us
The first test came with the dawn, when the iron beast failed to appear. What seemed like mere inconvenience became the opening verse of an epic—a lesson that sometimes the universe conspires to show us new paths we never would have chosen ourselves.

*[Weaves in the full story of missing the bus, transformed and connected to the larger narrative]*

## The Social Labyrinth: Finding Voice in Silence
The second trial tested not the body, but the spirit. In the realm of awkward silences and unspoken words, our hero learned that courage isn't the absence of fear—it's speaking truth despite the trembling.

*[Incorporates the social anxiety story, showing how it builds on the morning's lesson about unexpected paths]*

## The Deadline Dragon: Time as Teacher
When time itself became the enemy, our hero discovered that pressure doesn't just create diamonds—it reveals the strength that was always there, waiting to be uncovered.

*[Builds on previous lessons, showing growth and pattern]*

## The Coffee Quest: Mastery Through Adaptation
The final trial of this chapter seemed smallest, yet proved most profound. When ritual was disrupted, creativity emerged. When comfort was removed, resourcefulness bloomed.

## Chapter Reflection
Four trials. Four lessons. One emerging truth: that within every obstacle lies not just opportunity, but invitation—an invitation to become who we were always meant to be.

The hero's journey has begun. The awakening is complete.

*Chapter 1 Complete: 1,847 words*
*Themes Woven: Resilience, Courage, Perseverance, Adaptability*
*Your Epic Grows...*`

    setGeneratedChapter(sampleChapter)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-2xl mx-auto bg-white min-h-screen shadow-xl">
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
              <h1 className="text-xl font-bold">Chapter Creation</h1>
            </div>
          </div>
          <p className="text-purple-100 text-sm">Transform your story and yourself into legend</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Selected Stories */}
          <Card>
            <CardHeader>
              <CardTitle>Stories to Weave Together</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {selectedStories.map((story, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm font-medium">{story.title}</span>
                    <Badge variant="secondary" className="text-xs">
                      {story.theme}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chapter Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Chapter Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Chapter Title (optional)</label>
                <Textarea
                  placeholder="Let the AI suggest a title, or write your own..."
                  value={chapterTitle}
                  onChange={(e) => setChapterTitle(e.target.value)}
                  className="min-h-[60px]"
                />
              </div>

              <Button onClick={handleGenerateChapter} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600">
                <Wand2 className="w-4 h-4 mr-2" />
                Weave Stories Into Chapter
              </Button>
            </CardContent>
          </Card>

          {/* Generated Chapter */}
          {generatedChapter && (
            <Card>
              <CardHeader>
                <CardTitle>Your Chapter</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="prose prose-sm max-w-none">
                    {generatedChapter.split("\n").map((line, index) => (
                      <div
                        key={index}
                        className={
                          line.startsWith("# ")
                            ? "text-xl font-bold mb-4 text-purple-800"
                            : line.startsWith("## ")
                              ? "text-lg font-semibold mb-3 mt-4 text-indigo-700"
                              : line.startsWith("*[")
                                ? "text-xs text-gray-500 italic bg-gray-50 p-2 rounded mb-2"
                                : line.startsWith("*Chapter")
                                  ? "text-sm text-green-600 font-medium"
                                  : line.startsWith("*Themes")
                                    ? "text-sm text-blue-600 font-medium"
                                    : line.startsWith("*Your Epic")
                                      ? "text-sm text-purple-600 font-medium"
                                      : "mb-2"
                        }
                      >
                        {line.replace(/^#+\s/, "").replace(/\*/g, "")}
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-1" />
                    Export
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                  <Button size="sm" className="flex-1">
                    Save Chapter
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
