import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://nana-nandintsetseg.com"),
  title: {
    default: "Nana Nandintsetseg | Full-Stack Developer, Web Designer & Marketing Specialist",
    template: "%s | Nana Nandintsetseg Portfolio",
  },
  description:
    "Nana Nandintsetseg - Computer Science student at QUT specializing in full-stack web development, UI/UX design, and digital marketing. Expert in Next.js, React, TypeScript, SEO optimization, and creating high-impact websites with 825% traffic growth.",
  keywords: [
    "Nana Nandintsetseg",
    "Full-Stack Developer",
    "Web Developer Brisbane",
    "Web Developer Australia",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "UI/UX Designer",
    "Digital Marketing",
    "SEO Specialist",
    "Computer Science QUT",
    "Freelance Web Developer",
    "Marketing Specialist Brisbane",
    "Website Development",
    "Mobile App Development",
    "Supabase Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio Website",
    "Nandintsetseg Bayarsaikhan",
  ],
  authors: [{ name: "Nana Nandintsetseg Bayarsaikhan" }],
  creator: "Nana Nandintsetseg",
  publisher: "Nana Nandintsetseg",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nana-nandintsetseg.com",
    siteName: "Nana Nandintsetseg Portfolio",
    title: "Nana Nandintsetseg | Full-Stack Developer & Web Designer",
    description:
      "Full-stack web developer and designer specializing in Next.js, React, and digital marketing. Creating stunning websites with proven results - 825% traffic increase, 2497% engagement growth.",
    images: [
      {
        url: "/images/design-mode/552783218_811285438263437_1863407255956114468_n.jpg",
        width: 1200,
        height: 630,
        alt: "Nana Nandintsetseg - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nana Nandintsetseg | Full-Stack Developer & Web Designer",
    description:
      "Full-stack web developer specializing in Next.js, React, TypeScript, and digital marketing with proven results.",
    images: ["/images/design-mode/552783218_811285438263437_1863407255956114468_n.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "PHGX2ZcUz3uupzW14ZoXaYwAqNjmcE6sAFV1Cx5TyZk",
  },
  alternates: {
    canonical: "https://nana-nandintsetseg.com",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable}`}>
        <LanguageProvider>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
