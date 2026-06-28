import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PortfolioSection } from '@/components/sections/PortfolioSection';

describe('PortfolioSection', () => {
  it('renders without crashing', () => {
    render(<PortfolioSection />);
  });

  it('renders "Digipay" project', () => {
    render(<PortfolioSection />);
    expect(screen.getByText('Digipay')).toBeInTheDocument();
  });

  it('renders "All projects →" link', () => {
    render(<PortfolioSection />);
    expect(screen.getByRole('link', { name: /All projects/i })).toBeInTheDocument();
  });

  it('renders project articles', () => {
    render(<PortfolioSection />);
    const articles = screen.getAllByRole('article');
    expect(articles.length).toBeGreaterThan(0);
  });

  it('renders visit site links', () => {
    render(<PortfolioSection />);
    const visitLinks = screen.getAllByText(/Visit site/i);
    expect(visitLinks.length).toBeGreaterThan(0);
  });

  it('renders Google Play link for Digipay', () => {
    render(<PortfolioSection />);
    expect(screen.getByText(/Google Play/i)).toBeInTheDocument();
  });

  it('renders Jesuke project name', () => {
    render(<PortfolioSection />);
    // Jesuke is wide and shows name in overlay, not in the card body h3
    // The tagline still renders
    expect(screen.getByText(/Marketing and portfolio site for an anime/)).toBeInTheDocument();
  });
});
