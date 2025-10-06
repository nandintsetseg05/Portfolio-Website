"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <div className="flex gap-1 glass-card rounded-full p-1">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setLanguage("en")}
          className={`rounded-full px-3 py-1 text-xs transition-all ${
            language === "en"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          EN
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setLanguage("mn")}
          className={`rounded-full px-3 py-1 text-xs transition-all ${
            language === "mn"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          MN
        </Button>
      </div>
    </div>
  )
}
