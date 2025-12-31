import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CookieConsent } from './CookieConsent';

const defaultProps = {
  title: 'Cookie Notice',
  description: 'We use cookies to improve your experience.',
  privacyLink: '/privacy',
  privacyLinkText: 'Privacy Policy',
  acceptLabel: 'Accept',
  optionsLabel: 'Options',
  onAccept: vi.fn(),
  onOptions: vi.fn(),
  storageKey: 'test-cookie-consent',
  storageValue: 'accepted',
};

describe('CookieConsent', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders when no consent stored', () => {
    render(<CookieConsent {...defaultProps} />);
    
    expect(screen.getByText('Cookie Notice')).toBeInTheDocument();
    expect(screen.getByText('We use cookies to improve your experience.')).toBeInTheDocument();
  });

  it('does not render when consent already stored', () => {
    localStorage.setItem('test-cookie-consent', 'accepted');
    
    render(<CookieConsent {...defaultProps} />);
    
    expect(screen.queryByText('Cookie Notice')).not.toBeInTheDocument();
  });

  it('renders privacy link correctly', () => {
    render(<CookieConsent {...defaultProps} />);
    
    const link = screen.getByText('Privacy Policy');
    expect(link).toHaveAttribute('href', '/privacy');
  });

  it('renders accept button', () => {
    render(<CookieConsent {...defaultProps} />);
    
    expect(screen.getByRole('button', { name: 'Accept' })).toBeInTheDocument();
  });

  it('renders options button', () => {
    render(<CookieConsent {...defaultProps} />);
    
    expect(screen.getByRole('button', { name: 'Options' })).toBeInTheDocument();
  });

  it('calls onAccept and stores consent when accept clicked', () => {
    const onAccept = vi.fn();
    render(<CookieConsent {...defaultProps} onAccept={onAccept} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Accept' }));
    
    expect(onAccept).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem('test-cookie-consent')).toBe('accepted');
  });

  it('hides component after accept', () => {
    render(<CookieConsent {...defaultProps} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Accept' }));
    
    expect(screen.queryByText('Cookie Notice')).not.toBeInTheDocument();
  });

  it('calls onOptions when options clicked', () => {
    const onOptions = vi.fn();
    render(<CookieConsent {...defaultProps} onOptions={onOptions} />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Options' }));
    
    expect(onOptions).toHaveBeenCalledTimes(1);
  });

  it('renders custom icon when provided', () => {
    const icon = <svg data-testid="custom-icon" />;
    render(<CookieConsent {...defaultProps} icon={icon} />);
    
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<CookieConsent {...defaultProps} className="custom-class" />);
    
    expect(container.querySelector('article')).toHaveClass('custom-class');
  });

  it('applies privacy link target and rel', () => {
    render(
      <CookieConsent 
        {...defaultProps} 
        privacyLinkTarget="_blank" 
        privacyLinkRel="noopener noreferrer" 
      />
    );
    
    const link = screen.getByText('Privacy Policy');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies custom button classNames', () => {
    render(
      <CookieConsent 
        {...defaultProps} 
        acceptButtonClassName="accept-custom"
        optionsButtonClassName="options-custom"
      />
    );
    
    expect(screen.getByRole('button', { name: 'Accept' })).toHaveClass('accept-custom');
    expect(screen.getByRole('button', { name: 'Options' })).toHaveClass('options-custom');
  });

  it('applies custom content className', () => {
    const { container } = render(
      <CookieConsent {...defaultProps} contentClassName="content-custom" />
    );
    
    expect(container.querySelector('.content-custom')).toBeInTheDocument();
  });

  it('applies custom icon className', () => {
    const icon = <svg data-testid="custom-icon" />;
    const { container } = render(
      <CookieConsent {...defaultProps} icon={icon} iconClassName="icon-custom" />
    );
    
    expect(container.querySelector('.icon-custom')).toBeInTheDocument();
  });

  it('uses correct storage key', () => {
    render(<CookieConsent {...defaultProps} storageKey="custom-key" />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Accept' }));
    
    expect(localStorage.getItem('custom-key')).toBe('accepted');
  });

  it('uses correct storage value', () => {
    render(<CookieConsent {...defaultProps} storageValue="custom-value" />);
    
    fireEvent.click(screen.getByRole('button', { name: 'Accept' }));
    
    expect(localStorage.getItem('test-cookie-consent')).toBe('custom-value');
  });
});

