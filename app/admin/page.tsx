"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Crown,
  Users,
  BookOpen,
  Lightbulb,
  Target,
  Globe,
  Heart,
  Shield,
  Compass,
  TrendingUp,
  Calendar,
  Eye,
  Save,
  Play,
  Pause,
  Plus,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

const psychologicalPrinciples = [
  { name: "Solution-Focused Brief Therapy", key: "sfbt", active: true },
  { name: "Cognitive Behavioral Therapy", key: "cbt", active: true },
  { name: "Narrative Therapy", key: "narrative", active: true },
  { name: "Positive Psychology", key: "positive", active: false },
  { name: "Acceptance & Commitment", key: "act", active: true },
  { name: "Mindfulness-Based", key: "mindfulness", active: false },
]

const heroicArchetypes = [
  { name: "The Innocent", description: "Seeks happiness and harmony", active: true },
  { name: "The Explorer", description: "Seeks freedom and authenticity", active: true },
  { name: "The Sage", description: "Seeks truth and understanding", active: false },
  { name: "The Hero", description: "Seeks to prove worth through courage", active: true },
  { name: "The Outlaw", description: "Seeks revolution and change", active: false },
  { name: "The Magician", description: "Seeks transformation", active: true },
]

const currentNarratives = [
  {
    title: "The Winter of Resilience",
    description: "A season-long narrative focusing on inner strength during difficult times",
    participants: 1247,
    status: "active",
    endDate: "March 20, 2024",
  },
  {
    title: "The Quest for Authentic Voice",
    description: "Helping users find and express their true selves",
    participants: 892,
    status: "active",
    endDate: "February 14, 2024",
  },
  {
    title: "The Relationship Labyrinth",
    description: "Navigating complex interpersonal dynamics",
    participants: 634,
    status: "planning",
    endDate: "April 1, 2024",
  },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("global")
  const [globalTheme, setGlobalTheme] = useState("resilience")
  const [storyComplexity, setStoryComplexity] = useState([65])
  const [therapeuticIntensity, setTherapeuticIntensity] = useState([70])
  const [mythologicalDepth, setMythologicalDepth] = useState([80])
  const [collectiveNarrative, setCollectiveNarrative] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">YourLore - Dungeon Master</h1>
                <p className="text-indigo-100">Orchestrate the collective heroic journey</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                2,847 Active Heroes
              </Badge>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Eye className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="global">Global Settings</TabsTrigger>
            <TabsTrigger value="narratives">Collective Narratives</TabsTrigger>
            <TabsTrigger value="psychology">Psychology Framework</TabsTrigger>
            <TabsTrigger value="mythology">Mythology Engine</TabsTrigger>
            <TabsTrigger value="analytics">Hero Analytics</TabsTrigger>
          </TabsList>

          {/* Global Settings */}
          <TabsContent value="global" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-500" />
                    Universal Story Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Current Global Theme</label>
                    <Select value={globalTheme} onValueChange={setGlobalTheme}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="resilience">Resilience & Perseverance</SelectItem>
                        <SelectItem value="transformation">Personal Transformation</SelectItem>
                        <SelectItem value="courage">Finding Inner Courage</SelectItem>
                        <SelectItem value="connection">Building Connections</SelectItem>
                        <SelectItem value="purpose">Discovering Purpose</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Story Complexity</label>
                    <Slider
                      value={storyComplexity}
                      onValueChange={setStoryComplexity}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Simple & Direct</span>
                      <span>Rich & Layered</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Therapeutic Intensity</label>
                    <Slider
                      value={therapeuticIntensity}
                      onValueChange={setTherapeuticIntensity}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Light Touch</span>
                      <span>Deep Insight</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Mythological Depth</label>
                    <Slider
                      value={mythologicalDepth}
                      onValueChange={setMythologicalDepth}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Modern Metaphors</span>
                      <span>Ancient Archetypes</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Enable Collective Narrative</label>
                    <Switch checked={collectiveNarrative} onCheckedChange={setCollectiveNarrative} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-500" />
                    Current Focus Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Enter specific themes, challenges, or realizations you want to emphasize in stories this week..."
                    className="min-h-[120px] mb-4"
                    defaultValue="This week, focus on helping users recognize their inner strength during times of uncertainty. Emphasize themes of:

- Finding opportunity within obstacles
- The power of small daily choices
- Building resilience through community
- Transforming fear into curiosity

Use metaphors of winter giving way to spring, seeds growing in darkness, and heroes discovering hidden abilities."
                  />
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Save className="w-4 h-4 mr-2" />
                      Save Focus
                    </Button>
                    <Button size="sm" variant="outline">
                      <Play className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Collective Narratives */}
          <TabsContent value="narratives" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Active Collective Narratives</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create New Narrative
              </Button>
            </div>

            <div className="grid gap-4">
              {currentNarratives.map((narrative, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{narrative.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{narrative.description}</p>
                      </div>
                      <Badge variant={narrative.status === "active" ? "default" : "secondary"}>
                        {narrative.status}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {narrative.participants.toLocaleString()} participants
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Ends {narrative.endDate}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        Edit Parameters
                      </Button>
                      <Button size="sm" variant="outline">
                        View Stories
                      </Button>
                      <Button size="sm" variant="outline">
                        {narrative.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Psychology Framework */}
          <TabsContent value="psychology" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  Active Therapeutic Principles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {psychologicalPrinciples.map((principle, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-sm">{principle.name}</h4>
                        <p className="text-xs text-gray-600">Key: {principle.key}</p>
                      </div>
                      <Switch checked={principle.active} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Therapeutic Prompts & Interventions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Solution-Focused Questions</label>
                  <Textarea
                    placeholder="Enter questions that help users identify their strengths and resources..."
                    defaultValue="- What would be different if this challenge was resolved?
- When have you successfully handled something similar before?
- What small step could you take today that would make a difference?
- Who in your life would notice positive changes first?"
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Reframing Prompts</label>
                  <Textarea
                    placeholder="Enter prompts that help reframe challenges as growth opportunities..."
                    defaultValue="- How might this obstacle be preparing you for something greater?
- What hidden strengths is this situation revealing in you?
- If this were a chapter in your hero's journey, what would it be called?
- What would your wisest self say about this challenge?"
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mythology Engine */}
          <TabsContent value="mythology" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    Active Heroic Archetypes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {heroicArchetypes.map((archetype, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-sm">{archetype.name}</h4>
                          <p className="text-xs text-gray-600">{archetype.description}</p>
                        </div>
                        <Switch checked={archetype.active} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-purple-500" />
                    Hero's Journey Stages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span>Call to Adventure</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span>Meeting the Mentor</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span>Crossing the Threshold</span>
                      <Badge variant="outline">Emphasized</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>Tests & Trials</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span>Transformation</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span>Return with Wisdom</span>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Mythological Metaphor Bank</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Enter metaphors and symbols to use in story generation..."
                  className="min-h-[120px]"
                  defaultValue="Current metaphors for transformation:
- Caterpillar to butterfly (personal growth)
- Phoenix rising from ashes (overcoming trauma)
- Seed breaking through soil (new beginnings)
- Diamond formed under pressure (strength through adversity)
- River carving through stone (persistence)
- Dawn breaking after darkest hour (hope after despair)

Seasonal metaphors:
- Winter: introspection, rest, preparation
- Spring: new growth, fresh starts, awakening
- Summer: full expression, abundance, confidence
- Autumn: harvest, wisdom, letting go"
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="text-2xl font-bold">2,847</p>
                      <p className="text-sm text-gray-600">Active Heroes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold">12,394</p>
                      <p className="text-sm text-gray-600">Stories Created</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <div>
                      <p className="text-2xl font-bold">4.8</p>
                      <p className="text-sm text-gray-600">Avg. Resilience Growth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Story Theme Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Overcoming Obstacles</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <span className="text-sm text-gray-600">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Relationship Challenges</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                      <span className="text-sm text-gray-600">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Career & Purpose</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "38%" }}></div>
                      </div>
                      <span className="text-sm text-gray-600">38%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Self-Discovery</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "52%" }}></div>
                      </div>
                      <span className="text-sm text-gray-600">52%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
