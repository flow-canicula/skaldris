import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CredentialsSection } from '@/components/sections/CredentialsSection';

describe('CredentialsSection', () => {
  it('renders without crashing', () => {
    render(<CredentialsSection />);
  });

  it('renders "Amazon Web Services" issuer', () => {
    render(<CredentialsSection />);
    expect(screen.getByText('Amazon Web Services')).toBeInTheDocument();
  });

  it('renders "Scrum.org" issuer', () => {
    render(<CredentialsSection />);
    expect(screen.getByText('Scrum.org')).toBeInTheDocument();
  });

  it('renders "Issued by" labels', () => {
    render(<CredentialsSection />);
    const issuedBy = screen.getAllByText('Issued by');
    expect(issuedBy.length).toBeGreaterThanOrEqual(2);
  });

  it('renders AWS Solutions Architect Professional cert', () => {
    render(<CredentialsSection />);
    expect(screen.getByText(/Solutions Architect.*Professional/)).toBeInTheDocument();
  });

  it('renders PSM II cert', () => {
    render(<CredentialsSection />);
    expect(screen.getByText(/PSM II/)).toBeInTheDocument();
  });

  it('renders all 9 certifications', () => {
    render(<CredentialsSection />);
    // 6 AWS + 3 Scrum.org = 9 list items
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(9);
  });
});
