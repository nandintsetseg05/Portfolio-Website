import { ProjectCard } from "@/components/project-card"
import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const itProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application built with Next.js, TypeScript, and PostgreSQL",
      category: "IT",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Mobile App",
      description: "Cross-platform mobile application for task management",
      category: "IT",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
  ]

  const marketingProjects = [
    {
      title: "Brand Campaign",
      description: "Comprehensive digital marketing campaign for tech startup",
      category: "Marketing",
      tags: ["Strategy", "Social Media", "Analytics"],
      link: "#",
    },
    {
      title: "Content Strategy",
      description: "Content marketing strategy that increased engagement by 200%",
      category: "Marketing",
      tags: ["Content", "SEO", "Growth"],
      link: "#",
    },
  ]

  const designProjects = [
    {
      title: "Modern Office Space",
      description: "Contemporary office design with focus on collaboration and creativity",
      category: "Design",
      tags: ["Architecture", "Interior Design", "3D Modeling"],
      link: "#",
    },
    {
      title: "Residential Project",
      description: "Sustainable residential design with modern aesthetics",
      category: "Design",
      tags: ["Architecture", "Sustainability", "CAD"],
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

        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Projects
            </h1>
            <p className="text-xl text-gray-300 text-balance">A showcase of my work across IT, marketing, and design</p>
          </div>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-300">IT Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {itProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-purple-300">Marketing Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {marketingProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-pink-300">Design & Architecture</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {designProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
