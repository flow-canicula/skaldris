import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import { PageLoader } from '@/components/ui/PageLoader';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

function setReducedMotion(value: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockReturnValue({ matches: value }),
  });
}

describe('PageLoader – visibility', () => {
  it('renders on mount', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    expect(container.firstChild).not.toBeNull();
  });

  it('is aria-hidden', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    expect((container.firstChild as HTMLElement).getAttribute('aria-hidden')).toBe('true');
  });

  it('unmounts after 2600ms', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    act(() => { vi.advanceTimersByTime(2600); });
    expect(container.firstChild).toBeNull();
  });

  it('is gone immediately when prefers-reduced-motion is active', () => {
    setReducedMotion(true);
    const { container } = render(<PageLoader />);
    expect(container.firstChild).toBeNull();
  });

  it('does not unmount before 2600ms', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    act(() => { vi.advanceTimersByTime(2599); });
    expect(container.firstChild).not.toBeNull();
  });
});

describe('PageLoader – structure', () => {
  it('has pointer-events: none', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    expect((container.firstChild as HTMLElement).style.pointerEvents).toBe('none');
  });

  it('is position fixed and covers viewport', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    const overlay = container.firstChild as HTMLElement;
    expect(overlay.style.position).toBe('fixed');
    expect(overlay.style.inset).toBe('0px');
  });

  it('sits above content with z-index 9999', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    expect((container.firstChild as HTMLElement).style.zIndex).toBe('9999');
  });

  it('uses void-950 as background', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    expect((container.firstChild as HTMLElement).style.backgroundColor).toBe('var(--color-void-950)');
  });

  it('renders the screentone texture', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    expect(container.querySelector('.screentone')).toBeInTheDocument();
  });

  it('renders an SVG mark', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders the Skaldris wordmark', () => {
    setReducedMotion(false);
    const { container } = render(<PageLoader />);
    const spans = container.querySelectorAll('span');
    const wordmark = Array.from(spans).find((s) => s.textContent?.toLowerCase().includes('skaldris'));
    expect(wordmark).toBeInTheDocument();
  });

  it('clears the timeout on unmount', () => {
    setReducedMotion(false);
    const { unmount } = render(<PageLoader />);
    expect(() => {
      unmount();
      act(() => { vi.advanceTimersByTime(2600); });
    }).not.toThrow();
  });
});
