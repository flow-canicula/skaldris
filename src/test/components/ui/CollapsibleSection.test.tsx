import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CollapsibleGroup } from '@/components/ui/CollapsibleSection';

const TEST_SECTIONS = [
  {
    eyebrow: '01 — About',
    title: 'About title',
    children: <div>About body content</div>,
  },
  {
    eyebrow: '02 — Experience',
    title: 'Experience title',
    children: <div>Experience body content</div>,
  },
];

describe('CollapsibleGroup', () => {
  it('renders without crashing', () => {
    render(<CollapsibleGroup sections={TEST_SECTIONS} />);
  });

  it('renders trigger buttons for each section', () => {
    render(<CollapsibleGroup sections={TEST_SECTIONS} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('renders section eyebrows', () => {
    render(<CollapsibleGroup sections={TEST_SECTIONS} />);
    expect(screen.getByText('01 — About')).toBeInTheDocument();
    expect(screen.getByText('02 — Experience')).toBeInTheDocument();
  });

  it('renders section titles', () => {
    render(<CollapsibleGroup sections={TEST_SECTIONS} />);
    expect(screen.getByText('About title')).toBeInTheDocument();
    expect(screen.getByText('Experience title')).toBeInTheDocument();
  });

  it('all sections start collapsed (aria-expanded false)', () => {
    render(<CollapsibleGroup sections={TEST_SECTIONS} />);
    const buttons = screen.getAllByRole('button');
    for (const btn of buttons) {
      expect(btn).toHaveAttribute('aria-expanded', 'false');
    }
  });

  it('clicking a trigger sets aria-expanded to true', () => {
    render(<CollapsibleGroup sections={TEST_SECTIONS} />);
    const [firstButton] = screen.getAllByRole('button');
    fireEvent.click(firstButton!);
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('clicking same trigger again collapses it (aria-expanded false)', () => {
    render(<CollapsibleGroup sections={TEST_SECTIONS} />);
    const [firstButton] = screen.getAllByRole('button');
    fireEvent.click(firstButton!);
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(firstButton!);
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('only one section can be open at a time (accordion behavior)', () => {
    render(<CollapsibleGroup sections={TEST_SECTIONS} />);
    const [firstButton, secondButton] = screen.getAllByRole('button');
    fireEvent.click(firstButton!);
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    expect(secondButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(secondButton!);
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('trigger button has aria-controls pointing to the body panel', () => {
    render(<CollapsibleGroup sections={TEST_SECTIONS} />);
    const [firstButton] = screen.getAllByRole('button');
    const controls = firstButton?.getAttribute('aria-controls');
    expect(controls).toBeTruthy();
    expect(document.getElementById(controls!)).toBeInTheDocument();
  });
});
