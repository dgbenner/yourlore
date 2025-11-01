"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  BookOpen,
  Sparkles,
  Wand2,
  Crown,
  Plus,
  FileText,
  Layers,
  Clock,
  Star,
  Map,
  ImageIcon,
  Search,
  Heart,
  Ghost,
  Rocket,
  Smile,
  Theater,
  Zap,
  Building,
  Settings,
  Shield,
  Target,
} from "lucide-react"
import Link from "next/link"

const userStories = [
  {
    id: 1,
    title: "The Morning Trial",
    genre: "Adventure",
    wordCount: 342,
    date: "Today",
    theme: "Resilience",
    preview: "When the iron beast failed to arrive, our hero discovered hidden paths...",
    status: "complete",
    isCanon: true,
    achievements: ["First Steps", "Adaptability"],
    coverImage: "/covers/cover-woke-up-behind.png",
  },
  {
    id: 2,
    title: "The Social Labyrinth",
    genre: "Mystery",
    wordCount: 298,
    date: "Yesterday",
    theme: "Courage",
    preview: "In the realm of awkward silences, our protagonist faced their greatest fear...",
    status: "complete",
    isCanon: true,
    achievements: ["Social Warrior", "Inner Voice"],
    coverImage: "/covers/cover-office-dragon.png",
  },
  {
    id: 3,
    title: "The Deadline Dragon",
    genre: "Epic",
    wordCount: 445,
    date: "3 days ago",
    theme: "Perseverance",
    preview: "Time itself became the enemy as our hero battled against the ticking clock...",
    status: "complete",
    isCanon: true,
    achievements: ["Time Master", "Under Pressure"],
    coverImage: "/covers/cover-office-dragon.png",
  },
  {
    id: 4,
    title: "The Coffee Quest",
    genre: "Adventure",
    wordCount: 267,
    date: "1 week ago",
    theme: "Adaptability",
    preview: "When the sacred morning ritual was disrupted, creativity became the key...",
    status: "complete",
    isCanon: false,
    achievements: ["Creative Problem Solver"],
    coverImage: "/covers/cover-woke-up-behind.png",
  },
  // Additional stories to show advanced features
  {
    id: 5,
    title: "The Parking Predicament",
    genre: "Comedy",
    wordCount: 189,
    date: "2 weeks ago",
    theme: "Patience",
    preview: "A simple errand became an epic quest for the perfect parking spot...",
    status: "complete",
    isCanon: false,
    achievements: ["Patience Grasshopper"],
  },
  {
    id: 6,
    title: "The Email Avalanche",
    genre: "Survival",
    wordCount: 356,
    date: "3 weeks ago",
    theme: "Organization",
    preview: "Buried under digital correspondence, our hero fought for inbox zero...",
    status: "complete",
    isCanon: true,
    achievements: ["Digital Warrior", "Priority Master"],
  },
]

// Simulated user level - advanced features unlock after 5+ stories
const userLevel = userStories.length >= 5 ? "advanced" : "beginner"

