import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { Schedule } from "@/components/schedule"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { WhyUs } from "@/components/why-us"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingContact } from "@/components/floating-contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Schedule />
      <Pricing />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  )
}
