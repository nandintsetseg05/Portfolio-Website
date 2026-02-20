"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { getBlogPosts } from "@/app/actions/blog"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/app/actions/blog"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadPosts() {
      const allPosts = await getBlogPosts()
      setPosts(allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
      setIsLoading(false)
    }
    loadPosts()
  }, [])
  return (
    <div className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Blog & Articles
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, and technology
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        {isLoading ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">Loading blog posts...</p>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 space-y-6"
          >
            <p className="text-xl text-muted-foreground">No blog posts yet. Check back soon!</p>
            <Link href="/admin/blog">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Create First Post
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        )}
      </section>
    </div>
  )
}
