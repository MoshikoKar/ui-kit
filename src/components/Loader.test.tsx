import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loader, Spinner } from './Loader';

describe('Spinner', () => {
  it('renders with default size', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has aria-label for accessibility', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading');
  });

  it('applies custom className', () => {
    render(<Spinner className="custom-class" />);
    expect(screen.getByRole('status')).toHaveClass('custom-class');
  });
});

describe('Loader', () => {
  it('renders inline variant by default', () => {
    render(<Loader />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Loader label="Loading data..." />);
    expect(screen.getByText('Loading data...')).toBeInTheDocument();
  });

  it('renders container variant', () => {
    render(<Loader variant="container" />);
    expect(screen.getByRole('status')).toHaveClass('min-h-[8rem]');
  });

  it('renders container variant with label', () => {
    render(<Loader variant="container" label="Please wait..." />);
    expect(screen.getByText('Please wait...')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Loader className="custom-class" />);
    expect(screen.getByRole('status')).toHaveClass('custom-class');
  });

  it('has aria-label for accessibility', () => {
    render(<Loader label="Loading items" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading items');
  });
});

