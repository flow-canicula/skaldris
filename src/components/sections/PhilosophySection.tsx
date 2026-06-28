'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function TopoPattern({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className="pointer-events-none absolute"
      style={{
        ...(flip
          ? { left: 0, bottom: 0, transform: 'scaleX(-1)' }
          : { right: 0, top: 0 }),
        width: 'clamp(280px, 55vw, 640px)',
        height: 'auto',
        color: flip ? 'var(--color-teal)' : 'var(--color-blue)',
        opacity: flip ? 0.055 : 0.065,
      }}
      width="640"
      height="480"
      viewBox="0 0 800 600"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.5">
        <path d="M50,500 Q150,400 100,300 Q50,200 150,120 Q250,40 400,80 Q550,120 600,250 Q650,380 550,460 Q450,540 300,500 Q180,470 50,500Z" />
        <path d="M90,470 Q170,390 130,310 Q90,230 180,160 Q270,90 390,120 Q510,150 550,260 Q590,370 510,440 Q430,510 310,470 Q210,440 90,470Z" />
        <path d="M130,440 Q190,380 160,320 Q130,260 200,210 Q270,160 370,180 Q470,200 500,280 Q530,360 470,410 Q410,460 320,430 Q240,410 130,440Z" />
        <path d="M170,410 Q210,370 190,330 Q170,290 220,260 Q270,230 340,245 Q410,260 430,310 Q450,360 410,390 Q370,420 310,400 Q260,390 170,410Z" />
      </g>
    </svg>
  );
}

function ArchMotif() {
  return (
    <svg
      className="pointer-events-none absolute"
      style={{
        bottom: 0,
        right: '6%',
        width: 'clamp(160px, 28vw, 340px)',
        height: 'auto',
        color: 'var(--color-accent)',
        opacity: 0.07,
      }}
      viewBox="0 0 400 220"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2">
        <path d="M20 200 Q60 120 130 96 Q150 60 200 60 Q250 60 270 96 Q340 120 380 200" />
        <path d="M60 200 Q90 140 150 120 Q170 90 200 90 Q230 90 250 120 Q310 140 340 200" />
        <line x1="200" y1="60" x2="200" y2="20" />
        <circle cx="200" cy="16" r="4" />
      </g>
    </svg>
  );
}

export function PhilosophySection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const captionRef  = useRef<HTMLParagraphElement>(null);
  const eyebrowRef  = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (
      !titleRef.current ||
      !captionRef.current ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return;

    const title   = new SplitType(titleRef.current,  { types: 'lines,words' });
    const caption = new SplitType(captionRef.current, { types: 'lines' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    });

    tl.from(eyebrowRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
    .from(title.words, {
      yPercent: 120,
      rotationZ: () => gsap.utils.random(-6, 6),
      opacity: 0,
      ease: 'circ.out',
      duration: 0.9,
      stagger: 0.028,
    }, '<0.15')
    .from(caption.lines, {
      yPercent: 100,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.7,
      stagger: 0.08,
    }, '<0.3');

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      title.revert();
      caption.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Professional philosophy"
      className="relative overflow-hidden px-6 py-28 md:py-40"
      style={{ background: 'var(--color-surface-100)' }}
    >
      {/* Topo contour — top right */}
      <TopoPattern />
      {/* Topo contour — bottom left, flipped */}
      <TopoPattern flip />
      {/* Arch motif — bottom right */}
      <ArchMotif />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p
          ref={eyebrowRef}
          className="font-mono text-xs uppercase tracking-[0.3em] mb-12"
          style={{ color: 'var(--color-blue)' }}
        >
          — Philosophy
        </p>

        <h2
          ref={titleRef}
          className="font-display leading-[1.02]"
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
            color: 'var(--color-surface-900)',
            maxWidth: '22ch',
          }}
        >
          Engineering that{' '}
          <span style={{ color: 'var(--color-accent)' }}>scales teams</span>.{' '}
          Architecture that{' '}
          <span style={{ color: 'var(--color-teal)' }}>outlasts hype</span>.{' '}
          Systems built for{' '}
          <span style={{ color: 'var(--color-blue)' }}>people first</span>.
        </h2>

        <p
          ref={captionRef}
          className="mt-12 text-sm italic max-w-sm leading-relaxed"
          style={{ color: 'var(--color-surface-700)', opacity: 0.5 }}
        >
          Strategy before stack — every architecture decision is a people decision first.
        </p>
      </div>
    </section>
  );
}
