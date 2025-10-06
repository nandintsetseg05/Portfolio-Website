import { HobbyCard } from "@/components/hobby-card"
import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Hobbies() {
  const hobbies = [
    {
      title: "Chess",
      description: "Strategic thinking and competitive play. Currently rated 1800+ on Chess.com",
      icon: "♟️",
      link: "#",
    },
    {
      title: "Painting",
      description: "Exploring abstract and contemporary art styles with acrylics and watercolors",
      icon: "🎨",
      link: "#",
    },
    {
      title: "Podcasting",
      description: "Hosting conversations about technology, creativity, and personal growth",
      icon: "🎙️",
      link: "#",
    },
    {
      title: "Photography",
      description: "Capturing moments and landscapes with a focus on natural lighting",
      icon: "📷",
      link: "#",
    },
    {
      title: "Reading",
      description: "Diving into books on philosophy, technology, and science fiction",
      icon: "📚",
      link: "#",
    },
    {
      title: "Hiking",
      description: "Exploring nature trails and mountain peaks on weekends",
      icon: "🥾",
      link: "#",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <GalaxyNavigation />

      <div className="relative z-10 py-20 px-4">
        <Link
          href="/"
          className="fixed top-8 left-8 glass-card p-3 rounded-full hover:scale-110 transition-transform z-20"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Hobbies & Interests
            </h1>
            <p className="text-xl text-gray-300">What I do when I'm not working</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <HobbyCard key={index} {...hobby} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
