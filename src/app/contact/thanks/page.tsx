import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import { t } from '@/lib/messages';

export const metadata: Metadata = buildMetadata({
  canonical: '/contact/thanks',
  title: 'Message received — Jaime "Flow" Canicula',
  description: 'Your message has been received. Jaime will respond within one business day.',
  noIndex: true,
});

export default function ThanksPage() {
  return (
    <main
      id="main-content"
      className="flex min-h-[80svh] flex-col items-center justify-center px-6 py-24 text-center"
      style={{ background: 'var(--color-surface-50)' }}
    >
      {/* Success mark */}
      <div
        className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2"
        style={{ borderColor: 'var(--color-teal)', background: 'rgba(0,198,141,0.06)' }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            d="M5 16.5L12 23.5L27 9"
            stroke="var(--color-teal)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Eyebrow */}
      <p
        className="font-mono text-xs uppercase tracking-[0.35em] mb-4"
        style={{ color: 'var(--color-teal)' }}
      >
        {t.contact.thanks.eyebrow}
      </p>

      {/* Heading */}
      <h1
        className="font-display font-bold leading-tight mb-5"
        style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: 'var(--color-surface-700)' }}
      >
        {t.contact.thanks.heading}
      </h1>

      {/* Accent bar */}
      <div
        className="h-[3px] w-12 mb-7 mx-auto"
        style={{ background: 'var(--color-accent)' }}
        aria-hidden="true"
      />

      {/* Body */}
      <p
        className="max-w-md text-base leading-relaxed mb-12"
        style={{ color: 'var(--color-surface-700)', opacity: 0.6 }}
      >
        {t.contact.thanks.body}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3 font-mono text-xs uppercase tracking-widest font-bold"
          style={{ background: 'var(--color-accent)', color: '#fff' }}
        >
          {t.contact.thanks.backHome}
        </Link>
        <Link
          href="/work"
          className="btn-secondary inline-flex items-center gap-2 rounded-full border px-7 py-3 font-mono text-xs uppercase tracking-widest"
          style={{ borderColor: 'var(--color-surface-300)', color: 'var(--color-surface-700)' }}
        >
          {t.contact.thanks.viewWork}
        </Link>
      </div>
    </main>
  );
}
