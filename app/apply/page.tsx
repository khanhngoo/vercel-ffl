import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full text-center space-y-8">
          <h1 className="text-4xl font-bold text-[#21272a]">SMALL TITLE</h1>

          <p className="text-[#61646b] text-center">
            Future Founders Launchpad 2025 is an intensive summer camp hosted by ELab at VinUniversity in collaboration
            with AIESEC in Vietnam. Designed for ambitious young entrepreneurs, the program is a unique chance to
            network with like-minded peers, gain real-world insights, and kickstart your journey as a future
            changemaker. We are here to experience hands-on workshops, mentorship and culminate in a pitch competition
            to showcase your innovative solutions. We overcome dynamic team challenges, develop entrepreneurial skills,
            foster creativity, and build realistic ideas which impact the world.
          </p>

          <div className="flex justify-center gap-4">
            <Link href="/apply/form">
              <Button className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90">Continue</Button>
            </Link>
            <Button variant="outline" className="border-[#d9d9d9]">
              Button
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

