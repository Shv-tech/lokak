"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <MediaBackground
        videoSrc="/media/hero.mp4"
        imageSrc="/media/hero-fallback.webp"
        poster="/media/hero-fallback.webp"
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
        <motion.div
          className="container-x"
          variants={containerVariants}
          initial="hidden"
          animate={!showSplash ? "visible" : "hidden"}
        >
          <motion.p variants={itemVariants} className="kicker">
            New Delhi • Q4 2026 • Bharat Mandapam
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl"
          >
            Where AI Meets Humanity&apos;s Future
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-lg md:text-xl max-w-3xl text-neutral-200"
          >
            Lokakṣema 2026: The Global AI Well-being Summit. Convening world leaders, researchers, and
            innovators to ensure artificial intelligence serves the welfare of all.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="/register">Register for Summit</Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="/sponsorship" data-variant="outline">
                Become a Sponsor
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button href="/hackathon" data-variant="outline">
                Join the Hackathon
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </MediaBackground>
    </main>
  );
}
