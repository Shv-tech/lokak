import Image from "next/image";

type Sponsor = {
  name: string;
  tier: "Platinum" | "Gold" | "Silver" | string;
  logo: string; // /images/sponsors/xyz.svg
  href?: string;
};

export default function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a
      href={sponsor.href || "#"}
      className="group rounded-xl border border-white/10 bg-black/30 p-6 hover:bg-black/40 transition"
    >
      <div className="flex items-center justify-center h-16">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={192}
          height={48}
          className="max-h-12 w-auto opacity-90 group-hover:opacity-100"
        />
      </div>
      <div className="mt-4 text-sm text-neutral-300 text-center">
        <div className="font-medium text-white">{sponsor.name}</div>
        <div className="text-xs text-neutral-400">{sponsor.tier}</div>
      </div>
    </a>
  );
}
