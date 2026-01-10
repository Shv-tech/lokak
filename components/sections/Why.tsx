"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from([headingRef.current, descriptionRef.current], {
        opacity: 0,
        x: 30,
        duration: 0.6,
        stagger: 0.1,
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
        <h2 ref={headingRef} className="mb-4">
          India as the Neutral Global Convener
        </h2>
        <p ref={descriptionRef} className="mb-6">
          Unlike bilateral summits or bloc-based conferences, Lokakṣema positions India as a
          trusted multilateral convener. We bring together stakeholders from the Global North
          and South for balanced, inclusive dialogue that transcends geopolitical divisions.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Innovation",
              d: "Frontier research, reproducible methodologies, and deployable pilots that transform theoretical breakthroughs into real-world solutions.",
            },
            {
              t: "Governance",
              d: "Policy frameworks that balance technological advancement with ethical safeguards, ensuring AI development serves humanity responsibly.",
            },
            {
              t: "Impact",
              d: "Real-world solutions reaching communities most in need, with measurable outcomes and sustainable deployment models.",
            },
          ].map((x, i) => (
            <div
              key={x.t}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="rounded-xl bg-black/40 p-6 border border-white/10 cursor-pointer group"
              style={{ willChange: "transform, opacity" }}
            >
              <h3 className="text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-neutral-300">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
