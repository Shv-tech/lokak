
export default function AgendaPage() {
  return (
    <div className="container-x section">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Comprehensive Programming Across Three Days</h1>
        <p className="mt-3 text-lg text-neutral-300">
          Detailed agenda to be published following speaker confirmations. Below is our indicative structure.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Day One: Foundations</h2>
        <p className="text-neutral-200">
          <strong>Morning Plenary: AI for Humanity</strong> — Inaugural keynote and fireside chat on balancing innovation with human values.
        </p>
        <ul className="list-disc list-inside text-neutral-200 space-y-2">
          <li><strong>Technical:</strong> Large Language Models Workshop (Hands-on)</li>
          <li><strong>Business:</strong> CEO Roundtable on AI and Economic Growth</li>
          <li><strong>Policy:</strong> AI Regulation Primer for Government Officials</li>
        </ul>
        <p className="text-neutral-200">Evening: Hackathon Opening, Welcome Reception, Sponsor Showcase Launch</p>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Day Two: Deep Dives</h2>
        <p className="text-neutral-200">
          <strong>Morning Plenary: AI and Global Challenges</strong> — Health AI, Climate adaptation, Financial inclusion.
        </p>
        <ul className="list-disc list-inside text-neutral-200 space-y-2">
          <li><strong>Technical:</strong> Reproducibility in MLOps; AI in Robotics & Automation</li>
          <li><strong>Business:</strong> Investment Trends; Industry Success Stories</li>
          <li><strong>Policy:</strong> Government AI Procurement; Data Governance Frameworks</li>
        </ul>
        <p className="text-neutral-200">Evening: Innovation Demos, Investor Networking, Hackathon Mid-Point Showcase</p>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Day Three: Action & Legacy</h2>
        <p className="text-neutral-200">
          <strong>Morning Plenary: The Future of Work in the AI Era</strong> — Labor transitions, skills, equity. Hackathon finalists.
        </p>
        <ul className="list-disc list-inside text-neutral-200 space-y-2">
          <li><strong>Technical:</strong> Foundation Models Research Presentations</li>
          <li><strong>Business:</strong> Scaling AI Solutions Responsibly</li>
          <li><strong>Policy:</strong> International Cooperation on AI Standards</li>
        </ul>
        <p className="text-neutral-200">
          <strong>Closing Plenary:</strong> New Delhi Accord on Responsible AI, winners announced, Foundation launch, closing commitments.
        </p>
      </section>
    </div>
  );
}
