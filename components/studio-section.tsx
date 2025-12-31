"use client";

import { useEffect, useRef, useState } from "react";

const carousel = [
  {
    company: "Paytm",
    title: "Ruk Kyu Gaye!? Paytm Karo — Vision 96%.",
    description:
      "Through the years, the legendary line “Paytm Karo” didn’t receive the marketing consistency it truly deserved. Paytm currently sits at 6.9% UPI market share, and I believe a bold, behavior-shaping campaign could take it all the way to 96% — not just in numbers, but in mindshare, usage culture, and everyday language.",
    link: "https://www.linkedin.com/posts/nileshagrawal9788_ruk-kyu-gaye-paytm-karo-activity-7398129406277459969-amW1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpsKYYBBnNp6zVXuHW0SuO2bK2KNO9YdCU",
  },
  {
    company: "Delhivery",
    title: "Deliver the Grind",
    description:
      "To celebrate sport as a mindset, not just a profession. This isn’t a logistics film. It’s a human grit narrative. A story about people who keep moving even when life weighs them down. About ambition that pauses—but never disappears. About restarting, not loudly, but with resolve.",
    link: "https://www.linkedin.com/posts/nileshagrawal9788_delhivery-deliver-the-grind-activity-7409206702748684289-yJiQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpsKYYBBnNp6zVXuHW0SuO2bK2KNO9YdCU",
  },
  {
    company: "Paytm Playback",
    title: "Jab Hisaab Gaane Laga",
    description:
      "When Numbers Stop Being Silent — They Start Rapping. Paytm Playback is one of those rare fintech ideas that doesn’t just show data — it performs it.",
    link: "https://www.linkedin.com/posts/nileshagrawal9788_paytm-playback-jab-hisaab-gaane-laga-activity-7411671687227826176-ig89?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpsKYYBBnNp6zVXuHW0SuO2bK2KNO9YdCU",
  },
];

export function StudioSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [index, setIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedDescription, setTypedDescription] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const title = carousel[index].title;
    const description = carousel[index].description;
    const speed = isDeleting ? 35 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedTitle.length < title.length) {
          setTypedTitle(title.slice(0, typedTitle.length + 1));
        } else if (typedDescription.length < description.length) {
          setTypedDescription(
            description.slice(0, typedDescription.length + 1)
          );
        } else {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        if (typedDescription.length > 0) {
          setTypedDescription(
            description.slice(0, typedDescription.length - 1)
          );
        } else if (typedTitle.length > 0) {
          setTypedTitle(title.slice(0, typedTitle.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % carousel.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedTitle, typedDescription, isDeleting, index]);

  return (
    <section
      id="studio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0"
        >
          <div className="space-y-8">
            <div>
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 leading-tight">
                Where Ideas Meet Craft
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe the best advertising starts with a great story. Our
              team of screenwriters, creative directors, and strategists
              transform brand visions into cinematic experiences.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                <div className="w-1 bg-accent" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Screenplay-First Approach
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Every campaign begins with a carefully crafted screenplay.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group hover:translate-x-1 transition-transform">
                <div className="w-1 bg-accent" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Cinematic Storytelling
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Precision in pacing, emotion, and visual language.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 to-primary/40 blur-2xl opacity-40" />

            <div className="relative rounded-2xl border border-border bg-background/60 backdrop-blur-xl p-10 shadow-2xl min-h-[260px] flex flex-col justify-center">
              <span className="text-sm tracking-widest uppercase text-accent mb-4">
                {carousel[index].company}
              </span>

              <h3 className="text-3xl sm:text-4xl font-bold leading-tight text-foreground">
                {typedTitle}
                <span className="inline-block w-[3px] h-[1em] bg-current ml-1 animate-pulse align-middle" />
              </h3>

              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg">
                {typedDescription}
              </p>

              <a
                href={carousel[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-accent hover:gap-3 transition-all"
              >
                View Case Study
                <span aria-hidden>→</span>
              </a>

              <div className="mt-6 h-px w-24 bg-accent/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
