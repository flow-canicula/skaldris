import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CtaSection } from '@/components/sections/CtaSection';

describe('CtaSection', () => {
  it('renders without crashing', () => {
    render(<CtaSection />);
  });

  it('renders "Let\'s build" text', () => {
    render(<CtaSection />);
    expect(screen.getByText(/Let.s build/i)).toBeInTheDocument();
  });

  it('renders "something." text', () => {
    render(<CtaSection />);
    expect(screen.getByText('something.')).toBeInTheDocument();
  });

  it('renders "Available for consulting" eyebrow', () => {
    render(<CtaSection />);
    expect(screen.getByText(/Available for consulting/i)).toBeInTheDocument();
  });

  it('renders "Start a conversation" CTA button', () => {
    render(<CtaSection />);
    expect(screen.getByRole('link', { name: /Start a conversation/i })).toBeInTheDocument();
  });

  it('renders "Download CV" secondary button', () => {
    render(<CtaSection />);
    expect(screen.getByRole('link', { name: /Download CV/i })).toBeInTheDocument();
  });

  it('has a section landmark with id cta-heading', () => {
    render(<CtaSection />);
    expect(document.getElementById('cta-heading')).toBeInTheDocument();
  });

  it('renders the body paragraph about Metro Manila', () => {
    render(<CtaSection />);
    expect(screen.getByText(/Metro Manila/i)).toBeInTheDocument();
  });
});
