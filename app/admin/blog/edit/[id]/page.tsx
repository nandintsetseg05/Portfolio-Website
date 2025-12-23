import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { BlogPostForm } from "@/components/blog-post-form"
import { notFound } from "next/navigation"

export default async function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    redirect("/auth/login")
  }

  // Fetch the post
  const { data: post, error: postError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .eq("author_id", user.id)
    .single()

  if (postError || !post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-8">
          Edit Post
        </h1>
        <BlogPostForm userId={user.id} post={post} />
      </div>
    </div>
  )
}
