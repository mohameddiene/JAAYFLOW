export default function Logo({ onNight = false }: { onNight?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <defs><linearGradient id="jf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6D4AFF" /><stop offset="1" stopColor="#14C9A8" /></linearGradient></defs>
        <rect width="34" height="34" rx="10" fill="url(#jf)" />
        <path d="M20 8v11a4 4 0 0 1-4 4h-1.5M12 8h11" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <span className={`font-display text-xl font-bold tracking-tight ${onNight ? 'text-white' : 'text-fg'}`}>JAAYFLOW</span>
    </span>
  );
}
