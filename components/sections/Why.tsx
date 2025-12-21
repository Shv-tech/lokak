"use client";
import { motion } from "framer-motion";

export default function WhySection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <motion.div
        className="relative container-x"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={itemVariants}
          className="mb-4 max-w-3xl"
        >
          India as the Neutral Global Convener
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mb-10 max-w-3xl text-neutral-300"
        >
          Unlike bilateral summits or bloc-based conferences, Lokakṣema positions India as a
          trusted multilateral convener. We bring together stakeholders from the Global North
          and South for balanced, inclusive dialogue that transcends geopolitical divisions.
        </motion.p>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
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
          ].map((x) => (
            <motion.div
              key={x.t}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-indigo-500/10 to-transparent" />

              <h3 className="relative text-lg font-semibold">
                {x.t}
              </h3>
              <p className="relative mt-2 text-neutral-300">
                {x.d}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
