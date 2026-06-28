import { WORK_HISTORY } from '@/content/experience';
import { t } from '@/lib/messages';

export function ExperienceSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-16 pt-4">
      <h2 id="experience-heading" className="sr-only">Experience</h2>
      <div className="flex justify-end mb-6">
        <a
          href="/cv/CV-Jaime_Canicula_Resume-May-2026.pdf"
          download
          className="btn-secondary font-mono text-xs uppercase tracking-widest px-4 py-2 border"
          style={{ borderColor: 'var(--color-line)', color: 'var(--color-surface-700)' }}
        >
          {t.experience.downloadCv}
        </a>
      </div>
      <div className="space-y-0">
        {WORK_HISTORY.map((entry, i) => (
          <div
            key={i}
            className="exp-row grid md:grid-cols-[200px_1fr] gap-6 py-10 border-b rounded-sm cursor-default"
            style={{ borderColor: 'var(--color-line)' }}
          >
            <div>
              <p className="font-mono text-xs mb-1" style={{ color: 'var(--color-accent)' }}>{entry.period}</p>
              <p className="font-mono text-[0.65rem] uppercase tracking-widest" style={{ color: 'var(--color-surface-700)', opacity: 0.4 }}>{entry.industry}</p>
            </div>
            <div>
              <h3 className="font-display mb-1" style={{ fontSize: '1.25rem', color: 'var(--color-surface-900)' }}>{entry.role}</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--color-teal)' }}>{entry.companyShort ?? entry.company}</p>
              {entry.highlights.length > 0 && (
                <ul className="space-y-1.5">
                  {entry.highlights.map((h, j) => (
                    <li key={j} className="text-sm flex gap-3 items-start" style={{ color: 'var(--color-surface-700)', opacity: 0.65 }}>
                      <img src="/motifs/documentation.svg" alt="" aria-hidden="true" width={16} height={16} style={{ flexShrink: 0, marginTop: '2px', opacity: 0.7 }} />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
