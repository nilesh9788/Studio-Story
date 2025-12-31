import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StudioSection } from "@/components/studio-section"
import { ApproachSection } from "@/components/approach-section"
import { ScreenplayLibraryPreview } from "@/components/screenplay-library-preview"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <StudioSection />
      <ApproachSection />
      <ScreenplayLibraryPreview />
      <CaseStudiesSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
