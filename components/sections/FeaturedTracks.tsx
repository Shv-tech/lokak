"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedTracksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headingRef.current, {
        opacity: 0,
        x: 30,
        duration: 0.6,
        ease: "power2.out",
      }).from(
        cardsRef.current,
        {
          opacity: 0,
          x: 30,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  return (
    <section className="section" ref={containerRef}>
      <div className="container-x">
        <h2 ref={headingRef} className="mb-6">
          Three Pathways to Responsible AI
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Technical & Research Deep Dive",
              description:
                "Advancing foundation models, MLOps, and reproducibility standards. Each session paired with open-source artifact releases to maximize global impact and accelerate research collaboration.",
            },
            {
              title: "Business Strategy & Investment",
              description:
                "Linking innovation to markets through documented case studies, investor roundtables, and structured deal rooms. Where commercial viability meets social responsibility.",
            },
            {
              title: "Policy, Ethics & Society",
              description:
                "Developing governance frameworks, procurement standards, and ethical principles that work across diverse regulatory environments and cultural contexts.",
            },
          ].map((track, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="rounded-xl bg-black/40 p-6 border border-white/10 cursor-pointer relative overflow-hidden group"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Animated background accent */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-purple-500/20 transition-all duration-300"
              />

              <h3
                className="text-lg font-semibold relative z-10"
              >
                {track.title}
              </h3>
              <p
                className="mt-2 text-neutral-300 relative z-10"
              >
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
