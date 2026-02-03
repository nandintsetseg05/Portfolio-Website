import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, category, tags, link }: ProjectCardProps) {
  return (
    <Card className="glass-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] border-border/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-primary/20">
            {category}
          </Badge>
          <Link
            href={link}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`View ${title}`}
          >
            <ExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
          </Link>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors text-xl">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs border-border/50 hover:border-primary/50 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
