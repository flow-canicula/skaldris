import { describe, it, expect } from 'vitest';
import { SKILL_CATEGORIES } from '@/content/skills';

describe('SKILL_CATEGORIES', () => {
  it('has 7 items', () => {
    expect(SKILL_CATEGORIES).toHaveLength(7);
  });

  it('each category has a label string', () => {
    for (const cat of SKILL_CATEGORIES) {
      expect(typeof cat.label).toBe('string');
      expect(cat.label.length).toBeGreaterThan(0);
    }
  });

  it('each category has a non-empty skills array', () => {
    for (const cat of SKILL_CATEGORIES) {
      expect(Array.isArray(cat.skills)).toBe(true);
      expect(cat.skills.length).toBeGreaterThan(0);
    }
  });

  it('includes a Cloud & Infrastructure category', () => {
    const cloudCat = SKILL_CATEGORIES.find((c) => c.label === 'Cloud & Infrastructure');
    expect(cloudCat).toBeDefined();
  });

  it('Cloud & Infrastructure category contains Kubernetes', () => {
    const cloudCat = SKILL_CATEGORIES.find((c) => c.label === 'Cloud & Infrastructure');
    expect(cloudCat?.skills.some((s) => s.includes('Kubernetes'))).toBe(true);
  });

  it('has distinct category labels', () => {
    const labels = SKILL_CATEGORIES.map((c) => c.label);
    const unique = new Set(labels);
    expect(unique.size).toBe(labels.length);
  });

  it('all skills are non-empty strings', () => {
    for (const cat of SKILL_CATEGORIES) {
      for (const skill of cat.skills) {
        expect(typeof skill).toBe('string');
        expect(skill.length).toBeGreaterThan(0);
      }
    }
  });
});
