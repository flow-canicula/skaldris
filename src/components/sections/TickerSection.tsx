import { t } from '@/lib/messages';

export function TickerSection() {
  const services = t.ticker.services;

  return (
    <div
      className="py-10 overflow-hidden relative"
      style={{ background: 'var(--color-accent)' }}
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10" style={{ background: 'linear-gradient(to right, var(--color-accent), transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10" style={{ background: 'linear-gradient(to left, var(--color-accent), transparent)' }} />
      <div className="ticker-track whitespace-nowrap">
        {[...services, ...services].map((s, i) => (
          <span key={i} className="inline-flex items-center gap-6 mx-4">
            <span className="font-display text-xl" style={{ color: '#fff' }}>{s}</span>
            <svg viewBox="0 0 28 28" width={24} height={24} aria-hidden="true" style={{ flexShrink: 0 }}>
              <circle cx="14" cy="14" r="11" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
              <circle cx="14" cy="14" r="3" fill="rgba(255,255,255,0.9)"/>
              <line x1="14" y1="3" x2="14" y2="6.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="14" y1="21.5" x2="14" y2="25" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="3" y1="14" x2="6.5" y2="14" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="21.5" y1="14" x2="25" y2="14" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
