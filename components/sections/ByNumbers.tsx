"use client";
import { motion } from "framer-motion";

const STATS: Array<[string, string]> = [
  ["10,000+", "Global Participants"],
  ["30+", "Countries Represented"],
  ["1,000+", "Hackathon Teams"],
  ["$1M+", "Investment in Innovation"],
  ["50+", "Tier-1 Media Partners"],
];

export default function ByNumbers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
          Global Scale, Human Focus
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STATS.map(([value, label]) => (
            <motion.div
              key={label}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="relative group rounded-xl border border-white/10 bg-black/40 p-6 text-center overflow-hidden"
            >
              {/* Animated glow */}
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
                <div className="text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
                  {value}
                </div>
                <div className="mt-2 text-sm text-neutral-300">
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
