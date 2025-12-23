"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ImagePlus, Music, Loader2 } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string | null
  image_url: string | null
  audio_url: string | null
  published: boolean
}

interface BlogPostFormProps {
  userId: string
  post?: BlogPost
}

export function BlogPostForm({ userId, post }: BlogPostFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [uploadingAudio, setUploadingAudio] = useState(false)

  const [formData, setFormData] = useState({
    title: post?.title || "",
    content: post?.content || "",
    excerpt: post?.excerpt || "",
    image_url: post?.image_url || "",
    audio_url: post?.audio_url || "",
    published: post?.published || false,
  })

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    setError(null)

    try {
      const supabase = createClient()
      const fileExt = file.name.split(".").pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `blog-images/${fileName}`

      const { error: uploadError } = await supabase.storage.from("blog-media").upload(filePath, file)

      if (uploadError) throw uploadError

      const {
        data: { publicUrl },
      } = supabase.storage.from("blog-media").getPublicUrl(filePath)

      setFormData((prev) => ({ ...prev, image_url: publicUrl }))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image")
    } finally {
      setUploadingImage(false)
    }
  }

  const handleAudioUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingAudio(true)
    setError(null)

    try {
      const supabase = createClient()
      const fileExt = file.name.split(".").pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `blog-audio/${fileName}`

      const { error: uploadError } = await supabase.storage.from("blog-media").upload(filePath, file)

      if (uploadError) throw uploadError

      const {
        data: { publicUrl },
      } = supabase.storage.from("blog-media").getPublicUrl(filePath)

      setFormData((prev) => ({ ...prev, audio_url: publicUrl }))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload audio")
    } finally {
      setUploadingAudio(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()

      const postData = {
        title: formData.title,
        content: formData.content,
        excerpt: formData.excerpt || null,
        image_url: formData.image_url || null,
        audio_url: formData.audio_url || null,
        published: formData.published,
        author_id: userId,
      }

      if (post?.id) {
        // Update existing post
        const { error: updateError } = await supabase.from("blog_posts").update(postData).eq("id", post.id)

        if (updateError) throw updateError
      } else {
        // Create new post
        const { error: insertError } = await supabase.from("blog_posts").insert([postData])

        if (insertError) throw insertError
      }

      router.push("/admin/blog")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="glass-card border-blue-500/20">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              required
              placeholder="Enter post title"
              className="border-blue-500/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Input
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
              placeholder="Short description (optional)"
              className="border-blue-500/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
              required
              placeholder="Write your post content..."
              className="min-h-[300px] border-blue-500/20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Featured Image</Label>
              <div className="flex flex-col gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => document.getElementById("image-upload")?.click()}
                  disabled={uploadingImage}
                >
                  {uploadingImage ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <ImagePlus className="w-4 h-4 mr-2" />
                      Upload Image
                    </>
                  )}
                </Button>
                <input id="image-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                {formData.image_url && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-blue-500/20">
                    <img
                      src={formData.image_url || "/placeholder.svg"}
                      alt="Preview"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Audio Attachment</Label>
              <div className="flex flex-col gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => document.getElementById("audio-upload")?.click()}
                  disabled={uploadingAudio}
                >
                  {uploadingAudio ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Music className="w-4 h-4 mr-2" />
                      Upload Audio
                    </>
                  )}
                </Button>
                <input id="audio-upload" type="file" accept="audio/*" onChange={handleAudioUpload} className="hidden" />
                {formData.audio_url && (
                  <audio controls className="w-full">
                    <source src={formData.audio_url} />
                  </audio>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.published}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, published: checked }))}
            />
            <Label htmlFor="published">Publish immediately</Label>
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading} className="flex-1">
              {isLoading ? "Saving..." : post ? "Update Post" : "Create Post"}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.push("/admin/blog")}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
