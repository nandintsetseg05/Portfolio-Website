"use server"

import fs from "fs"
import path from "path"

export interface BlogPost {
  id: string
  slug: string
  title: string
  content: string
  excerpt: string
  author: string
  date: string
  updatedAt: string
  tags: string[]
  featured: boolean
  imageUrl?: string
  videoUrl?: string
}

const DATA_DIR = path.join(process.cwd(), "data")
const BLOG_FILE = path.join(DATA_DIR, "blog-posts.json")

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

// Get all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    ensureDataDir()
    if (!fs.existsSync(BLOG_FILE)) {
      return []
    }
    const data = fs.readFileSync(BLOG_FILE, "utf-8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

// Get single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getBlogPosts()
    return posts.find((post) => post.slug === slug) || null
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

// Create new blog post
export async function createBlogPost(post: Omit<BlogPost, "id" | "date" | "updatedAt">) {
  try {
    ensureDataDir()
    const posts = await getBlogPosts()

    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    posts.push(newPost)
    fs.writeFileSync(BLOG_FILE, JSON.stringify(posts, null, 2))

    return { success: true, post: newPost }
  } catch (error) {
    console.error("Error creating blog post:", error)
    return { success: false, error: "Failed to create blog post" }
  }
}

// Update blog post
export async function updateBlogPost(slug: string, updates: Partial<BlogPost>) {
  try {
    ensureDataDir()
    const posts = await getBlogPosts()
    const index = posts.findIndex((p) => p.slug === slug)

    if (index === -1) {
      return { success: false, error: "Blog post not found" }
    }

    posts[index] = {
      ...posts[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    }

    fs.writeFileSync(BLOG_FILE, JSON.stringify(posts, null, 2))
    return { success: true, post: posts[index] }
  } catch (error) {
    console.error("Error updating blog post:", error)
    return { success: false, error: "Failed to update blog post" }
  }
}

// Delete blog post
export async function deleteBlogPost(slug: string) {
  try {
    ensureDataDir()
    const posts = await getBlogPosts()
    const filtered = posts.filter((p) => p.slug !== slug)

    if (filtered.length === posts.length) {
      return { success: false, error: "Blog post not found" }
    }

    fs.writeFileSync(BLOG_FILE, JSON.stringify(filtered, null, 2))
    return { success: true }
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return { success: false, error: "Failed to delete blog post" }
  }
}
