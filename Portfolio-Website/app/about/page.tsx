import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me - Background, Education & Timeline",
  description:
    "Learn about Nana Nandintsetseg - Computer Science student at QUT with a Diploma in Web Development. National Physics & Math Olympiad medalist, startup hackathon finalist, and award-winning volunteer.",
  keywords: [
    "about nana",
    "computer science student",
    "QUT student",
    "web developer education",
    "physics olympiad",
    "startup hackathon",
  ],
  openGraph: {
    title: "About Nana Nandintsetseg - Developer, Designer & Student",
    description:
      "Full-time CS student at QUT, freelance developer, and part-time marketing manager with achievements in national olympiads and startup competitions.",
  },
}

export default function About() {
  const timeline = [
    {
      year: "2025",
      title: "Currently Full-Time Student, Full-Time Freelance, Part Time Work",
      description:
        "Full time CS student at QUT with scholarship, freelancing on web-based application, website development, marketing manager at frozen yogurt, architecture design and interior designer and managing research for winning product for ecommerce brand. Crazy Era✨",
    },
    {
      year: "2024",
      title: "Getting Independent / Personal development",
      description:
        "Graduated high school with 98.8% average, got driver license and invited into 126 University worldwide, 78 of them offered scholarship. Separated from my twin and parents first time in 18 years. Chose university based on reputation, practical experience, country, environment. Moved to new country Australia got a part time job. Started club Mongolians in QUT student association. Independence Era✨",
    },
    {
      year: "2023",
      title: "National StartUp Hackathon top 10 from 400 companies",
      description:
        "Developed AI that calculates and predicts Solar Panel movement to check if it can be worth more than the energy that was used to move the panel. Using research based Data and real time sensor, outcome of prediction was 83% more effective and gained support from government. Nerd Era✨",
    },
    {
      year: "2020-2023",
      title: "Developing Technical and Soft skills",
      description:
        "Learned basics of accounting and marketing to help my parent's businesses. Learned architecture, rendering, building robots and photography as hobby. Starting to develop interest in IT field. During high school I was vice president of student association, center player at basketball team, setter for volleyball team and award winning golden volunteer. Can Do Everything Era✨",
    },
    {
      year: "2020-2023",
      title: "Academic Achievements",
      description:
        "I chose Mathematic, Physics, Social study, English, IT as my elective classes took 16 general classes for 3 years. Achieved National Physics Olympiad second third places for 5 years. Kangaroo Math Olympiad second third place for 6 years. Social study second place. Graduated with high honor with new school high record. Academic Weapon Era✨",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <GalaxyNavigation />

      <div className="absolute inset-0 gradient-bg" />
      <AnimatedBackground />

      <div className="relative z-10 py-20 px-4">
        <Link
          href="/"
          className="fixed top-8 left-8 glass-card p-3 rounded-full hover:scale-110 transition-transform z-20"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-foreground">
              About Me
            </h1>
            <p className="text-xl text-balance text-foreground">
              Get to know my background, education, and journey
            </p>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Background</h2>
            <div className="glass-card rounded-2xl p-8 space-y-4 text-lg leading-relaxed">
              <div>
                I'm a multidisciplinary creative professional with a passion for technology, design, and storytelling.
                My work spans across IT development, marketing strategy, and architectural design.
              </div>
              <div>
                With a unique blend of technical expertise and creative vision, I bring ideas to life through code,
                design, and strategic thinking. I believe in the power of technology to create meaningful experiences
                and solve real-world problems.
              </div>
              <div>
                In short I tried and done too many things to write. I can learn anything with youtube and google and
                little bit of practice. My most valued skill is that I learned how to learn at young age.💞
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold">BA in Computer Science & Minor in Finance</h3>
                <p className="text-muted-foreground">Queensland University of Technology • Expected 2026</p>
                <p className="mt-2">
                  Gaining comprehensive knowledge in computer science, including software development, algorithms, and
                  system design, with a minor in finance for data-driven decision-making. Collaborating with a team to
                  design and develop a cross-platform desktop application using Java SQLite Maven.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border-l-4 border-secondary">
                <h3 className="text-xl font-semibold">Diploma of Information Technology - Web Development</h3>
                <p className="text-muted-foreground">Queensland University of Technology • Graduated 2025</p>
                <p className="mt-2">
                  Gained hands-on experience in full-stack web development using HTML, CSS, JavaScript, TypeScript,
                  React, and Supabase. Built responsive, user-friendly websites with API integration, UI/UX focus, and
                  SEO optimization.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Timeline</h2>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform">
                        <div className="text-sm font-semibold text-primary mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full -translate-x-[7px] md:-translate-x-1/2 border-4 border-black shadow-lg" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
