import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Music, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: post } = await supabase.from("blog_posts").select("title, excerpt").eq("id", id).single()

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Nana Nandintsetseg Blog`,
    description: post.excerpt || post.title,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .eq("published", true)
    .single()

  if (error || !post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>
        </Link>

        <Card className="glass-card border-blue-500/20">
          {post.image_url && (
            <div className="aspect-video w-full overflow-hidden rounded-t-lg">
              <img src={post.image_url || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
            </div>
          )}
          <CardContent className="pt-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="default">Published</Badge>
              {post.audio_url && (
                <Badge variant="outline" className="gap-1">
                  <Music className="w-3 h-3" />
                  Audio Available
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-muted-foreground mb-8">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.created_at}>{new Date(post.created_at).toLocaleDateString()}</time>
              {post.updated_at !== post.created_at && (
                <span className="text-sm">(Updated: {new Date(post.updated_at).toLocaleDateString()})</span>
              )}
            </div>

            {post.audio_url && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Listen to this post</h3>
                <audio controls className="w-full">
                  <source src={post.audio_url} />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">{post.content}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
