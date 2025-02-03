import Image from "next/image"

import { Lightbulb, Headset, LineChart } from "lucide-react"

const featureData = [
  {
    title: "Innovative Solutions",
    subtitle: "Cutting-edge technology to drive your business forward",
    image: "/placeholder.svg?height=200&width=300",
    icon: <Lightbulb size={152} strokeWidth={1} />
  },
  {
    title: "Expert Support",
    subtitle: "24/7 assistance from our team of seasoned professionals",
    image: "/placeholder.svg?height=200&width=300",
    icon: <Headset size={152} strokeWidth={1} />
  },
  {
    title: "Scalable Growth",
    subtitle: "Solutions that grow with your business needs",
    image: "/placeholder.svg?height=200&width=300",
    icon: <LineChart size={152} strokeWidth={1} />
  },
]

export default function FeatureHighlightsSection() {
  return (
    <section className="w-full">
      <div className="w-5/6 py-60 rounded-xl border max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center md:flex-row gap-8">
          {featureData.map((feature, index) => (
            <div key={index} className="flex flex-col flex-1 justify-between items-center h-96 bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg">
              {/* <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              /> */}
              <div className="flex flex-col flex-1 w-full justify-center items-center">
                {feature.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="h-10 text-gray-600">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

