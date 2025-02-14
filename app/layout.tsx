import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-6 py-4 lg:px-8 border-b">
          <div className="w-24 h-8 bg-[#21272a]" />
          <div className="flex items-center gap-8">
            <Link href="/" className="text-[#61646b] hover:text-[#21272a]">
              Home
            </Link>
            <Link href="/information" className="text-[#61646b] hover:text-[#21272a]">
              Information
            </Link>
            <Link href="/faq" className="text-[#61646b] hover:text-[#21272a]">
              FAQ
            </Link>
            <Link href="/about" className="text-[#61646b] hover:text-[#21272a]">
              About Us
            </Link>
            <Button className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90">Apply Now</Button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

