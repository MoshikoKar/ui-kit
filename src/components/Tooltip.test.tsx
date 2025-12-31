import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders trigger element', () => {
    render(
      <Tooltip open={false} content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
  });

  it('shows tooltip when open', () => {
    render(
      <Tooltip open={true} content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip text');
  });

  it('hides tooltip when not open', () => {
    render(
      <Tooltip open={false} content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('calls onOpenChange on mouse enter', () => {
    const handleOpenChange = vi.fn();
    render(
      <Tooltip open={false} onOpenChange={handleOpenChange} content="Tooltip">
        <button>Trigger</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(screen.getByRole('button'));
    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });

  it('calls onOpenChange on mouse leave', () => {
    const handleOpenChange = vi.fn();
    render(
      <Tooltip open={true} onOpenChange={handleOpenChange} content="Tooltip">
        <button>Trigger</button>
      </Tooltip>
    );

    fireEvent.mouseLeave(screen.getByRole('button'));
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });

  it('does not show tooltip when disabled', () => {
    render(
      <Tooltip open={true} disabled content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('applies aria-describedby to trigger when open', () => {
    render(
      <Tooltip open={true} content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole('button', { name: 'Trigger' });
    const tooltip = screen.getByRole('tooltip');
    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
  });

  it('renders in different positions', () => {
    const { rerender } = render(
      <Tooltip open={true} position="top" content="Top">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('tooltip')).toHaveClass('bottom-full');

    rerender(
      <Tooltip open={true} position="bottom" content="Bottom">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('tooltip')).toHaveClass('top-full');
  });
});

