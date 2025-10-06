import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"

export default function About() {
  const timeline = [
    {
      year: "2025",
      title: "Currently Full-Time Student, Full-Time Freelance, Part Time Work",
      description:
        "Full time CS student at QUT with scholarship, freelancing on web-based application,website development, mmarketing manager at frozen yogurt, architecture design and interior designer and managing research for winning product for eccomerce brand. Grazy Era✨",
    },
    {
      year: "2024",
      title: "Getting Independent / Personal development/",
      description:
        "Graduated high school with 98.8% average, got driver licensse and invited into 126 University worldwide, 78 of them offered scholarship. Seperated from my twin and parents first time in 18 years. Chose university based on reputation, practical experience, country, environment. Moved to new country Australia got a part time job. started club Mongolians in QUT student association. Independence Era✨",
    },
    {
      year: "2023",
      title: "National StartUp Hackaton top 10 from 400 companies",
      description:
        "Developed AI on that calculate and predict Solar Panel movement to check if it can worth more than the energy that was used to move the panel. Using research based Data and real time sensor, outcome of prediction was 83% more effective and gained support from government. Nerd Era✨",
    },
    {
      year: "2020-2023",
      title: "Developing Technical and Soft skills",
      description:
        "Learned basics of accounting and marketing to help my parent's businesses. Learned architecture, rendering, building robots and photography as hobby. Starting to develop interest in IT field. During high school i was vice president of student association, center player at basketball team, setter for volleyball team and award winning golden volunteer. Can Do Everything Era✨",
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
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              About Me
            </h1>
            <p className="text-xl text-gray-300 text-balance">Get to know my background, education, and journey</p>
          </div>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-300">Background</h2>
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
            <h2 className="text-3xl font-bold text-purple-300">Education</h2>
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-6 border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold">Bachelor of Computer Science </h3>
                <p className="text-muted-foreground">Queensland University of Technology • 2025</p>
                <p className="mt-2">Major in Computer Science / Minor in Finance </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border-l-4 border-purple-400">
                <h3 className="text-xl font-semibold">Diploma of Information Technology </h3>
                <p className="text-muted-foreground">Queensland University of Technology • 2024</p>
                <p className="mt-2">Specialized training in Software Engineering </p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-pink-300">Timeline</h2>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform">
                        <div className="text-sm font-semibold text-blue-400 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full -translate-x-[7px] md:-translate-x-1/2 border-4 border-black shadow-lg" />
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
