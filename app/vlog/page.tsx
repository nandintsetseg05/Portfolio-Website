"use client"

import type React from "react"

import { GalaxyNavigation } from "@/components/galaxy-navigation"
import { ArrowLeft, Heart, Send } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"

type Post = {
  id: string
  content: string
  created_at: string
  is_hearted: boolean
}

export default function Vlog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [newPost, setNewPost] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [filter, setFilter] = useState<"all" | "hearted">("all")
  const supabase = createClient()

  // Fetch posts
  const fetchPosts = async () => {
    const { data, error } = await supabase.from("vlog_posts").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching posts:", error)
      return
    }

    setPosts(data || [])
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  // Create new post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.trim() || isSubmitting) return

    setIsSubmitting(true)

    const { error } = await supabase.from("vlog_posts").insert([
      {
        content: newPost,
        title: "", // Empty title for status updates
        is_hearted: false,
      },
    ])

    if (error) {
      console.error("[v0] Error creating post:", error)
      alert("Failed to create post. Please try again.")
    } else {
      setNewPost("")
      fetchPosts() // Refresh posts
    }

    setIsSubmitting(false)
  }

  // Toggle heart
  const toggleHeart = async (postId: string, currentHeartStatus: boolean) => {
    const { error } = await supabase.from("vlog_posts").update({ is_hearted: !currentHeartStatus }).eq("id", postId)

    if (error) {
      console.error("[v0] Error toggling heart:", error)
    } else {
      fetchPosts() // Refresh posts
    }
  }

  // Filter posts
  const filteredPosts = filter === "hearted" ? posts.filter((p) => p.is_hearted) : posts

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

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              My Vlog
            </h1>
            <p className="text-xl text-gray-300">What I'm up to right now</p>
          </div>

          {/* Post Creation Form */}
          <form onSubmit={handleSubmit} className="glass-card p-6 rounded-2xl space-y-4">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What are you doing right now?"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px] resize-none"
              maxLength={500}
            />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">{newPost.length}/500</span>
              <button
                type="submit"
                disabled={!newPost.trim() || isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full hover:scale-105 transition-transform font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Posting..." : "Post"}
              </button>
            </div>
          </form>

          {/* Filter Tabs */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  : "glass-card hover:scale-105"
              }`}
            >
              All Posts ({posts.length})
            </button>
            <button
              onClick={() => setFilter("hearted")}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === "hearted"
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  : "glass-card hover:scale-105"
              }`}
            >
              ❤️ Hearted ({posts.filter((p) => p.is_hearted).length})
            </button>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4">
            {filteredPosts.length === 0 ? (
              <div className="glass-card p-8 rounded-2xl text-center text-gray-400">
                {filter === "hearted"
                  ? "No hearted posts yet. Heart some posts to see them here!"
                  : "No posts yet. Share what you're doing!"}
              </div>
            ) : (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="glass-card p-6 rounded-2xl space-y-4 hover:scale-[1.02] transition-transform"
                >
                  <p className="text-white/90 text-lg leading-relaxed">{post.content}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-sm text-gray-400">
                      {new Date(post.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <button
                      onClick={() => toggleHeart(post.id, post.is_hearted)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-110 ${
                        post.is_hearted ? "bg-red-500/20 text-red-400" : "bg-white/5 text-gray-400 hover:text-red-400"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${post.is_hearted ? "fill-current" : ""}`} />
                      {post.is_hearted ? "Hearted" : "Heart"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
