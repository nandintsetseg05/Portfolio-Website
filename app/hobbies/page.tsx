import { HobbyCard } from "@/components/hobby-card"
import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Hobbies() {
  const hobbies = [
    {
      title: "Chess",
      description: "Strategic thinking and competitive play. It is fun to play won 6 medals in my lifetime but secret is I am not that good learnt to play at young because my dad thought me.❤️",
      icon: "♟️",
      link: "#",
    },
    {
      title: "Drawing",
      description: "Developed interest when i was really young. I used to draw things and put price tag and seell it to my family TvT my parents bought my art and made collection book.❤️",
      icon: "🎨",
      link: "#",
    },
    {
      title: "Journaling",
      description: "Started very young too :) mostly because my mom and grandmom was a teacher and forced to do when i was kid hated it then but love it now and super grateful, changed my life.❤️",
      icon: "✍️",
      link: "#",
    },
    {
      title: "Photography",
      description: "Since I gained sense I was personal photographer of my mom and I just like documenting the moment. Nature pictures when we travel fell in love. Later got useful for my marketing journey.❤️",
      icon: "📷",
      link: "#",
    },
    {
      title: "Reading",
      description: "Hated reading when I was young and used to thought why read when I can listen while doing other stuff. Turned out fiction was just not my genre. Got obsessed after finding my genre time flies when I am hooked, love the smell too.❤️",
      icon: "📚",
      link: "#",
    },
    {
      title: "Hiking",
      description: "I was little goat that will climb on everything. Maybe because of my culture but love going outside or travel to countryside when weather is nice.❤️",
      icon: "🏔️",
      link: "#",
    },
    {
      title: "Anime Manga Manhwa",
      description: "Love it since I was kid now i think about it tought me many things and helped me develop myself. I learned new languages, cultures since i used to translate some of them to my native language and post on social media. Also kept my drawing in check and convinced me to believe I can do everything. ❤️",
      icon: "❤️",
      link: "#",
    },  
    {
      title: "Learning",
      description: "I was too curious kid that will ask why? then how? then why again and again from my parents. Then they decided to show me how to find the answer to my questions from google. Then I started trying what learned from google which led to youtube tons of DIY ❤️",
      icon: "🔍",
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
            <p className="text-xl text-gray-300">What I do when I'm not working?</p>
            <p className="text-xl text-gray-300">Everything and anything DIVA✨</p>            
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
