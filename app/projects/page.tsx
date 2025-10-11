import { ProjectCard } from "@/components/project-card"
import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const itProjects = [
    {
      title: "Plumber Website",
      description:
        "Improved website for the businesses by implementing new UI added booking also added google business profile. Also got them SSl and done everython on SEO additionally gave some marketing advice which helpeed the business to gain 825% growth on site visitors.",
      category: "IT",
      tags: ["Web Development", "UI/UX", "Website"],
      link: "https://sayramplumbing.com.au/",
    },
    {
      title: "Portfolio Website",
      description:
        "Full-stack website but I don't want to pay for domain just yet. It was built because someone asked for my work I used to document it on my Notion lowkey little embarrassed... But now I can just show them, still thinking should I make one for me to document my journey. And one for recruiters or mentors?? Let me know what you think pls... ",
      category: "IT",
      tags: ["Next.js", "TypeScript", "SupaBase"],
      link: "https://nana-nandintsetseg.vercel.app/",
    },
    {
      title: "Web-based Mobile Application",
      description:
        "Very simple made on request they loved it made 4 more sold all of them. It was easy only thing was I had to write the Data manually. Made for a store and is private I can show in person but not public.",
      category: "IT",
      tags: ["Data Query", "UI/UX design", "OOP"],
      link: "https://www.notion.so/convenient-store-inventory-application-246615bca7f78067b370de7c47cdbe85?source=copy_link",
    },
  ]

  const marketingProjects = [
    {
      title: "Social media Marketing",
      description:
        "Cross platform monetize for new frozen ypgurt shop. I was in charge of Social media to build audience and waiting list before the store open using AI conent creation. 2497% growth on engagement 924% growth on audience.",
      category: "Marketing",
      tags: ["Strategy", "Social Media", "Analytics"],
      link: "https://www.google.com/search?q=88+Acai+Frozen+Yogurt&ie=UTF-8",
    },
    {
      title: "Product management Ecommerce",
      description:
        "I manage research on products and manage sourcing and shipping for brand as a co-founder. Low key I was not sure where to put this one. But I don't wanna connect me into the business just yet since I might sell my part to my partner due to my schedule.",
      category: "Marketing",
      tags: ["Analysis", "SEO", "Growth"],
      link: "#",
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
      link: "https://www.notion.so/Architecture-design-284615bca7f7807c9fccd89be83af84d?source=copy_link",
    },
    {
      title: "Housing complex 3D modeling",
      description:
        "In High school I was in charge of the 3D modeing on sketchup since I knew how to read the floor planning and at the time I was developing interest in sketchup. Since it was one of my first big projects I spent so many hours focusing on learning and learned the materials and dimensions in deep level. ",
      category: "Design",
      tags: ["Interior Design", "3D Modeling", "CAD"],
      link: "https://www.notion.so/K-Village-3D-Model-284615bca7f780168eb6ddaaa0b32f8a?source=copy_link",
    },
  ]
  const personalProjects = [
    {
      title: "Hair dressing",
      description:
        "One summer I decided help my mom on her business since I have spare time. She runs a beauty salon I did not got special treatment. I started of as a cleaner, then hair washer, after assistant, then I learned how to cut hair in basic then improved. THE place that teached me human skill the MOST. 100% worth it",
      category: "Personal",
      tags: ["Soft skill", "Hair dressing", "Communication", "Networking"],
      link: "https://www.notion.so/Hair-salon-1ab615bca7f780f986c9e93fcb7e48da?source=copy_link",
    },
    {
      title: "How to learn research",
      description:
        "When I was 13 I came across to my most bindblowing idea at that time. If I learn how to learn I am unstoppable... very cute I watched one poccast that changed my life. Since then I got interest on how hbrain works how emotion works habit etc.. so many things it is endless. Since that time I am learning everyday and document them when I think it is enough I might make it into a book...",
      category: "Personal",
      tags: ["Idea", "In Progress"],
      link: "#",
    },
    {
      title: "QUT Mongolia Association",
      description:
        "Me and my friend who study at same university decidedd to leave our legacy to the next generation and mainly found to help other people. Who just came and alone needs a friend and wind of their home country. I am the vice president of the club sociaty for more click the link",
      category: "Personal",
      tags: ["University", "Project", "In Progress"],
      link: "https://campus.hellorubric.com/?s=11154",
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

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-purple-300">Personal Projects</h2>
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
