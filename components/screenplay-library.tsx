"use client"

import { useState, useMemo } from "react"
import { ScreenplayViewer } from "./screenplay-viewer"

interface Screenplay {
  id: number
  title: string
  category: string
  pages: number
  year: number
  logline: string
  format: string
    pdfUrl: string

}

export function ScreenplayLibrary() {
  const [selectedScreenplay, setSelectedScreenplay] = useState<Screenplay | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const screenplays: Screenplay[] = [
    {
      id: 1,
      title: "Timing Matters",
      category: "Astrotalk",
      pages: 3,
      year: 71,
      logline: "A skeptical Gen-Z boy ignores his mother’s horoscope warning and proposes too early, gets rejected, then realizes timing matters — Astrotalk helps align moments with destiny.",
      format: "Commercial 60-75 seconds ",
      pdfUrl: "/Ads/Astrotalk — Timing Matters.pdf",
    },
    {
      id: 2,
      title: "Error 404",
      category: "Astrotalk",
      pages: 3,
      year: 72,
      logline: "A Hindu funeral turns awkward when a grieving son asks about his Muslim in-laws’ arrival, triggering comic panic — highlighting cultural tension and the need for true compatibility.",
      format: "Commercial 70-90 seconds",
      pdfUrl: "/Ads/Astrotalk — Error 404.pdf",

    },
    {
      id: 3,
      title: "Auto wale ka baap bana IAS",
      category: "Physics Wallah",
      pages: 4,
      year: 69,
      logline: "A policeman stops kids “driving” a rickshaw, sparking sensational news chaos—until it’s revealed their father is studying to become IAS, inspiring the whole nation to study again.",
      format: "Commercial 65-90 seconds",
      pdfUrl: "/Ads/Physics Wallah — Auto wale ka baap bana IAS.pdf",

    },
    {
      id: 4,
      title: "Auto wale ka baap bana IAS",
      category: "Indigo",
      pages: 4,
      year: 70,
      logline: "A cop stops kids “driving” a rickshaw, triggering media drama. It’s revealed their father’s a student — and IndiGo’s 25% student discount suddenly makes everyone a student again.",
      format: "Commercial 65-90 seconds",
      pdfUrl: "/Ads/Indigo — Auto wale ka baap bana IAS.pdf",

    },
    {
      id: 5,
      title: "Playback at the Wrong Time",
      category: "Paytm",
      pages: 4,
      year: 67,
      logline: "A grieving family mourns quietly until the younger brother reveals he’s listening to Paytm Playback — a gentle rap of monthly expenses that brings a small, human smile.",
      format: "Paytm Playback 90-110 seconds",
                pdfUrl: "/Ads/Paytm Playback — Playback at the Wrong Time (1).pdf",

    },
    {
      id: 6,
      title: "Playback at the Wrong Time",
      category: "Paytm",
      pages: 3,
      year: 68,
      logline: "A perfect Bollywood romance shatters when the heroine kisses a singer onstage. Heartbroken, the hero raps his Paytm Playback expenses — turning breakup pain into comic financial justice.",
      format: "Paytm Playback 80 seconds",
      pdfUrl: "/Ads/Paytm/Paytm Playback — Playback at the Wrong Time.pdf",

    },
    {
      id: 7,
      title: "Delivery Partners – Sheher Ki Dhadkan",
      category: "Quick Commerce",
      pages: 5,
      year: 62,
      logline: "A poetic documentary follows unseen delivery partners moving through the city—from dawn to midnight—quietly connecting homes, saving time, carrying comfort, and proving they’re the true heartbeat of the city.",
      format: "Documentary Voice 90-110 seconds",
                pdfUrl: "/Ads/Delivery Partners – Sheher Ki Dhadkan.pdf",

    },
    {
      id: 8,
      title: "Der Hone Se Pehle",
      category: "Paytm",
      pages: 5,
      year: 59,
      logline: "A soldier’s family lives in silent uncertainty until tragedy strikes. The film asks: why wait? With Paytm’s dignified support, families gain security and hope — before it’s too late.",
      format: "Commercial 90–110 seconds",
      pdfUrl: "/Ads/Paytm/Paytm - Der Hone Se Pehle.pdf",

    },
    {
      id: 9,
      title: "PARO AUR LAMBI GARDAN KI DASTAAN",
      category: "District",
      pages: 5,
      year: 52,
      logline: "A Bengali bride’s neck stretches absurdly long after chasing “masala drama,” ruining wedding moments—until a comic reveal says she just needed to book drama tickets on the app instead.",
      format: "Commercial 40–45 seconds",
      pdfUrl: "/Ads/District - Paro Aur Lambi Gardan Ki Dastaan.pdf",

    },
    {
      id: 10,
      title: "Ajay X Ajay X Ajay X Ajay",
      category: "Meesho",
      pages: 4,
      year: 53,
      logline: "Multiple hilarious versions of Ajay Devgan appear across wild Bollywood-style scenarios, stunning the crowd—until it’s revealed they’re all “Meesho Ajays,” symbolizing stylish, budget-friendly fashion for everyone.",
      format: "Commercial 40–45 seconds",
                pdfUrl: "/Ads/Meesho - AJAY × AJAY × AJAY × AJAY.pdf",

    },
    {
      id: 11,
      title: "Chosen",
      category: "Durex",
      pages: 3,
      year: 56,
      logline: "Bullied for being “found” as a baby, a boy calmly replies he was chosen—turning shame into pride. Message: unplanned creates rumours, planned creates confidence.",
      format: "Commercial 40–45 seconds",
                pdfUrl: "/Ads/Durex- The Night That Decides.pdf",

    },
    {
      id: 12,
      title: "Paytm karo - Bharosa khud ho jayega",
      category: "Paytm",
      pages: 4,
      year: 58,
      logline: "A panicked student secretly buys fake documents, begging for “trust.” A calm cop says, “Paytm karo.” The digital trail exposes both—showing real trust comes with transparency.",
      format: "Paytm karo 45–60 seconds",
      pdfUrl: "/Ads/Paytm/Paytm karo - Bharosa khud ho jayega.pdf",

    },
    {
      id: 13,
      title: "Deliver the Grind",
      category: "Delhivery",
      pages: 6,
      year: 60,
      logline: "A defeated wrestler and a burdened worker quietly battle life’s weight — until shared courage reignites their drive. Delhivery celebrates grit, resilience, and moving forward despite every delay.",
      format: "Commercial 60–75 seconds",
                pdfUrl: "/Ads/Delhivery - Deliver the Grind.pdf",

    },
    {
      id: 14,
      title: "One Party. One Lesson",
      category: "Paytm",
      pages: 3,
      year: 51,
      logline: "A carefree student blows ₹14,000 at a party—then learns that’s his father’s staff’s monthly salary. The shock lands softly: Paytm Spend Summary helps you understand what money really means.",
      format: "Paytm karo 40–45 seconds",
      pdfUrl: "/Ads/Paytm/Paytm - One Party. One Lesson .pdf",

    },
    {
      id: 15,
      title: "One Night",
      category: "Durex",
      pages: 4,
      year: 57,
      logline: "A village couple’s “one more child” turns nightly chaos and daily burden. With gentle humour, the film reminds: children are blessings — but the best ones are planned.",
      format: "Commercial 40–45 seconds",
                pdfUrl: "/Ads/Durex- The Night That Decides.pdf",

    },
    {
      id: 16,
      title: "Paytm × Mumbai Police",
      category: "Paytm",
      pages: 4,
      year: 50,
      logline: "Women facing street harassment in Mumbai flip the script: they ask for numbers, send Paytm requests, and empty balances expose creeps—turning tech into instant empowerment.",
      format: "Paytm karo 40–45 seconds",
      pdfUrl: "/Ads/Paytm/Paytm × Mumbai Police .pdf",

    },
    {
      id: 17,
      title: "Paytm × New Delhi Police",
      category: "Paytm",
      pages: 5,
      year: 29,
      logline: "Three Delhi women face harassment while simply travelling. Lady police officers step in instantly — and with Paytm, the women continue their day safely, confidently, without needing anyone’s “help.”",
      format: "Paytm karo 40–45 seconds",
      pdfUrl: "/Ads/Paytm/Paytm × New Delhi Police .pdf",

    },
    {
      id: 18,
      title: "Cadbury 5 Star",
      category: "Cadbury",
      pages: 38,
      year: 3,
      logline: "In chaotic Bihar traffic, a grandstanding politician joins kids’ hide-and-seek—only to be crowned “chor.” The universe sighs: sometimes, just do nothing. Cue 5 Star’s lazy, iconic punchline.",
      format: "Commercial",
                pdfUrl: "/Ads/Cadbury 5 Star.pdf",

    },
    {
      id: 19,
      title: "Maai… ye Bappu kab marenge",
      category: "Physics Wallah",
      pages: 5,
      year: 36,
      logline: "In a storm-hit slum, a hungry child wishes his struggling father would die—so aid might come. Physics Wallah arrives with dignity and hope: affordable education for every child.",
      format: "Commercial 55 seconds",
      pdfUrl: "/Ads/Physic Wallah.pdf",

    },
    {
      id: 20,
      title: "Bas aise hi confident rehna",
      category: "Physics Wallah",
      pages: 5,
      year: 37,
      logline: "A scarred teenage girl survives trains, crowds, and labour — yet studies with relentless hope. Physics Wallah steps in with scholarships, saying: stay confident. Education must be affordable for every child.",
      format: "Commercial 55 seconds",
      pdfUrl: "/Ads/Physic Wallah.pdf",

    },
    {
      id: 21,
      title: "Rakshabandhan Special - A",
      category: "Quick Commerce",
      pages: 4,
      year: 26,
      logline: "A late-night worker is harassed—until a silent delivery rider shields her and ensures she gets home safe. Missing his own sister, he asks her to tie him a rakhi.",
      format: "Commercial 90 seconds",
                pdfUrl: "/Ads/Rakshabandhan Special - Quick Commerce.pdf",

    },
    {
      id: 22,
      title: "Rakshabandhan Special - B",
      category: "Quick Commerce",
      pages: 5,
      year: 25,
      logline: "A busy city’s women silently protect and care for others — yet rarely receive a rakhi themselves. In a poetic twist, a delivery girl ties one back, honouring every unseen protector.",
      format: "Commercial 90 seconds",
                pdfUrl: "/Ads/Rakshabandhan Special - Quick Commerce.pdf",

    },
    {
      id: 23,
      title: "Laapataa Ladies",
      category: "Paytm",
      pages: 3,
      year: 15,
      logline: "An old tea-stall lady receives ₹50,000 from her son via Paytm, shares sweets with strangers, and finally tastes a little happiness herself — love shown, not promised.",
      format: "Influencer targeted",
      pdfUrl: "/Ads/Paytm/Paytm - “Laapataa Ladies” - short .pdf",

    },
    {
      id: 24,
      title: "Paytm karo - Gold rewards",
      category: "Paytm",
      pages: 3,
      year: 28,
      logline: "A sleepy, heat-struck police station sparks to life when a chai boy reveals Paytm’s gold rewards. Suddenly everyone’s happily transferring money—earning gold on every UPI payment.",
      format: "Paytm karo",
      pdfUrl: "/Ads/Paytm/Paytm - “Paytm karo .pdf",
    },
    {
      id: 25,
      title: "Kuch karna hai to paytm karo",
      category: "Paytm",
      pages: 4,
      year: 29,
      logline: "A confused man keeps asking, “Mujhe karna kya tha?” Everywhere he goes, silent tuxedo strangers stare back — until one calmly answers: stop overthinking. Just Paytm karo.",
      format: "Paytm karo 40–45 seconds",
      pdfUrl: "/Ads/Paytm/Paytm - “Kuch karna hai to paytm karo” .pdf",

    },
    {
      id: 26,
      title: "Paytm karo - diwali special",
      category: "Paytm",
      pages: 4,
      year: 13,
      logline: "Boys recklessly burst crackers, scaring a child and risking harm—until three girls step in, stop the chaos, and redirect energy toward doing real good: “Kuch karna hai, to Paytm karo.”",
      format: "Influencer targeted",
      pdfUrl: "/Ads/Paytm/Paytm - “Paytm karo - diwali special” .pdf",

    },
    {
      id: 27,
      title: "Face Like You... Cheee!",
      category: "Paytm",
      pages: 5,
      year: 18,
      logline: "A retro-serial loser constantly hears, “Face like you… chee!” Rejected and robbed chasing cash, a comic divine voice reminds him: stop drama—go digital. Kuch karna hai, to Paytm karo.",
      format: "Paytm karo 40–45 seconds",
      pdfUrl: "/Ads/Paytm/Paytm - Face Like You... Cheee! .pdf",

    },
    {
      id: 28,
      title: "Tharo Paytm PostPay Time",
      category: "Paytm",
      pages: 3,
      year: 27,
      logline: "In a hot Rajasthani summer, villagers watch confident Kamla casually pay by Paytm. Shock turns to wonder, as Amitabh Bachchan declares: spend today, pay later—Paytm Postpaid empowers everyday life.",
      format: "Paytm karo 2 min 30 sec",
      pdfUrl: "/Ads/Paytm/Paytm - Tharo Paytm PostPay Time .pdf",

    },
    {
      id: 29,
      title: "Paytm karo negotiate nahi!",
      category: "Paytm",
      pages: 5,
      year: 29,
      logline: "A chaotic mandi sells “finance like sabji.” A playful Paytm seller offers zero-fee payments and rewards, ending with everyone proudly declaring the obvious choice—“Paytm karo, negotiate nahi!”",
      format: "Paytm karo 40–45 seconds",
      pdfUrl: "/Ads/Paytm/Paytm - “Paytm karo negotiate nahi!”.pdf",

    },
  ]

  const categories = ["All", ...new Set(screenplays.map((s) => s.category))]

  const filtered = useMemo(() => {
    if (activeFilter === "All") return screenplays
    return screenplays.filter((s) => s.category === activeFilter)
  }, [activeFilter])

  if (selectedScreenplay) {
    return <ScreenplayViewer screenplay={selectedScreenplay} onBack={() => setSelectedScreenplay(null)} />
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Screenplay Library</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional screenplays that have powered award-winning campaigns and brand stories across industries.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 font-medium rounded transition-all duration-200 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:border-primary border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Screenplay Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((screenplay) => (
            <button
              key={screenplay.id}
              onClick={() => setSelectedScreenplay(screenplay)}
              className="text-left group p-6 border border-border hover:border-accent bg-background hover:bg-secondary transition-all duration-300 rounded-lg"
            >
              {/* Header with format */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors line-clamp-2">
                    {screenplay.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{screenplay.category}</p>
                </div>
                <span className="ml-2 inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded flex-shrink-0">
                  {screenplay.format}
                </span>
              </div>

              {/* Logline */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:line-clamp-none">
                {screenplay.logline}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{screenplay.pages} pages</span>
                  <span className="text-xs">{screenplay.year}</span>
                </div>
                <span className="text-accent font-semibold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
