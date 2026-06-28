import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { buildBreadcrumbSchema } from '@/lib/jsonld';
import { ContactHero } from '@/components/sections/ContactHero';
import { ContactHandlesStrip } from '@/components/sections/ContactHandlesStrip';
import { ContactStatement } from '@/components/sections/ContactStatement';
import { ContactForm } from '@/components/forms/ContactForm';
import { t } from '@/lib/messages';

export const metadata: Metadata = buildMetadata({
  canonical: '/contact',
  title: 'Hire a Technical Architect in the Philippines — Jaime Canicula',
  description: 'Contact Jaime "Flow" Canicula — Technical Architect, AWS Certified Solutions Architect, and Engineering Leader based in Metro Manila, Philippines. Available for consulting and senior roles.',
  keywords: [
    'hire Technical Architect Philippines',
    'AWS consultant Philippines',
    'Cloud Architect for hire Philippines',
    'Engineering Leader Philippines',
    'AWS Solutions Architect for hire',
    'software architect Philippines',
    'Jaime Canicula contact',
    'Flow Canicula',
  ],
});

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
  ]);

  return (
    <>
      <JsonLd schema={[breadcrumbSchema]} />

      {/* Breadcrumb for accessibility — visually hidden, above the hero */}
      <div className="sr-only">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Contact', href: '/contact' },
          ]}
        />
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <ContactHero />

      {/* ── Handles strip ─────────────────────────────────────────────── */}
      <ContactHandlesStrip />

      {/* ── Bold statement / availability ─────────────────────────────── */}
      <ContactStatement />

      {/* ── Form section ──────────────────────────────────────────────── */}
      <section
        id="contact-form"
        aria-labelledby="cf-section-heading"
        className="relative overflow-hidden py-24 md:py-32"
        style={{ background: 'var(--color-surface-50)' }}
      >
        {/* Subtle screentone texture */}
        <div className="absolute inset-0 screentone pointer-events-none" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">

            {/* Left — context panel */}
            <div className="lg:sticky lg:top-28 lg:self-start" data-reveal="rise" data-delay="0">
              <p
                className="font-mono text-xs uppercase tracking-[0.3em] mb-4"
                style={{ color: 'var(--color-teal)' }}
              >
                Contact
              </p>
              <h2
                id="cf-section-heading"
                className="font-display font-bold leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--color-surface-700)' }}
              >
                {t.contact.form.heading}
              </h2>
              <div
                className="h-[2px] w-14 mb-8"
                style={{ background: 'var(--color-accent)' }}
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-surface-700)', opacity: 0.6 }}>
                Fill in the form and I'll respond within one business day. For urgent matters, email directly at{' '}
                <a
                  href="mailto:jaimecanicula@skaldris.com"
                  className="accent-link font-medium"
                  style={{ color: 'var(--color-surface-700)' }}
                >
                  jaimecanicula@skaldris.com
                </a>
                .
              </p>

              {/* Trust signals */}
              <ul className="space-y-3">
                {[
                  { icon: '✓', text: 'Responds within one business day' },
                  { icon: '✓', text: 'Remote-first, Metro Manila–based' },
                  { icon: '✓', text: 'Available for contract or full-time' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <span
                      className="font-mono text-sm font-bold"
                      style={{ color: 'var(--color-teal)' }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <span className="text-[13px]" style={{ color: 'var(--color-surface-700)', opacity: 0.55 }}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — the form */}
            <div data-reveal="rise" data-delay="2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
