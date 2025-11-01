"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BookOpen, Sparkles, Crown, Wand2, Globe, Users, Lightbulb, Star } from "lucide-react"

export default function EnhancedUserApp() {
  const [userStory, setUserStory] = useState("")
  const [generatedStory, setGeneratedStory] = useState("")

  // Simulated admin-influenced parameters
  const globalTheme = "The Winter of Resilience"
  const collectiveParticipants = 1247
  const currentFocus = "Finding opportunity within obstacles"

  const handleGenerateStory = () => {
    // Enhanced story generation influenced by admin settings
    const enhancedStory = `**The Commuter's Trial in the Winter of Resilience**

*[Part of the collective narrative: "${globalTheme}" - You are one of ${collectiveParticipants} heroes on this journey]*

In the realm of Commutia, during the great Winter of Resilience, our hero faced a trial that would test their inner strength. The iron beast that was to carry them to the halls of learning had vanished into the morning frost - but this was no mere inconvenience.

The Oracle of the realm had foretold: "In winter's grip, when paths seem blocked, the wise hero discovers that obstacles are but doorways in disguise."

As our protagonist stood at the empty station, they felt the familiar stirring of frustration. But then, remembering the teachings of the Sage of Small Choices, they took a breath and asked themselves: *"What opportunity might be hidden within this seeming setback?"*

Setting forth on foot, they discovered:
- Hidden paths through the urban wilderness they'd never noticed
- Fellow travelers who shared wisdom and companionship
- Inner reserves of strength they didn't know they possessed
- The profound peace that comes from slowing down in a rushed world

By journey's end, our hero realized this wasn't a story of missing transport - it was a tale of finding their authentic pace in a world that demands speed. They had transformed from a passive passenger into an active navigator of their own destiny.

*Your contribution to the Winter of Resilience: +1 Wisdom Point*
*Collective Resilience Pool: 15,847 points and growing*
*Next chapter unlocks when the community reaches 20,000 points*

**Reflection Questions from the Sage:**
- When have you found unexpected gifts in unwanted delays?
- What small choice could you make tomorrow that honors your authentic pace?
- How might this experience prepare you for future challenges?`

    setGeneratedStory(enhancedStory)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {/* Enhanced Header with Collective Context */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 pb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h1 className="text-xl font-bold">YourLore</h1>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span className="text-xs">{collectiveParticipants}</span>
            </div>
          </div>
          <p className="text-purple-100 text-sm">Transform your story into legend</p>

          {/* Current Collective Narrative */}
          <div className="mt-4 p-3 bg-white/10 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Crown className="w-4 h-4" />
              <span className="text-sm font-medium">Active Quest</span>
            </div>
            <p className="text-xs text-purple-100">{globalTheme}</p>
            <div className="flex items-center gap-2 mt-2">
              <Users className="w-3 h-3" />
              <span className="text-xs">{collectiveParticipants} heroes participating</span>
            </div>
          </div>
        </div>

        {/* Current Focus Alert */}
        <div className="p-4">
          <Alert className="border-yellow-200 bg-yellow-50">
            <Lightbulb className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-sm">
              <strong>This week's focus:</strong> {currentFocus}
            </AlertDescription>
          </Alert>
        </div>

        {/* Story Creation */}
        <div className="p-4 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Share Your Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="What challenge did you face today? Remember, every obstacle contains a hidden opportunity for growth..."
                value={userStory}
                onChange={(e) => setUserStory(e.target.value)}
                className="min-h-[120px] resize-none"
              />

              <Button
                onClick={handleGenerateStory}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                disabled={!userStory.trim()}
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Transform Into Legend
              </Button>
            </CardContent>
          </Card>

          {/* Enhanced Generated Story */}
          {generatedStory && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-500" />
                  Your Epic Tale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-96 w-full">
                  <div className="prose prose-sm max-w-none">
                    {generatedStory.split("\n").map((line, index) => (
                      <p
                        key={index}
                        className={
                          line.startsWith("**")
                            ? "font-bold text-lg mb-2 text-purple-800"
                            : line.startsWith("*[Part of")
                              ? "text-xs text-blue-600 italic bg-blue-50 p-2 rounded mb-2"
                              : line.startsWith("*Your contribution")
                                ? "text-sm text-green-600 font-medium"
                                : line.startsWith("*Collective")
                                  ? "text-sm text-blue-600 font-medium"
                                  : line.startsWith("*Next chapter")
                                    ? "text-sm text-purple-600 font-medium"
                                    : line.startsWith("**Reflection")
                                      ? "font-semibold text-base mt-4 mb-2 text-indigo-800"
                                      : line.startsWith("- ")
                                        ? "text-sm text-gray-700 ml-4 mb-1"
                                        : "mb-2"
                        }
                      >
                        {line.replace(/\*\*/g, "").replace(/\*/g, "")}
                      </p>
                    ))}
                  </div>
                </ScrollArea>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Star className="w-4 h-4 mr-1" />
                    Add to Lore
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Users className="w-4 h-4 mr-1" />
                    Share Quest
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Collective Progress */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                Collective Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Winter of Resilience</span>
                  <span className="font-semibold">15,847 / 20,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    style={{ width: "79%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600">
                  4,153 more wisdom points needed to unlock the next chapter of our collective story
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
