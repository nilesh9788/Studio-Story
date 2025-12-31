import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { ServicesDetails } from "@/components/services-details"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Services - Studio Story",
  description:
    "Comprehensive advertising services including screenwriting, creative direction, production, and consultation.",
}

export default function ServicesPage() {
  return (
    <main>
      <Navigation />
      <ServicesHero />
      <ServicesDetails />
      <Footer />
    </main>
  )
}
