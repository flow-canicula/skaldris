import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { createElement } from 'react';

// Mock gsap and its plugins — these use DOM APIs not available in jsdom
vi.mock('gsap', () => {
  const timelineMock = {
    from: vi.fn().mockReturnThis(),
    to: vi.fn().mockReturnThis(),
    kill: vi.fn(),
    scrollTrigger: null,
  };
  return {
    default: {
      registerPlugin: vi.fn(),
      timeline: vi.fn(() => timelineMock),
      from: vi.fn(),
      to: vi.fn().mockReturnValue({ scrollTrigger: null, kill: vi.fn() }),
      utils: { random: vi.fn(() => 0) },
    },
    gsap: {
      registerPlugin: vi.fn(),
      timeline: vi.fn(() => timelineMock),
    },
  };
});

vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: { kill: vi.fn() },
}));

// Mock split-type — splits text nodes, not available in jsdom
class MockSplitType {
  words: unknown[] = [];
  lines: unknown[] = [];
  chars: unknown[] = [];
  revert = vi.fn();
  constructor(_el: unknown, _opts?: unknown) {}
}
vi.mock('split-type', () => ({ default: MockSplitType }));

// jsdom doesn't implement matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// jsdom doesn't implement IntersectionObserver — must be a constructable class
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}
}
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => '/',
}));

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) =>
    createElement('img', { src, alt, ...props }),
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) =>
    createElement('a', { href, ...props }, children),
}));
