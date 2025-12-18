export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-6 text-center transition-all duration-300 hover:border-white/30 hover:bg-black/60 hover:shadow-lg hover:-translate-y-1 cursor-pointer" style={{ backfaceVisibility: 'hidden', perspective: '1000px' }}>
      <div className="text-3xl font-semibold">{value}</div>
      <div className="mt-2 text-sm text-neutral-300">{label}</div>
    </div>
  );
}
