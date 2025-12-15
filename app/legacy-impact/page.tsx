"use client";
import { motion } from "framer-motion";


export default function LegacyImpactPage() {
  return (
    <div className="container-x section">
      <motion.header
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Building Institutions, Not Just Events</h1>
        <p className="mt-3 text-lg text-neutral-300">
          Lokakṣema 2026 establishes permanent structures ensuring lasting impact well beyond the summit itself.
        </p>
      </motion.header>

      <motion.section
        className="space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Why Legacy Matters</h2>
        <p className="text-neutral-200">
          We&apos;re building something different: every session, hackathon project, and partnership becomes part of permanent
          institutional infrastructure designed for decade-long impact.
        </p>
      </motion.section>

      <motion.section
        className="mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Four Institutional Foundations</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {[
            ["The Lokakṣema Foundation", "Section 8 nonprofit; seed grants, convenings, incubator & fellowships; transparent governance."],
            ["Annual Flagship Report", "State of Responsible AI & Human Well-being + dynamic dashboard tracking deployments & policies."],
            ["Global Advisory Council", "15–18 members; ethics letters, grant review, strategic advice; geographic & gender balance."],
            ["Regional Chapters & Community Platform", "Hubs across continents + digital platform; target 50,000+ members by 2028."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl card-rainbow bg-black/40 p-6\">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-10 grid md:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">From Summit to Institution: 2026–2030</h2>
          <ul className="mt-4 text-neutral-200 space-y-2 list-disc list-inside">
            <li><strong>2026:</strong> Inaugural summit, Foundation incorporation, 10 pilot projects, community launch.</li>
            <li><strong>2027:</strong> First annual report, hackathon expansion, regional chapters begin.</li>
            <li><strong>2028:</strong> Four chapters live, fellowship program, 50k members, rotating location model.</li>
            <li><strong>2029:</strong> Scaling pilots, UN/OECD integration, endowment sustainability.</li>
            <li><strong>2030:</strong> Premier global institution, 100+ pilots, self-sustaining, expanded council.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Open Access, Permanent Archive</h2>
          <ul className="mt-4 text-neutral-200 space-y-2 list-disc list-inside">
            <li>Public repository of proceedings, datasets, codebases</li>
            <li>Academic publishing & case study library</li>
            <li>Open educational resources for global adoption</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">How We&apos;ll Measure Success</h2>
        <ul className="mt-4 text-neutral-200 space-y-2 list-disc list-inside">
          <li>Pilot projects deployed, people impacted, policies adopted, papers published</li>
          <li>Community engagement & financial sustainability</li>
          <li>Recognition as trusted AI governance convener</li>
        </ul>
        <div className="mt-6">
          <a href="/contact" className="rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition">
            Join Our Community →
          </a>
        </div>
      </motion.section>
    </div>
  );
}
