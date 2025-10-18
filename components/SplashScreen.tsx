"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const MotionImage = motion(Image);
import SplashLogo from "./SplashLogo.png"; // local logo in same folder
const text = "lokaksema 2026";

export default function SplashScreen() {
  const [showText, setShowText] = useState(false);
  const [lettersOut, setLettersOut] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [hide, setHide] = useState(false);

  const logoSlow = 3.0;
  const logoQuick = 1.5;
  const logoAnimDuration = logoSlow + logoQuick;

  const logoControls = useAnimation();

  useEffect(() => {
    // timing config (tweak to taste)
    const inDelayPer = 0.02;
    const inDuration = 0.4;
    const holdAfterIn = 0.6;
    const outDelayPer = 0.03;
    const outDuration = 0.28;
    const logoDelayAfterLetters = 0.15;
    const logoAnimDur = logoAnimDuration;

    const lettersCount = text.length;
    const textInComplete = (lettersCount - 1) * inDelayPer + inDuration;
    const lettersOutComplete = (lettersCount - 1) * outDelayPer + outDuration;

    // Step timings
    const tShowText = 100;
    const timerShowText = setTimeout(() => setShowText(true), tShowText);

    const tLettersOut = tShowText + Math.round((textInComplete + holdAfterIn) * 1000);
    const timerLettersOut = setTimeout(() => setLettersOut(true), tLettersOut);

    const tShowLogo = tLettersOut + Math.round(lettersOutComplete * 1000) + Math.round(logoDelayAfterLetters * 1000);
    const timerShowLogo = setTimeout(() => setShowLogo(true), tShowLogo);

    return () => {
      clearTimeout(timerShowText);
      clearTimeout(timerLettersOut);
      clearTimeout(timerShowLogo);
    };
  }, []);

  // Simplified logo animation sequence
  useEffect(() => {
    if (!showLogo) return;
    let mounted = true;

    const animateSequence = async () => {
      // First run the logo animation
      await logoControls.start({
        opacity: [0, 1, 0],
        scale: [0.9, 1.05, 2.4],
        transition: {
          duration: logoAnimDuration,
          times: [0, logoSlow / logoAnimDuration, 1],
          ease: "easeInOut",
        },
      });

      if (!mounted) return;

      // Wait additional 10 seconds after logo animation
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      if (!mounted) return;
      
      // Start the fade out
      setOpacity(0);
      
      // After fade completes, hide the component
      setTimeout(() => {
        if (mounted) {
          setHide(true);
        }
      }, 800);
    };

    animateSequence();
    return () => {
      mounted = false;
    };
  }, [showLogo, logoControls, logoAnimDuration, logoSlow]);

  if (hide) return null;

  // letter animation helpers
  const inDelayPer = 0.02;
  const outDelayPer = 0.03;
  const inDuration = 0.4;
  const outDuration = 0.28;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          position: "relative",
          fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
        }}
      >
        {/* Text phase: letters animate in, then animate out */}
        <div
          aria-hidden={!showText}
          style={{
            display: showLogo ? "none" : "flex", // hide text while logo phase runs
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#fff",
            letterSpacing: "0.03em",
            gap: "0.04em",
          }}
        >
          {text.split("").map((char, i) => {
            const enter = { opacity: 1, y: 0 };
            const exitAnim = { opacity: 0, y: -20 };
            const initial = { opacity: 0, y: 20 };

            // decide which animation to run
            const animateProp = lettersOut ? exitAnim : showText ? enter : initial;
            const delay = lettersOut ? i * outDelayPer : showText ? i * inDelayPer : 0;
            const duration = lettersOut ? outDuration : inDuration;

            return (
              <motion.span
                key={i}
                initial={initial}
                animate={animateProp}
                transition={{ delay, duration, ease: "easeOut" }}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </div>

        {/* Logo phase: appears after letters out, zooms in and fades out */}
        {showLogo && (
          <MotionImage
            src={SplashLogo}
            alt="Splash Logo"
            width={220}
            height={80}
            priority
            initial={{ opacity: 0, scale: 0.9 }}
            animate={logoControls}
            style={{ display: "block" }}
          />
        )}
      </div>
    </div>
  );
}