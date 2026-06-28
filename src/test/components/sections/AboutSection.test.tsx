import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutSection } from '@/components/sections/AboutSection';

describe('AboutSection', () => {
  it('renders without crashing', () => {
    render(<AboutSection />);
  });

  it('renders "Architect." text', () => {
    render(<AboutSection />);
    expect(screen.getByText('Architect.')).toBeInTheDocument();
  });

  it('renders "Leader." text', () => {
    render(<AboutSection />);
    expect(screen.getByText('Leader.')).toBeInTheDocument();
  });

  it('renders "Builder." text', () => {
    render(<AboutSection />);
    expect(screen.getByText('Builder.')).toBeInTheDocument();
  });

  it('renders the body paragraph about Technical Architect', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Technical Architect, Engineering Leader/)).toBeInTheDocument();
  });

  it('renders cert badges', () => {
    render(<AboutSection />);
    expect(screen.getByText(/AWS Certified/)).toBeInTheDocument();
    expect(screen.getByText(/PSM II/)).toBeInTheDocument();
  });
});
