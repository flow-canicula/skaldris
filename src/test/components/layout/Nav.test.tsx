import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import * as nextNavigation from 'next/navigation';
import { Nav } from '@/components/layout/Nav';

describe('Nav', () => {
  it('renders main navigation landmark', () => {
    render(<Nav />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  });

  it('renders Contact link', () => {
    render(<Nav />);
    expect(screen.getAllByRole('link', { name: /contact/i }).length).toBeGreaterThan(0);
  });

  it('renders mobile menu toggle button', () => {
    render(<Nav />);
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });

  it('opens mobile menu when toggle is clicked', () => {
    render(<Nav />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(toggle);
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();
  });

  it('mobile menu shows nav links when open', () => {
    render(<Nav />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    expect(screen.getAllByRole('list').length).toBeGreaterThan(0);
  });

  it('closes mobile menu when a link is clicked', () => {
    render(<Nav />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    const links = screen.getAllByRole('link', { name: /contact/i });
    fireEvent.click(links[links.length - 1]!);
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument();
  });

  it('sets aria-expanded=false when menu is closed', () => {
    render(<Nav />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('sets aria-expanded=true when menu is open', () => {
    render(<Nav />);
    const toggle = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(toggle);
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('marks active link with aria-current="page" for current pathname', () => {
    vi.spyOn(nextNavigation, 'usePathname').mockReturnValue('/contact');
    render(<Nav />);
    const activeLinks = screen.getAllByRole('link', { name: /contact/i }).filter(
      (el) => el.getAttribute('aria-current') === 'page'
    );
    expect(activeLinks.length).toBeGreaterThan(0);
  });
});
