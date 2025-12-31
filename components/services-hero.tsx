"use client"

import { useEffect, useRef } from "react"

export function ServicesHero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (titleRef.current) titleRef.current.classList.add("animate-fade-in-up")
      if (descRef.current) descRef.current.classList.add("animate-fade-in-up")
    }, 100)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      <div className="absolute top-20 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center space-y-8">
          <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
            Our <span className="text-accent">Services</span>
          </h1>

          <p ref={descRef} className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From screenplay development to final production, we provide comprehensive services to bring your brand story
            to life with cinematic excellence.
          </p>
        </div>
      </div>
    </section>
  )
}
