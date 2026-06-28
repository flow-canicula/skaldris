'use client';

import { useEffect, useState } from 'react';

/*
  PageLoader — draws the JRC mark from the logo:
  - Three jester-hat arcs: teal (left), navy (center), amber (right)
  - J stroke (navy) and R-circle (amber) beneath
  - Rings expand and fade on "impact"
  - Whole overlay fades out after ~2.4s
*/

const RED  = '#ff0052';
const NAVY = '#0055da';
const BG   = 'var(--color-void-950)';

export function PageLoader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setGone(true);
      return;
    }
    const t = setTimeout(() => setGone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BG,
        pointerEvents: 'none',
        animation: 'loader-exit 2.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="screentone"
        style={{ position: 'absolute', inset: 0, opacity: 0.25 }}
      />

      {/* ── Mark container ── */}
      <div style={{
        position: 'relative',
        width: 140,
        height: 140,
        animation: 'mark-drop 0.7s cubic-bezier(0.34, 1.3, 0.64, 1) 0.1s both',
      }}>

        {/* Expand ring 1 — red */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: `2px solid ${RED}`,
          animation: 'ring-expand 1s cubic-bezier(0.2, 0, 0.8, 1) 0.6s forwards',
          opacity: 0,
        }} />

        {/* Expand ring 2 — blue, slower */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: `1px solid ${NAVY}`,
          animation: 'ring-expand 1.3s cubic-bezier(0.2, 0, 0.8, 1) 0.7s forwards',
          opacity: 0,
        }} />

        {/* Logo image */}
        <img
          src="/logos/out6.png"
          alt=""
          width={140}
          height={140}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Wordmark */}
      <div style={{
        marginTop: 24,
        animation: 'fade-in 0.5s ease-out 0.9s both',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: 'var(--color-void-100)',
          opacity: 0.35,
        }}>
          Skaldris
        </span>
      </div>

      <style>{`
        @keyframes loader-exit {
          0%   { opacity: 1; }
          72%  { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes mark-drop {
          from { opacity: 0; transform: translateY(-32px) scale(0.85); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes arc-draw {
          from { opacity: 0; stroke-dashoffset: 200; stroke-dasharray: 200; }
          to   { opacity: 1; stroke-dashoffset: 0;   stroke-dasharray: 200; }
        }
        @keyframes dot-pop {
          from { transform: scale(0); }
          to   { transform: scale(1); }
        }
        @keyframes ring-expand {
          0%   { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
