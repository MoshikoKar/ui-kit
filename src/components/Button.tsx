import React from 'react';
import { cn } from '../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Button component.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant. Defaults to 'primary'. */
  variant?: ButtonVariant;
  /** Size of the button. Defaults to 'md'. */
  size?: ButtonSize;
  /** Shows a loading spinner when true. */
  loading?: boolean;
  /** Button content. */
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'text-[#7e97b8] bg-[#dbeafe] border-[rgba(255,255,255,0.333)] shadow-[-4px_-2px_8px_0px_#ffffff,4px_2px_8px_0px_rgb(59_130_246_/_24%)] hover:text-[#516d91] hover:bg-[#bfdbfe] hover:shadow-[-2px_-1px_4px_0px_#ffffff,2px_1px_4px_0px_rgb(59_130_246_/_24%)]',
  secondary: 'text-[#6b7280] bg-[#d1fae5] border-[rgba(255,255,255,0.4)] shadow-[-4px_-2px_8px_0px_#ffffff,4px_2px_8px_0px_rgb(34_197_94_/_18%)] hover:text-[#4b5563] hover:bg-[#a7f3d0] hover:shadow-[-2px_-1px_4px_0px_#ffffff,2px_1px_4px_0px_rgb(34_197_94_/_18%)]',
  danger: 'text-black font-bold bg-[#fecaca] border-[rgba(255,255,255,0.5)] shadow-[-4px_-2px_8px_0px_#ffffff,4px_2px_8px_0px_rgb(239_68_68_/_18%)] hover:text-black hover:bg-[#fed7d7] hover:shadow-[-2px_-1px_4px_0px_#ffffff,2px_1px_4px_0px_rgb(239_68_68_/_18%)]',
  ghost: 'text-[#6b7280] bg-transparent border-[rgba(255,255,255,0.2)] shadow-[-4px_-2px_8px_0px_rgba(255,255,255,0.05),4px_2px_8px_0px_rgba(0,0,0,0.05)] hover:text-[#4b5563] hover:bg-[rgba(255,255,255,0.05)] hover:shadow-[-2px_-1px_4px_0px_rgba(255,255,255,0.05),2px_1px_4px_0px_rgba(0,0,0,0.05)] theme-dark:text-white theme-dark:hover:text-white',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 pl-5 text-xs h-8',
  md: 'px-6 py-4 pl-7 text-sm h-10',
  lg: 'px-8 py-5 pl-9 text-base h-12',
};

/**
 * A versatile button component with multiple variants and loading state.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * 
 * <Button variant="danger" loading={isLoading}>
 *   Delete
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className,
  children,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'flex items-center justify-center gap-2.5',
        'font-bold',
        'tracking-[0.4px]',
        'border-2 border-solid',
        'rounded-[40px]',
        'transform translate-x-0 translate-y-0 rotate-0',
        'transition-all duration-200',
        'active:shadow-none',
        'focus-visible focus:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      style={{ fontFamily: '"Manrope", sans-serif' }}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
});

Button.displayName = 'Button';
