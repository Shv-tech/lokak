"use client";
import { useRef, useEffect, useState } from "react";
import { ReactNode } from "react";

interface StunningScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  effect?: "slideUp" | "scaleIn" | "slideRight" | "slideLeft" | "flipIn" | "blurIn" | "float";
}

export default function StunningScroll({
  children,
  className = "",
  delay = 0,
  effect = "slideUp",
}: StunningScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -80px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const effectMap = {
    slideUp: "opacity-0 translate-y-10 group-animate-slide-up",
    scaleIn: "opacity-0 scale-75 group-animate-scale-in",
    slideRight: "animate-slide-right",
    slideLeft: "animate-slide-left",
    flipIn: "animate-flip-in",
    blurIn: "animate-blur-in",
    float: "animate-float",
  };

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible
          ? `opacity-100 translate-y-0 scale-100`
          : effectMap[effect]
      } transition-all duration-700 ease-out`}
    >
      {children}
    </div>
  );
}
