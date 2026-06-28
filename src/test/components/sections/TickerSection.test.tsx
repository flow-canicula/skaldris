import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TickerSection } from '@/components/sections/TickerSection';

describe('TickerSection', () => {
  it('renders without crashing', () => {
    render(<TickerSection />);
  });

  it('renders "Technical Architecture" service', () => {
    render(<TickerSection />);
    const items = screen.getAllByText('Technical Architecture');
    expect(items.length).toBeGreaterThan(0);
  });

  it('renders "Cloud Engineering (AWS)" service', () => {
    render(<TickerSection />);
    const items = screen.getAllByText('Cloud Engineering (AWS)');
    expect(items.length).toBeGreaterThan(0);
  });

  it('renders "Engineering Leadership" service', () => {
    render(<TickerSection />);
    const items = screen.getAllByText('Engineering Leadership');
    expect(items.length).toBeGreaterThan(0);
  });

  it('renders "DevOps & Platform Engineering" service', () => {
    render(<TickerSection />);
    const items = screen.getAllByText('DevOps & Platform Engineering');
    expect(items.length).toBeGreaterThan(0);
  });

  it('renders 12 service spans (6 services × 2 for marquee effect)', () => {
    const { container } = render(<TickerSection />);
    const spans = container.querySelectorAll('.ticker-track > span');
    expect(spans.length).toBe(12);
  });
});
