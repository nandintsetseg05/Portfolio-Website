"use client"

import type React from "react"

import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ProjectCard } from "@/components/project-card"
import { HobbyCard } from "@/components/hobby-card"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { useState } from "react"
import { sendEmail } from "./actions/send-email"

export default function Home() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const featuredProjects = [

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        alert("Thank you for your message! I'll get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Sorry, there was an error sending your message. Please try again or email me directly.")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      alert("Sorry, there was an error sending your message. Please try again or email me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GalaxyNavigation />

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content with improved spacing */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card text-sm font-medium backdrop-blur-xl border border-white/10">
                
                
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]">
                    {t.home.title}
                  </span>
                </h1>

                <p className="text-2xl md:text-3xl font-semibold text-blue-200/90 leading-relaxed">{t.home.subtitle}</p>
              </div>

              <div className="glass-card px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/10 inline-block">
                
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/projects">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all">
                    View My Work
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="border-white/20 hover:bg-white/5 backdrop-blur-xl px-8 py-6 text-base font-medium rounded-xl bg-transparent"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right side - Enhanced profile image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Animated gradient background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-40 animate-pulse scale-110"></div>

                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-20 blur-xl scale-105"></div>

                {/* Image container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm"></div>
                  <Image
                    src="/images/design-mode/552783218_811285438263437_1863407255956114468_n.jpg"
                    alt="Profile"
                    width={448}
                    height={448}
                    className="relative rounded-full border-4 border-white/30 shadow-2xl object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 pb-32 px-6 space-y-40">
        {/* About Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-10 md:p-14 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 leading-tight">
                {t.home.aboutTitle}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">{t.home.aboutPreview}</p>
              <div className="pt-4">
                <Link href="/about">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 group px-6 py-6 text-base rounded-xl shadow-lg">
                    {t.home.learnMore}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-12"
        >
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">
              {t.home.featuredProjects}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{t.home.projectsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
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
          <div className="text-center pt-6">
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400 group bg-transparent backdrop-blur-xl px-8 py-6 text-base rounded-xl"
              >
                {t.home.viewAllProjects}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
          className="max-w-7xl mx-auto space-y-12"
        >
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-400 leading-tight">
              {t.home.hobbiesTitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{t.home.hobbiesSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
          <div className="text-center pt-6">
            <Link href="/hobbies">
              <Button
                variant="outline"
                className="border-pink-500/50 hover:bg-pink-500/10 hover:border-pink-400 group bg-transparent backdrop-blur-xl px-8 py-6 text-base rounded-xl"
              >
                {t.home.exploreHobbies}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <div className="text-center space-y-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
              Contact Me
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          <div className="glass-card p-10 md:p-14 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm hover:bg-white/10"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm hover:bg-white/10"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none backdrop-blur-sm hover:bg-white/10"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/25 text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
