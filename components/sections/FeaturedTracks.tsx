"use client";
import { motion } from "framer-motion";

export default function FeaturedTracksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      className="section relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container-x">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8"
        >
          Three Pathways to Responsible AI
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
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
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="relative group rounded-xl border border-white/10 bg-black/40 p-6 overflow-hidden"
            >
              {/* Ambient animated glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(600px circle at 50% 30%, rgba(120,140,255,0.18), transparent 60%)",
                }}
                animate={{ opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white">
                  {track.title}
                </h3>
                <p className="mt-2 text-neutral-300">
                  {track.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
