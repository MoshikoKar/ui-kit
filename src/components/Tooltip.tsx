import React from 'react';
import { cn } from '../utils/cn';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  content: React.ReactNode;
  position?: TooltipPosition;
  delay?: number;
  disabled?: boolean;
  children: React.ReactElement;
  className?: string;
}

const positionClasses: Record<TooltipPosition, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-1',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-1',
  left: 'right-full top-1/2 -translate-y-1/2 mr-1',
  right: 'left-full top-1/2 -translate-y-1/2 ml-1',
};

const arrowClasses: Record<TooltipPosition, string> = {
  top: 'top-full left-1/2 -translate-x-1/2 -mt-px',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-px',
  left: 'left-full top-1/2 -translate-y-1/2 -ml-px',
  right: 'right-full top-1/2 -translate-y-1/2 -mr-px',
};

const arrowBorderClasses: Record<TooltipPosition, string> = {
  top: 'border-t-border border-r-transparent border-b-transparent border-l-transparent border-t-[6px] border-r-[6px] border-l-[6px]',
  bottom: 'border-b-border border-r-transparent border-t-transparent border-l-transparent border-b-[6px] border-r-[6px] border-l-[6px]',
  left: 'border-l-border border-r-transparent border-t-transparent border-b-transparent border-l-[6px] border-t-[6px] border-b-[6px]',
  right: 'border-r-border border-l-transparent border-t-transparent border-b-transparent border-r-[6px] border-t-[6px] border-b-[6px]',
};

const arrowFillClasses: Record<TooltipPosition, string> = {
  top: 'top-full left-1/2 -translate-x-1/2 -mt-[5px]',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-[5px]',
  left: 'left-full top-1/2 -translate-y-1/2 -ml-[5px]',
  right: 'right-full top-1/2 -translate-y-1/2 -mr-[5px]',
};

export const Tooltip: React.FC<TooltipProps> = ({
  open,
  onOpenChange,
  content,
  position = 'top',
  delay = 0,
  disabled = false,
  children,
  className,
}) => {
  const timerRef = React.useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  React.useEffect(() => clearTimer, []);

  const requestOpen = () => {
    if (disabled) return;
    clearTimer();
    if (delay > 0) {
      timerRef.current = window.setTimeout(() => onOpenChange?.(true), delay);
      return;
    }
    onOpenChange?.(true);
  };

  const requestClose = () => {
    clearTimer();
    onOpenChange?.(false);
  };

  const child = React.Children.only(children);

  return (
    <span className={cn('relative inline-block', className)}>
      {React.cloneElement(child, {
        onMouseEnter: (e: React.MouseEvent) => {
          child.props.onMouseEnter?.(e);
          requestOpen();
        },
        onMouseLeave: (e: React.MouseEvent) => {
          child.props.onMouseLeave?.(e);
          requestClose();
        },
        onFocus: (e: React.FocusEvent) => {
          child.props.onFocus?.(e);
          requestOpen();
        },
        onBlur: (e: React.FocusEvent) => {
          child.props.onBlur?.(e);
          requestClose();
        },
      })}

      {open && !disabled && (
        <span
          role="tooltip"
          className={cn(
            'absolute z-50 pointer-events-none',
            positionClasses[position],
            'whitespace-nowrap',
            'rounded-md border border-border bg-surface text-text-primary',
            'px-3 py-2 text-xs shadow-md'
          )}
        >
          {content}
          {/* Arrow border */}
          <span
            className={cn(
              'absolute w-0 h-0',
              arrowClasses[position],
              arrowBorderClasses[position]
            )}
          />
          {/* Arrow fill */}
          <span
            className={cn(
              'absolute w-0 h-0 bg-surface',
              arrowFillClasses[position],
              position === 'top' && 'border-t-[5px] border-r-[5px] border-l-[5px] border-t-surface border-r-transparent border-l-transparent',
              position === 'bottom' && 'border-b-[5px] border-r-[5px] border-l-[5px] border-b-surface border-r-transparent border-l-transparent',
              position === 'left' && 'border-l-[5px] border-t-[5px] border-b-[5px] border-l-surface border-t-transparent border-b-transparent',
              position === 'right' && 'border-r-[5px] border-t-[5px] border-b-[5px] border-r-surface border-t-transparent border-b-transparent'
            )}
          />
        </span>
      )}
    </span>
  );
};


