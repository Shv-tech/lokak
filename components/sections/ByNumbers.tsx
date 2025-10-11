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
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-x">
        <h2 className="mb-6">Global Scale, Human Focus</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {STATS.map(([value, label], i) => (
            <motion.div
              key={label}
              className="rounded-xl border border-white/10 bg-black/40 p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="text-3xl font-semibold">{value}</div>
              <div className="mt-2 text-sm text-neutral-300">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

