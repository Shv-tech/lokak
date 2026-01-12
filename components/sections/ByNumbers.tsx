"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS: Array<[string, string]> = [
  ["10,000+", "Global Participants"],
  ["30+", "Countries Represented"],
  ["1,000+", "Hackathon Teams"],
  ["$1M+", "Investment in Innovation"],
  ["50+", "Tier-1 Media Partners"],
];

export default function ByNumbers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
        x: -30,
        duration: 0.6,
        ease: "power2.out",
      }).from(
        itemsRef.current,
        {
          opacity: 0,
          x: -30,
          duration: 0.5,
          stagger: 0.08,
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
          Global Scale, Human Focus
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {STATS.map(([value, label], i) => (
            <div
              key={label}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="rounded-xl border border-white/10 bg-black/40 p-6 text-center cursor-pointer group"
              style={{ willChange: "transform, opacity" }}
            >
              <div
                className="text-3xl font-semibold group-hover:text-purple-400 transition-colors duration-300"
              >
                {value}
              </div>
              <div
                className="mt-2 text-sm text-neutral-300"
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

