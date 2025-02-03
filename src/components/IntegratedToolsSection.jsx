import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function IntegratedToolsSection() {
  return (
    <section className="py-32 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <p className="text-sm font-semibold text-primary mb-2">A unique synergy for your teams</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tools that actually work together</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-600 mb-6">
                  We provide a suite of integrated tools - from productivity to low-code to business process
                  management - that work together to simplify your day-to-day life and that of all your teams. Welcome
                  to an ecosystem where everything just works.
                </p>
                <Button size="lg">Book Demo</Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Integrated Tools"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

