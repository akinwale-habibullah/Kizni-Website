import { ArrowUpRight } from "lucide-react"

const whyUsData = [
  {
    title: "We build relationships that last",
    description:
      "Our commitment goes beyond just providing a service. We're here for the long haul, ensuring your success every step of the way.",
    bgColor: "bg-blue-100",
  },
  {
    title: "Domain experience",
    description:
      "With years of industry-specific knowledge, we bring insights and solutions tailored to your unique challenges.",
    bgColor: "bg-green-100",
  },
  {
    title: "This isn't our first rodeo",
    description:
      "Our track record speaks for itself. We've successfully implemented solutions across various industries, facing and overcoming diverse challenges.",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Brilliant team",
    description:
      "Our track record speaks for itself. We've successfully implemented solutions across various industries, facing and overcoming diverse challenges.",
    bgColor: "bg-yellow-100",
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 font-semibold text-primary mb-2">Where our team makes a difference</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Kizni</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Kizni, we don't just offer solutions; we deliver partnerships. Our team's expertise, coupled with our commitment to your success, sets us apart in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8">
          {whyUsData.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} p-6 h-[280px] rounded-lg shadow-lg ${
                index === 0 || index === 3 ? "md:col-span-2" : ""}`}
            >
              <div className="group relative h-full flex flex-col justify-end overflow-hidden">
                <div className="flex items-center justify-between translate-y-0 group-hover:-translate-y-28 transition-all duration-300 ease-in-out">
                  <div className="flex flex-row justify-between items-center w-full ">
                    <h3 className="text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <div className="bg-primary text-white p-2 rounded-full border">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                <div className="absolute opacity-0 transform overflow-hidden group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-300 ease-in-out">
                  <p className="text-gray-700">
                    {item.description}
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

