import Image from "next/image";
import { Menu } from 'lucide-react';
import { Inter } from "next/font/google";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <nav className="{`${interSans.variable}  flex flex-row items-center justify-between px-3 pt-2 absolute top-0 left-0 w-[100vw]">
        <div className="flex">
          <a href="/">
            <p className="text-[24px] font-medium">Kizni</p>
          </a>

          <ol className="hidden lg:flex gap-4 pl-8 items-center text-sm text-slate-900">
            <a href="/"><li>Solutions</li></a>
            <a href="/"><li>Services</li></a>
            <a href="/"><li>Industries</li></a>
            <a href="/"><li>Company</li></a>
          </ol>
        </div>

        <div className="md:hidden">
            <Menu size={24} />
        </div>

        <div className="hidden bg-slate-950 text-white">
          <p>Book demo</p>
        </div>
      </nav>

      <section className="flex flex-col items-end justify-end h-[100vh] pt-12 w-full">
        <div className="flex-1"></div>

        <div className="flex flex-col justify-end items-center flex-1">
          <h4 className="">The complete suite of enterprise management applications</h4>

          <p className="">
            We provide open-source ERP and CRM solutions tailored for SMEs and manufacturers.  Our solutions address operational challenges, driving growth and enhanced performance.
          </p>
        </div>
      </section>
    </>
  );
}
