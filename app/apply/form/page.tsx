"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function RegistrationForm() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-12">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${
                step === 1 ? "bg-[#2529ff] text-white" : "border-2 border-[#d9d9d9] text-[#61646b]"
              }`}
            >
              1
            </div>
            <div className="w-24 h-0.5 bg-[#d9d9d9]" />
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${
                step === 2 ? "bg-[#2529ff] text-white" : "border-2 border-[#d9d9d9] text-[#61646b]"
              }`}
            >
              2
            </div>
            <div className="w-24 h-0.5 bg-[#d9d9d9]" />
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center ${
                step === 3 ? "bg-[#2529ff] text-white" : "border-2 border-[#d9d9d9] text-[#61646b]"
              }`}
            >
              3
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 text-sm text-[#61646b] mb-12">
          <span className={step === 1 ? "text-[#2529ff]" : ""}>Personal Information</span>
          <span className={step === 2 ? "text-[#2529ff]" : ""}>Registration Question</span>
          <span className={step === 3 ? "text-[#2529ff]" : ""}>Finalize & Check Out</span>
        </div>

        <h1 className="text-4xl font-bold text-center text-[#21272a] mb-12">REGISTRATION FORM</h1>

        <form className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-[#61646b]">Empty</label>
              <Input placeholder="Placeholder/Input text" className="border-[#d9d9d9]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#61646b]">Empty</label>
              <Input placeholder="Placeholder/Input text" className="border-[#d9d9d9]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#61646b]">Dropdown</label>
              <Select>
                <SelectTrigger className="border-[#d9d9d9]">
                  <SelectValue placeholder="Dropdown Item" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="item1">Item 1</SelectItem>
                  <SelectItem value="item2">Item 2</SelectItem>
                  <SelectItem value="item3">Item 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#61646b]">Empty</label>
              <Input placeholder="Placeholder/Input text" className="border-[#d9d9d9]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#61646b]">Dropdown</label>
              <Select>
                <SelectTrigger className="border-[#d9d9d9]">
                  <SelectValue placeholder="Dropdown Item" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="item1">Item 1</SelectItem>
                  <SelectItem value="item2">Item 2</SelectItem>
                  <SelectItem value="item3">Item 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[#61646b]">Empty</label>
              <Input placeholder="Placeholder/Input text" className="border-[#d9d9d9]" />
            </div>
          </div>

          <div className="text-center text-[#61646b] max-w-3xl mx-auto">
            <p className="mb-8">
              Future Founders Launchpad 2025 is an intensive summer camp hosted by ELab at VinUniversity in
              collaboration with AIESEC in Vietnam. Designed for ambitious young entrepreneurs, the program is a unique
              chance to network with like-minded peers, gain real-world insights, and kickstart your journey as a future
              changemaker. We are here to experience hands-on workshops, mentorship and culminate in a pitch competition
              to showcase your innovative solutions. We overcome dynamic team challenges, develop entrepreneurial
              skills, foster creativity, and build realistic ideas which impact the world.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-[#61646b]">Verify Something</label>
              <Input placeholder="Placeholder/Input text" className="border-[#d9d9d9]" />
            </div>
            <div className="flex justify-end">
              <Button variant="outline" className="border-[#d9d9d9]">
                Button
              </Button>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <Button
              className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90 px-12"
              onClick={() => setStep((prev) => Math.min(prev + 1, 3))}
            >
              Continue
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

