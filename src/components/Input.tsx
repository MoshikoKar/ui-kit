import React from 'react';
import { cn } from '../utils/cn';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  error?: boolean;
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-[10px] text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  size = 'md',
  error = false,
  className,
  disabled,
  ...props
}, ref) => {
  return (
    <div className="relative inline-flex items-center">
      <input
        ref={ref}
        className={cn(
          'bg-transparent',
          'border-none',
          'outline-none',
          'max-w-[190px]',
          'rounded-full',
          'text-text-primary',
          'transition-colors duration-200',
          'disabled:text-text-disabled disabled:cursor-not-allowed',
          error ? 'shadow-[inset_2px_5px_10px_var(--input-shadow-error)] cursor-help' : 'shadow-[inset_2px_5px_10px_var(--input-shadow)]',
          sizeClasses[size],
          className
        )}
        style={error ? { paddingRight: '2rem' } : undefined}
        disabled={disabled}
        aria-invalid={error}
        {...props}
      />
      {error && (
        <svg
          className="absolute right-2 w-4 h-4 text-danger pointer-events-none flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </div>
  );
});

Input.displayName = 'Input';
