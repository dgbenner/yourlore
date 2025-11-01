"use client"

import { Button } from "@/components/ui/button"
import { Crown, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith("/admin")

  return (
    <div className="flex items-center gap-2">
      {isAdmin ? (
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <ArrowLeft className="w-4 h-4 mr-1" />
            User App
          </Button>
        </Link>
      ) : (
        <Link href="/admin">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
            <Crown className="w-4 h-4 mr-1" />
            Admin
          </Button>
        </Link>
      )}
    </div>
  )
}
