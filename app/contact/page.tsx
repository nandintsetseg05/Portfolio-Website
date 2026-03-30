import type { Metadata } from "next"
import ClientInfoPage from "./client-page"

export const metadata: Metadata = {
  title: "Contact & Connect | Nana Nandintsetseg",
  description:
    "Connect with Nana Nandintsetseg - Full-Stack Developer in Brisbane. Find me on LinkedIn, GitHub, Instagram, or download my resume. Open to new opportunities and collaborations.",
  keywords: [
    "contact Nana Nandintsetseg",
    "full-stack developer contact",
    "Brisbane developer contact",
    "hire full-stack developer",
    "Nana resume download",
    "developer social media",
  ],
  openGraph: {
    title: "Connect with Nana Nandintsetseg | Full-Stack Developer",
    description:
      "Get in touch, view my social profiles, or download my resume. Open for new opportunities in Brisbane and remote.",
    url: "https://nana-nandintsetseg.com/info",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with Nana Nandintsetseg",
    description: "Full-Stack Developer in Brisbane. Download my resume or connect on social media.",
  },
}

export default function InfoPage() {
  return <ClientInfoPage />
}
