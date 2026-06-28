import Image from 'next/image';
import { SOCIAL } from '@/content/site';

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: 'var(--color-surface-900)', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {/* Stripe bar at top */}
      <div className="h-[2px] stripe-bar" aria-hidden="true" />

      {/* Top strip — wordmark only */}
      <div
        className="border-b px-6 py-12"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <span
          className="font-display tracking-[0.22em] uppercase select-none"
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            color: 'rgba(255,255,255,0.12)',
          }}
        >
          Skaldris
        </span>
      </div>

      {/* Bottom row */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo */}
        <Image
          src="/logos/out6.png"
          alt="Jaime 'Flow' Canicula"
          width={120}
          height={150}
          className="h-16 w-auto object-contain opacity-50"
        />

        {/* Links */}
        <nav aria-label="Social links">
          <ul className="flex gap-8" role="list">
            <li>
              <a
                href={SOCIAL.githubPrimary}
                className="eyebrow footer-gh-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (flow-canicula)"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>

        {/* Legal */}
        <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem' }}>
          &copy; {new Date().getFullYear()} Skaldris
        </p>
      </div>
    </footer>
  );
}
