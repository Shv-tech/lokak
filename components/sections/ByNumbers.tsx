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
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
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
          Global Scale, Human Focus
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STATS.map(([value, label], i) => (
            <motion.div
              key={label}
              className="rounded-xl border border-white/10 bg-black/40 p-6 text-center cursor-pointer group"
              variants={itemVariants}
              style={{ willChange: 'auto' }}
            >
              <div 
                className="text-3xl font-semibold group-hover:text-purple-400 transition-colors duration-300"
              >
                {value}
              </div>
              <div 
                className="mt-2 text-sm text-neutral-300"
              >
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

