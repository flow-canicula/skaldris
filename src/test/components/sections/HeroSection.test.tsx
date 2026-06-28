import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/sections/HeroSection';

describe('HeroSection', () => {
  it('renders without crashing', () => {
    render(<HeroSection />);
  });

  it('renders the hero heading with Jaime name', () => {
    render(<HeroSection />);
    // The h1 contains "Jaime"
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Jaime');
  });

  it('renders "Flow" handle in heading', () => {
    render(<HeroSection />);
    // "Flow" may be split across multiple text nodes; check the h1 contains it
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toContain('Flow');
  });

  it('renders Download CV link', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: /Download CV/i })).toBeInTheDocument();
  });

  it('renders Get in touch link', () => {
    render(<HeroSection />);
    expect(screen.getByRole('link', { name: /Get in touch/i })).toBeInTheDocument();
  });

  it('renders the subtitle with MTM', () => {
    render(<HeroSection />);
    expect(screen.getByText(/MTM/)).toBeInTheDocument();
  });

  it('has a heading element with id hero-heading', () => {
    render(<HeroSection />);
    expect(document.getElementById('hero-heading')).toBeInTheDocument();
  });
});
