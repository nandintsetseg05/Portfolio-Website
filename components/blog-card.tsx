"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import type { BlogPost } from "@/app/actions/blog"
import Image from "next/image"

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="h-full hover:shadow-lg transition-all hover:border-secondary/50 cursor-pointer group glass-card backdrop-blur-xl border-white/10">
          {post.imageUrl && (
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-xs text-muted-foreground/70 mt-2">
                  {format(new Date(post.date), "MMM d, yyyy")} • By {post.author}
                </CardDescription>
              </div>
              {post.featured && (
                <Badge className="bg-gradient-to-r from-primary to-secondary">Featured</Badge>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-primary/30 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
