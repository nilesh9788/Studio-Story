"use client"

import { useEffect, useRef } from "react"

export function ScreenplayLibraryPreview() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
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
      { threshold: 0.2 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (descRef.current) observer.observe(descRef.current)
    if (cardsRef.current) observer.observe(cardsRef.current)

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (descRef.current) observer.unobserve(descRef.current)
      if (cardsRef.current) observer.unobserve(cardsRef.current)
    }
  }, [])

  const screenplays = [
    {
      id: 1,
      title: "Deliver the Grind",
      category: "Delhivery",
      pages: 6,
      year: 60
    },
    {
      id: 2,
      title: "Maai… ye Bappu kab marenge",
      category: "Physics Wallah",
      pages: 5,
      year: 36
    },
    {
      id: 3,
      title: "Playback at the Wrong Time",
      category: "Paytm",
      pages: 3,
      year: 68
     },
     {
      id: 4,
      title: "Error 404",
      category: "Astrotalk",
      pages: 3,
      year: 72
    },
    {
      id: 5,
      title: "Paytm × Mumbai Police",
      category: "Paytm",
      pages: 4,
      year: 50
    },
    {
      id: 6,
      title: "Paytm × New Delhi Police",
      category: "Paytm",
      pages: 5,
      year: 29
    },
  ]

  return (
    <section
  id="screenplays"
  className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border"
>
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12 sm:mb-16">
      <h2
        ref={titleRef}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
      >
        Screenplay Library
      </h2>
      <p
        ref={descRef}
        className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
      >
        Explore our collection of professionally crafted screenplays that have powered brand campaigns.
      </p>
    </div>

    <div
      ref={cardsRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12"
    >
      {screenplays.map((screenplay) => (
        <div
          key={screenplay.id}
          className="group p-5 sm:p-6 border border-border bg-background
                     transition-all duration-300 cursor-pointer
                     hover:border-accent hover:bg-secondary hover:shadow-lg
                     active:scale-[0.98]"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4 gap-3">
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-semibold truncate group-hover:text-accent transition-colors">
                {screenplay.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {screenplay.category}
              </p>
            </div>

            <div className="text-right shrink-0">
              <p className="text-xl sm:text-2xl font-bold text-accent leading-none">
                {screenplay.pages}
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                pages
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-xs sm:text-sm text-muted-foreground">
              {screenplay.year}
            </span>

            <span className="text-accent font-semibold text-xs sm:text-sm">
              View →
            </span>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center">
      <a
        href="/screenplays"
        className="inline-block px-6 sm:px-8 py-3 border-2 border-primary
                   text-primary font-semibold
                   hover:bg-primary hover:text-primary-foreground
                   transition-all duration-200 hover:scale-105"
      >
        Explore Full Library
      </a>
    </div>
  </div>
</section>

  )
}
