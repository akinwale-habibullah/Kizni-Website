import { ArrowUpRight } from "lucide-react"

const offeringsData = [
  {
    title: "Regain control of your finances",
    description:
      "Streamline your financial processes and gain real-time insights into your business's financial health.",
    icon: "/placeholder.svg?height=50&width=50",
    bgColor: "bg-blue-100",
  },
  {
    title: "Relieve your logistics bottlenecks",
    description: "Optimize your supply chain and inventory management for smoother operations and reduced costs.",
    icon: "/placeholder.svg?height=50&width=50",
    bgColor: "bg-green-100",
  },
  {
    title: "Increase efficiency on your production line",
    description: "Enhance your manufacturing processes with advanced planning and execution tools.",
    icon: "/placeholder.svg?height=50&width=50",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Stop customers slipping through the cracks",
    description: "Improve customer retention and satisfaction with our comprehensive CRM solutions.",
    icon: "/placeholder.svg?height=50&width=50",
    bgColor: "bg-red-100",
  },
  {
    title: "Modernize your operations",
    description: "Embrace digital transformation and streamline your business processes for increased productivity.",
    icon: "/placeholder.svg?height=50&width=50",
    bgColor: "bg-purple-100",
  },
  {
    title: "Simplify contracts and compliance",
    description: "Manage contracts and ensure compliance with ease using our specialized tools and features.",
    icon: "/placeholder.svg?height=50&width=50",
    bgColor: "bg-indigo-100",
  },
]

export default function OfferingsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">Start Simply, Grow Smoothly</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tools for your everyday challenges</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to manage your finances, optimize your operations, build customer loyalty or better
            meet the needs of your members and citizens, our solutions are designed to simplify your life. With
            high-performance, customized tools, we help you meet your challenges and reach your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offeringsData.map((offering, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg shadow-lg group ${offering.bgColor} h-[376px]`}>
              <div className="p-6 h-full flex flex-col justify-end transition-all duration-300">
                <div className="flex items-center justify-between mt-auto group-hover:translate-y-[-20px] transition-transform duration-300">
                  <h3 className="text-xl font-semibold">{offering.title}</h3>
                  <div className="bg-primary text-white p-2 rounded-full">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <div>

                <p className="text-gray-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {offering.description}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

