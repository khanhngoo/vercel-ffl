import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#21272a] mb-12">FUTURE FOUNDERS LAUNCHPAD 2025 FAQ</h1>

        <div className="max-w-4xl mx-auto mb-20">
          <Accordion type="single" collapsible className="w-full divide-y">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-[#21272a] hover:text-[#2529ff]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#61646b]">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#21272a] mb-4">CALL TO ACTION SENTENCE</h2>
          <p className="text-[#61646b] mb-8">Further question thi dung ngai lien he voi org....</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#2529ff] text-white hover:bg-[#2529ff]/90">Apply Now</Button>
            <Button variant="outline" className="border-[#d9d9d9]">
              Button
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

const faqItems = [
  {
    question: "What is Future Founders Launchpad 2025?",
    answer:
      "Future Founders Launchpad 2025 is an intensive summer camp hosted by ELab at VinUniversity in collaboration with AIESEC in Vietnam. The program offers an immersive experience designed for aspiring young entrepreneurs to develop essential entrepreneurial skills, foster creativity, and build impactful ideas.",
  },
  {
    question: "Which organization will host Future Founders Launchpad 2025?",
    answer:
      "The program is co-hosted by ELab at VinUniversity and AIESEC in Vietnam. These organizations work together to provide a comprehensive entrepreneurship program that combines academic excellence with practical industry experience.",
  },
  {
    question: "Who is eligible for Future Founders Launchpad 2025?",
    answer:
      "The program is open to all high school students who show interest and passion for entrepreneurship. Participants must be proficient in English as the program is conducted entirely in English.",
  },
  {
    question: "What is the cost of the program?",
    answer:
      "The program fee is $2,000 per person. This includes all study materials, resources, program activities (workshops, networking events, field trips, cultural activities), accommodation and local transportation during the second week, and meals during the second event week. Additional costs like visa applications, flight tickets, and personal expenses are not included.",
  },
  {
    question: "What is the program timeline and activities?",
    answer:
      "The summer camp runs from July 7th to July 20th, 2025 (2 weeks). Week 1 is conducted online via Zoom, while Week 2 is held onsite at VinUniversity. Activities include welcome orientation, workshops on agile innovation and business development, field trips to startups and innovation centers, hackathon challenges, and networking opportunities with mentors and entrepreneurs.",
  },
]

