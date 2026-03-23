import { ProjectCard } from "@/components/project-card"
import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Web Development, Marketing & Design Portfolio",
  description:
    "View Nana Nandintsetseg's portfolio featuring web development projects (Next.js, React, TypeScript), digital marketing campaigns with 2497% engagement growth, and architectural design work.",
  keywords: [
    "web development projects",
    "marketing portfolio",
    "next.js projects",
    "react developer portfolio",
    "UI/UX design",
    "SEO optimization",
    "digital marketing campaigns",
  ],
  openGraph: {
    title: "Projects Portfolio - Nana Nandintsetseg",
    description:
      "Full-stack development, digital marketing, and design projects with proven results including 825% traffic growth and 2497% engagement increase.",
  },
}

export default function Projects() {
  const itProjects = [
    {
      title: "Retail POS & Inventory Web Application",
      description:
        "A mobile-first web application built for retail tobacconist stores, featuring a role-based access control and a fully integrated point-of-sale, inventory and product management system. Commercially validated built on client request and sold to 5 independent stores.",
      category: "IT",
      tags: ["RBAC", "CRUD", "Real-Time Data", "Systems Analysis", "UAT", "Multi-User Architecture", "Access Control", "Data Query"],
      link: "https://nananandintsetseg.my.canva.site/web-app-by-nana",
    },
    {
      title: "PropSight - AI Property Valuation Tool",
      description:
        "A property price estimator built to combine real estate data with machine learning. Trained on NSW Valuer General data using ML.NET, PropSight estimates market value based on property features, compares suburbs, analyses condition and runs market simulations. Deployed on Google Cloud Run.",
      category: "IT & Finance",
      tags: ["ML.NET", "Data Analytics", "Next.js", "Financial Modelling", "AI", "Machine Learning", "Data Query", "In Progress"],
      link: "https://propsight.nana-nandintsetseg.com/",
    },
    {
      title: "Book Typing game",
      description:
        "Ever wanted to read book while improving your typing speed? Well I made a website where you can upload books you wanna read in pdf. And website will extract the text and turn to your typing practice. Read you book and improve your typing skill at the same time.",
      category: "IT",
      tags: [
       "React",
       "JavaScript",
       "Web Development",
       "Frontend Development",
       "Single Page Application",
       "IndexedDB",
       "PDF.js",
       "Real-time Application",
       "Tailwind CSS",
       "Responsive Design"],
      link: "https://typing-master-nana.vercel.app/",
    },
    {
      title: "Self-Hosted Multi Agent AI Platform",
      description:
        "A fully autonomous, self-hosted AI infrastructure that runs unlimited AI models locally with zero token costs. My solution is Built a personal AI cloud with Docker containers accessible anywhere via Cloudflare Tunnel. But its based on my personal PC not everyone can access.",
      category: "IT",
      tags: [
        "Artificial Intelligence",
        "Docker",
        "Multi-Agent System",
        "Self-Hosted AI",
        "Cloud Infrastructure",
        "AI Automation",
        "Open Source",
        "DevOps",
        "System Architecture",
        "MLOps"
      ],
      link: "https://www.linkedin.com/posts/nana-nandintsetseg_i-built-my-own-cloud-ai-keeping-it-open-activity-7425084513233420288-rf3v?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8cua4BCjnnZsCPN1TB-9pHoOW3bFvO81c",
    },
    {
      title: "Compound Interest Calculator (Next.js + TypeScript)",
      description:
        "A modern, responsive compound interest calculator built with Next.js and TypeScript, featuring real-time calculations, clean UI, and production deployment on Vercel.",
      category: "IT",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Git & GitHub",  "Vercel"],
      link: "https://compound-interest-calculator-pearl.vercel.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "Developed a fully functional personal website using TypeScript and Supabase, integrating Resend API to send messages directly to Gmail. Enabled seamless communication with visitors, showcasing projects and skills professionally, with 100% reliable message delivery. Click on arrow to see documentation",
      category: "IT",
      tags: ["Next.js", "TypeScript", "Supabase", "Resend API"],
      link: "https://nananandintsetseg.my.canva.site/about-my-website",
    },
    {
      title: "Plumber Website Development",
      description:
        "Redesigned the website with a modern UI, added a booking system, set up Google Business Profile, implemented SSL, and optimized SEO. Provided marketing guidance to the client resulting in 825% increase in site visitors and improved overall business online presence.",
      category: "IT & Web Development",
      tags: ["Next.js", "UI/UX", "SEO", "SSL", "Google Business"],
      link: "https://sayramplumbing.com.au/",
    },
  ]
  const financeProjects = [
    {
      title: "ASX Portfolio Risk & Analytics Dashboard",
      description:
        "An interactive Bloomberg-style analytics terminal that lets users build a custom ASX portfolio and instantly generates Sharpe ratio, Value at Risk, sector allocation and stress-test scenarios using live Yahoo Finance data.",
      category: "Finance",
      tags: ["Financial Modelling", "Data Visualisation", "REST APIs", "JavaScript", "React"],
      link: "https://asx-dashboard-ic1t-kyr0vm1ip-nandintsetseg05s-projects.vercel.app/",
    },

  ]


  const marketingProjects = [
    {
      title: "Frozen Yogurt Shop Marketing Campaign",
      description:
        "Managed social media strategy and content creation. Achieved 249% growth in engagement and 24% audience growth within 1 month for 88 Acai Frozen Yogurt shop.",
      category: "Marketing",
      tags: ["Social Media", "Content Strategy", "Analytics", "AI Content"],
      link: "https://nananandintsetseg.my.canva.site/marketing-growth-strategy-project",
    },
    {
      title: "Cross platform Chatbot for Social Media",
      description:
        "I developed chatbot that integrates to all the social media and web chatbot for housing complex that answers common question and shows menu and details of each housing block's detail. When i was 15, I think that it teached me importance of integration and attention to detail. Also learned lot on how to talk to people.",
      category: "Marketing & IT",
      tags: ["Chatbot", "Integration", "Cross-Platform"],
      link: "https://www.facebook.com/p/K-Village-%D0%9A-%D0%92%D0%B8%D0%BB%D0%BB%D0%B0%D0%B6-100083330827686/",
    },
  ]

  const designProjects = [
    {
      title: "Retail store in Shopping centre",
      description:
        "I made the floor planning on AutoCAD and made drew, interior designing on Sketchup also made 3D planning on. In end I used the 3D model pictures and rendered the pictures using AI. All work has been done under shopping centre's policy and requirements and QLD guideline. Also wrote the project pitch which was approved.",
      category: "Design",
      tags: ["Architecture", "Interior Design", "3D Modeling", "CAD"],
      link: "https://www.canva.com/design/DAHDnIHj1gk/UEkw3QxVg_4KHx_6Na_J_g/view?utlId=h67824537ff",
    },
    {
      title: "Housing complex 3D modeling",
      description:
        "In High school I was in charge of the 3D modeing on sketchup since I knew how to read the floor planning and at the time I was developing interest in sketchup. Since it was one of my first big projects I spent so many hours focusing on learning and learned the materials and dimensions in deep level.",
      category: "Design",
      tags: ["Interior Design", "3D Modeling", "CAD"],
      link: "https://www.notion.so/K-Village-3D-Model-284615bca7f780168eb6ddaaa0b32f8a?source=copy_link",
    },
  ]

  const personalProjects = [
//     {
//       title: "Hair dressing",
//       description:
//         "One summer I decided help my mom on her business since I have spare time. She runs a beauty salon I did not got special treatment. I started of as a cleaner, then hair washer, after assistant, then I learned how to cut hair in basic then improved. THE place that teached me human skill the MOST. 100% worth it",
//       category: "Personal",
//       tags: ["Soft skill", "Hair dressing", "Communication", "Networking"],
//       link: "https://www.notion.so/Hair-salon-1ab615bca7f780f986c9e93fcb7e48da?source=copy_link",
//     },
//     {
//       title: "How to learn research",
//       description:
//         "When I was 13 I came across to my most mind blowing idea at that time. If I learn how to learn I am unstoppable... very cute I watched one poccast that changed my life. Since then I got interest on how brain works how emotion works habit etc.. so many things it is endless. Since that time I am learning everyday and document them when I think it is enough I might make it into a book...",
//       category: "Personal",
//       tags: ["Idea", "In Progress"],
//       link: "#",
//     },
    {
      title: "QUT Mongolia Association",
      description:
        "Me and my friend who study at same university decided to leave our legacy to the next generation and mainly found to help other people. Who just came and alone needs a friend and wind of their home country. I am the vice president of the club society for more click the link",
      category: "Personal",
      tags: ["University", "Project", "In Progress"],
      link: "https://campus.hellorubric.com/?s=11154",
    },
    {
      title: "High School Grade",
      description:
        "I was overachiever, I don't want to brag about it but I was a academic weapon and if you wanna see yourself in case follow the link",
      category: "Personal",
      tags: ["High School", "Project", "Academic"],
      link: "https://www.notion.so/Not-Gonna-Brag-But-308615bca7f78020bb58cb250f530915?source=copy_link",
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
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-foreground">
              Projects
            </h1>
            <p className="text-xl text-balance text-foreground">
              A showcase of my work across IT, marketing, and design
            </p>
          </div>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">IT Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {itProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>


          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Finance Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {financeProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>


          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Marketing Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {marketingProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Design & Architecture</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {designProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground">Personal Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
