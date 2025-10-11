"use client";
import { motion } from "framer-motion";

export default function FeaturedTracksSection() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-x">
        <h2 className="mb-6">Three Pathways to Responsible AI</h2>
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
            <motion.div
              key={i}
              className="rounded-xl bg-black/40 p-6 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold">{track.title}</h3>
              <p className="mt-2 text-neutral-300">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
