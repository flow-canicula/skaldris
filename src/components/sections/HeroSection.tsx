'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const imageRef     = useRef<HTMLDivElement>(null);
  const eyebrowRef   = useRef<HTMLParagraphElement>(null);
  const titleRef     = useRef<HTMLHeadingElement>(null);
  const subtitleRef  = useRef<HTMLParagraphElement>(null);
  const buttonsRef   = useRef<HTMLDivElement>(null);
  const accentBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !titleRef.current ||
      !subtitleRef.current ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return;

    const title    = new SplitType(titleRef.current,   { types: 'words' });
    const subtitle = new SplitType(subtitleRef.current, { types: 'words' });

    const tl = gsap.timeline();

    // 1 — background photo: scale down from 1.2 + fade in
    tl.from(imageRef.current, {
      scale: 1.18,
      opacity: 0,
      duration: 1.8,
      ease: 'power2.out',
    })

    // 2 — accent stripe bar: scaleX from 0
    .from(accentBarRef.current, {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 0.9,
      ease: 'power3.out',
    }, '<0.2')

    // 3 — eyebrow: slide down
    .from(eyebrowRef.current, {
      yPercent: -120,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    }, '<0.1')

    // 4 — title words: scale(5) + blur + random rotation, staggered randomly
    .from(title.words, {
      scale: 5,
      yPercent: 60,
      rotationZ: () => gsap.utils.random(-28, 28),
      opacity: 0,
      filter: 'blur(24px)',
      ease: 'back.out(1.4)',
      duration: 1.4,
      stagger: { each: 0.09, from: 'random' },
    }, '<0.2')

    // 5 — subtitle words: slide up from below clip
    .from(subtitle.words, {
      yPercent: 120,
      opacity: 0,
      ease: 'circ.out',
      duration: 1,
      stagger: 0.025,
    }, '<0.5')

    // 6 — buttons: slide in from left
    .from(buttonsRef.current, {
      x: -24,
      opacity: 0,
      ease: 'power2.out',
      duration: 0.8,
    }, '<0.3');

    // Parallax scroll on background
    const parallax = gsap.to(imageRef.current, {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tl.kill();
      parallax.scrollTrigger?.kill();
      parallax.kill();
      title.revert();
      subtitle.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative flex flex-col justify-end px-6 overflow-hidden"
      style={{
        minHeight: 'clamp(380px, 42svh, 560px)',
        paddingBottom: '4rem',
        paddingTop: '5rem',
        background: 'var(--color-void-950)',
      }}
    >
      {/* Background photo with parallax target */}
      <div
        ref={imageRef}
        aria-hidden="true"
        className="absolute inset-0 scale-110 overflow-hidden"
      >
        <Image
          src="/backgrounds/IMG_3347.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(6,8,15,0.52) 0%, rgba(6,8,15,0.76) 60%, rgba(6,8,15,0.92) 100%)',
        }}
      />

      {/* Accent stripe bar */}
      <div
        ref={accentBarRef}
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[3px] stripe-bar"
      />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <p
          ref={eyebrowRef}
          className="font-mono text-xs uppercase tracking-[0.35em] mb-6"
          style={{ color: 'var(--color-teal)' }}
        >
          Technical Architect &amp; Engineering Leader
        </p>

        {/* Name */}
        <h1
          ref={titleRef}
          id="hero-heading"
          className="font-display leading-[0.88] mb-7"
          style={{
            fontSize: 'clamp(4rem, 11vw, 10rem)',
            color: '#fff',
            letterSpacing: '-0.03em',
          }}
        >
          Jaime{' '}
          <span style={{ color: 'var(--color-accent)' }}>&ldquo;Flow&rdquo;</span>{' '}
          Canicula
        </h1>

        {/* Subtitle */}
        <div
          className="flex items-end justify-between flex-wrap gap-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.75rem' }}
        >
          <p
            ref={subtitleRef}
            className="text-base max-w-md leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            MTM · 13+ years building cloud platforms, engineering teams,
            and software systems — based in the Philippines with international
            experience across Vietnam, Singapore, Australia, and Hong Kong.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <Link
              href="/cv/CV-Jaime_Canicula_Resume-May-2026.pdf"
              download
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold"
              style={{ background: 'var(--color-accent)', color: '#fff' }}
            >
              Download CV
            </Link>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-widest border"
              style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)' }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
            animation: 'scroll-pulse 2.4s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
