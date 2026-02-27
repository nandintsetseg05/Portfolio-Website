import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me - Background, Education & Timeline",
  description:
    "Learn about Nana Nandintsetseg  Computer Science student at QUT with a Diploma in Web Development. National Physics & Math Olympiad medalist, startup hackathon finalist, and award-winning volunteer.",
  keywords: [
    "about nana",
    "Нандинцэцэг",
    "Баярсайхан",
    "Nana B",
    "Nana",
    "Nandintsetseg",
    "Nana Nandintsetseg",
    "Нана Нандинцэцэг",
    "Nandintsetseg Bayarsaikhan",
    "computer science student",
    "QUT student",
    "web developer education",
    "physics olympiad",
    "startup hackathon",
  ],
  openGraph: {
    title: "About Nana Nandintsetseg - Developer, Designer & Student",
    description:
      "Full-time CS student at QUT, freelance developer, and part time marketing manager with achievements in national olympiads and startup competitions.",
  },
}

export default function About() {
  const timeline = [
    {
      year: "2025 - Current",
      title: "Bachelor of Computer Science with Minor in Finance at QUT",
      description:
        "Focused on System Architecture, Object-Oriented Design (OOD), CI/CD pipelines, and scalable full-stack development.\nGained practical skills in Linux, secure networking, data analytics, and learning finance data knowledge from minor for AI/ML applications.",
    },
    {
      year: "2024",
      title: "Diploma of IT at QUT",
      description:
        "Learned Network fundamentals, OOP principles, relational database design, SQL, REST fundamentals, Git-based workflows, and client–server architecture.\nBased on this knowledge built full stack Portfolio using Next.js 16, TypeScript, Tailwind, PostgreSQL, OAuth, and deployed on Cloudflare CDN. - React Architecture",
    },
    {
      year: "2020-2024",
      title: "SAAS Business - BEN",
      description:
        "Sold my first business that I created from age of 16-18. BEN social media, marketing company focused on chatbots, business analyses, marketing campaigns, B2B consulting",
    },
    {
      year: "2023",
      title: "National StartUp Hackathon from 1209 people to top 15",
      description:
        "Developed AI that calculates mechanical movement energy and predicts Solar Panel's outcome advantage from the movement trained on local environment DataBase",
    },
    {
      year: "2023",
      title: "High School",
      description:
        "Electives on IT, Mathematics, Physics, Social study with 9 fundamental base classes. Average graduated GPA: 98.9% from 100% scale ",
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
                Skilled in full-stack web development, with hands on experience in projects and research.
              </div>
              <div>
                Learned Finance fundamentals to build AI/ML model on Financial data.
              </div>
              <div>
                I focus on mastering fundamentals and connecting knowledge across disciplines to solve problems efficiently.
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold">Bachelor's in Computer Science & Minor in Finance</h3>
                <p className="text-muted-foreground">Queensland University of Technology • Expected 2026</p>
                <p className="mt-2">
                  Started 2025 as second year Bachelor student, focused more on System Architecture, OOD and CI/CD to build scalable and maintainable systems.

                  Year 2 - Discrete Structure, Networks, Cyber Security, Microprocessors, Finance 1,2,3,4

                  Year 3 - Machine Learning, Algorithms and Complexity, Capstone project + ....

                  Self learning - Cloud - AWS, Docker, Cloudflare, Tunnels +Personal Projects, +Freelancing Projects
                </p>
              </div>
              <div className="glass-card rounded-2xl p-6 border-l-4 border-secondary">
                <h3 className="text-xl font-semibold">Diploma of Information Technology - Web Development</h3>
                <p className="text-muted-foreground">Queensland University of Technology • Graduated 2024</p>
                <p className="mt-2">
                  I enrolled in Diploma at 18 instead of taking Bachelor's first year to gain better and broader fundamental knowledge.
                  Leaned in web development first to show others about my experiences and projects also document my progress.
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
