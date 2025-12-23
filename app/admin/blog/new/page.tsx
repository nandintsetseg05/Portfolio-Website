import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { BlogPostForm } from "@/components/blog-post-form"

export default async function NewBlogPostPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-8">
          Create New Post
        </h1>
        <BlogPostForm userId={user.id} />
      </div>
    </div>
  )
}
