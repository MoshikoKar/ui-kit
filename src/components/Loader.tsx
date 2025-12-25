import React from 'react';
import { cn } from '../utils/cn';

export type LoaderSize = 'sm' | 'md' | 'lg';
export type LoaderVariant = 'inline' | 'container';

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  size?: LoaderSize;
}

const sizePx: Record<LoaderSize, number> = {
  sm: 14,
  md: 18,
  lg: 24,
};

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className, ...props }) => {
  const px = sizePx[size];

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label="Loading"
      className={cn('animate-spin text-text-primary', className)}
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        className="opacity-25"
      />
      <path
        fill="currentColor"
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: LoaderSize;
  variant?: LoaderVariant;
  label?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  variant = 'inline',
  label = 'Loading',
  className,
  ...props
}) => {
  if (variant === 'container') {
    return (
      <div
        className={cn(
          'relative w-full min-h-[8rem] rounded-lg border border-border bg-surface-secondary',
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <Spinner size={size} />
            <span className="text-sm text-text-secondary">{label}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('inline-flex items-center gap-2', className)} {...props}>
      <Spinner size={size} />
      <span className="text-sm text-text-secondary">{label}</span>
    </div>
  );
};


