import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WhatIDoSection } from '@/components/sections/WhatIDoSection';

describe('WhatIDoSection', () => {
  it('renders without crashing', () => {
    render(<WhatIDoSection />);
  });

  it('renders "What I do" eyebrow', () => {
    render(<WhatIDoSection />);
    expect(screen.getByText(/What I do/i)).toBeInTheDocument();
  });

  it('renders "Architect first." heading text', () => {
    render(<WhatIDoSection />);
    // "Architect" appears multiple times; check heading level 2 contains it
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2.textContent).toContain('Architect');
  });

  it('renders "Engineer" in heading', () => {
    render(<WhatIDoSection />);
    // "Engineer" appears in heading and tag; check heading contains it
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2.textContent).toContain('Engineer');
  });

  it('renders the body copy about cloud platforms', () => {
    render(<WhatIDoSection />);
    expect(screen.getByText(/cloud platforms/i)).toBeInTheDocument();
  });

  it('renders the 13+ years stat', () => {
    render(<WhatIDoSection />);
    expect(screen.getByText('13+')).toBeInTheDocument();
  });

  it('renders the 6× AWS stat', () => {
    render(<WhatIDoSection />);
    expect(screen.getByText('6×')).toBeInTheDocument();
  });

  it('renders the 4.0 GPA stat', () => {
    render(<WhatIDoSection />);
    expect(screen.getByText('4.0')).toBeInTheDocument();
  });

  it('renders Engineering Leadership tag', () => {
    render(<WhatIDoSection />);
    expect(screen.getByText('Engineering Leadership')).toBeInTheDocument();
  });
});
