import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function BlogPreviewSection() {
  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 border-t">
        <div className="flex justify-between items-end mb-12 pt-8">
          {/* <h2 className="text-5xl md:text-8xl flex-1">Get a sneak peek into our minds</h2> */}
          <h2 className="text-5xl md:text-8xl flex-1">Learn How We Think</h2>
          <Button size="lg" variant="outline">View all articles</Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <a href="#">
              <div className="border hover:bg-gray-50 border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6 h-full">
                <div className="w-full flex flex-col justify-between">
                  <div className="flex flex-row justify-between items-start w-full">
                    <p className="font-bold mb-1">
                      Customer story 
                      <span className="text-gray-500 text-sm mb-4"> 3 min read</span>
                    </p>
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Customer story"
                      width={150}
                      height={150}
                      className="rounded-lg mb-4 border"
                    />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-2">How Company X increased productivity by 200%</h3>
                    <p className="text-gray-600">Learn how our solutions transformed Company X's operations.</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="md:w-1/3 flex flex-col gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <a href="#" key={index}>
                <div className="group border-0 border-t p-4 pt-6 hover:bg-gray-50 hover:border transition-all duration-100">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <div>
                      <p className="text-primary font-semibold text-sm">Tech insights</p>
                      <p className="text-gray-500 text-sm">8 min read</p>
                      <h3 className="text-xl">What is a CRM software solution?</h3>
                    </div>
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Tech insight"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Avatar>
                        <AvatarImage src="/images/akinwale-habib.jpg" />
                        <AvatarFallback>AH</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">by Akinwale Habib</span>
                    </div>
                    <Badge variant="secondary">CRM</Badge>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

