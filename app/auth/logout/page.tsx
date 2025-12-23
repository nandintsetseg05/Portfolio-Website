"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { createBrowserClient } from "@/lib/supabase/client"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    const handleLogout = async () => {
      const supabase = createBrowserClient()
      await supabase.auth.signOut()
      router.push("/")
    }

    handleLogout()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Logging out...</h1>
        <p className="text-muted-foreground">Please wait</p>
      </div>
    </div>
  )
}
