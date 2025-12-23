"use client"

import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft, Instagram, Linkedin, Github, Mail, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/nana-nandintsetseg",
    color: "from-primary to-primary/80",
    hoverColor: "hover:shadow-primary/50",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/nandintsetseg05",
    color: "from-muted to-muted-foreground",
    hoverColor: "hover:shadow-muted/50",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/n.tseegii.mn/",
    color: "from-accent via-secondary to-accent",
    hoverColor: "hover:shadow-accent/50",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:bnandintsetseg74@gmail.com",
    color: "from-destructive to-destructive/80",
    hoverColor: "hover:shadow-destructive/50",
  },
]

export default function ClientInfoPage() {
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

        <div className="max-w-4xl mx-auto space-y-12 pt-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-foreground">
              Connect With Me
            </h1>
            <p className="text-xl text-foreground">Find me on social media or download my resume</p>
          </motion.div>

          {/* Resume Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl text-center space-y-6"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl flex items-center justify-center">
              <Download className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Download My Resume</h2>
              <p className="text-muted-foreground">
                Get a PDF copy of my latest resume with all my skills and experience
              </p>
            </div>
            <a
              href="/resume.pdf"
              download="Nana-Nandintsetseg-resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-secondary/30"
            >
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </a>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center text-white">Follow Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className={`glass-card p-6 rounded-2xl flex items-center gap-4 group hover:scale-105 transition-all duration-300 shadow-lg ${social.hoverColor}`}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${social.color}`}>
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">Connect with me</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card p-8 rounded-3xl text-center space-y-4"
          >
            <h2 className="text-2xl font-bold text-white">Want to work together? or hire me?</h2>
            <p className="max-w-lg mx-auto text-foreground">
              I'm always open to new opportunities and collaborations. Feel free to reach out through any of the
              platforms above or send me an email directly!
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bnandintsetseg74@gmail.com&su=Let's%20Work%20Together&body=Hi%20Nana,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 font-medium"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
