import React from 'react';
import { cn } from '../utils/cn';

export type LoaderSize = 'sm' | 'md' | 'lg';
export type LoaderVariant = 'inline' | 'container';

/**
 * Props for the Spinner component.
 */
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the spinner. Defaults to 'md'. */
  size?: LoaderSize;
}

const sizeMultiplier: Record<LoaderSize, number> = {
  sm: 0.7,
  md: 1,
  lg: 1.3,
};

/**
 * A simple animated spinner component.
 * 
 * @example
 * ```tsx
 * <Spinner size="md" />
 * ```
 */
export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className, ...props }) => {
  const fontSize = 8 * sizeMultiplier[size];

  return (
    <div 
      className={cn('loader', className)} 
      style={{ fontSize: `${fontSize}px` }} 
      role="status"
      aria-label="Loading"
      {...props}
    >
      <div className="loader-face loader-face-1">
        <div className="loader-circle"></div>
      </div>
      <div className="loader-face loader-face-2">
        <div className="loader-circle"></div>
      </div>
    </div>
  );
};

/**
 * Props for the Loader component.
 */
export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the loader. Defaults to 'md'. */
  size?: LoaderSize;
  /** Display variant. 'inline' for inline usage, 'container' for full container. Defaults to 'inline'. */
  variant?: LoaderVariant;
  /** Optional label text displayed below the spinner. */
  label?: string;
}

/**
 * A loader component with optional label and container variant.
 * 
 * @example
 * ```tsx
 * // Inline loader
 * <Loader size="md" label="Loading..." />
 * 
 * // Container loader (fills parent container)
 * <Loader variant="container" label="Please wait..." />
 * ```
 */
export const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  variant = 'inline',
  label,
  className,
  ...props
}) => {
  const fontSize = 8 * sizeMultiplier[size];

  if (variant === 'container') {
    return (
      <div
        className={cn(
          'relative w-full min-h-[8rem] rounded-lg border border-border bg-surface-secondary flex items-center justify-center',
          className
        )}
        role="status"
        aria-label={label || 'Loading'}
        {...props}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="loader" style={{ fontSize: `${fontSize}px` }} aria-hidden="true">
            <div className="loader-face loader-face-1">
              <div className="loader-circle"></div>
            </div>
            <div className="loader-face loader-face-2">
              <div className="loader-circle"></div>
            </div>
          </div>
          {label && <span className="text-sm text-text-secondary">{label}</span>}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={cn('inline-flex items-center gap-2', className)} 
      role="status"
      aria-label={label || 'Loading'}
      {...props}
    >
      <div className="loader" style={{ fontSize: `${fontSize}px` }} aria-hidden="true">
        <div className="loader-face loader-face-1">
          <div className="loader-circle"></div>
        </div>
        <div className="loader-face loader-face-2">
          <div className="loader-circle"></div>
        </div>
      </div>
      {label && <span className="text-sm text-text-secondary">{label}</span>}
    </div>
  );
};
