import { Navigation } from "@/components/navigation"
import { ScreenplayLibrary } from "@/components/screenplay-library"
import { Footer } from "@/components/footer"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Screenplay Library - Studio Story",
  description: "Explore our collection of professionally crafted screenplays.",
}

export default function ScreenplaysPage() {
  return (
    <main>
      <Navigation />
      <ScreenplayLibrary />
      <Footer />
    </main>
  )
}
