'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import SplitType from 'split-type';
import { t } from '@/lib/messages';

export function ContactHero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const eyebrowRef  = useRef<HTMLParagraphElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef     = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !titleRef.current ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return;

    const title    = new SplitType(titleRef.current,   { types: 'words' });
    const subtitle = new SplitType(subtitleRef.current!, { types: 'words' });

    const tl = gsap.timeline();

    tl.from(bgRef.current, {
      scale: 1.14,
      opacity: 0,
      duration: 1.8,
      ease: 'power2.out',
    })
    .from(eyebrowRef.current, {
      yPercent: -140,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    }, '<0.3')
    .from(title.words, {
      scale: 4,
      yPercent: 50,
      rotationZ: () => gsap.utils.random(-18, 18),
      opacity: 0,
      filter: 'blur(20px)',
      ease: 'back.out(1.2)',
      duration: 1.2,
      stagger: { each: 0.1, from: 'random' },
    }, '<0.15')
    .from(subtitle.words, {
      yPercent: 110,
      opacity: 0,
      ease: 'circ.out',
      duration: 0.9,
      stagger: 0.022,
    }, '<0.4')
    .from(ctasRef.current, {
      x: -20,
      opacity: 0,
      ease: 'power2.out',
      duration: 0.7,
    }, '<0.25')
    .from(statsRef.current, {
      y: 16,
      opacity: 0,
      ease: 'power2.out',
      duration: 0.7,
    }, '<0.1');

    return () => {
      tl.kill();
      title.revert();
      subtitle.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="contact-heading"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{
        minHeight: 'clamp(420px, 78svh, 800px)',
        paddingBottom: '5rem',
        paddingTop: '6rem',
        background: 'var(--color-void-950)',
      }}
    >
      {/* ── Layer 1: background photo ──────────────────────────────────── */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: 'url(/backgrounds/IMG_3347.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      />

      {/* ── Layer 2: dark gradient veil ────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(6,8,15,0.48) 0%, rgba(6,8,15,0.72) 55%, rgba(6,8,15,0.95) 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(6,8,15,0.7) 0%, rgba(6,8,15,0.3) 60%, transparent 100%)',
        }}
      />

      {/* ── Layer 3: screentone dot texture ────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 screentone opacity-40"
      />

      {/* ── Layer 4: accent stripe top ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[3px] stripe-bar"
      />

      {/* ── Layer 5: ambient accent glow orb ───────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-1/3 h-[480px] w-[480px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,82,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orb-drift 18s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* ── Layer 6: concentric pulse rings ────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[42%]"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div
          className="absolute h-64 w-64 rounded-full border border-accent/10"
          style={{ animation: 'pulse-ring 4.5s ease-out infinite', transform: 'translate(-50%, -50%)' }}
        />
        <div
          className="absolute h-96 w-96 rounded-full border border-accent/06"
          style={{ animation: 'pulse-ring 4.5s ease-out 1.5s infinite', transform: 'translate(-50%, -50%)' }}
        />
        <div
          className="absolute h-[28rem] w-[28rem] rounded-full border border-accent/04"
          style={{ animation: 'pulse-ring 4.5s ease-out 3s infinite', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* ── Layer 7: floating motif — top-right ────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-[14%] hidden lg:block"
        style={{ animation: 'orb-drift-alt 14s ease-in-out infinite' }}
      >
        <div
          className="h-20 w-20 rounded-full border border-white/08"
          style={{ boxShadow: 'inset 0 0 20px rgba(255,212,0,0.06)' }}
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[28%] top-[22%] hidden xl:block"
        style={{ animation: 'orb-drift 20s ease-in-out 4s infinite' }}
      >
        <div className="h-10 w-10 rounded-full border border-teal/10" />
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative mx-auto w-full max-w-6xl px-6">
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          className="font-mono text-xs uppercase tracking-[0.35em] mb-6"
          style={{ color: 'var(--color-teal)', overflow: 'hidden' }}
        >
          {t.contact.hero.eyebrow}
        </p>

        {/* H1 */}
        <h1
          ref={titleRef}
          id="contact-heading"
          className="font-display leading-[0.9] mb-7"
          style={{
            fontSize: 'clamp(3.2rem, 9vw, 8rem)',
            color: '#fff',
            letterSpacing: '-0.03em',
          }}
        >
          Let&rsquo;s{' '}
          <span style={{ color: 'var(--color-accent)' }}>work</span>{' '}
          together.
        </h1>

        {/* Divider + subtitle */}
        <div
          className="h-[2px] w-14 mb-5"
          aria-hidden="true"
          style={{ background: 'var(--color-gold)', opacity: 0.7 }}
        />
        <p
          ref={subtitleRef}
          className="text-base max-w-lg leading-relaxed mb-10"
          style={{ color: 'rgba(255,255,255,0.60)' }}
        >
          {t.contact.hero.subtitle}
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-wrap gap-4 mb-16">
          <a
            href="#contact-form"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3 font-mono text-xs uppercase tracking-widest font-bold"
            style={{ background: 'var(--color-accent)', color: '#fff' }}
          >
            {t.contact.hero.primaryCta}
          </a>
          <Link
            href="/cv/CV-Jaime_Canicula_Resume-May-2026.pdf"
            download
            className="btn-secondary inline-flex items-center gap-2 rounded-full border px-7 py-3 font-mono text-xs uppercase tracking-widest"
            style={{ borderColor: 'rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.78)' }}
          >
            {t.contact.hero.secondaryCta}
          </Link>
        </div>

        {/* Stat strip */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-6 border-t pt-7 w-full max-w-lg"
          style={{ borderColor: 'rgba(255,255,255,0.10)' }}
        >
          {[
            { value: '1', unit: ' day', label: 'response time' },
            { value: '13+', unit: ' yrs', label: 'production experience' },
            { value: '6×', unit: '', label: 'AWS certified' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-mono text-2xl font-bold md:text-3xl" style={{ color: 'var(--color-gold)' }}>
                {s.value}
                <span className="ml-0.5 text-base font-semibold" style={{ color: 'rgba(255,212,0,0.55)' }}>
                  {s.unit}
                </span>
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="pointer-events-none absolute bottom-6 right-6 hidden flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <div
          className="h-10 w-px"
          style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }}
        />
        <span
          className="font-mono text-[9px] font-semibold uppercase tracking-[0.45em]"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
