import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SocialLinks, SocialLink } from './SocialLinks';

const mockLinks: SocialLink[] = [
  { platform: 'github', url: 'https://github.com/test' },
  { platform: 'linkedin', url: 'https://linkedin.com/in/test' },
  { platform: 'x', url: 'https://x.com/test', label: 'Follow on X' },
];

describe('SocialLinks', () => {
  it('renders correctly with links', () => {
    render(<SocialLinks links={mockLinks} />);
    
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('renders correct number of links', () => {
    render(<SocialLinks links={mockLinks} />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
  });

  it('renders links with correct href', () => {
    render(<SocialLinks links={mockLinks} />);
    
    expect(screen.getByLabelText('GitHub')).toHaveAttribute('href', 'https://github.com/test');
    expect(screen.getByLabelText('LinkedIn')).toHaveAttribute('href', 'https://linkedin.com/in/test');
    expect(screen.getByLabelText('Follow on X')).toHaveAttribute('href', 'https://x.com/test');
  });

  it('uses custom label when provided', () => {
    render(<SocialLinks links={mockLinks} />);
    
    expect(screen.getByLabelText('Follow on X')).toBeInTheDocument();
  });

  it('uses default label when custom label not provided', () => {
    render(<SocialLinks links={mockLinks} />);
    
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
  });

  it('opens links in new tab with security attributes', () => {
    render(<SocialLinks links={mockLinks} />);
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('renders with vertical orientation by default', () => {
    const { container } = render(<SocialLinks links={mockLinks} />);
    
    const list = container.querySelector('ul');
    expect(list).not.toHaveClass('listHorizontal');
  });

  it('renders with horizontal orientation when specified', () => {
    const { container } = render(<SocialLinks links={mockLinks} orientation="horizontal" />);
    
    const list = container.querySelector('ul');
    expect(list?.className).toContain('listHorizontal');
  });

  it('applies custom className', () => {
    render(<SocialLinks links={mockLinks} className="custom-class" />);
    
    expect(screen.getByRole('list')).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<SocialLinks ref={ref} links={mockLinks} />);
    
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLUListElement);
  });

  it('renders all supported platforms', () => {
    const allPlatforms: SocialLink[] = [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'github', url: 'https://github.com' },
      { platform: 'instagram', url: 'https://instagram.com' },
      { platform: 'youtube', url: 'https://youtube.com' },
      { platform: 'facebook', url: 'https://facebook.com' },
      { platform: 'spotify', url: 'https://spotify.com' },
      { platform: 'telegram', url: 'https://telegram.org' },
      { platform: 'pinterest', url: 'https://pinterest.com' },
      { platform: 'x', url: 'https://x.com' },
    ];
    
    render(<SocialLinks links={allPlatforms} />);
    
    expect(screen.getAllByRole('link')).toHaveLength(9);
  });

  it('renders SVG icons for each platform', () => {
    render(<SocialLinks links={mockLinks} />);
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      const svg = link.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  it('sets correct data-social attribute', () => {
    render(<SocialLinks links={mockLinks} />);
    
    expect(screen.getByLabelText('GitHub')).toHaveAttribute('data-social', 'github');
    expect(screen.getByLabelText('LinkedIn')).toHaveAttribute('data-social', 'linkedin');
    expect(screen.getByLabelText('Follow on X')).toHaveAttribute('data-social', 'x');
  });

  it('renders tooltip for each link', () => {
    const { container } = render(<SocialLinks links={mockLinks} />);
    
    const tooltips = container.querySelectorAll('[class*="tooltip"]');
    expect(tooltips).toHaveLength(3);
  });
});

