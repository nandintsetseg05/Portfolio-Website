import { createClient } from "@/lib/supabase/server"
import { BlogPostsList } from "@/components/blog-posts-list"
import Link from "next/link"
import { Settings } from "lucide-react"

export const metadata = {
  title: "Blog | Nana Nandintsetseg",
  description:
    "Read the latest articles, insights, and updates from Nana Nandintsetseg about web development, design, and digital marketing.",
}

export default async function BlogPage() {
  const supabase = await createClient()

  // Fetch only published posts
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })

  // Check if user is logged in
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">Thoughts, stories, and ideas</p>
        </div>

        <BlogPostsList posts={posts || []} isAdmin={false} />

        <div className="mt-16 pt-8 border-t flex justify-center">
          {user ? (
            <Link
              href="/admin/blog"
              className="flex items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300 text-muted-foreground hover:text-foreground"
            >
              <Settings className="h-5 w-5" />
              <span className="text-sm">Admin Dashboard</span>
            </Link>
          ) : (
            <Link
              href="/auth/login"
              className="flex items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300 text-muted-foreground hover:text-foreground"
            >
              <Settings className="h-5 w-5" />
              <span className="text-sm">Admin Login</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
