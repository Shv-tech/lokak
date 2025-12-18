"use client";
import { motion } from "framer-motion";

export default function WhySection() {
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
          className="mb-4"
        >
          India as the Neutral Global Convener
        </motion.h2>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-6"
        >
          Unlike bilateral summits or bloc-based conferences, Lokakṣema positions India as a
          trusted multilateral convener. We bring together stakeholders from the Global North
          and South for balanced, inclusive dialogue that transcends geopolitical divisions.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              t: "Innovation",
              d: "Frontier research, reproducible methodologies, and deployable pilots that transform theoretical breakthroughs into real-world solutions.",
            },
            {
              t: "Governance",
              d: "Policy frameworks that balance technological advancement with ethical safeguards, ensuring AI development serves humanity responsibly.",
            },
            {
              t: "Impact",
              d: "Real-world solutions reaching communities most in need, with measurable outcomes and sustainable deployment models.",
            },
          ].map((x, i) => (
            <motion.div
              key={x.t}
              className="rounded-xl bg-black/40 p-6 border border-white/10 cursor-pointer group"
              variants={itemVariants}
              style={{ willChange: 'auto' }}
            >
              <h3 className="text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-neutral-300">{x.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
