"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export function VlogPostForm() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [url, setUrl] = useState("")
  const [youtubeVideoId, setYoutubeVideoId] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const supabase = createClient()

    try {
      const { error: insertError } = await supabase.from("vlog_posts").insert({
        title,
        content,
        url: url || null,
        youtube_video_id: youtubeVideoId || null,
      })

      if (insertError) throw insertError

      // Reset form
      setTitle("")
      setContent("")
      setUrl("")
      setYoutubeVideoId("")

      // Refresh the page to show new post
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Create New Post
      </h2>

      <div className="space-y-2">
        <Label htmlFor="title" className="text-white/90">
          Title
        </Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          placeholder="Enter post title"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content" className="text-white/90">
          Content
        </Label>
        <Textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none"
          placeholder="Write your post content..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="url" className="text-white/90">
          URL (Optional)
        </Label>
        <Input
          id="url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          placeholder="https://example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="youtube" className="text-white/90">
          YouTube Video ID (Optional)
        </Label>
        <Input
          id="youtube"
          value={youtubeVideoId}
          onChange={(e) => setYoutubeVideoId(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
          placeholder="dQw4w9WgXcQ"
        />
        <p className="text-xs text-white/50">
          The ID from the YouTube URL (e.g., youtube.com/watch?v=
          <span className="text-blue-400">dQw4w9WgXcQ</span>)
        </p>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
      >
        {isSubmitting ? "Publishing..." : "Publish Post"}
      </Button>
    </form>
  )
}
