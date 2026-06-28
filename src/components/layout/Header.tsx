import Link from 'next/link';
import Image from 'next/image';
import { Nav } from './Nav';

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        background: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderColor: 'var(--color-line)',
        boxShadow: '0 1px 24px rgba(0,0,0,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="flex items-center group transition-opacity hover:opacity-80"
          aria-label="Skaldris — home"
        >
          <Image
            src="/logos/out6.png"
            alt="JRC — Jaime 'Flow' Canicula"
            width={140}
            height={46}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <Nav />
      </div>
    </header>
  );
}
