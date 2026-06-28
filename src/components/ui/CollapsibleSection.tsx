'use client';

import { useState, useRef, useEffect, useId } from 'react';

function LotusToggle({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{
        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        flexShrink: 0,
      }}
    >
      <ellipse cx="12" cy="7"  rx="2"   ry="4.5" fill="currentColor" opacity="0.45" />
      <ellipse cx="12" cy="17" rx="2"   ry="4.5" fill="currentColor" opacity="0.45" />
      <ellipse cx="7"  cy="12" rx="4.5" ry="2"   fill="currentColor" opacity="0.45" />
      <ellipse cx="17" cy="12" rx="4.5" ry="2"   fill="currentColor" opacity="0.45" />
      <circle  cx="12" cy="12" r="2.2"            fill="currentColor" />
    </svg>
  );
}

interface SectionDef {
  eyebrow: string;
  title: string;
  accent?: string;
  bg?: string;
  children: React.ReactNode;
}

interface CollapsibleGroupProps {
  sections: SectionDef[];
}

export function CollapsibleGroup({ sections }: CollapsibleGroupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);
  const bodyId = useId();

  useEffect(() => {
    const el = groupRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={groupRef} className="divide-y" style={{ borderColor: 'var(--color-line)' }}>
      {sections.map((section, i) => {
        const isOpen = openIndex === i;
        const accent = section.accent ?? 'var(--color-blue)';
        const id = `${bodyId}-${i}`;

        return (
          <div
            key={i}
            style={{
              background: section.bg ?? 'var(--color-surface-50)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              transitionDelay: visible ? `${i * 60}ms` : '0ms',
            }}
          >
            {/* Trigger row */}
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="group w-full text-left"
              style={{ display: 'block' }}
            >
              <div className="max-w-6xl mx-auto px-6 py-7 flex items-center justify-between gap-6">
                {/* Left — number + title */}
                <div className="flex items-baseline gap-5 min-w-0">
                  <span
                    className="flex-shrink-0 font-mono text-xs font-semibold"
                    style={{ color: accent, opacity: 0.5 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <span
                      className="font-mono text-[0.65rem] uppercase tracking-[0.22em] block mb-0.5"
                      style={{ color: accent }}
                    >
                      {section.eyebrow}
                    </span>
                    <span
                      className="font-display block"
                      style={{
                        fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                        color: 'var(--color-surface-900)',
                        lineHeight: 1.1,
                      }}
                    >
                      {section.title}
                    </span>
                  </div>
                </div>

                {/* Right — lotus toggle */}
                <span style={{ color: accent }}>
                  <LotusToggle open={isOpen} />
                </span>
              </div>
            </button>

            {/* Body — max-h transition matching solar FAQ */}
            <div
              id={id}
              style={{
                overflow: 'hidden',
                maxHeight: isOpen ? '9999px' : '0',
                opacity: isOpen ? 1 : 0,
                transition: isOpen
                  ? 'max-height 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease 0.05s'
                  : 'max-height 0.4s cubic-bezier(0.4,0,1,1), opacity 0.2s ease',
              }}
            >
              <div
                className="border-t"
                style={{ borderColor: 'var(--color-line)' }}
              >
                {section.children}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
