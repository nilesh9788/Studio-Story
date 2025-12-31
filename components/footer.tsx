"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export function Footer() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.2 }
    )

    if (contentRef.current) observer.observe(contentRef.current)

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current)
    }
  }, [])

  const footerLinks = {
    Company: [
      { label: "About", href: "/#studio" },
      { label: "Team", href: "/team" },
    ],
    Services: [
      { label: "Skillspoon", href: "#" },
      { label: "Skillspoon Restro", href: "https://skillspoon-restro-woad.vercel.app/" },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div
        ref={contentRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">Studio Story</p>
            <p className="text-primary-foreground/70 text-sm">
              Screenplay-First Advertising Agency
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/nilesh.agrawal_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/nileshagrawal9788/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Samaadhaan97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Twitter
            </a>
          </div>

          <p className="text-primary-foreground/70 text-sm">
            © 2025 Studio Story. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
