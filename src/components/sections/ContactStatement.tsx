'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { t } from '@/lib/messages';

export function ContactStatement() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.18 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const lines = [
    { text: t.contact.statement.line1, highlight: false },
    { text: ' ' + t.contact.statement.line2, highlight: true },
    { text: ' ' + t.contact.statement.line3, highlight: false },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: 'var(--color-void-950)' }}
      aria-label="Availability statement"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0,198,141,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate(30%, -50%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,82,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div
        ref={ref}
        className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center"
      >
        {/* Left — big statement */}
        <div>
          <p
            className={[
              'font-mono text-xs font-semibold uppercase tracking-widest mb-5 transition-all duration-700 ease-out motion-reduce:transition-none',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ color: 'var(--color-teal)' }}
          >
            {t.contact.statement.label}
          </p>

          <h2 className="font-display font-bold leading-[1.04]" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)' }}>
            {lines.map((line, i) => (
              <span
                key={i}
                className={[
                  'inline transition-all duration-700 ease-out motion-reduce:transition-none',
                  line.highlight ? '' : '',
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                ].join(' ')}
                style={{
                  color: line.highlight ? 'var(--color-accent)' : '#fff',
                  transitionDelay: visible ? `${i * 90}ms` : '0ms',
                }}
              >
                {line.text}
              </span>
            ))}
          </h2>
        </div>

        {/* Right — body + pulsing availability dot */}
        <div
          className={[
            'space-y-6 transition-all duration-700 ease-out motion-reduce:transition-none',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ].join(' ')}
          style={{ transitionDelay: visible ? '320ms' : '0ms' }}
        >
          {/* Available badge */}
          <div className="inline-flex items-center gap-3">
            <Image
              src="/motifs/inspect-mark.svg"
              alt="Passed inspection mark"
              width={24}
              height={24}
              className="shrink-0"
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--color-teal)' }}>
              Available for engagements
            </span>
          </div>

          <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
            {t.contact.statement.body}
          </p>

          {/* What I'm open to */}
          <ul className="space-y-2.5">
            {[
              'Technical Architecture & System Design',
              'Engineering Leadership & Team Scaling',
              'AWS Cloud Consulting & DevOps',
              'Senior Full-stack Engineering',
              'Project & Program Management',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: 'var(--color-gold)' }}
                  aria-hidden="true"
                />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom hairline */}
      <div
        className="mx-auto mt-20 max-w-6xl px-6"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease 600ms' }}
      >
        <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>
    </section>
  );
}
