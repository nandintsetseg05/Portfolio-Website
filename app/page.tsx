"use client"

import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ProjectCard } from "@/components/project-card"
import { HobbyCard } from "@/components/hobby-card"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export default function Home() {
  const { t } = useLanguage()

  const featuredProjects = [
    {
      title: "Plumber Website",
      description:
        "Improved website for the businesses by implementing new UI added booking also added google business profile. Also got them SSl and done everython on SEO additionally gave some marketing advice which helpeed the business to gain 825% growth on site visitors.",
      category: "IT",
      tags: ["Web Development", "UI/UX", "Website"],
      link: "https://sayramplumbing.com.au/",
    },
    {
      title: "Social media Marketing",
      description:
        "Cross platform monetize for new frozen ypgurt shop. I was in charge of Social media to build audience and waiting list before the store open using AI conent creation. 2497% growth on engagement 924% growth on audience.",
      category: "Marketing",
      tags: ["Strategy", "Social Media", "Analytics"],
      link: "https://www.google.com/search?q=88+Acai+Frozen+Yogurt&ie=UTF-8",
    },
  ]

  const featuredHobbies = [
    {
      title: "Chess",
      description: "Sometimes it gives me stress and heart attack but i like it.",
      icon: "♟️",
      link: "#",
    },
    {
      title: "Drawing",
      description: "I won't draw you portraid drawing is not my thing almost every other thing is.",
      icon: "🎨",
      link: "#",
    },
    {
      title: "Learning",
      description:
        "The DIY butterfly knife made by wood yea done it like it. How to cook? seen it done it. Very impusive and random",
      icon: "✨",
      link: "#",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GalaxyNavigation />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wIvnV1VmayxdXwOuj2DHwNEDTy95Yk.png"
                alt="Profile"
                width={256}
                height={256}
                className="relative rounded-full border-4 border-white/20 shadow-2xl object-cover"
                priority
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>{t.home.greeting}</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]">
                {t.home.title}
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-medium text-blue-200">{t.home.subtitle}</p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed">{""}</p>

          <div className="glass-card inline-block px-6 py-3 rounded-full text-sm">
            <p className="text-gray-300">{t.home.tagline}</p>
          </div>
        </motion.div>
      </section>

      {/* Section Previews */}
      <div className="relative z-10 pb-20 px-4 space-y-32">
        {/* About Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 rounded-3xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {t.home.aboutTitle}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">{t.home.aboutPreview}</p>
            <Link href="/about">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 group">
                {t.home.learnMore}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* Projects Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              {t.home.featuredProjects}
            </h2>
            <p className="text-lg text-gray-300">{t.home.projectsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 group bg-transparent"
              >
                {t.home.viewAllProjects}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* Hobbies Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400">
              {t.home.hobbiesTitle}
            </h2>
            <p className="text-lg text-gray-300">{t.home.hobbiesSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredHobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HobbyCard {...hobby} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/hobbies">
              <Button
                variant="outline"
                className="border-pink-500/50 hover:bg-pink-500/10 hover:border-pink-400 group bg-transparent"
              >
                {t.home.exploreHobbies}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* Vlog Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              {t.home.vlogTitle}
            </h2>
            <p className="text-lg text-gray-300">{t.home.vlogSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">{/* Vlog content here */}</div>
          <div className="text-center">
            <Link href="/vlog">
              <Button
                variant="outline"
                className="border-orange-500/50 hover:bg-orange-500/10 hover:border-orange-400 group bg-transparent"
              >
                {t.home.viewAllVlogs}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
