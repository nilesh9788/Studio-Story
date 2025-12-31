"use client"

import { useEffect, useRef, useState } from "react"
import { Download, ChevronLeft, ChevronRight } from "lucide-react"

export function CaseStudiesSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.15 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (cardsRef.current) observer.observe(cardsRef.current)

    return () => observer.disconnect()
  }, [])

  const cases = [
    {
      id: 1,
      title: "Paytm Care-Chain: Every Payment, A Chance to Help",
      description:
        "Paytm Care-Chain embeds real-time micro-donations into every UPI payment, using contextual pop-ups to support verified healthcare, education, food, and shelter needs—turning everyday transactions into a transparent, large-scale social-impact network.",
      results: "15.2k views • 40% engagement",
      pdf: "/Paytm Care-Chain_ Every Payment, A Chance to Help.pdf",
      images: [
        "/Group 40254.png",
        "/Group 40255.png",
        "/Group 40256.png",
      ],
    },
    {
      id: 2,
      title: "Roots & Routes",
      description:
        "Roots & Routes is a nostalgia-driven New Year experience that reconnects Gen Z with childhood memories through immersive zones, emotional storytelling, and reflective celebration—honoring where we come from while inspiring where we’re going.",
      results: "12.8k views • 35% engagement",
      pdf: "/_ROOTS & ROUTES_.pdf",
      images: [
        "/Group 40257.png",
        "/Group 40258.png",
        "/Group 40259.png",
      ],
    },
    {
      id: 3,
      title: "Dynamic Digital Address for Informal Vendors using UPI Soundbox",
      description:
        "A UPI soundbox becomes a portable digital address for mobile vendors—enabling verified identity, live location presence, discovery, and trust without paperwork—bringing India’s informal economy into the digital ecosystem.",
      results: "19.1k views • 52% engagement",
      pdf: "/Dynamic Digital Address for Informal Vendors.pdf",
      images: [
        "/Group 40260.png",
        "/Group 40261.png",
        "/Group 40262.png",
      ],
    },
  ]

  return (
    <section
      id="cases"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary via-secondary/60 to-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-6xl font-bold mb-24 opacity-0"
        >
          Brand Campaigns
        </h2>

        <div ref={cardsRef} className="space-y-32 opacity-0">
          {cases.map((caseStudy, index) => (
            <div
              key={caseStudy.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
            >
              {/* TEXT */}
              <div className={index % 2 === 1 ? "lg:order-last" : ""}>
                <span className="inline-block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                  Case Study {caseStudy.id}
                </span>
                <h3 className="text-4xl font-bold text-accent leading-tight">
                  {caseStudy.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mt-6 max-w-xl">
                  {caseStudy.description}
                </p>

                <p className="mt-8 text-accent font-semibold">
                  {caseStudy.results}
                </p>

                <a
                  href={caseStudy.pdf}
                  download
                  className="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-foreground border border-border rounded-full px-8 py-4 hover:border-accent hover:text-accent transition-all"
                >
                  <Download size={16} />
                  Download Detail Documentation
                </a>
              </div>

              {/* AUTO CAROUSEL */}
              <AutoCarousel images={caseStudy.images} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AutoCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [])

  const startAuto = () => {
    stopAuto()
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3500)
  }

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const next = () => {
    stopAuto()
    setIndex((i) => (i + 1) % images.length)
    startAuto()
  }

  const prev = () => {
    stopAuto()
    setIndex((i) => (i - 1 + images.length) % images.length)
    startAuto()
  }

  return (
    <div
      className="relative w-full flex justify-center"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      <div className="relative w-[360px] sm:w-[420px] h-[560px]">
        {images.map((img, i) => {
          const offset = i - index
          const isActive = offset === 0

          return (
            <img
              key={img}
              src={img}
              alt="Case visual"
              className={`absolute inset-0 w-full h-full object-cover rounded-[2rem] border border-border shadow-2xl transition-all duration-700 ease-out
                ${isActive ? "z-20 scale-100 opacity-100" : "z-10 scale-95 opacity-30"}
                ${offset === -1 ? "-translate-x-14 rotate-[-2deg]" : ""}
                ${offset === 1 ? "translate-x-14 rotate-[2deg]" : ""}
              `}
            />
          )
        })}

        {/* CINEMATIC GLOW */}
        <div className="absolute -inset-10 bg-accent/20 blur-[120px] rounded-full -z-10" />
      </div>

      {/* CONTROLS */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur border border-border shadow hover:scale-110 transition"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/80 backdrop-blur border border-border shadow hover:scale-110 transition"
      >
        <ChevronRight size={18} />
      </button>

      {/* PROGRESS */}
      <div className="absolute -bottom-10 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-[3px] w-8 rounded-full transition-all ${
              i === index ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
