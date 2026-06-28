'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_LINKS } from '@/content/site';

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="relative">
      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8" role="list">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href || pathname.startsWith(link.href + '/');
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="eyebrow nav-link transition-opacity"
                style={{
                  color: active ? 'var(--color-surface-900)' : 'var(--color-surface-700)',
                  opacity: active ? 1 : 0.6,
                }}
                aria-current={active ? 'page' : undefined}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = active ? '1' : '0.6'; }}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile menu toggle */}
      <button
        type="button"
        className="md:hidden flex items-center justify-center w-10 h-10"
        style={{ color: 'var(--color-surface-700)' }}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span aria-hidden="true" className="text-xl leading-none">
          {menuOpen ? '✕' : '☰'}
        </span>
      </button>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute right-0 top-12 z-50 w-52 rounded-sm p-6 flex flex-col gap-5"
          style={{
            background: 'rgba(255,255,255,0.96)',
            border: '1px solid var(--color-line)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
          }}
        >
          <ul role="list" className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="eyebrow block transition-opacity"
                    style={{ color: active ? 'var(--color-accent)' : 'var(--color-surface-700)', opacity: active ? 1 : 0.7 }}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
