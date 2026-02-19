"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBlogPosts, createBlogPost, deleteBlogPost, updateBlogPost } from "@/app/actions/blog"
import { Edit, Trash2, Plus, LogOut, Lock } from "lucide-react"
import type { BlogPost } from "@/app/actions/blog"
import { format } from "date-fns"
import Link from "next/link"

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123" // Change in production!

export default function AdminBlogPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    slug: "",
    author: "Nana Nandintsetseg",
    tags: "",
    featured: false,
    imageUrl: "",
    videoUrl: "",
  })

  useEffect(() => {
    if (isAuthenticated) {
      loadPosts()
    }
  }, [isAuthenticated])

  const loadPosts = async () => {
    const allPosts = await getBlogPosts()
    setPosts(allPosts)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPassword("")
    } else {
      alert("Invalid password")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword("")
    setEditingPost(null)
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      excerpt: "",
      slug: "",
      author: "Nana Nandintsetseg",
      tags: "",
      featured: false,
      imageUrl: "",
      videoUrl: "",
    })
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.content || !formData.excerpt || !formData.slug) {
      alert("Please fill in all required fields")
      return
    }

    try {
      if (editingPost) {
        // Update existing post
        const result = await updateBlogPost(editingPost.slug, {
          ...formData,
          tags: formData.tags.split(",").map((tag) => tag.trim()),
        })

        if (result.success) {
          alert("Post updated successfully!")
          setEditingPost(null)
          resetForm()
          loadPosts()
        } else {
          alert("Failed to update post")
        }
      } else {
        // Create new post
        const result = await createBlogPost({
          ...formData,
          tags: formData.tags.split(",").map((tag) => tag.trim()),
        })

        if (result.success) {
          alert("Post created successfully!")
          resetForm()
          loadPosts()
        } else {
          alert("Failed to create post")
        }
      }
    } catch (error) {
      console.error("Error saving post:", error)
      alert("An error occurred while saving the post")
    }
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      slug: post.slug,
      author: post.author,
      tags: post.tags.join(", "),
      featured: post.featured,
      imageUrl: post.imageUrl || "",
      videoUrl: post.videoUrl || "",
    })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDelete = async (slug: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const result = await deleteBlogPost(slug)
      if (result.success) {
        alert("Post deleted successfully!")
        loadPosts()
      } else {
        alert("Failed to delete post")
      }
    }
  }

  const handleCancel = () => {
    setEditingPost(null)
    resetForm()
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center space-y-3">
            <Lock className="w-12 h-12 mx-auto text-primary" />
            <h1 className="text-3xl font-bold">Admin Access</h1>
            <p className="text-muted-foreground">Enter your password to manage blog posts</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
              Enter Admin Panel
            </Button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Blog Management
          </h1>
          <Button variant="outline" onClick={handleLogout} className="border-red-500/30 hover:bg-red-500/10">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
            <Card className="glass-card backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle>{editingPost ? "Edit Post" : "Create New Post"}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={handleTitleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Post title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Slug *</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="auto-generated"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Excerpt *</label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      placeholder="Short description for the post"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Content * (Markdown)</label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={10}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary resize-none font-mono text-sm"
                      placeholder="# Heading&#10;## Subheading&#10;- List item&#10;Regular paragraph"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Author</label>
                      <input
                        type="text"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
                      <input
                        type="text"
                        value={formData.tags}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                        placeholder="react, nextjs, tutorial"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Featured Image URL</label>
                    <input
                      type="url"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Video Embed URL</label>
                    <input
                      type="url"
                      value={formData.videoUrl}
                      onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="https://youtube.com/embed/..."
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="w-4 h-4 rounded"
                    />
                    <label htmlFor="featured" className="text-sm font-medium cursor-pointer">
                      Mark as Featured
                    </label>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="flex-1 bg-gradient-to-r from-primary to-secondary">
                      {editingPost ? "Update Post" : "Create Post"}
                    </Button>
                    {editingPost && (
                      <Button type="button" variant="outline" onClick={handleCancel} className="flex-1">
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Posts List */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <Card className="glass-card backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Posts ({posts.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {posts.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-4">No posts yet</p>
                  ) : (
                    posts.map((post) => (
                      <div
                        key={post.id}
                        className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{post.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {format(new Date(post.date), "MMM d, yyyy")}
                            </p>
                            {post.featured && <Badge className="mt-1 text-xs">Featured</Badge>}
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => handleEdit(post)}
                              className="p-1.5 hover:bg-primary/20 rounded transition-colors"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(post.slug)}
                              className="p-1.5 hover:bg-red-500/20 rounded transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <Link href="/blog" className="w-full mt-4">
                  <Button variant="outline" className="w-full">
                    View Public Blog
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