export default function YourLoreApp() {
  const [activeTab, setActiveTab] = useState("create")
  const [userStory, setUserStory] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("Adventure")
  const [storyDepth, setStoryDepth] = useState([60])
  const [generatedStory, setGeneratedStory] = useState("")

  // Calculate progress toward chapter
  const totalWordCount = userStories.reduce((sum, story) => sum + story.wordCount, 0)
  const storiesCount = userStories.length
  const canonStories = userStories.filter((story) => story.isCanon)
  const chapterReadyThreshold = 5
  const wordCountThreshold = 1500

  const progressToChapter = Math.min(
    (storiesCount / chapterReadyThreshold) * 100,
    (totalWordCount / wordCountThreshold) * 100,
  )

  const isChapterReady = storiesCount >= 3 && totalWordCount >= 1000

  // Extract all achievements
  const allAchievements = [...new Set(userStories.flatMap((story) => story.achievements))]

  const handleGenerateStory = () => {
    const sampleStory = `**The Tale of the Delayed Wanderer**

In the bustling realm of Commutia, where iron beasts carry weary souls to their daily quests, our hero faced an unexpected trial. The great mechanical dragon that was to bear them to the halls of learning had vanished into the morning mist.

But this was no mere inconvenience—it was a call to adventure.

With determination as their compass, our protagonist set forth on foot. The familiar path transformed before their eyes: hidden gardens revealed themselves between concrete towers, fellow travelers shared knowing smiles, and the rhythm of their own footsteps became a meditation.

What began as frustration transformed into discovery. The delay became a gift—time to notice the world beyond the window of a rushing beast, time to feel their own strength carrying them forward.

By journey's end, our hero had not simply reached their destination. They had discovered that sometimes the path chooses us, and that within every obstacle lies an invitation to grow.

*Story Complete: 287 words*
*Theme Discovered: Finding opportunity in disruption*
*Achievement Unlocked: Path Walker*
*Your Lore grows stronger...*`

    setGeneratedStory(sampleStory)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h1 className="text-xl font-bold">YourLore</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => window.open("/admin", "_blank")}
              >
                <Crown className="w-4 h-4 mr-1" />
                Admin
              </Button>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {storiesCount} Stories
              </Badge>
              {userLevel === "advanced" && (
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-100 border-yellow-300/30">
                  <Star className="w-3 h-3 mr-1" />
                  Hero
                </Badge>
              )}
            </div>
          </div>
          <p className="text-purple-100 text-sm">Transform your story and yourself into legend</p>
        </div>

        {/* Advanced Features Unlock Alert */}
        {userLevel === "advanced" && activeTab === "create" && (
          <div className="p-4">
            <Alert className="border-blue-200 bg-blue-50">
              <Map className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-sm">
                <strong>Hero Dashboard Unlocked!</strong> You can now manage your canon, view achievements, and see your
                heroic growth patterns.
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Chapter Progress Alert */}
        {isChapterReady && (
          <div className="p-4">
            <Alert className="border-yellow-200 bg-yellow-50">
              <Crown className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-sm">
                <strong>Chapter Ready!</strong> You have enough stories to weave into your first chapter.
                <Button variant="link" className="p-0 h-auto text-yellow-700 font-medium">
                  Create Chapter →
                </Button>
              </AlertDescription>
            </Alert>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList
            className={`grid w-full ${userLevel === "advanced" ? "grid-cols-4" : "grid-cols-3"} bg-gray-50 m-4 mb-0`}
          >
            <TabsTrigger value="create" className="text-xs">
              Create
            </TabsTrigger>
            <TabsTrigger value="stories" className="text-xs">
              My Stories
            </TabsTrigger>
            <TabsTrigger value="epic" className="text-xs">
              My Epic
            </TabsTrigger>
            {userLevel === "advanced" && (
              <TabsTrigger value="hero" className="text-xs">
                Hero
              </TabsTrigger>
            )}
          </TabsList>

          {/* Create Story Tab */}
          <TabsContent value="create" className="p-4 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  What happened to you?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Share something that happened to you - big or small. Maybe you missed your bus, had an awkward conversation, faced a deadline, or dealt with a difficult person. What challenged you today?"
                  value={userStory}
                  onChange={(e) => setUserStory(e.target.value)}
                  className="min-h-[120px] resize-none"
                />

                <div>
                  <label className="text-sm font-medium mb-2 block">Choose Your Genre</label>
                  <ScrollArea className="w-full whitespace-nowrap">
                    <div className="flex gap-2 pb-2">
                      {[
                        { name: "Adventure", icon: "Map" },
                        { name: "Mystery", icon: "Search" },
                        { name: "Epic", icon: "Crown" },
                        { name: "Fantasy", icon: "Sparkles" },
                        { name: "Romance", icon: "Heart" },
                        { name: "Horror", icon: "Ghost" },
                        { name: "Sci-Fi", icon: "Rocket" },
                        { name: "Comedy", icon: "Smile" },
                        { name: "Drama", icon: "Theater" },
                        { name: "Thriller", icon: "Zap" },
                        { name: "Historical", icon: "Clock" },
                        { name: "Urban", icon: "Building" },
                        { name: "Steampunk", icon: "Settings" },
                        { name: "Survival", icon: "Shield" },
                        { name: "Quest", icon: "Target" },
                        { name: "Magic", icon: "Star" },
                      ].map((genre) => {
                        const IconComponent =
                          {
                            Map: Map,
                            Search: Search,
                            Crown: Crown,
                            Sparkles: Sparkles,
                            Heart: Heart,
                            Ghost: Ghost,
                            Rocket: Rocket,
                            Smile: Smile,
                            Theater: Theater,
                            Zap: Zap,
                            Clock: Clock,
                            Building: Building,
                            Settings: Settings,
                            Shield: Shield,
                            Target: Target,
                            Star: Star,
                          }[genre.icon] || Sparkles

                        return (
                          <Button
                            key={genre.name}
                            variant={selectedGenre === genre.name ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedGenre(genre.name)}
                            className="flex-shrink-0 flex flex-col items-center gap-1 h-16 w-20 text-xs p-2"
                          >
                            <IconComponent className="w-4 h-4" />
                            <span className="leading-tight">{genre.name}</span>
                          </Button>
                        )
                      })}
                    </div>
                  </ScrollArea>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Story Depth</label>
                  <Slider value={storyDepth} onValueChange={setStoryDepth} max={100} step={10} className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Simple & Direct</span>
                    <span>Rich & Layered</span>
                  </div>
                </div>

                <Button
                  onClick={handleGenerateStory}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
                  disabled={!userStory.trim()}
                >
                  <Wand2 className="w-4 h-4 mr-2" />
                  Transform Into Story
                </Button>
              </CardContent>
            </Card>

            {/* Generated Story */}
            {generatedStory && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-500" />
                    Your Story
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-64 w-full">
                    <div className="prose prose-sm max-w-none">
                      {generatedStory.split("\n").map((line, index) => (
                        <p
                          key={index}
                          className={
                            line.startsWith("**")
                              ? "font-bold text-lg mb-2 text-purple-800"
                              : line.startsWith("*Story Complete")
                                ? "text-sm text-green-600 font-medium"
                                : line.startsWith("*Theme")
                                  ? "text-sm text-blue-600 font-medium"
                                  : line.startsWith("*Achievement")
                                    ? "text-sm text-yellow-600 font-medium"
                                    : line.startsWith("*Your Lore")
                                      ? "text-sm text-purple-600 font-medium"
                                      : "mb-2"
                          }
                        >
                          {line.replace(/\*\*/g, "").replace(/\*/g, "")}
                        </p>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1">
                      <Plus className="w-4 h-4 mr-1" />
                      Save to Lore
                    </Button>
                    <Link href="/covers">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ImageIcon className="w-4 h-4 mr-1" />
                        Create Cover
                      </Button>
                    </Link>
                    {userLevel === "advanced" && (
                      <Button size="sm" variant="outline">
                        Add to Canon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* My Stories Tab */}
          <TabsContent value="stories" className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Your Stories</h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{storiesCount} tales</Badge>
                {userLevel === "advanced" && <Badge variant="secondary">{canonStories.length} canon</Badge>}
              </div>
            </div>

            <div className="space-y-3">
              {userStories.map((story) => (
                <Card key={story.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex gap-3">
                      {/* Book Cover Thumbnail */}
                      {story.coverImage && (
                        <div className="flex-shrink-0">
                          <img
                            src={story.coverImage || "/placeholder.svg"}
                            alt={`${story.title} cover`}
                            className="w-12 h-16 object-cover rounded shadow-sm"
                          />
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-sm">{story.title}</h3>
                            {userLevel === "advanced" && story.isCanon && (
                              <Badge variant="default" className="text-xs">
                                Canon
                              </Badge>
                            )}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {story.genre}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 mb-3">{story.preview}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <FileText className="w-3 h-3" />
                              {story.wordCount} words
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {story.date}
                            </span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {story.theme}
                          </Badge>
                        </div>
                        {userLevel === "advanced" && story.achievements.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {story.achievements.map((achievement, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs bg-yellow-50 text-yellow-700">
                                <Star className="w-2 h-2 mr-1" />
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* My Epic Tab */}
          <TabsContent value="epic" className="p-4 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-500" />
                  Your Epic Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{totalWordCount}</div>
                  <div className="text-sm text-gray-600">words in your lore</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress to Chapter</span>
                    <span>{Math.round(progressToChapter)}%</span>
                  </div>
                  <Progress value={progressToChapter} className="w-full" />
                  <div className="text-xs text-gray-500">
                    {isChapterReady
                      ? "Ready to weave your stories into a chapter!"
                      : `${Math.max(0, chapterReadyThreshold - storiesCount)} more stories or ${Math.max(0, wordCountThreshold - totalWordCount)} more words needed`}
                  </div>
                </div>

                {isChapterReady && (
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500">
                      <Layers className="w-4 h-4 mr-2" />
                      Weave Stories Into Chapter
                    </Button>
                    <Link href="/covers">
                      <Button variant="outline" size="sm">
                        <ImageIcon className="w-4 h-4 mr-1" />
                        Chapter Cover
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {userLevel === "advanced" && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Canon Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Canon Stories</span>
                      <span className="font-semibold">{canonStories.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Side Quests</span>
                      <span className="font-semibold">{storiesCount - canonStories.length}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    Your canon represents your main heroic journey. Side quests add depth but don't need to be part of
                    your epic.
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Story Themes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Resilience", "Courage", "Perseverance", "Adaptability"].map((theme) => (
                    <Badge key={theme} variant="secondary" className="text-xs">
                      {theme}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Your stories reveal patterns of growth and strength. These themes will weave together in your epic.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hero Dashboard Tab (Advanced Users Only) */}
          {userLevel === "advanced" && (
            <TabsContent value="hero" className="p-4 space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Map className="w-5 h-5 text-blue-500" />
                    Hero Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-600">{allAchievements.length}</div>
                      <div className="text-xs text-gray-600">Achievements</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">{canonStories.length}</div>
                      <div className="text-xs text-gray-600">Canon Stories</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Achievement Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {allAchievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-yellow-50 rounded">
                        <Star className="w-3 h-3 text-yellow-600" />
                        <span className="text-xs font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Genre Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["Adventure", "Mystery", "Epic", "Comedy", "Survival"].map((genre) => {
                      const genreCount = userStories.filter((story) => story.genre === genre).length
                      const percentage = (genreCount / storiesCount) * 100
                      return (
                        <div key={genre} className="flex items-center justify-between">
                          <span className="text-sm">{genre}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                            </div>
                            <span className="text-xs text-gray-600">{genreCount}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Growth Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      • <strong>Most Common Theme:</strong> Resilience (appears in 3 stories)
                    </p>
                    <p>
                      • <strong>Preferred Genre:</strong> Adventure (3 stories)
                    </p>
                    <p>
                      • <strong>Growth Trajectory:</strong> Increasing complexity over time
                    </p>
                    <p>
                      • <strong>Hero Archetype:</strong> The Explorer - seeks freedom and authenticity
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  )
}
