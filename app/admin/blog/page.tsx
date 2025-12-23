import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { BlogPostsList } from "@/components/blog-posts-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlusCircle } from "lucide-react"

export default async function AdminBlogPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  // Fetch all posts by this author
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("author_id", user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
              Blog Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your blog posts and content</p>
          </div>
          <div className="flex gap-4">
            <Link href="/admin/blog/new">
              <Button className="gap-2">
                <PlusCircle className="w-4 h-4" />
                New Post
              </Button>
            </Link>
            <form action="/auth/logout" method="POST">
              <Button variant="outline" type="submit">
                Logout
              </Button>
            </form>
          </div>
        </div>

        <BlogPostsList posts={posts || []} isAdmin={true} />
      </div>
    </div>
  )
}
