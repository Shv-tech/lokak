"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
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
      {/* Section ambient light */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[520px] w-[520px] rounded-full bg-slate-200/10 blur-[140px] animate-softGlow" />
      </div>

      <motion.div
        className="relative container-x"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Intro */}
        <motion.div className="mb-16 max-w-3xl" variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="mb-4">
            More Than a Summit—A Catalyst for Global Transformation
          </motion.h2>

          <motion.p variants={itemVariants} className="mb-4 text-neutral-300">
            Lokakṣema 2026 represents the premier platform where governments, industry leaders,
            researchers, and communities unite to solve humanity&apos;s most pressing challenges
            through responsible AI innovation.
          </motion.p>

          <motion.p variants={itemVariants} className="text-neutral-300">
            Organized by SHV Groups and powered by Utopian Space, we&apos;re building bridges
            between research and reality, policy and practice, vision and action.
          </motion.p>
        </motion.div>

        {/* Mission / Vision Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
        >
          {[
            {
              title: "Mission Statement",
              content:
                "To accelerate the deployment of responsible AI solutions for global good by connecting research, policy, industry, and communities in meaningful collaboration.",
            },
            {
              title: "Vision Statement",
              content:
                "By 2030, Lokakṣema will define the global standard for responsible AI governance—the forum where artificial intelligence advances equity, justice, and sustainable prosperity for all nations.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
            >
              {/* Animated card glow */}
              <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div className="h-[260px] w-[260px] rounded-full bg-indigo-400/10 blur-[100px] animate-softGlow" />
              </div>

              <h3 className="relative text-xl font-semibold">
                {item.title}
              </h3>
              <p className="relative mt-3 text-neutral-300">
                {item.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
