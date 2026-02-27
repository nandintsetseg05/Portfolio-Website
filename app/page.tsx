"use client"

import type React from "react"
import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ProjectCard } from "@/components/project-card"
import { HobbyCard } from "@/components/hobby-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { sendEmail } from "@/app/actions/send-email"

const featuredProjects = [
  {
    title: "Plumbing Business — Digital Strategy & Full Rebuild",
    description:
      "A plumbing business was invisible online — no traffic, no leads, no bookings. I audited their entire digital presence, identified root causes, and rebuilt their website with emergency booking workflows, SSL, and SEO strategy. Result: 825% increase in website traffic and a pipeline of inbound referral clients within weeks.",
    category: "Technology & Strategy",
    tags: ["Next.js", "UI/UX", "SEO", "SSL", "Google Business"],
    link: "#",
  },
  {
    title: "88 Acai — Brand Launch & Growth Campaign",
    description:
      "A new frozen yogurt store needed to exist in people's minds before it existed in real life. I built the brand from nothing  logo, visual identity, content strategy, and a phased launch across Instagram, TikTok, and Facebook. Before the doors opened: 2,497% engagement growth and 924% audience growth in one month.",
    category: "Strategy & Marketing",
    tags: ["Brand Strategy", "Social Media", "Analytics", "AI Content"],
    link: "https://www.google.com/search?q=88+Acai+Frozen+Yogurt&ie=UTF-8",
  },
]

const featuredHobbies = [
  {
    title: "Chess",
    description:
      "6 medals over my lifetime. I think in systems and second-order consequences — chess keeps that sharp.",
    icon: "♟️",
    link: "https://www.chess.com/play/online",
  },
  {
    title: "Drawing",
    description:
      "Visual thinking before visual output. Started selling drawings to my family at age 7 — first taste of commerce.",
    icon: "🎨",
    link: "#",
  },
  {
    title: "Continuous Learning",
    description:
      "Currently: AI infrastructure, cybersecurity, IELTS prep. Always something on the go. The curiosity never stops.",
    icon: "🔍",
    link: "#",
  },
]

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const result = await sendEmail(formData)
      if (result.success) {
        alert("Message sent! I'll get back to you within 24 hours.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Something went wrong. Please email me directly at bnandintsetseg74@gmail.com")
      }
    } catch (error) {
      console.error("Form error:", error)
      alert("Something went wrong. Please email me directly at bnandintsetseg74@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nana Nandintsetseg Bayarsaikhan",
            url: "https://nana-nandintsetseg.com",
            image: "https://nana-nandintsetseg.com/images/design-mode/552783218_811285438263437_1863407255956114468_n.jpg",
            jobTitle: "Technology Consultant & Full Stack Developer",
            worksFor: {
              "@type": "EducationalOrganization",
              name: "Queensland University of Technology",
            },
            knowsAbout: ["Web Development", "Next.js", "React", "TypeScript", "Business Analysis", "Digital Strategy", "Cybersecurity"],
            sameAs: [
              "https://www.linkedin.com/in/nana-nandintsetseg",
              "https://github.com/nandintsetseg05",
              "https://www.instagram.com/n.tseegii.mn/",
            ],
          }),
        }}
      />

      <GalaxyNavigation />

      {/* ── HERO ── */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-3xl opacity-40 animate-pulse scale-110" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/60 via-secondary/60 to-accent/60 opacity-20 blur-xl scale-105" />
                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm" />
                  <Image
                    src="/images/design-mode/552783218_811285438263437_1863407255956114468_n.jpg"
                    alt="Nana Nandintsetseg - Technology Consultant & Developer"
                    width={448}
                    height={448}
                    className="relative rounded-full border-4 border-white/30 shadow-2xl object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-3">
                <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                  Computer Science + Finance
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]">
                    Nana B Nandintsetseg Bayarsaikhan
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-foreground/80">
                  I Build Things That Solve A PROBLEM.
                </p>
                <p className="text-xl md:text-2xl font-semibold text-foreground/80">
                  For People and For Businesses.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/10 space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Hi, I'm Nana B.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I'm a final year Computer Science student at QUT Brisbane, with a Finance minor and a track
                  record of delivering real technology solutions for real businesses not just assignments.
                </p>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic border-l-2 border-primary/40 pl-4">
                  If you're looking for someone who can sit in a client meeting in the morning and deploy a
                  solution by afternoon let's talk.
                </p>
                <div className="pt-2">
                  <Link href="/about">
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 group px-6 py-4 text-base rounded-xl shadow-lg">
                      More About Me
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 pb-32 px-6 space-y-40">

        {/* ── FEATURED WORK ── */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-12"
        >
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-secondary to-accent leading-tight text-foreground">
              Selected Work
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              Real clients. Real outcomes. Real numbers.
            </p>
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
                className="border-secondary/50 hover:bg-secondary/10 hover:border-secondary group bg-transparent backdrop-blur-xl px-8 py-6 text-base rounded-xl"
              >
                View All Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* ── HOBBIES ── */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-12"
        >
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-accent to-accent/80 leading-tight text-foreground">
              Beyond the Screen
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              The things that keep me sharp, curious, and human.
            </p>
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
                className="border-accent/50 hover:bg-accent/10 hover:border-accent group bg-transparent backdrop-blur-xl px-8 py-6 text-base rounded-xl"
              >
                See All Hobbies
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* ── CONTACT ── */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <div className="text-center space-y-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent leading-tight text-foreground">
              Let's Work Together
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-foreground">
              Got a business problem you think technology can solve? I respond within 24 hours and offer a
              free 30-minute discovery call to every new enquiry.
            </p>
          </div>

          <div className="glass-card p-10 md:p-14 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all backdrop-blur-sm hover:bg-white/10"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all backdrop-blur-sm hover:bg-white/10"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-foreground/90 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none backdrop-blur-sm hover:bg-white/10"
                  placeholder="Tell me about your project or role..."
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white font-semibold py-5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-secondary/25 text-base"
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