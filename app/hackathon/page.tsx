"use client";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { use } from "react";
gsap.registerPlugin(SplitText)
// app/hackathon/page.tsx
export default function HackathonPage() {

const themeColors: Record<string, string> = {
  "Health & Biomedicine": "border-lime-400",
  "Climate & Agriculture": "border-emerald-400",
  "Public Safety & Humanitarian Response": "border-violet-400",
  "Open Innovation": "border-orange-400",
};

  useGSAP(() => {
    let split = SplitText.create(".txt", {type: "words, chars"});
    gsap.from(split.chars, {
    y:100,
    autoAlpha:0,
    stagger:{
      amount:0.3,
      from:"end",
      ease:"power1.inOut"
    }
  })
  })
  
  return (
    <div id="smooth-wrapper">
    <div id="smooth-content">
    <div className="">
      <motion.header
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      > 

      <div className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/hacathonBgImage.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 text-center">
            <h1 className="text-4xl md:text-8xl font-bold  txt">
              UTOPIAN SPACE
            </h1>
            <span className="text-2xl font-semibold text-green-200">Global Hackathon-26</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mb-[100px] bg-lime-400 p-3">
           <p className="text-xl md:text-3xl text-black font-bold">72 Hours. Global Teams. Humanity&apos;s Challenges. Your Solutions.</p>
          <p className="text-neutral-700 md:text-xl">AI-for-Humanity: Innovating for Global Well-being</p>
        </div>
      </motion.header>

      <motion.section
        className="space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="md:flex justify-around gap-6 items-center">
          <img className="hidden md:block" src="/images/pattern1.svg"  alt="" />
          <div className="md:flex md:flex-col md:gap-6 text-center p-2">
            <h2 className="text-2xl md:text-4xl font-semibold ">The Innovation <span className="text-green-400">Engine</span> of <span className="text-cyan-400"> Lokakṣema</span> 2026</h2>
              <p className="text-neutral-200">
              While the summit convenes leaders for dialogue and strategy, the hackathon generates practical, deployable AI solutions
              addressing humanity&apos;s most urgent challenges.
            </p>
            <p className="text-lime-300">
              <strong className="text-white">Our Promise:</strong> Top projects receive funding, incubator support, and pilot deployment partnerships.
            </p>
          </div>
          <img className="hidden md:block" src="/images/pattern1.svg" alt="" />
        </div>
      </motion.section>

      <motion.section
        className="mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold bg-green-400 py-2 px-3 text-neutral-700">Four Tracks, Infinite Impact</h2>
        <div className="mt-4 grid md:grid-cols-4 gap-6">
          {[
            ["Health & Biomedicine", "Diagnostics in resource-limited settings, predictive healthcare, mental health tools."],
            ["Climate & Agriculture", "Climate prediction, precision agriculture, water optimization, renewables."],
            ["Public Safety & Humanitarian Response", "Disaster prediction, cybersecurity, humanitarian logistics."],
            ["Open Innovation", "Bold ideas pushing boundaries for social good."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl h-[400px] bg-black/40 p-5 ">
              <div className={`h-full rounded-xl p-4 border-2 ${themeColors[title] ?? "border-neutral-500"}`}>
                 <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-neutral-300">{desc}</p>
              </div>

            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-10 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <div className="rounded-xl card-rainbow bg-black/40 p-6">
          <h3 className="font-semibold">Designed for Excellence</h3>
          <ul className="mt-3 text-neutral-300 list-disc list-inside space-y-1">
            <li>Open to 18+, teams of 2–5</li>
            <li>72 hours in parallel with summit</li>
            <li>Hybrid: on-site + global remote</li>
          </ul>
        </div>
        <div className="rounded-xl card-rainbow bg-black/40 p-6">
          <h3 className="font-semibold">What You&apos;ll Submit</h3>
          <ul className="mt-3 text-neutral-300 list-disc list-inside space-y-1">
            <li>Code repository (MIT/Apache 2.0)</li>
            <li>Max 6-page technical paper</li>
            <li>3–5 minute demo video</li>
          </ul>
        </div>
        <div className="rounded-xl card-rainbow bg-black/40 p-6">
          <h3 className="font-semibold">Judging & Prizes</h3>
          <ul className="mt-3 text-neutral-300 list-disc list-inside space-y-1">
            <li>Global jury of 15–20</li>
            <li>Up to $100,000 + compute credits</li>
            <li>Incubator fast-track & pilot partnerships</li>
          </ul>
        </div>
      </motion.section>
    </div>
    </div>
    </div>
  );
}
