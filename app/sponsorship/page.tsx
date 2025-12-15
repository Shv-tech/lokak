"use client";
import { motion } from "framer-motion";

// app/sponsorship/page.tsx
export default function SponsorshipPage() {
  return (
    <div className="container-x section">
      <motion.header
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Partner With Purpose</h1>
        <p className="mt-3 text-lg text-neutral-300">
          Position your organization at the forefront of responsible AI innovation.
        </p>
        <p className="mt-1 text-neutral-400">
          Unparalleled visibility, strategic partnerships, and measurable ROI for sponsors committed to AI for humanity.
        </p>
      </motion.header>

      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Why Sponsor Lokakṣema?</h2>
        <ul className="list-disc list-inside text-neutral-200 space-y-2">
          <li><strong>Global Visibility:</strong> 10,000+ attendees, 50+ Tier-1 media outlets.</li>
          <li><strong>Strategic Access:</strong> Policymakers, frontier researchers, entrepreneurial talent.</li>
          <li><strong>Thought Leadership:</strong> Speaking platforms and media opportunities.</li>
          <li><strong>Measurable Impact:</strong> Post-event ROI reporting.</li>
          <li><strong>Commercial Opportunities:</strong> Pilot partnerships, deal rooms, procurement channels.</li>
        </ul>
      </motion.section>

      <motion.section
        className="mt-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Three Levels of Partnership</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {[
            ["Platinum — The Architects", "$200,000+", "Keynote slot, largest branding, G2G access, 25 VIP passes, track ownership, private room, 50 sqm booth, recruitment list, PR quotes, custom workshop, homepage banner."],
            ["Gold — The Innovators", "$50,000–$75,000", "Panel slot, prominent branding, 12 passes, 25 sqm booth, roundtables, lounge access, co-sponsor track, track branding, highlights, recruitment list."],
            ["Silver — The Partners", "$20,000–$30,000", "Logo listing, 6 passes, 12 sqm booth, receptions access, publications, social media recognition, footer logo, certificate."],
          ].map(([tier, price, details]) => (
            <div key={tier} className="rounded-xl card-rainbow bg-black/40 p-6\">
              <h3 className="font-semibold">{tier}</h3>
              <p className="mt-1 text-sm text-neutral-400">Investment: {price}</p>
              <p className="mt-3 text-neutral-300">{details}</p>
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
          <h2 className="text-2xl md:text-3xl font-semibold">Partnership Timeline</h2>
          <ol className="mt-4 list-decimal list-inside space-y-2 text-neutral-200">
            <li>Initial Discussion → Prospectus → Customization</li>
            <li>Proposal & Agreement → Terms → Sign-off</li>
            <li>Activation Planning → Speaker & Booth → Marketing</li>
            <li>Pre-Event Execution → Integration & Prep</li>
            <li>Event Delivery → On-site Support & VIP</li>
            <li>Post-Event Reporting → ROI & Follow-ups</li>
          </ol>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Payment Terms</h2>
          <ul className="mt-4 space-y-2 text-neutral-200 list-disc list-inside">
            <li><strong>Deposit:</strong> 50% on signing (non-refundable)</li>
            <li><strong>Balance:</strong> 50% due 90 days before summit</li>
            <li><strong>Cancellation:</strong> &gt;120 days: deposit retained; &lt;120 days: full fee</li>
            <li><strong>Methods:</strong> Wire, ACH, corporate check</li>
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
        <a
          href="/contact"
          className="inline-block rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition"
        >
          Let&apos;s Build the Future of AI Together
        </a>
        <p className="mt-3 text-neutral-400">Contact: partnerships@lokaksema2026.org</p>
      </motion.section>
    </div>
  );
}
