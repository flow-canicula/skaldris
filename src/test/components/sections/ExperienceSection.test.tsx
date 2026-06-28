import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExperienceSection } from '@/components/sections/ExperienceSection';

describe('ExperienceSection', () => {
  it('renders without crashing', () => {
    render(<ExperienceSection />);
  });

  it('renders the Full CV download link', () => {
    render(<ExperienceSection />);
    expect(screen.getByRole('link', { name: /Full CV/i })).toBeInTheDocument();
  });

  it('renders the FSG / Digipay role', () => {
    render(<ExperienceSection />);
    expect(screen.getByText(/Software Architect/)).toBeInTheDocument();
  });

  it('renders the Nityo / IBM / Synapxe entry', () => {
    render(<ExperienceSection />);
    // Multiple Nityo entries exist; check at least one renders
    const nityo = screen.getAllByText(/Nityo/);
    expect(nityo.length).toBeGreaterThan(0);
  });

  it('renders 10 work history entries', () => {
    const { container } = render(<ExperienceSection />);
    const rows = container.querySelectorAll('.exp-row');
    expect(rows.length).toBe(10);
  });

  it('renders FinTech industry label', () => {
    render(<ExperienceSection />);
    // Multiple FinTech entries exist (FSG, Cynder, Flying Cockatoo)
    const fintechLabels = screen.getAllByText(/FinTech/);
    expect(fintechLabels.length).toBeGreaterThan(0);
  });
});
