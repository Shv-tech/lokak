"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

interface MediaBackgroundProps {
  videoSrc: string;
  imageSrc: string;
  poster?: string;
  height?: string;
  overlay?: boolean;
  children?: ReactNode;
  after?: ReactNode;
  className?: string;
  switchRootMargin?: string;
  fixedImage?: boolean;
  startAnimation?: boolean;
  /** When false, Lotus3D will not be imported or rendered (saves client resources) */
  showLotus?: boolean;
}

export default function MediaBackground({
  videoSrc,
  imageSrc,
  poster = imageSrc,
  height = "100svh",
  overlay = true,
  children,
  after,
  className = "",
  switchRootMargin = "-50% 0px -50% 0px",
  fixedImage = true,
  startAnimation = false,
  showLotus = true,
}: MediaBackgroundProps) {
  const [showImageBg, setShowImageBg] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setShowImageBg(!entry.isIntersecting),
      { rootMargin: switchRootMargin, threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [switchRootMargin]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || prefersReducedMotion) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {}
    };
    tryPlay();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (startAnimation) {
      const el = sentinelRef.current;
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => setShowImageBg(!entry.isIntersecting),
        { rootMargin: switchRootMargin, threshold: 0 }
      );
      io.observe(el);
      return () => io.disconnect();
    }
  }, [startAnimation]);

  // Dynamically import Lotus3D only when requested. Placing dynamic inside the
  // component and guarded by `showLotus` prevents the module from being fetched
  // when we want to hide it entirely.
  const Lotus3D = showLotus
    ? (useMemo(() => dynamic(() => import("./Lotus3D"), { ssr: false }), []) as any)
    : null;

  return (
    <>
      <section className={`relative w-full overflow-hidden ${className}`} style={{ height }}>
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover z-20"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={poster}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        {prefersReducedMotion && (
          <Image
            src={poster}
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none object-cover"
          />
        )}

        {overlay && (
          <>
            <div className="absolute inset-0 overlay-top pointer-events-none" />
            <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 overlay-bottom pointer-events-none" />
          </>
        )}

        <div className="relative z-30 h-full flex items-center">{children}</div>
        <div ref={sentinelRef} className="absolute inset-x-0 bottom-0 h-1" />
      </section>

      <section
        className="relative"
        style={
          showImageBg
            ? {
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: fixedImage ? "fixed" : "scroll",
              }
            : undefined
        }
      >
        {overlay && <div className="absolute inset-x-0 -top-10 h-10 overlay-bottom pointer-events-none" />}

        {/* Lotus sits with the background image and is fixed so it doesn't move on scroll.
            Render it unconditionally so it doesn't flicker/disappear when the sentinel
            intersection state changes. It remains pointer-events-none and z-0. */}
        {showLotus && (
          <div className="fixed inset-x-0 bottom-0 flex items-end justify-center pointer-events-none z-0">
            <div className="relative -mb-6">
              {Lotus3D ? <Lotus3D /> : null}
            </div>
          </div>
        )}

        <div className="relative z-10">{after}</div>
      </section>
    </>
  );
}
