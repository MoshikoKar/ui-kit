import React from 'react';
import { cn } from '../utils/cn';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  error?: boolean;
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-md min-h-[2rem]',
  md: 'px-4 py-2 text-sm rounded-md min-h-[2.5rem]',
  lg: 'px-6 py-3 text-md rounded-lg min-h-[3rem]',
};

export const Input: React.FC<InputProps> = ({
  size = 'md',
  error = false,
  className,
  disabled,
  ...props
}) => {
  return (
    <input
      className={cn(
        'w-full',
        'bg-surface border border-border',
        'text-text-primary placeholder-text-secondary',
        'transition-colors duration-200',
        'focus-visible focus:outline-none focus:border-border-focus',
        'disabled:bg-surface-secondary disabled:text-text-disabled disabled:cursor-not-allowed',
        error && 'border-danger focus:border-danger',
        sizeClasses[size],
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
};
