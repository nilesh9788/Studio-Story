"use client"

import { useEffect, useRef } from "react"

export function ApproachSection() {
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
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (cardsRef.current) observer.observe(cardsRef.current)

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (cardsRef.current) observer.unobserve(cardsRef.current)
    }
  }, [])

  const steps = [
    { number: "01", title: "Discovery & Story", description: "We dive deep into your brand narrative." },
    {
      number: "02",
      title: "Screenplay Development",
      description: "Crafting compelling screenplays with professional formatting.",
    },
    {
      number: "03",
      title: "Creative Direction",
      description: "Guiding every creative decision with precision and purpose.",
    },
    {
      number: "04",
      title: "Production & Polish",
      description: "Delivering broadcast-ready content that brings your story to life.",
    },
  ]

  return (
    <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Our Approach
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-8 bg-background border border-border hover:border-accent transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl font-bold text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
