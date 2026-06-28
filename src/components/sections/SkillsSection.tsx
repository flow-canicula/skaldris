import { SKILL_CATEGORIES } from '@/content/skills';
import { t } from '@/lib/messages';

const ACCENT_COLORS = [
  'var(--color-accent)',
  'var(--color-blue)',
  'var(--color-teal)',
  'var(--color-gold-dark)',
  'var(--color-accent)',
  'var(--color-blue)',
  'var(--color-teal)',
] as const;

export function SkillsSection() {
  const totalCount = SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 pb-16 pt-4">
      <h2 id="skills-heading" className="sr-only">Technical Stack</h2>
      <p className="font-mono text-xs mb-6 text-right hidden md:block" style={{ color: 'var(--color-surface-700)', opacity: 0.35 }}>
        {totalCount} {t.skills.countLabel}
      </p>
      <div className="divide-y" style={{ borderColor: 'var(--color-line)' }}>
        {SKILL_CATEGORIES.map((cat, i) => {
          const accent = ACCENT_COLORS[i % ACCENT_COLORS.length];
          return (
            <div key={cat.label} className="grid md:grid-cols-[220px_1fr] gap-6 py-8 items-start">
              <div className="flex items-center gap-3 pt-1">
                <span className="inline-block w-1.5 h-5 rounded-full flex-shrink-0" style={{ background: accent }} aria-hidden="true" />
                <h3 className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: accent }}>{cat.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-2" role="list">
                {cat.skills.map((s, j) => (
                  <li key={s}>
                    <span className="skill-tag inline-block font-mono text-xs px-3 py-1.5 border cursor-default" style={{ borderColor: `${accent}28`, color: 'var(--color-surface-700)', background: `${accent}08`, animationDelay: `${j * 30}ms` }}>
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
