"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function TeamMembers() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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
    if (founderRef.current) observer.observe(founderRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (founderRef.current) observer.unobserve(founderRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);

  const founder = {
    name: "Nilesh Agrawal",
    title: "Founder & Creative Director",
    phone: "+91 9508120493",
    email: "nilesh.skillspoon@gmail.com",
    bio: `A creative strategy studio dedicated to brand storytelling, narrative design, and screenplay-driven communication. The work lives at the intersection of advertising, cinema, and culture—where insight-led thinking meets emotionally resonant storytelling. The studio partners with brands to uncover authentic voice, shape compelling narratives, and translate bold ideas into scripts, campaigns, and content that truly connect with audiences. From positioning and brand architecture to long-form screenwriting and cinematic storytelling, the approach blends strategic clarity with human truth. Because brands don’t just need messages.They need meaning. And meaning is created through story.`,
    specialties: ["Screenplay Writing", "Creative Direction", "Brand Strategy"],
    image: "/founder.jpg",
  };

  // const team = [
  //   {
  //     id: 1,
  //     name: "Marcus Thompson",
  //     title: "Head of Production",
  //     bio: "An Emmy-nominated producer with extensive experience managing large-scale productions.",
  //     specialties: ["Production", "Logistics", "Team Leadership"],
  //     image: "MT",
  //   },
  // ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold mb-16">
          Leadership & Team
        </h2>

        {/* Founder Spotlight */}
        <div
          ref={founderRef}
          className="mb-20 bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent rounded-lg overflow-hidden group transition-shadow hover:shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Image */}
            <div className="relative h-[420px] md:h-auto p-6">
              <div
                className="
      relative w-full h-full overflow-hidden rounded-2xl
      border-2 border-accent/40
      transform transition-all duration-700 ease-out
      group-hover:-translate-y-2
      group-hover:shadow-2xl
      group-hover:border-accent
    "
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  priority
                  className="
        object-cover
        grayscale
        scale-100
        transition-all
        duration-700
        ease-out
        group-hover:grayscale-0
        group-hover:scale-110
      "
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2 p-10">
              <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-semibold tracking-widest uppercase rounded-full mb-4">
                Founder & Leader
              </div>

              <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">
                {founder.name}
              </h3>

              <p className="text-lg text-accent font-semibold mb-4">
                {founder.title}
              </p>

              {/* Contact */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm mb-6">
                <a
                  href={`tel:${founder.phone}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {founder.phone}
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {founder.email}
                </a>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {founder.bio}
              </p>

              <div className="flex flex-wrap gap-2">
                {founder.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        {/* <div>
          <h3 className="text-2xl font-bold mb-12">Core Team</h3>

          <div
            ref={teamRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member) => (
              <div
                key={member.id}
                className="p-8 bg-background border border-border rounded-lg group hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  {member.image}
                </div>

                <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h4>

                <p className="text-sm text-accent font-semibold mb-4">
                  {member.title}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-secondary border border-border rounded text-xs font-medium group-hover:border-accent transition-colors"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
