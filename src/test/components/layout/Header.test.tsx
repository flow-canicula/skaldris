import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/layout/Header';

describe('Header', () => {
  it('renders a header landmark', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the home link', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /skaldris.*home/i })).toBeInTheDocument();
  });

  it('home link points to /', () => {
    render(<Header />);
    const link = screen.getByRole('link', { name: /skaldris.*home/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders the wordmark or home link with Skaldris in the label', () => {
    render(<Header />);
    // Wordmark is in aria-label of the home link, not as visible text
    expect(screen.getByRole('link', { name: /skaldris/i })).toBeInTheDocument();
  });

  it('renders navigation', () => {
    render(<Header />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  });
});
