import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface HobbyCardProps {
  title: string
  description: string
  icon?: string
  link?: string
}

export function HobbyCard({ title, description, icon, link }: HobbyCardProps) {
  const card = (
    <Card className="glass-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] h-full border-border/50">
      <CardHeader>
        {icon && <div className="text-4xl mb-2">{icon}</div>}
        <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  )

  if (!link || link === "#") {
    return card
  }

  const isExternal = link.startsWith("http")

  return (
    <Link href={link} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
      {card}
    </Link>
  )
}
