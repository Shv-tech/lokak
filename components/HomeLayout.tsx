"use client";
import { useState } from "react";
import MediaBackground from "@/components/background/MediaBackground";
import Button from "@/components/ui/Button";
import SplashScreen from "@/components/SplashScreen";
import AboutSection from "@/components/sections/About";
import WhySection from "@/components/sections/Why";
import ByNumbersSection from "@/components/sections/ByNumbers";
import FeaturedTracksSection from "@/components/sections/FeaturedTracks";
import CTAJoinSection from "@/components/sections/CTAJoin";

export default function HomeLayout() {
  const [showSplash, setShowSplash] = useState(true);
  const [startNavbarAnimation, setStartNavbarAnimation] = useState(false);

  const handleSplashComplete = () => {
    setTimeout(() => {
      setStartNavbarAnimation(true);
      setTimeout(() => setShowSplash(false), 100);
    }, 500);
  };

  return (
    <main>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <MediaBackground
        videoSrc="/media/hero.mp4"
        imageSrc="/media/hero-fallback.jpg"
        poster="/media/hero-fallback.jpg"
        height="100svh"
        overlay
        fixedImage
        className=""
        after={
          <>
            <AboutSection />
            <WhySection />
            <ByNumbersSection />
            <FeaturedTracksSection />
            <CTAJoinSection />
          </>
        }
        startAnimation={startNavbarAnimation}
      >
        <div className="container-x">
          <p className="kicker">New Delhi • Q4 2026 • Bharat Mandapam</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">
            Where AI Meets Humanity&apos;s Future
          </h1>
          <p className="mt-5 text-lg md:text-xl max-w-3xl text-neutral-200">
            Lokakṣema 2026: The Global AI Well-being Summit. Convening world leaders, researchers, and
            innovators to ensure artificial intelligence serves the welfare of all.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/register">Register for Summit</Button>
            <Button href="/sponsorship" data-variant="outline">
              Become a Sponsor
            </Button>
            <Button href="/hackathon" data-variant="outline">
              Join the Hackathon
            </Button>
          </div>
        </div>
      </MediaBackground>
    </main>
  );
}
