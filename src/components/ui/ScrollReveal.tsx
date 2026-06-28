'use client';

import { useEffect, useRef } from 'react';

/*
  ScrollReveal — wires IntersectionObserver to [data-reveal] elements and
  drives the CSS scroll-progress bar via a CSS custom property.
*/

export function ScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        el.classList.add('in-view');
      });
      return;
    }

    // Scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progressBar);

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      progressBar.style.setProperty('--scroll-progress', String(progress));
      progressBar.style.width = `${progress * 100}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // One-shot observer — fires once, then unobserves
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Loop observer — toggles in-view on both enter and exit
    const loopObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const observe = () => {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        observerRef.current?.observe(el);
      });
      document.querySelectorAll<HTMLElement>('[data-reveal-loop]').forEach((el) => {
        loopObserver.observe(el);
      });
    };

    observe();

    // Clean up loop observer too
    const origReturn = () => {
      loopObserver.disconnect();
    };
    window.addEventListener('pagehide', origReturn, { once: true });

    return () => {
      observerRef.current?.disconnect();
      loopObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pagehide', origReturn);
      progressBar.remove();
    };
  }, []);

  return null;
}
