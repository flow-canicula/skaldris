import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { SKILL_CATEGORIES } from '@/content/skills';

describe('SkillsSection', () => {
  it('renders without crashing', () => {
    render(<SkillsSection />);
  });

  it('renders all 7 category labels', () => {
    render(<SkillsSection />);
    for (const cat of SKILL_CATEGORIES) {
      expect(screen.getByText(cat.label)).toBeInTheDocument();
    }
  });

  it('renders Cloud & Infrastructure label', () => {
    render(<SkillsSection />);
    expect(screen.getByText('Cloud & Infrastructure')).toBeInTheDocument();
  });

  it('renders Backend label', () => {
    render(<SkillsSection />);
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  it('renders skill tags', () => {
    render(<SkillsSection />);
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });

  it('renders the technology count', () => {
    render(<SkillsSection />);
    const totalCount = SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0);
    expect(screen.getByText(new RegExp(String(totalCount)))).toBeInTheDocument();
  });
});
