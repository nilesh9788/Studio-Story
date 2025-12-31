"use client"

import { useEffect, useRef } from "react"

export function ContactSection() {
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

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary border-t border-border"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Let’s Connect
        </h2>

        <p
          ref={descRef}
          className="text-lg text-muted-foreground mb-16"
        >
          Whether you want to build a powerful brand story or become part of our
          creative journey, choose how you’d like to connect.
        </p>

        {/* Connection Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Service Form */}
          <div className="relative rounded-2xl border border-border bg-background/70 backdrop-blur-xl p-10 shadow-xl text-left group hover:-translate-y-1 transition-transform">
            <span className="text-sm tracking-widest uppercase text-accent">
              For Brands
            </span>

            <h3 className="text-2xl font-bold mt-4">
              Start a Brand Campaign
            </h3>

            <p className="text-muted-foreground mt-4 leading-relaxed">
              Looking to create a cinematic brand film, campaign, or narrative?
              Share your vision, goals, and timelines through our service brief.
            </p>

            <a
              href="https://forms.gle/Kx2t4LRtfALAUF379"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Submit Campaign Brief →
            </a>
          </div>

          {/* Careers Form */}
          <div className="relative rounded-2xl border border-border bg-background/70 backdrop-blur-xl p-10 shadow-xl text-left group hover:-translate-y-1 transition-transform">
            <span className="text-sm tracking-widest uppercase text-accent">
              Careers
            </span>

            <h3 className="text-2xl font-bold mt-4">
              Join Our Creative Team
            </h3>

            <p className="text-muted-foreground mt-4 leading-relaxed">
              Writers, filmmakers, editors, strategists — if storytelling is your
              craft, we’d love to hear from you.
            </p>

            <a
              href="https://forms.gle/BYMHRYJxoAhVA4ZN8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 items-center justify-center px-8 py-4 border border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
            >
              Apply to Join →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
