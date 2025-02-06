import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const offeringsData = [
  {
    id: "erp-schools",
    title: "ERP for Schools",
    content:
      "Efficiently manage your educational institution with our specialized ERP solution for schools and colleges.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "erp-sme",
    title: "ERP for SMEs",
    content:
      "Streamline your business operations with our comprehensive ERP solution tailored for small and medium enterprises.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "crm-sme",
    title: "CRM for SMEs",
    content:
      "Enhance customer relationships and boost sales with our powerful CRM system designed for growing businesses.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "omnichannel",
    title: "Omnichannel",
    content: "Create seamless customer experiences across all channels with our integrated omnichannel solution.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function DiscoverSection() {
  const [openItem, setOpenItem] = useState("erp-sme")

  return (
    <section className="py-16">
      <div className="bg-gray-100 rounded-3xl max-w-screen-xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover the power of Open Source</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With the innovation of Open Source and the expertise of our team, we turn complexity into simplicity. Each
            solution is designed to meet your precise needs and become a driving force behind your success.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <h3 className="text-sm text-gray-400 font-bold mb-2">Explore our core offerings</h3>
            <h4 className="text-3xl mb-6">The strength of the right tools</h4>
            <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
              {offeringsData.map((offering) => (
                <AccordionItem key={offering.id} value={offering.id}>
                  <AccordionTrigger>
                    <p className="text-base">{offering.title}</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">{offering.content}</p>
                    <Button>Explore Features</Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <Image
              src={offeringsData.find((item) => item.id === openItem)?.image || ""}
              alt={offeringsData.find((item) => item.id === openItem)?.title || ""}
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

