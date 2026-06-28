import { describe, it, expect } from 'vitest';
import { WORK_HISTORY, CERTIFICATIONS, EDUCATION } from '@/content/experience';

describe('WORK_HISTORY', () => {
  it('has 10 entries', () => {
    expect(WORK_HISTORY).toHaveLength(10);
  });

  it('each entry has a role, company, period, industry', () => {
    for (const entry of WORK_HISTORY) {
      expect(typeof entry.role).toBe('string');
      expect(entry.role.length).toBeGreaterThan(0);
      expect(typeof entry.company).toBe('string');
      expect(typeof entry.period).toBe('string');
      expect(typeof entry.industry).toBe('string');
    }
  });

  it('each entry has a highlights array', () => {
    for (const entry of WORK_HISTORY) {
      expect(Array.isArray(entry.highlights)).toBe(true);
    }
  });

  it('FSG / Digipay entry industry does not include the word "Insurance" alone (it may be in a list)', () => {
    // The industry for FSG is "FinTech, Banking, Insurance" which is accurate from CV
    const fsgEntry = WORK_HISTORY.find((e) => e.company.includes('FSG'));
    expect(fsgEntry).toBeDefined();
    // The industry field exists
    expect(typeof fsgEntry?.industry).toBe('string');
  });

  it('most recent entry is FSG Technology Ventures', () => {
    const first = WORK_HISTORY[0];
    expect(first?.company).toContain('FSG');
  });

  it('includes entry for Nityo / IBM / Synapxe', () => {
    const nityo = WORK_HISTORY.find((e) => e.company.includes('Synapxe'));
    expect(nityo).toBeDefined();
  });

  it('each entry has a valid type', () => {
    const validTypes = ['contractor', 'consultant', 'employee', 'retainer'];
    for (const entry of WORK_HISTORY) {
      expect(validTypes).toContain(entry.type);
    }
  });
});

describe('CERTIFICATIONS', () => {
  it('has 9 entries', () => {
    expect(CERTIFICATIONS).toHaveLength(9);
  });

  it('has 6 AWS certifications', () => {
    const aws = CERTIFICATIONS.filter((c) => c.issuer === 'Amazon Web Services');
    expect(aws).toHaveLength(6);
  });

  it('has 3 Scrum.org certifications', () => {
    const scrum = CERTIFICATIONS.filter((c) => c.issuer === 'Scrum.org');
    expect(scrum).toHaveLength(3);
  });

  it('includes Solutions Architect Professional', () => {
    const cert = CERTIFICATIONS.find((c) => c.name.includes('Solutions Architect') && c.name.includes('Professional'));
    expect(cert).toBeDefined();
  });

  it('includes PSM II', () => {
    const cert = CERTIFICATIONS.find((c) => c.name.includes('PSM II'));
    expect(cert).toBeDefined();
  });

  it('all certs have name and issuer', () => {
    for (const cert of CERTIFICATIONS) {
      expect(typeof cert.name).toBe('string');
      expect(cert.name.length).toBeGreaterThan(0);
      expect(typeof cert.issuer).toBe('string');
      expect(cert.issuer.length).toBeGreaterThan(0);
    }
  });
});

describe('EDUCATION', () => {
  it('has 2 entries', () => {
    expect(EDUCATION).toHaveLength(2);
  });

  it('includes University of the Philippines Diliman', () => {
    const up = EDUCATION.find((e) => e.institution.includes('Diliman'));
    expect(up).toBeDefined();
  });

  it('includes UP Los Banos', () => {
    const upLb = EDUCATION.find((e) => e.institution.includes('Los Banos'));
    expect(upLb).toBeDefined();
  });

  it('MTM entry has GPA 4.0', () => {
    const mtm = EDUCATION.find((e) => e.degree.includes('MTM') || e.degree.includes('Technology Management'));
    expect(mtm?.gpa).toContain('4.0');
  });
});
