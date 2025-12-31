import React from 'react';
import { cn } from '../utils/cn';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

/**
 * Props for the Tooltip component.
 */
export interface TooltipProps {
  /** Whether the tooltip is currently open. */
  open: boolean;
  /** Callback when the tooltip open state should change. */
  onOpenChange?: (open: boolean) => void;
  /** Content to display inside the tooltip. */
  content: React.ReactNode;
  /** Position of the tooltip relative to the trigger. Defaults to 'top'. */
  position?: TooltipPosition;
  /** Delay in milliseconds before showing the tooltip. Defaults to 0. */
  delay?: number;
  /** Whether the tooltip is disabled. */
  disabled?: boolean;
  /** The trigger element that the tooltip is attached to. */
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  /** Additional className for the wrapper. */
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

/**
 * A tooltip component with keyboard and focus support.
 * Supports interactive content by not closing when focus moves within the tooltip.
 * 
 * @example
 * ```tsx
 * const [open, setOpen] = React.useState(false);
 * 
 * <Tooltip 
 *   open={open} 
 *   onOpenChange={setOpen} 
 *   content="Helpful information"
 * >
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */
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
  const tooltipRef = React.useRef<HTMLSpanElement>(null);
  const wrapperRef = React.useRef<HTMLSpanElement>(null);

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

  const child = React.Children.only(children) as React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  const tooltipId = React.useId();

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    // Only close if focus moved outside both tooltip and trigger
    const relatedTarget = e.relatedTarget as Node | null;
    const isInsideWrapper = wrapperRef.current?.contains(relatedTarget);
    const isInsideTooltip = tooltipRef.current?.contains(relatedTarget);
    
    if (!isInsideWrapper && !isInsideTooltip) {
      requestClose();
    }
    child.props.onBlur?.(e);
  };

  return (
    <span ref={wrapperRef} className={cn('relative inline-block', className)}>
      {React.cloneElement(child, {
        'aria-describedby': open && !disabled ? tooltipId : undefined,
        onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onMouseEnter?.(e);
          requestOpen();
        },
        onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
          child.props.onMouseLeave?.(e);
          // Don't close if moving to tooltip content
          const relatedTarget = e.relatedTarget as Node | null;
          if (!tooltipRef.current?.contains(relatedTarget)) {
            requestClose();
          }
        },
        onFocus: (e: React.FocusEvent<HTMLElement>) => {
          child.props.onFocus?.(e);
          requestOpen();
        },
        onBlur: handleBlur,
      } as Partial<React.HTMLAttributes<HTMLElement>>)}

      {open && !disabled && (
        <span
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          className={cn(
            'absolute z-50',
            positionClasses[position],
            'whitespace-nowrap',
            'rounded-md border border-border bg-surface text-text-primary',
            'px-3 py-2 text-xs shadow-md'
          )}
          onMouseEnter={requestOpen}
          onMouseLeave={requestClose}
        >
          {content}
          {/* Arrow border */}
          <span
            className={cn(
              'absolute w-0 h-0 pointer-events-none',
              arrowClasses[position],
              arrowBorderClasses[position]
            )}
          />
          {/* Arrow fill */}
          <span
            className={cn(
              'absolute w-0 h-0 bg-surface pointer-events-none',
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
