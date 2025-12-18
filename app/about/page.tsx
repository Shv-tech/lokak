"use client";
import { motion } from "framer-motion";

// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container-x section">
      <motion.header
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Building the Future of Responsible AI</h1>
        <p className="mt-3 text-lg text-neutral-300">
          Founded under the Office of the CEO at SHV Groups, Lokakṣema emerged from one conviction:
          artificial intelligence must serve humanity&apos;s welfare.
        </p>
      </motion.header>

      <motion.section
        className="mt-12 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Why Lokakṣema?</h2>
        <div className="space-y-4 text-neutral-200">
          <p>
            The name &quot;Lokakṣema&quot; derives from Sanskrit, meaning &quot;welfare of the world.&quot; It embodies our
            commitment to ensuring emerging technologies advance equity, justice, and sustainable prosperity across all nations,
            not just the privileged few.
          </p>
          <p>
            Traditional AI conferences focus on technical competition or commercial advantage. Lokakṣema anchors AI within
            the broader arc of human well-being, ethical governance, and global equity.
          </p>
          <p>
            We recognize that AI&apos;s transformative potential spans healthcare, climate adaptation, agriculture, financial inclusion,
            education, and public governance. But we also acknowledge the challenges: fairness, accountability, safety, and
            intensifying geopolitical competition.
          </p>
          <p>Lokakṣema 2026 is our response to these dualities.</p>
        </div>
      </motion.section>

      <motion.section
        className="mt-12 grid md:grid-cols-2 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Corporate Excellence Meets Global Convening</h2>
          <p className="mt-3 text-neutral-200">
            As the anchor institution, SHV Groups provides strategic oversight, financial stewardship, and global convening
            credibility. Our track record in corporate governance and institutional integrity ensures world-class execution.
          </p>
          <p className="mt-3 text-neutral-200">
            <strong>Utopian Space</strong>, our innovation division under SHV Creative Labs, delivers community mobilization, hackathon
            excellence, and grassroots engagement. This dual structure ensures both top-down leadership and bottom-up participation.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Built on Transparency, Accountability, Inclusivity</h2>
          <p className="mt-3 text-neutral-200">
            Our governance model mirrors both corporate efficiency and multilateral legitimacy. We&apos;ve studied successful frameworks
            from G20 Sherpa Tracks, UNESCO Expert Groups, and World Economic Forum Program Councils.
          </p>
          <ul className="mt-4 space-y-3 text-neutral-200 list-disc list-inside">
            <li><strong>Executive Steering Committee:</strong> Strategic decision-making and financial oversight.</li>
            <li><strong>Program Committee:</strong> Intellectual integrity and agenda curation.</li>
            <li><strong>Advisory Council:</strong> 15–18 global leaders ensuring neutrality and ethical alignment.</li>
            <li><strong>Government Liaison Office:</strong> Coordination with ministries and international delegations.</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Four Principles Guide Everything We Do</h2>
        <div className="mt-4 grid md:grid-cols-4 gap-6">
          {[
            ["Transparency", "All major decisions documented and subject to audit."],
            ["Accountability", "Clear reporting lines between committees."],
            ["Inclusivity", "Integrates diverse voices including youth and civil society."],
            ["Continuity", "Structures extend beyond 2026 into the Foundation."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl card-rainbow bg-black/40 p-6">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Leadership Committed to Excellence</h2>
        <p className="mt-3 text-neutral-200">
          Prepared under the Office of the Chairman, SHV Groups<br />
          Author: Shaurya Verma, Founder, SHV Groups
        </p>
        <p className="mt-3 text-neutral-200">
          Our team combines decades of experience in technology leadership, policy development, event management, and international
          diplomacy. We&apos;re supported by advisory council members spanning six continents, representing governments,
          universities, corporations, and civil society organizations.
        </p>
      </motion.section>
    </div>
  );
}
