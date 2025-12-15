"use client";
import { motion } from "framer-motion";

export default function FeaturedTracksSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container-x">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-6"
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
              className="rounded-xl bg-black/40 p-6 border border-white/10 cursor-pointer relative overflow-hidden group"
              variants={itemVariants}
              style={{ willChange: 'auto' }}
            >
              {/* Animated background accent */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-purple-500/20 transition-all duration-300"
              />
              
              <h3 
                className="text-lg font-semibold relative z-10"
              >
                {track.title}
              </h3>
              <p 
                className="mt-2 text-neutral-300 relative z-10"
              >
                {track.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
