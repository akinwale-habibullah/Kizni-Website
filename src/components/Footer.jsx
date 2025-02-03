import { Facebook, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-yellow-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-20">
          <div>
            <h3 className="text-xl font-semibold mb-4">Apps</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Primary / Secondary School App
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Agile Project Management App
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Implementation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Migration
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support plan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pay per session workshop
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-16">
              <h3 className="text-xl font-semibold mb-4">Stay connected</h3>
              <div className="flex space-x-4">
                <a href="#">
                  <Facebook size={32} />
                </a>
                <a href="#">
                  <Linkedin size={32} />
                </a>
                <a href="#">
                  <Youtube size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center">
          <h2 className="text-6xl md:text-[240px]  mb-12 text-center">
            K
          </h2>
          <h2 className="text-6xl md:text-[240px] mb-12 text-center">
            I
          </h2>
          <h2 className="text-6xl md:text-[240px] mb-12 text-center">
            Z
          </h2>
          <h2 className="text-6xl md:text-[240px] mb-12 text-center">
            N
          </h2>
          <h2 className="text-6xl md:text-[240px] mb-12 text-center">
            I
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kizni, a brand of Techlake Ventures Limited. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

