import React from 'react';
import { cn } from '../utils/cn';
import { Input } from './Input';
import { Button } from './Button';

export type FormSize = 'sm' | 'md' | 'lg' | 'full';

/**
 * Props for the Form component.
 */
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  /** Form title displayed at the top. */
  title?: string;
  /** Whether to show the logo placeholder. */
  showLogo?: boolean;
  /** Footer content rendered below the form. */
  footer?: React.ReactNode;
  /** Responsive size preset. Defaults to 'md'. */
  size?: FormSize;
  /** Custom className for additional styling. */
  className?: string;
}

/**
 * Props for FormField component.
 */
export interface FormFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text displayed above the input. */
  label?: string;
  /** Error state or error message string. */
  error?: boolean | string;
  /** Helper text displayed below the input. */
  helperText?: string;
  /** Size of the input field. */
  size?: 'sm' | 'md' | 'lg';
}

export interface FormFooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const sizeClasses: Record<FormSize, string> = {
  sm: 'max-w-xs w-full',   // 320px
  md: 'max-w-sm w-full',   // 384px
  lg: 'max-w-md w-full',   // 448px
  full: 'w-full',
};

/**
 * Form container with responsive sizing and visual styling.
 * 
 * @example
 * ```tsx
 * <Form title="Login" size="md" onSubmit={handleSubmit}>
 *   <FormField label="Email" type="email" required />
 *   <FormField label="Password" type="password" required />
 *   <FormButton>Sign In</FormButton>
 * </Form>
 * ```
 */
const FormContainer: React.FC<React.HTMLAttributes<HTMLDivElement> & { size?: FormSize }> = ({
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative flex justify-center items-center',
        'bg-surface-tertiary rounded-[24px]',
        'shadow-[0_4px_8px_rgba(0,0,0,0.2),0_8px_16px_rgba(0,0,0,0.2),0_0_8px_rgba(255,255,255,0.1),0_0_16px_rgba(255,255,255,0.08)]',
        'z-[8]',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const FormBox: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative bg-surface-tertiary rounded-[24px] p-7 z-[10]',
        'backdrop-blur-[15px]',
        'shadow-[inset_0_40px_60px_-8px_rgba(255,255,255,0.12),inset_4px_0_12px_-6px_rgba(255,255,255,0.12),inset_0_0_12px_-4px_rgba(255,255,255,0.12)]',
        'w-full',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const FormLogo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'w-[65px] h-[65px] rounded-[20px] border-2 border-white',
        'bg-gradient-to-br from-white/20 to-black/20',
        'shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.06)]',
        'flex justify-center items-center relative',
        className
      )}
      {...props}
    >
      <div className="absolute bottom-[10px] w-1/2 h-[20%] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[20px] rounded-bl-[20px] border-[2.5px] border-white" />
      <div className="absolute top-[10px] w-[30%] h-[30%] rounded-full border-[2.5px] border-white" />
    </div>
  );
};

/**
 * A styled form component with responsive sizing.
 * 
 * @example
 * ```tsx
 * <Form title="Contact Us" size="md">
 *   <FormField label="Name" required />
 *   <FormField label="Email" type="email" required />
 *   <FormButton>Submit</FormButton>
 * </Form>
 * ```
 */
export const Form: React.FC<FormProps> = ({
  title,
  showLogo = false,
  footer,
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <FormContainer size={size}>
      <FormBox>
        <form
          className={cn('flex justify-center items-center flex-col gap-[10px]', className)}
          {...props}
        >
          {showLogo && (
            <div className="flex justify-center items-center mb-2">
              <FormLogo />
            </div>
          )}
          {title && (
            <div className="w-full text-center text-2xl font-bold py-1.5 text-text-primary flex justify-center items-center">
              {title}
            </div>
          )}
          {children}
        </form>
        {footer && (
          <div className="w-full text-left text-text-secondary text-xs mt-4">
            {footer}
          </div>
        )}
      </FormBox>
    </FormContainer>
  );
};

/**
 * Form field component with label and error support.
 * 
 * @example
 * ```tsx
 * <FormField 
 *   label="Email" 
 *   type="email" 
 *   error="Please enter a valid email"
 *   required 
 * />
 * ```
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  helperText,
  className,
  size,
  id,
  ...props
}) => {
  const fieldId = id || React.useId();
  const errorMessage = typeof error === 'string' ? error : undefined;
  const hasError = Boolean(error);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={fieldId} className="block text-text-primary text-sm mb-1.5">
          {label}
        </label>
      )}
      <div className="flex justify-center">
        <Input
          id={fieldId}
          className={cn(
            'p-3 border-none rounded-xl bg-surface text-text-primary text-sm outline-none',
            'focus:border focus:border-border-focus',
            className
          )}
          error={hasError}
          size={size}
          aria-invalid={hasError}
          aria-describedby={errorMessage ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined}
          {...props}
        />
      </div>
      {errorMessage && (
        <p id={`${fieldId}-error`} className="text-red-500 text-xs mt-1" role="alert">
          {errorMessage}
        </p>
      )}
      {helperText && !errorMessage && (
        <p id={`${fieldId}-helper`} className="text-text-secondary text-xs mt-1">
          {helperText}
        </p>
      )}
    </div>
  );
};

/**
 * Form button component with variant support.
 */
export const FormButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'google' }> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  if (variant === 'google') {
    return (
      <button
        className={cn(
          'w-full h-10 border-none rounded-[20px] text-sm font-semibold cursor-pointer',
          'grid place-content-center gap-2.5 bg-surface-secondary text-text-primary',
          'transition-all duration-300',
          'shadow-[inset_0px_3px_6px_-4px_rgba(255,255,255,0.6),inset_0px_-3px_6px_-2px_rgba(0,0,0,0.8)]',
          'hover:bg-white/25 hover:shadow-[inset_0px_3px_6px_rgba(255,255,255,0.6),inset_0px_-3px_6px_rgba(0,0,0,0.8),0px_0px_8px_rgba(255,255,255,0.05)]',
          'flex justify-center items-center gap-2.5',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <Button
      variant="primary"
      className={cn(
        'w-full h-10 rounded-[20px] text-sm font-semibold mt-1.5',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

/**
 * Form footer component for additional content.
 */
export const FormFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full text-left text-text-secondary text-xs',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Footer link component with hover animation.
 */
export const FormFooterLink: React.FC<FormFooterLinkProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <a
      className={cn(
        'relative text-text-secondary font-semibold no-underline transition-colors duration-300 ease-in-out',
        'hover:text-white',
        'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:rounded-md after:h-[1px] after:bg-current after:transition-[width] after:duration-300 after:ease-in-out',
        'hover:after:w-full',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
