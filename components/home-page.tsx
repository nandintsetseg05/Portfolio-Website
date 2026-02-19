"use client"

import type React from "react"
import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ProjectCard } from "@/components/project-card"
import { HobbyCard } from "@/components/hobby-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { useState } from "react"
import { sendEmail } from "@/app/actions/send-email"

export function HomePage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const featuredProjects = [
    {
      title: "Plumber Website Development",
      description:
        "Redesigned the website with a modern UI, added a booking system, set up Google Business Profile, implemented SSL, and optimized SEO. Resulted in 825% increase in site visitors and improved overall business online presence.",
      category: "IT & Web Development",
      tags: ["Next.js", "UI/UX", "SEO", "SSL", "Google Business"],
      link: "#",
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
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('${
            "https://cdn.builder.io/api/v1/image/assets%2Ff2869fe013544cd1b97d9ab6f3298519%2F318afc92b87d408286d9f470af4bf196?format=webp&width=800&height=1200"
          }')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nana Nandintsetseg Bayarsaikhan",
            url: "https://nana-nandintsetseg.com",
            image:
              "https://nana-nandintsetseg.com/images/design-mode/552783218_811285438263437_1863407255956114468_n.jpg",
            jobTitle: "Full-Stack Developer & Web Designer",
            worksFor: {
              "@type": "EducationalOrganization",
              name: "Queensland University of Technology",
            },
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Queensland University of Technology",
            },
            knowsAbout: [
              "Web Development",
              "Next.js",
              "React",
              "TypeScript",
              "UI/UX Design",
              "Digital Marketing",
              "SEO",
            ],
            sameAs: [
              "https://www.linkedin.com/in/nana-nandintsetseg",
              "https://github.com/nandintsetseg05",
              "https://www.instagram.com/n.tseegii.mn/",
            ],
          }),
        }}
      />

      <GalaxyNavigation />

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-3xl opacity-40 animate-pulse scale-110"></div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/60 via-secondary/60 to-accent/60 opacity-20 blur-xl scale-105"></div>

                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm"></div>
                  <Image
                    src="/images/design-mode/552783218_811285438263437_1863407255956114468_n.jpg"
                    alt="Nana Nandintsetseg - Full-Stack Developer"
                    width={448}
                    height={448}
                    className="relative rounded-full border-4 border-white/30 shadow-2xl object-contain w-full h-full hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] animate-[gradient-shift_3s_ease_infinite]">
                  Nana Nandintsetseg Bayarsaikhan 
                </span>
              </h1>

              <div className="glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {t.home.aboutTitle}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t.home.aboutPreview}</p>

                <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                  

                  

                  

                  
                </div>

                <div className="pt-4">
                  <Link href="/about">
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 group px-6 py-4 text-base rounded-xl shadow-lg">
                      {t.home.learnMore}
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
        {/* Projects Preview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-12"
        >
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-secondary to-accent leading-tight text-foreground">
              {t.home.featuredProjects}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">{t.home.projectsSubtitle}</p>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-accent to-accent/80 leading-tight text-foreground">
              {t.home.hobbiesTitle}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">{t.home.hobbiesSubtitle}</p>
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
                {t.home.exploreHobbies}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* Contact Form */}
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
              Contact Me
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-foreground">
              Have a question or want to work together? Drop me a message!
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
                  placeholder="Your message..."
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

        {/* 3D Model Embed */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <div className="text-center space-y-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent leading-tight text-foreground">
              3D Art Gallery
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-foreground">
              Explore interactive 3D models and digital art experiences
            </p>
          </div>

          <div className="glass-card p-6 md:p-8 rounded-3xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all flex justify-center">
            <div className="sketchfab-embed-wrapper w-full">
              <iframe
                title="Lilies"
                frameBorder="0"
                allowFullScreen
                width="640"
                height="480"
                src="https://sketchfab.com/models/45755df496804cb7a36f6f32305b57a7/embed"
                className="w-full max-w-2xl aspect-video rounded-xl"
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
