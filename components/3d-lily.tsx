"use client"

import React from "react"

interface Lily3DProps {
  className?: string
  title?: string
}

export function Lily3D({ className = "", title = "Lilies" }: Lily3DProps) {
  return (
    <div className={`sketchfab-embed-wrapper w-full ${className}`}>
      <iframe
        title={title}
        frameBorder="0"
        allowFullScreen
        width="640"
        height="480"
        src="https://sketchfab.com/models/45755df496804cb7a36f6f32305b57a7/embed"
        className="w-full max-w-2xl aspect-video rounded-xl"
      />
    </div>
  )
}
