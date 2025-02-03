import { WandSparkles, Sparkles } from "lucide-react"
import { Button } from "./ui/button"

const processData = [
  {
    title: "Assess & Strategize",
    point1: "Understand Your Needs: We'll begin by thoroughly analyzing your current processes, identifying pain points, and defining your specific goals for the ERP system. This includes understanding your business requirements, budget, and timeline.",
    point2: "Develop a Tailored Strategy: Based on the assessment, we'll create a customized implementation plan outlining the optimal ERP solution, necessary customizations, data migration strategy, training program, and a clear roadmap for success. This strategy will minimize disruption and maximize ROI."
  },
  {
    title: " Implement & Integrate",
    point1: "Seamless System Integration: Our expert team will configure and implement the chosen ERP system, ensuring smooth integration with your existing systems (CRM, e-commerce, etc.). We'll handle data migration, ensuring accuracy and minimal data loss.",
    point2: "Comprehensive Training & Support: We'll provide hands-on training for your team, empowering them to effectively use the new ERP system. Ongoing support will be available to address any questions and ensure a smooth transition.",
  },
  {
    title: "Optimize & Evolve",
    point1: "Continuous Monitoring & Improvement: Post-implementation, we'll monitor system performance, gather user feedback, and identify areas for optimization. This ensures the ERP system continues to meet your evolving business needs",
    point2: "Ongoing Support & Upgrades: We'll provide ongoing support and system upgrades to ensure your ERP system remains current and performs optimally. This allows you to focus on your core business, knowing your ERP is in expert hands."
  },
]

export default function Process() {
  return (
    <section className="w-full bg-yellow-100 py-32">

      {/* <Button size="lg">Book Demo</Button> */}
      <div className="flex flex-col items-center justify-start w-5/6 py-32 rounded-3xl bg-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-primary mb-0.5 underline">How we do the heavy lifting</p>
        <p className="text-lg mb-12">Simple but effective implementation process</p>

        {
          processData.map((process, index) => (
            <div key={index}>
              <p className="text-5xl font-thin mb-2">{processData[index].title}</p>
            </div>
          ))
        }

        <Button className="mt-4 rounded-full" size="lg">
          <WandSparkles size={24} /> Get free consultation
        </Button>
      </div>
    </section>
  )
}

