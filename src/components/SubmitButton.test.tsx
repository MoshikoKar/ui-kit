import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SubmitButton } from './SubmitButton';

describe('SubmitButton', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders with default text', () => {
    render(<SubmitButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders with custom children', () => {
    render(<SubmitButton>Custom Text</SubmitButton>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has submit type', () => {
    render(<SubmitButton>Submit</SubmitButton>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('handles synchronous onSubmit', async () => {
    const handleSubmit = vi.fn();
    render(<SubmitButton onSubmit={handleSubmit}>Submit</SubmitButton>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('handles async onSubmit', async () => {
    const handleSubmit = vi.fn().mockResolvedValue(undefined);
    render(<SubmitButton onSubmit={handleSubmit}>Submit</SubmitButton>);
    
    fireEvent.click(screen.getByRole('button'));
    
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });
  });

  it('prevents multiple submissions (race condition)', async () => {
    const handleSubmit = vi.fn().mockImplementation(() => new Promise((resolve) => {
      setTimeout(resolve, 100);
    }));
    
    render(<SubmitButton onSubmit={handleSubmit}>Submit</SubmitButton>);
    
    const button = screen.getByRole('button');
    
    // Click multiple times quickly
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    
    // Should only be called once due to isSubmitting check
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('shows loading state during submission', async () => {
    const handleSubmit = vi.fn().mockImplementation(() => new Promise((resolve) => {
      setTimeout(resolve, 100);
    }));
    
    render(<SubmitButton onSubmit={handleSubmit}>Submit</SubmitButton>);
    
    fireEvent.click(screen.getByRole('button'));
    
    // Should show loading state
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('disables button when disabled prop is true', () => {
    render(<SubmitButton disabled>Submit</SubmitButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('applies variant classes', () => {
    const { rerender } = render(<SubmitButton variant="primary">Submit</SubmitButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-[#dbeafe]');

    rerender(<SubmitButton variant="danger">Submit</SubmitButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-[#fecaca]');
  });

  it('resets success state after timeout', async () => {
    const handleSubmit = vi.fn().mockResolvedValue(undefined);
    render(<SubmitButton onSubmit={handleSubmit}>Submit</SubmitButton>);
    
    fireEvent.click(screen.getByRole('button'));
    
    // Wait for async operation
    await vi.waitFor(() => {
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Submission successful');
    });
    
    // Advance timers by 3 seconds
    vi.advanceTimersByTime(3000);
    
    // Should reset aria-label
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Submit');
  });

  it('handles errors gracefully', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    const handleSubmit = vi.fn().mockRejectedValue(new Error('Test error'));
    
    render(<SubmitButton onSubmit={handleSubmit}>Submit</SubmitButton>);
    
    fireEvent.click(screen.getByRole('button'));
    
    await waitFor(() => {
      expect(consoleError).toHaveBeenCalledWith('Submit failed:', expect.any(Error));
    });
    
    consoleError.mockRestore();
  });

  it('calls onClick in addition to onSubmit', async () => {
    const handleSubmit = vi.fn().mockResolvedValue(undefined);
    const handleClick = vi.fn();
    
    render(
      <SubmitButton onSubmit={handleSubmit} onClick={handleClick}>
        Submit
      </SubmitButton>
    );
    
    fireEvent.click(screen.getByRole('button'));
    
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});

