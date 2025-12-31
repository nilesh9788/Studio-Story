import { Navigation } from "@/components/navigation"
import { TeamHero } from "@/components/team-hero"
import { TeamMembers } from "@/components/team-members"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Team - Studio Story",
  description: "Meet our talented team of screenwriters, directors, and creative strategists.",
}

export default function TeamPage() {
  return (
    <main>
      <Navigation />
      <TeamHero />
      <TeamMembers />
      <Footer />
    </main>
  )
}
