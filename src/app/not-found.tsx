import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 — Skaldris',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <div className="text-center max-w-lg">
        <p
          className="font-display text-[clamp(6rem,20vw,12rem)] text-void-800 leading-none select-none mb-8"
          aria-hidden="true"
        >
          404
        </p>

        <h1 className="font-display text-surface-50 text-3xl mb-6 leading-tight">
          Nothing here.
        </h1>

        <p className="text-void-100 text-sm leading-relaxed mb-12 max-w-xs mx-auto opacity-60">
          The page you are looking for does not exist, or has moved.
        </p>

        <Link
          href="/"
          className="text-void-100 opacity-60 hover:opacity-100 transition-opacity text-sm uppercase tracking-[0.2em] font-mono"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
