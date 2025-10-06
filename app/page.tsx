"use client"

import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ProjectCard } from "@/components/project-card"
import { HobbyCard } from "@/components/hobby-card"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application built with Next.js, TypeScript, and PostgreSQL",
      category: "IT",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Brand Campaign",
      description: "Comprehensive digital marketing campaign for tech startup",
      category: "Marketing",
      tags: ["Strategy", "Social Media", "Analytics"],
      link: "#",
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
      description: "I won't draw you but I like it I will if I am in love with you but portraid drawing is not my thing almost every other thing is.",
      icon: "🎨",
      link: "#",
    },
    {
      title: "Learning",
      description: "The DIY butterfly knife made by wood yea done it like it. How to cook? seen it done it. Very impusive and random",
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
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Hey Cutie✨✨✨</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]">
                Hi! I&#39;m Nana Nandintsetseg
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-medium text-blue-200">I&#39;M JUST A GIRL✨            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed">
            {""}
          </p>

          <div className="glass-card inline-block px-6 py-3 rounded-full text-sm">
            <p className="text-gray-300">{"THIS WEBSITE IS SUMMARY OF LIFE ♥ MADE FOR ME MADE BY ME\n"}               </p>
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
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I’m Nana, a Bachelor of IT (Computer Science) student with a minor in Finance. I’m passionate about technology, creativity, and entrepreneurship  I love building projects that bring ideas to life, whether through software, design, or business solutions. And I NEVER say NO to new life experience so if you have idea and want to start something with me CONTACT ME. ♡♡♡        
            </p>
            <Link href="/about">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 group">
                Learn More About Me
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
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300">A glimpse into my recent work</p>
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
                View All Projects
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
              Hobbies & Interests
            </h2>
            <p className="text-lg text-gray-300">What I do when I'm not working</p>
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
                Explore All Hobbies
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
              Latest Vlog
            </h2>
            <p className="text-lg text-gray-300">Conversations about tech, creativity, and growth</p>
          </div>
          <div className="glass-card p-4 rounded-2xl">
            <div className="aspect-video rounded-xl overflow-hidden bg-black/50">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="text-center">
            <Link href="/vlog">
              <Button
                variant="outline"
                className="border-orange-500/50 hover:bg-orange-500/10 hover:border-orange-400 group bg-transparent"
              >
                See More Episodes
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
