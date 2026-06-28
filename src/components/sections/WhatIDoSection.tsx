'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { stat: '13+', label: 'Years shipping\nproduction systems', color: 'var(--color-accent)' },
  { stat: '6×',  label: 'AWS certified\nacross all domains',  color: 'var(--color-teal)'   },
  { stat: '4.0', label: 'GPA — MTM\nUP Diliman',             color: 'var(--color-blue)'   },
];

const TAGS = [
  { tag: 'Cloud Architecture',     color: 'var(--color-blue)'     },
  { tag: 'Engineering Leadership', color: 'var(--color-teal)'     },
  { tag: 'DevOps & Platform',      color: 'var(--color-gold-dark)'},
  { tag: 'Full-Stack Development', color: 'var(--color-accent)'   },
  { tag: 'Agile Delivery',         color: 'var(--color-blue)'     },
  { tag: 'Stakeholder Management', color: 'var(--color-teal)'     },
];

export function WhatIDoSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const eyebrowRef  = useRef<HTMLParagraphElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const bodyRef     = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const tagsRef     = useRef<HTMLDivElement>(null);
  const dividerRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const heading = new SplitType(headingRef.current!, { types: 'lines,words' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 68%',
      },
    });

    // Eyebrow slides down
    tl.from(eyebrowRef.current, {
      yPercent: -80,
      opacity: 0,
      duration: 0.55,
      ease: 'power3.out',
    })

    // Vertical divider scales up
    .from(dividerRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      duration: 0.7,
      ease: 'power3.out',
    }, '<0.1')

    // Heading words slam from left with scale + blur
    .from(heading.words, {
      x: -60,
      scale: 1.4,
      opacity: 0,
      filter: 'blur(8px)',
      ease: 'expo.out',
      duration: 0.85,
      stagger: 0.06,
    }, '<0.1')

    // Body copy rises
    .from(bodyRef.current, {
      y: 32,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    }, '<0.35')

    // Stats slam in from below, one by one
    .from(statsRef.current!.children, {
      y: 40,
      opacity: 0,
      scale: 0.88,
      ease: 'back.out(1.6)',
      duration: 0.6,
      stagger: 0.09,
    }, '<0.2')

    // Tags scatter in
    .from(tagsRef.current!.children, {
      y: 16,
      opacity: 0,
      ease: 'power2.out',
      duration: 0.4,
      stagger: 0.04,
    }, '<0.15');

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      heading.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="What I do"
      className="relative overflow-hidden"
      style={{ background: 'var(--color-surface-50)' }}
    >
      {/* Accent bar top */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,85,218,0.15) 40%, rgba(0,198,141,0.15) 70%, transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-[9fr_10fr] gap-0 md:gap-16 items-start">

          {/* LEFT */}
          <div className="md:pr-12 md:border-r pb-12 md:pb-0 relative" style={{ borderColor: 'var(--color-line)' }}>
            {/* Invisible ref for the vertical border animation */}
            <div ref={dividerRef} className="hidden md:block absolute right-0 top-0 bottom-0 w-px" style={{ background: 'var(--color-line)', transformOrigin: 'top' }} />

            <p
              ref={eyebrowRef}
              className="font-mono text-xs uppercase tracking-[0.3em] mb-10"
              style={{ color: 'var(--color-blue)' }}
            >
              — What I do
            </p>

            <h2
              ref={headingRef}
              className="font-display leading-[0.92]"
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
                color: 'var(--color-surface-900)',
                letterSpacing: '-0.03em',
              }}
            >
              Architect{' '}
              first.{' '}
              <span style={{ color: 'var(--color-accent)' }}>Engineer</span>{' '}
              always.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="md:pl-4 flex flex-col justify-center gap-10 pt-2">
            <div ref={bodyRef}>
              <p className="text-lg leading-relaxed font-body mb-5" style={{ color: 'var(--color-surface-700)' }}>
                I design systems that survive contact with reality — cloud platforms,
                distributed APIs, and data pipelines that stay up when it matters
                and scale when it counts.
              </p>
              <p className="leading-relaxed font-body" style={{ color: 'var(--color-surface-700)', opacity: 0.55 }}>
                That means AWS infrastructure you can govern, engineering teams you
                can grow, and code you can still read two years later. It&rsquo;s where
                nobody touches me: once an architecture exists, that&rsquo;s where I finish best.
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-px" style={{ background: 'var(--color-line)' }}>
              {STATS.map(({ stat, label, color }) => (
                <div key={stat} className="flex flex-col gap-2 p-5" style={{ background: 'var(--color-surface-200)' }}>
                  <span
                    className="font-display"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color, lineHeight: 1, letterSpacing: '-0.02em' }}
                  >
                    {stat}
                  </span>
                  <span
                    className="font-mono text-[0.65rem] uppercase tracking-widest leading-snug"
                    style={{ color: 'var(--color-surface-700)', opacity: 0.5, whiteSpace: 'pre-line' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div ref={tagsRef} className="flex flex-wrap gap-2">
              {TAGS.map(({ tag, color }) => (
                <span
                  key={tag}
                  className="font-mono text-[0.65rem] uppercase tracking-widest px-3 py-1.5 border"
                  style={{ borderColor: `${color}33`, color, background: `${color}0a` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
