import React from 'react';
import { cn } from '../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-black theme-light:text-white border border-primary shadow-[inset_-4px_-4px_8px_var(--color-primary-shadow-dark),inset_4px_4px_8px_var(--color-primary-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-primary-shadow-dark),_inset_-3px_-3px_6px_var(--color-primary-shadow-light)] disabled:shadow-none disabled:bg-primary-disabled disabled:text-text-disabled',
  secondary: 'bg-secondary text-white border border-secondary shadow-[inset_-4px_-4px_8px_var(--color-secondary-shadow-dark),inset_4px_4px_8px_var(--color-secondary-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-secondary-shadow-dark),_inset_-3px_-3px_6px_var(--color-secondary-shadow-light)] disabled:shadow-none disabled:bg-secondary-disabled disabled:text-text-disabled',
  danger: 'bg-danger text-black theme-light:text-white border border-danger shadow-[inset_-4px_-4px_8px_var(--color-danger-shadow-dark),inset_4px_4px_8px_var(--color-danger-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-danger-shadow-dark),_inset_-3px_-3px_6px_var(--color-danger-shadow-light)] disabled:shadow-none disabled:bg-danger-disabled disabled:text-text-disabled',
  ghost: 'bg-ghost text-text-primary border border-transparent shadow-[inset_-4px_-4px_8px_var(--color-ghost-shadow-dark),inset_4px_4px_8px_var(--color-ghost-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-ghost-shadow-dark),_inset_-3px_-3px_6px_var(--color-ghost-shadow-light)] disabled:shadow-none disabled:bg-ghost-disabled disabled:text-text-disabled',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1 text-xs font-medium rounded-lg h-8',
  md: 'px-4 py-1.5 text-sm font-medium rounded-lg h-10',
  lg: 'px-6 py-2 text-md font-medium rounded-lg h-12',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center',
        'font-medium transition-all duration-200',
        'focus-visible focus:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};