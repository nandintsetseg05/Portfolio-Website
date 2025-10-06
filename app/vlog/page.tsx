import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Vlog() {
  // Replace this with your actual Notion page URL
  const notionPageUrl = "https://luminous-laundry-81c.notion.site/Website-Vlogs-284615bca7f7807aa87dd0d7b656b0a4?source=copy_link"

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

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              My Notion Page
            </h1>
            <p className="text-xl text-gray-300">Explore my thoughts, notes, and ideas</p>
          </div>

          {/* Notion Page Embed */}
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white/90">View My Notion Workspace</h2>
              <a
                href={notionPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full hover:scale-105 transition-transform font-semibold"
              >
                <ExternalLink className="w-5 h-5" />
                Open in Notion
              </a>
            </div>

            {/* Notion Embed - Replace the src with your public Notion page URL */}
            <div className="w-full h-[800px] rounded-lg overflow-hidden bg-black/20 border border-white/10">
              <iframe src={notionPageUrl} className="w-full h-full" title="Notion Page" allow="fullscreen" />
            </div>

            <p className="text-sm text-gray-400 text-center">
              Note: Make sure your Notion page is set to "Public" for the embed to work properly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
