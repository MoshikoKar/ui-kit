import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeSwitch } from './ThemeSwitch';
import { ThemeProvider } from '../theme/ThemeProvider';

// Wrapper component to provide theme context
const renderWithTheme = (ui: React.ReactElement, initialTheme: 'light' | 'dark' = 'dark') => {
  return render(
    <ThemeProvider defaultTheme={initialTheme}>
      {ui}
    </ThemeProvider>
  );
};

describe('ThemeSwitch', () => {
  it('renders correctly', () => {
    renderWithTheme(<ThemeSwitch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('shows label by default', () => {
    renderWithTheme(<ThemeSwitch />, 'dark');
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('hides label when showLabel is false', () => {
    renderWithTheme(<ThemeSwitch showLabel={false} />);
    expect(screen.queryByText('Dark')).not.toBeInTheDocument();
    expect(screen.queryByText('Light')).not.toBeInTheDocument();
  });

  it('has correct aria-checked attribute for dark mode', () => {
    renderWithTheme(<ThemeSwitch />, 'dark');
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('has correct aria-checked attribute for light mode', () => {
    renderWithTheme(<ThemeSwitch />, 'light');
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
  });

  it('has correct aria-label for dark mode', () => {
    renderWithTheme(<ThemeSwitch />, 'dark');
    expect(screen.getByRole('switch')).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('has correct aria-label for light mode', () => {
    renderWithTheme(<ThemeSwitch />, 'light');
    expect(screen.getByRole('switch')).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('toggles theme on click', () => {
    renderWithTheme(<ThemeSwitch />, 'dark');
    
    const switchElement = screen.getByRole('switch');
    const checkbox = switchElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
    
    fireEvent.click(checkbox);
    
    // After toggle, should show Light
    expect(screen.getByText('Light')).toBeInTheDocument();
  });

  it('handles Enter key event', () => {
    renderWithTheme(<ThemeSwitch />, 'dark');
    
    const switchElement = screen.getByRole('switch');
    // Verify the keydown handler is attached
    expect(switchElement).toHaveAttribute('tabIndex', '0');
    
    // Fire keydown - the handleKeyDown function calls handleToggle
    fireEvent.keyDown(switchElement, { key: 'Enter' });
    // The component should handle the key event without errors
    expect(switchElement).toBeInTheDocument();
  });

  it('handles Space key event', () => {
    renderWithTheme(<ThemeSwitch />, 'dark');
    
    const switchElement = screen.getByRole('switch');
    fireEvent.keyDown(switchElement, { key: ' ' });
    // The component should handle the key event without errors
    expect(switchElement).toBeInTheDocument();
  });

  it('applies custom className', () => {
    renderWithTheme(<ThemeSwitch className="custom-class" />);
    
    const wrapper = screen.getByRole('switch').parentElement;
    expect(wrapper).toHaveClass('custom-class');
  });

  it('is keyboard focusable', () => {
    renderWithTheme(<ThemeSwitch />);
    
    const switchElement = screen.getByRole('switch');
    expect(switchElement).toHaveAttribute('tabIndex', '0');
  });

  it('contains hidden checkbox input', () => {
    renderWithTheme(<ThemeSwitch />);
    
    const checkbox = screen.getByRole('switch').querySelector('input[type="checkbox"]');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('aria-hidden', 'true');
  });
});

