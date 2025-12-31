import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders with placeholder', () => {
    render(<SearchBar placeholder="Search..." />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders as search input type', () => {
    render(<SearchBar placeholder="Search" />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('handles onChange events', () => {
    const handleChange = vi.fn();
    render(<SearchBar onChange={handleChange} />);
    
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'test query' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<SearchBar ref={ref} />);
    
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLInputElement);
  });

  it('applies custom className', () => {
    const { container } = render(<SearchBar className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies inputClassName to input', () => {
    render(<SearchBar inputClassName="input-custom" />);
    expect(screen.getByRole('searchbox')).toHaveClass('input-custom');
  });

  it('renders search icon', () => {
    const { container } = render(<SearchBar />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });

  it('uses responsive width classes instead of JavaScript calculation', () => {
    const { container } = render(<SearchBar placeholder="Long placeholder text" />);
    // Should have responsive width classes
    expect(container.firstChild).toHaveClass('w-full');
    expect(container.firstChild).toHaveClass('max-w-md');
  });
});

