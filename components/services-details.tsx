"use client";

import { useEffect, useRef } from "react";

export function ServicesDetails() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Screenwriting",
      description:
        "Crafting compelling narratives that captivate audiences and tell your brand story with depth and authenticity.",
      details: [
        "Original screenplay development tailored to your brand voice",
        "Character development and emotional arcs that resonate",
        "Dialogue refinement for maximum impact",
        "Structural guidance following proven narrative frameworks",
        "Multiple revision rounds until perfection",
        "Final screenplay package with production notes",
      ],
      highlight:
        "We develop screenplays that become the foundation of all your creative campaigns.",
    },
    {
      id: 2,
      title: "Creative Direction",
      description:
        "Visionary guidance that transforms written words into stunning visual experiences with cinematic precision.",
      details: [
        "Visual conceptualization and mood board creation",
        "Color grading and cinematography direction",
        "Actor direction and performance coaching",
        "Shot composition and camera movement planning",
        "Visual effects and animation direction",
        "Post-production creative oversight",
      ],
      highlight:
        "Every frame is designed to evoke emotion and drive your message home.",
    },
    {
      id: 3,
      title: "Production",
      description:
        "Full-scale production management bringing your screenplay to life with professional crew and state-of-the-art equipment.",
      details: [
        "Pre-production planning and scheduling",
        "Location scouting and management",
        "Casting and talent coordination",
        "On-set direction and management",
        "Technical crew coordination (cinematography, sound, lighting)",
        "Dailies review and quality control",
      ],
      highlight:
        "We handle every logistical detail so your vision comes to life flawlessly.",
    },
    {
      id: 4,
      title: "Consultation",
      description:
        "Strategic guidance for brands looking to develop or refine their advertising storytelling approach.",
      details: [
        "Brand narrative strategy and positioning",
        "Campaign concept development and validation",
        "Audience research and insights analysis",
        "Competitive landscape analysis",
        "Media strategy and distribution planning",
        "Performance metrics and success measurement",
      ],
      highlight:
        "We partner with you to develop a long-term storytelling strategy that drives results.",
    },
    {
      id: 5,
      title: "Graphic Designing",
      description:
        "Designing visually striking assets that elevate brand perception and communicate ideas instantly.",
      details: [
        "Brand identity systems including logos, color palettes, and typography",
        "Campaign creatives for digital, print, and outdoor media",
        "Social media visuals optimized for engagement and reach",
        "Layout and composition guided by visual hierarchy principles",
        "Design systems that ensure consistency across platforms",
        "Multiple iterations with pixel-perfect attention to detail",
      ],
      highlight:
        "We design visuals that don’t just look good — they reinforce your brand story at every touchpoint.",
    },
    {
      id: 6,
      title: "Video Editing",
      description:
        "Transforming raw footage into cinematic stories that hold attention and drive emotion.",
      details: [
        "Narrative-driven edits aligned with campaign objectives",
        "Seamless pacing, transitions, and visual flow",
        "Color grading for a polished, cinematic look",
        "Sound design and audio balancing for immersive impact",
        "Platform-specific cuts for ads, reels, and long-form content",
        "Final exports optimized for quality and performance",
      ],
      highlight:
        "We edit videos with storytelling at the core — every frame serves a purpose.",
    },
    {
      id: 7,
      title: "Content Writing",
      description:
        "Writing sharp, strategic content that speaks your brand’s language and drives action.",
      details: [
        "Brand messaging frameworks and tone-of-voice definition",
        "Campaign copy for ads, films, and digital platforms",
        "Website and landing page content with clear narrative flow",
        "Social media captions crafted for clarity and engagement",
        "Scriptwriting support for videos and promotional films",
        "Iterative refinement to align with brand goals",
      ],
      highlight:
        "We write content that connects, converts, and stays true to your brand voice.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold mb-16">
          What We Deliver
        </h2>

        <div ref={cardsRef} className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-12 border-b border-border last:border-b-0 group ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-last" : ""}>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-8">
                  <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-widest">
                    Key Deliverables
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-primary/5 border border-accent/20 rounded-lg">
                  <p className="text-sm font-semibold text-foreground italic">
                    {service.highlight}
                  </p>
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? "md:order-first" : ""}>
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/15 rounded-lg border border-border group-hover:border-accent transition-colors flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">
                        {String(service.id).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {service.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
