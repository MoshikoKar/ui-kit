import React from 'react';
import { cn } from '../utils/cn';

export type LoaderSize = 'sm' | 'md' | 'lg';
export type LoaderVariant = 'inline' | 'container';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: LoaderSize;
}

const sizeMultiplier: Record<LoaderSize, number> = {
  sm: 0.7,
  md: 1,
  lg: 1.3,
};

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className, ...props }) => {
  const fontSize = 8 * sizeMultiplier[size];

  return (
    <div className={cn('loader', className)} style={{ fontSize: `${fontSize}px` }} {...props}>
      <div className="loader-face loader-face-1">
        <div className="loader-circle"></div>
      </div>
      <div className="loader-face loader-face-2">
        <div className="loader-circle"></div>
      </div>
    </div>
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
        {...props}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="loader" style={{ fontSize: `${fontSize}px` }}>
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
    <div className={cn('inline-flex items-center gap-2', className)} {...props}>
      <div className="loader" style={{ fontSize: `${fontSize}px` }}>
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
