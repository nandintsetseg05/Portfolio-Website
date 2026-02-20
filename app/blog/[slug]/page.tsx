"use client"

import { useEffect, useState } from "react"
import { notFound, useParams } from "next/navigation"
import { motion } from "framer-motion"
import { getBlogPost } from "@/app/actions/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { format } from "date-fns"
import Image from "next/image"
import type { BlogPost } from "@/app/actions/blog"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [notFound404, setNotFound404] = useState(false)

  useEffect(() => {
    async function loadPost() {
      const loadedPost = await getBlogPost(slug)
      if (!loadedPost) {
        setNotFound404(true)
      } else {
        setPost(loadedPost)
      }
      setIsLoading(false)
    }
    loadPost()
  }, [slug])

  if (notFound404) {
    return (
      <div className="relative min-h-screen overflow-hidden pt-32 pb-20 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Post Not Found</h1>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-primary to-secondary">Back to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  if (isLoading || !post) {
    return (
      <div className="relative min-h-screen overflow-hidden pt-32 pb-20 flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Loading post...</p>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <section className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-12"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              {post.featured && <Badge className="bg-gradient-to-r from-primary to-secondary">Featured</Badge>}
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-primary/30">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="text-sm">{format(new Date(post.date), "MMMM d, yyyy")}</span>
              <span>•</span>
              <span className="text-sm">By {post.author}</span>
            </div>
          </div>

          {/* Featured Image */}
          {post.imageUrl && (
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-2xl backdrop-blur-xl border border-white/10 space-y-6 mb-12 prose prose-invert max-w-none"
        >
          <div className="prose prose-invert max-w-none">
            {post.content.split("\n").map((paragraph, i) => {
              if (!paragraph.trim()) return null

              // Check if it's a heading (starts with #)
              if (paragraph.startsWith("###")) {
                return (
                  <h3 key={i} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.replace(/^###\s+/, "")}
                  </h3>
                )
              }
              if (paragraph.startsWith("##")) {
                return (
                  <h2 key={i} className="text-3xl font-bold mt-8 mb-4">
                    {paragraph.replace(/^##\s+/, "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("#")) {
                return (
                  <h1 key={i} className="text-4xl font-bold mt-8 mb-4">
                    {paragraph.replace(/^#\s+/, "")}
                  </h1>
                )
              }

              // Check if it's a list item
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={i} className="ml-6 text-base text-muted-foreground">
                    {paragraph.replace(/^- /, "")}
                  </li>
                )
              }

              // Regular paragraph
              return (
                <p key={i} className="text-base text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Video Embed */}
          {post.videoUrl && (
            <div className="mt-8 aspect-video rounded-lg overflow-hidden bg-black/50">
              <iframe
                src={post.videoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </motion.div>

        {/* Updated Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>Last updated: {format(new Date(post.updatedAt), "MMMM d, yyyy")}</p>
        </motion.div>
      </section>
    </div>
  )
}
