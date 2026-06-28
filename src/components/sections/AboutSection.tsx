import { t } from '@/lib/messages';

export function AboutSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 id="about-heading" className="sr-only">About</h2>
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <div
          className="font-display leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--color-surface-900)' }}
        >
          <span style={{ display: 'block' }}>{t.about.heading1}</span>
          <span style={{ display: 'block', color: 'var(--color-accent)' }}>{t.about.heading2}</span>
          <span style={{ display: 'block' }}>{t.about.heading3}</span>
        </div>
        <div className="space-y-6 pt-2" style={{ color: 'var(--color-surface-700)' }}>
          <p className="text-lg leading-relaxed">
            {t.about.body1}
          </p>
          <p className="leading-relaxed" style={{ opacity: 0.6 }}>
            {t.about.body2}
          </p>
          <p className="leading-relaxed" style={{ opacity: 0.6 }}>
            {t.about.body3}
          </p>
          <div className="pt-4 flex flex-wrap gap-3">
            {(['AWS Certified Solutions Architect – Pro', 'PSM II', 'MTM, UP Diliman'] as const).map((tag) => (
              <span
                key={tag}
                className="cert-badge font-mono text-xs px-3 py-1.5 border cursor-default"
                style={{ borderColor: 'rgba(0,198,141,0.4)', color: 'var(--color-teal)', background: 'rgba(0,198,141,0.05)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
