"use client"

import type React from "react"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const primaryBtnRef = useRef<HTMLAnchorElement>(null)
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null)
  const floatingShapesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Title animation - staggered text reveal
    if (titleRef.current) {
      setTimeout(() => {
        titleRef.current?.classList.add("animate-fade-in-up")
      }, 300)
    }

    // Description animation - appears after title
    if (descRef.current) {
      setTimeout(() => {
        descRef.current?.classList.add("animate-fade-in-up")
      }, 600)
    }

    // CTA buttons animation - final reveal
    if (ctaRef.current) {
      setTimeout(() => {
        ctaRef.current?.classList.add("animate-fade-in-up")
      }, 900)
    }

    // Scroll indicator animation
    // if (scrollIndicatorRef.current) {
    //   setTimeout(() => {
    //     scrollIndicatorRef.current?.classList.add("animate-fade-in-up")
    //   }, 1200)
    // }

    // const handleMouseMove = (e: MouseEvent) => {
    //   if (floatingShapesRef.current) {
    //     const shapes = floatingShapesRef.current.querySelectorAll("[data-parallax]")
    //     shapes.forEach((shape) => {
    //       const speed = Number.parseFloat(shape.getAttribute("data-parallax") || "0.05")
    //       const moveY = e.clientY * speed
    //       const moveX = e.clientX * speed * 0.3
    //       ;(shape as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`
    //     })
    //   }
    // }

    // const handleButtonHover = (e: MouseEvent, button: HTMLAnchorElement | null) => {
    //   if (!button) return
    //   const rect = button.getBoundingClientRect()
    //   const x = e.clientX - rect.left - rect.width / 2
    //   const y = e.clientY - rect.top - rect.height / 2

    //   button.style.setProperty("--mouse-x", `${x * 0.3}px`)
    //   button.style.setProperty("--mouse-y", `${y * 0.3}px`)
    // }

    // const handleButtonLeave = (button: HTMLAnchorElement | null) => {
    //   if (!button) return
    //   button.style.setProperty("--mouse-x", "0px")
    //   button.style.setProperty("--mouse-y", "0px")
    // }

    // const primaryBtn = primaryBtnRef.current
    // const secondaryBtn = secondaryBtnRef.current

    // if (primaryBtn) {
    //   primaryBtn.addEventListener("mousemove", (e) => handleButtonHover(e, primaryBtn))
    //   primaryBtn.addEventListener("mouseleave", () => handleButtonLeave(primaryBtn))
    // }

    // if (secondaryBtn) {
    //   secondaryBtn.addEventListener("mousemove", (e) => handleButtonHover(e, secondaryBtn))
    //   secondaryBtn.addEventListener("mouseleave", () => handleButtonLeave(secondaryBtn))
    // }

    // window.addEventListener("mousemove", handleMouseMove)
    // return () => {
    //   if (primaryBtn) {
    //     primaryBtn.removeEventListener("mousemove", (e) => handleButtonHover(e, primaryBtn))
    //     primaryBtn.removeEventListener("mouseleave", () => handleButtonLeave(primaryBtn))
    //   }
    //   if (secondaryBtn) {
    //     secondaryBtn.removeEventListener("mousemove", (e) => handleButtonHover(e, secondaryBtn))
    //     secondaryBtn.removeEventListener("mouseleave", () => handleButtonLeave(secondaryBtn))
    //   }
    //   window.removeEventListener("mousemove", handleMouseMove)
    // }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      <div ref={floatingShapesRef} className="absolute inset-0 pointer-events-none">
        {/* Dark animated circles - top right */}
        <div
          data-parallax="0.05"
          className="absolute top-20 right-0 w-80 h-80 bg-foreground/5 rounded-full blur-3xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        />

        {/* Dark animated circles - bottom left */}
        <div
          data-parallax="-0.03"
          className="absolute bottom-32 left-10 w-96 h-96 bg-foreground/3 rounded-full blur-3xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        />

        {/* Gold accent circle - center right */}
        <div
          data-parallax="0.08"
          className="absolute top-1/3 right-1/4 w-60 h-60 bg-accent/8 rounded-full blur-3xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        />

        {/* Dark accent element - left */}
        <div
          data-parallax="-0.04"
          className="absolute top-2/3 left-1/3 w-72 h-72 bg-foreground/4 rounded-full blur-3xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div
          className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-foreground/30 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-foreground/30 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        />

        <div
          className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-accent via-accent/50 to-transparent opacity-0 animate-fade-in"
          style={{ animationDelay: "1.4s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-px h-40 bg-gradient-to-t from-accent via-accent/50 to-transparent opacity-0 animate-fade-in"
          style={{ animationDelay: "1.6s" }}
        />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center space-y-8">
          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight opacity-0 text-balance"
          >
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Stories
            </span>{" "}
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              That
            </span>
            <br />
            <span
              className="text-accent relative inline-block opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              <span className="relative">
                Move
                <span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/50 opacity-0 animate-fade-in"
                  style={{ animationDelay: "1.1s" }}
                />
              </span>
            </span>{" "}
            <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              Audiences
            </span>
          </h1>

          <p
            ref={descRef}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed opacity-0 font-light hover:text-foreground transition-colors duration-500"
          >
            We craft compelling brand narratives through screenplay-driven advertising. Every word matters. Every frame
            tells a story.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 opacity-0">
            <a
              href="#screenplays"
              ref={primaryBtnRef}
              className="relative px-10 py-4 bg-primary text-primary-foreground font-semibold text-lg overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105 group cursor-pointer"
              style={
                {
                  transform: `translate(var(--mouse-x, 0), var(--mouse-y, 0))`,
                } as React.CSSProperties
              }
            >
              {/* Animated gradient background */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-accent via-transparent to-accent" />

              <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300 group-hover:tracking-wider">
                View Screenplays
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow transition-all duration-300 group-hover:w-3 group-hover:h-3 group-hover:shadow-lg group-hover:shadow-accent/50" />
              </span>

              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 animate-shimmer" />
            </a>

            <a
              href="#contact"
              ref={secondaryBtnRef}
              className="relative px-10 py-4 border-2 border-primary text-primary font-semibold text-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl group overflow-hidden cursor-pointer"
              style={
                {
                  transform: `translate(var(--mouse-x, 0), var(--mouse-y, 0))`,
                } as React.CSSProperties
              }
            >
              <span className="relative z-10 transition-all duration-300 group-hover:text-primary-foreground group-hover:tracking-wide">
                Let's Talk
              </span>

              {/* Animated background fill */}
              <span className="absolute inset-0 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out -z-10" />

              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-1 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <span className="absolute bottom-0 right-0 w-1 h-1 bg-accent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
            </a>
          </div>
        </div>

        {/* <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group hover:scale-110 transition-transform duration-300 cursor-pointer group"
        > */}
          <div className="flex flex-col items-center gap-3 group-hover:gap-4 transition-all duration-300">
            <div className="animate-bounce group-hover:animate-none">
              <svg
                className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Animated pulsing circles */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow group-hover:scale-150 transition-transform duration-300" />
              <div className="w-1 h-1 bg-accent/60 rounded-full animate-pulse-subtle group-hover:scale-125 transition-transform duration-300 delay-100" />
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow group-hover:scale-150 transition-transform duration-300 delay-200" />
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}
