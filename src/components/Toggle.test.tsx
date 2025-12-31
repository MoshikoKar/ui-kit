import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders with label', () => {
    render(<Toggle label="Enable feature" />);
    expect(screen.getByText('Enable feature')).toBeInTheDocument();
  });

  it('renders as a switch role', () => {
    render(<Toggle />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('handles onChange events', () => {
    const handleChange = vi.fn();
    render(<Toggle onChange={handleChange} />);
    
    fireEvent.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('respects checked prop', () => {
    const { rerender } = render(<Toggle checked={false} onChange={() => {}} />);
    expect(screen.getByRole('switch')).not.toBeChecked();

    rerender(<Toggle checked={true} onChange={() => {}} />);
    expect(screen.getByRole('switch')).toBeChecked();
  });

  it('disables toggle when disabled', () => {
    render(<Toggle disabled label="Disabled toggle" />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('shows error state', () => {
    render(<Toggle error label="Error toggle" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-invalid', 'true');
  });

  it('handles keyboard interaction', () => {
    const handleChange = vi.fn();
    render(<Toggle onChange={handleChange} />);
    
    const container = screen.getByRole('button', { hidden: true });
    fireEvent.keyDown(container, { key: ' ' });
    
    // The click should have been triggered on the input
    expect(handleChange).toHaveBeenCalled();
  });

  it('has correct aria attributes', () => {
    render(<Toggle checked={true} onChange={() => {}} disabled error />);
    const toggle = screen.getByRole('switch');
    
    expect(toggle).toHaveAttribute('aria-checked', 'true');
    expect(toggle).toHaveAttribute('aria-disabled', 'true');
    expect(toggle).toHaveAttribute('aria-invalid', 'true');
  });
});

