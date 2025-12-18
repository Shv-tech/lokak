"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
      className="section bg-gradient-to-b from-black/30 to-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container-x">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="mb-4">
            More Than a Summit—A Catalyst for Global Transformation
          </motion.h2>
          <motion.p variants={itemVariants} className="mb-4">
            Lokakṣema 2026 represents the premier platform where governments, industry leaders,
            researchers, and communities unite to solve humanity&apos;s most pressing challenges
            through responsible AI innovation.
          </motion.p>
          <motion.p variants={itemVariants} className="mb-6">
            Organized by SHV Groups and powered by Utopian Space, we&apos;re building bridges
            between research and reality, policy and practice, vision and action.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-neutral-200">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
