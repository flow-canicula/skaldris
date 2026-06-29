import Link from 'next/link';
import Image from 'next/image';
import { t } from '@/lib/messages';

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative px-6 py-36 text-center overflow-hidden"
      style={{ background: 'var(--color-void-950)' }}
    >
      {/* Background photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
        style={{ animation: 'hero-drift 36s ease-in-out infinite alternate' }}
      >
        <Image
          src="/backgrounds/IMG_3454.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_40%]"
          priority={false}
        />
      </div>

      {/* Vignette — heavy dark centre-weighted overlay for text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: [
            'radial-gradient(ellipse 80% 90% at 50% 50%, rgba(6,8,15,0.82) 0%, rgba(6,8,15,0.60) 55%, rgba(6,8,15,0.30) 100%)',
            'linear-gradient(to bottom, rgba(6,8,15,0.65) 0%, rgba(6,8,15,0.50) 40%, rgba(6,8,15,0.75) 100%)',
          ].join(', '),
        }}
      />

      {/* Accent red glow behind the headline */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 48%, rgba(255,0,82,0.14) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        <p
          className="font-mono text-xs uppercase tracking-[0.3em] mb-8"
          style={{ color: 'var(--color-teal)' }}
          data-reveal="drop"
        >
          {t.cta.eyebrow}
        </p>
        <h2
          id="cta-heading"
          className="font-display mb-8 leading-tight"
          style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            color: '#fff',
            textShadow: '0 2px 40px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.9)',
          }}
        >
          <span data-reveal="wipe" data-delay="1" style={{ display: 'block' }}>{t.cta.line1}</span>
          <span
            data-reveal="wipe"
            data-delay="3"
            style={{
              display: 'block',
              color: 'var(--color-accent)',
              textShadow: '0 0 60px rgba(255,0,82,0.45), 0 2px 24px rgba(0,0,0,0.8)',
            }}
          >
            {t.cta.line2}
          </span>
        </h2>
        <p
          className="mb-12 leading-relaxed max-w-xl mx-auto"
          style={{
            color: 'rgba(255,255,255,0.6)',
            textShadow: '0 1px 8px rgba(0,0,0,0.6)',
          }}
          data-reveal="rise"
          data-delay="5"
        >
          {t.cta.body}
        </p>
        <div
          className="flex flex-wrap gap-4 justify-center"
          data-reveal="rise"
          data-delay="6"
        >
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-widest font-bold"
            style={{
              background: 'var(--color-accent)',
              color: '#fff',
              boxShadow: '0 8px 32px rgba(255,0,82,0.45), 0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            {t.cta.primaryCta}
          </Link>
          <Link
            href="/cv/CV-Jaime_Canicula_Resume-May-2026.pdf"
            download
            className="btn-secondary inline-flex items-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-widest border"
            style={{
              borderColor: 'rgba(255,255,255,0.22)',
              color: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            {t.cta.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
