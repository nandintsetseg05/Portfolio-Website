import type { Metadata } from "next"
import { HobbyCard } from "@/components/hobby-card"
import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Skills & Knowledge | Nana Nandintsetseg",
  description:
    "Explore Nana Nandintsetseg's Skills and Interests",
  keywords: [
    "Nana Nandintsetseg skills",
    "developer interests",
    "chess player Brisbane",
    "creative developer",
    "photography hobby",
    "anime manga enthusiast",
  ],
  openGraph: {
    title: "Skills & Knowledge | Nana Nandintsetseg",
    description: "What Can I Do For You",
    url: "https://nana-nandintsetseg.com/hobbies",
    type: "profile",
  },
}

export default function Hobbies() {
  const hobbies = [
    {
      title: "Full-Stack Development",
      description:
        "I build complete web applications from database to UI. I've shipped production systems with React, Next.js, Node.js, PostgreSQL, and Supabase including a live inventory POS app now used across 5 independent Brisbane stores. I write clean, maintainable TypeScript and JavaScript, and handle deployments via Docker and CI/CD pipelines.",
      link: "#",
    },
    {
      title: " AI & Systems Integration",
      description:
        "I work with AI at an infrastructure level not just prompts. I've built a self-hosted AI assistant using Docker and MCP-trained agents integrated with REST APIs. I also use ML.NET for machine learning (see PropSight) and implement AI-assisted workflows for real client outcomes.",

      link: "#",
    },
    {
      title: "Data Analytics & Financial Modelling",
      description:
        "I turn raw data into decisions. I've built ASX portfolio dashboards with Python, yfinance, Sharpe ratio and VaR calculations, automated reporting pipelines, and CFA-style PDF exports. Tools: Power BI, pandas, Excel, Google Analytics.",
      icon: "",
      link: "https://www.chess.com/play/online",
    },
    {
      title: "Business Analysis & Digital Strategy",
      description:
        "I don't just code I define the problem first. I conduct stakeholder discovery, SEO audits, competitor benchmarking, and deliver MoSCoW-prioritised roadmaps with acceptance criteria. Past results: 825% traffic growth, 55% lead conversion uplift.",
      link: "#",
    },
    {
      title: "Social & Digital Marketing",
      description:
        "I've run AI-assisted content strategies across Instagram, TikTok and Facebook that delivered 249% engagement growth and 24% audience growth within 30 days for a brand-new business launch.",
      link: "#",
    },
    {
      title: "Design & Visual Communication",
      description:
        "I design in Figma and have a background in photography and drawing (picked up professionally during my marketing work). I think visually which makes me better at building UIs people actually want to use.️",
      link: "#",
    },
    {
      title: "Infrastructure & Home Lab",
      description:
        "I run a home lab with Active Directory, Windows Server, and a 4TB Cloudflare-tunnelled Docker environment extending to AWS for cloud access. I test and break things on purpose so production systems don't.",
      link: "#",
    },
    {
      title: "Fun facts about me",
      description:
        "Hiking, Journaling, Reading, Movies, Kdrama, Anime, Manga, Manhwa, Gaming, Cooking",
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
              Skills & Interests
            </h1>
            <p className="text-xl text-foreground">What do I know? How can I contribute.</p>
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
