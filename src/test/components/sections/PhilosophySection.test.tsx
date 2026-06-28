import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PhilosophySection } from '@/components/sections/PhilosophySection';

describe('PhilosophySection', () => {
  it('renders without crashing', () => {
    render(<PhilosophySection />);
  });

  it('renders the Philosophy eyebrow', () => {
    render(<PhilosophySection />);
    expect(screen.getByText(/Philosophy/i)).toBeInTheDocument();
  });

  it('renders "scales teams" text', () => {
    render(<PhilosophySection />);
    expect(screen.getByText(/scales teams/i)).toBeInTheDocument();
  });

  it('renders "outlasts hype" text', () => {
    render(<PhilosophySection />);
    expect(screen.getByText(/outlasts hype/i)).toBeInTheDocument();
  });

  it('renders "people first" text', () => {
    render(<PhilosophySection />);
    expect(screen.getByText(/people first/i)).toBeInTheDocument();
  });

  it('renders the caption about strategy', () => {
    render(<PhilosophySection />);
    expect(screen.getByText(/Strategy before stack/i)).toBeInTheDocument();
  });

  it('renders as a section landmark', () => {
    render(<PhilosophySection />);
    expect(screen.getByRole('region')).toBeInTheDocument();
  });
});
