import type { Metadata } from "next"
import { HobbyCard } from "@/components/hobby-card"
import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hobbies & Interests | Nana Nandintsetseg",
  description:
    "Explore Nana Nandintsetseg's hobbies and interests including chess (6 medals), drawing, photography, reading, hiking, anime/manga, and continuous learning. Discover the creative side of a Brisbane full-stack developer.",
  keywords: [
    "Nana Nandintsetseg hobbies",
    "developer interests",
    "chess player Brisbane",
    "creative developer",
    "photography hobby",
    "anime manga enthusiast",
  ],
  openGraph: {
    title: "Hobbies & Interests | Nana Nandintsetseg",
    description: "Chess champion, artist, photographer, and lifelong learner. Get to know the person behind the code.",
    url: "https://nana-nandintsetseg.com/hobbies",
    type: "profile",
  },
}

export default function Hobbies() {
  const hobbies = [
    {
      title: "Learning",
      description:
        "Self-directed learning, curiosity, and experimentation with technology and creative projects.",
      icon: "🔍",
      link: "#",
    },
    {
      title: "Reading",
      description:
        "Got into reading after I learned how brain plasticity works.",
      icon: "📚",
      link: "#",
    },
    {
      title: "Chess",
      description:
        "Helps to keep my mind sharp but little competitive but i like playing rapid",
      icon: "♟️",
      link: "https://www.chess.com/play/online",
    },
    {
      title: "Journaling",
      description:
        "Writing helps to organize all the thought and ideas that comes in mind, very useful when you are trying to find the problems.",
      icon: "✍️",
      link: "#",
    },
    {
      title: "Photography",
      description:
        "One of the skill I picked up and during running my marketing company, kept it as hobb.y",
      icon: "📷",
      link: "#",
    },
    {
      title: "Hiking",
      description:
        "Brings more peace to me, coffee on mountain just tastes different.",
      icon: "🏔️",
      link: "#",
    },
    {
      title: "Drawing",
      description:
        "Kept it as hobby, picked it up since I was a kid",
      icon: "🎨",
      link: "#",
    },
    {
      title: "Movies, Kdrama, Anime, Manga, Manhwa, Gaming",
      description:
        "Fun facts about me",
      icon: "❤️",
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
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-foreground">
              Hobbies & Interests
            </h1>
            <p className="text-xl text-foreground">What I do when I'm not working?</p>
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
