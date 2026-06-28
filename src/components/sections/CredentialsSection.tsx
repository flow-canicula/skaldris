import { CERTIFICATIONS } from '@/content/experience';
import { t } from '@/lib/messages';

type Issuer = 'Amazon Web Services' | 'Scrum.org';

const ISSUERS: Issuer[] = ['Amazon Web Services', 'Scrum.org'];

function issuerAccent(issuer: Issuer): string {
  return issuer === 'Amazon Web Services' ? 'var(--color-accent)' : 'var(--color-teal)';
}

export function CredentialsSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-16 pt-2">
      <h2 id="certs-heading" className="sr-only">Certifications</h2>
      {ISSUERS.map((issuer) => {
        const group = CERTIFICATIONS.filter((c) => c.issuer === issuer);
        const accent = issuerAccent(issuer);
        return (
          <div
            key={issuer}
            className="grid md:grid-cols-[220px_1fr] gap-6 py-10 border-b"
            style={{ borderColor: 'var(--color-line)' }}
          >
            {/* Issuer column */}
            <div className="flex flex-col gap-1 pt-1">
              <span
                className="font-mono text-[0.6rem] uppercase tracking-[0.22em]"
                style={{ color: accent }}
              >
                {t.credentials.issuedBy}
              </span>
              <span
                className="font-display"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'var(--color-surface-900)', lineHeight: 1.2 }}
              >
                {issuer}
              </span>
            </div>

            {/* Cert list */}
            <ol className="space-y-0" role="list">
              {group.map((cert, i) => (
                <li
                  key={cert.name}
                  className="flex items-baseline gap-5 py-3 border-b"
                  style={{ borderColor: 'var(--color-line)' }}
                >
                  <span
                    className="font-mono text-xs flex-shrink-0 w-5 text-right"
                    style={{ color: accent, opacity: 0.4 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-sm leading-snug"
                    style={{ color: 'var(--color-surface-700)' }}
                  >
                    {cert.name}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </div>
  );
}
