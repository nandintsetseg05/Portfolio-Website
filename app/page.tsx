import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"

export const metadata: Metadata = {
  title: "Nana Nandintsetseg | I Build Things That Work. For People Who Mean Business.",
  description:
    "Full-stack developer and designer at QUT specializing in Next.js, React, TypeScript, and digital marketing. Proven track record: 825% website traffic growth, 2497% social media engagement increase. Available for freelance web development projects in Brisbane, Australia.",
  keywords: [
    "Nana Nandintsetseg",
    "Full-Stack Developer Brisbane",
    "Web Developer Australia",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "UI/UX Designer",
    "Freelance Web Developer",
    "Digital Marketing Brisbane",
    "SEO Specialist",
    "QUT Computer Science",
    "Web Development Portfolio",
  ],
  openGraph: {
    title: "Nana Nandintsetseg - Full-Stack Developer & Designer",
    description:
      "Award-winning developer with 825% traffic growth results. Specializing in Next.js, React, and digital marketing.",
    images: [
      {
        url: "/images/design-mode/552783218_811285438263437_1863407255956114468_n.jpg",
        width: 1200,
        height: 630,
        alt: "Nana Nandintsetseg Portfolio",
      },
    ],
  },
}

export default function Home() {
  return <HomePage />
}
