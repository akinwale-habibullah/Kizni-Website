import Head from "next/head"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import DiscoverSection from "@/components/DiscoverSection"
import OfferingsSection from "@/components/OfferingsSection"
import IntegratedToolsSection from "@/components/IntegratedToolsSection"
import WhyUsSection from "@/components/WhyUsSection"
import FeatureHighlightsSection from "@/components/FeatureHighlightsSection"
import BlogPreviewSection from "@/components/BlogPreviewSection"
import Process from "@/components/Process"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <div>
      <Head>
        <title>Kizni</title>
      </Head>
      <div className="min-h-svh flex flex-col">
        <Navbar />
        <Hero />
        <DiscoverSection />
        <OfferingsSection />
        <IntegratedToolsSection />
        <WhyUsSection />
        <FeatureHighlightsSection />
        <BlogPreviewSection />
        <Process />
        <Footer />
      </div>
    </div>
  )
}

