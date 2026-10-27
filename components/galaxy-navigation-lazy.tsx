"use client"

import dynamic from "next/dynamic"

export const GalaxyNavigation = dynamic(
  () => import("@/components/galaxy-navigation").then((mod) => mod.GalaxyNavigation),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-neutral-950 to-black" />
    ),
  }
)
