import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Sparkles, Shield, Crown, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-purple-800">YourLore</h1>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Story <span className="text-purple-600">and Yourself</span> Into Legend
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Turn daily struggles into heroic narratives. Discover the epic journey hidden within your everyday
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/page">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600">
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transform Your Stories</h3>
            <p className="text-gray-600">
              Turn everyday challenges into epic tales of courage, resilience, and growth. See your life through the
              lens of heroic mythology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Build Resilience</h3>
            <p className="text-gray-600">
              Reframe challenges as opportunities for growth. Develop a heroic mindset that transforms how you approach
              life's obstacles.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Crown className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Create Your Epic</h3>
            <p className="text-gray-600">
              Watch as individual stories weave together into chapters and eventually an epic novel of your heroic
              journey through life.
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl italic mb-4">
              "YourLore helped me see my daily struggles as part of a bigger journey. Now I approach challenges with a
              heroic mindset, knowing they're just chapters in my epic story."
            </p>
            <p className="font-semibold">— Alex, YourLore User</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Begin Your Heroic Journey Today</h2>
          <p className="text-xl text-gray-600 mb-6">
            Your legend is waiting to be written. Transform your story and yourself.
          </p>
          <Link href="/page">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600">
              Start Your Legend
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
