"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Edit, Trash2, Music, Calendar } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string | null
  image_url: string | null
  audio_url: string | null
  published: boolean
  created_at: string
  updated_at: string
}

interface BlogPostsListProps {
  posts: BlogPost[]
  isAdmin?: boolean
}

export function BlogPostsList({ posts, isAdmin = false }: BlogPostsListProps) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return

    setDeletingId(id)
    try {
      const supabase = createClient()
      const { error } = await supabase.from("blog_posts").delete().eq("id", id)

      if (error) throw error

      router.refresh()
    } catch (error) {
      console.error("Error deleting post:", error)
      alert("Failed to delete post")
    } finally {
      setDeletingId(null)
    }
  }

  if (posts.length === 0) {
    return (
      <Card className="glass-card border-blue-500/20">
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">No posts yet. Create your first post to get started!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <Card key={post.id} className="glass-card border-blue-500/20 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {post.image_url && (
              <div className="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                <img
                  src={post.image_url || "/placeholder.svg"}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="flex-1">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={post.published ? "default" : "secondary"}>
                        {post.published ? "Published" : "Draft"}
                      </Badge>
                      {post.audio_url && (
                        <Badge variant="outline" className="gap-1">
                          <Music className="w-3 h-3" />
                          Audio
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.created_at).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  {isAdmin && (
                    <div className="flex gap-2">
                      <Link href={`/admin/blog/edit/${post.id}`}>
                        <Button size="icon" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDelete(post.id)}
                        disabled={deletingId === post.id}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt || post.content.substring(0, 150) + "..."}</p>
                {post.audio_url && (
                  <audio controls className="w-full mb-4">
                    <source src={post.audio_url} />
                  </audio>
                )}
                {!isAdmin && (
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="link" className="p-0">
                      Read more →
                    </Button>
                  </Link>
                )}
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
