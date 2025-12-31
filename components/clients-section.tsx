"use client"

import { useEffect, useRef } from "react"

export function ClientsSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)

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
    if (logosRef.current) observer.observe(logosRef.current)

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (logosRef.current) observer.unobserve(logosRef.current)
    }
  }, [])

  const clients = [
    { name: "Shree Bhog", slug: "shree-bhog" },
    { name: "Vision Technology", slug: "luxury-co" },
    { name: "Indian Institute of Information Technology Surat", slug: "https://iiitsurat.ac.in/" },
    { name: "RAIST 2026", slug: "https://raist2026.org/" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Trusted by Industry Leaders
        </h2>

        <div ref={logosRef} className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.slug}
              className="flex items-center justify-center p-6 border border-border hover:border-primary hover:bg-secondary transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
