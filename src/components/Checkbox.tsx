import React from 'react';
import { cn } from '../utils/cn';

/**
 * Props for the Checkbox component.
 */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text displayed next to the checkbox. */
  label?: string;
  /** Whether the checkbox is in an error state. */
  error?: boolean;
}

/**
 * A styled checkbox component with animated check mark.
 * 
 * @example
 * ```tsx
 * <Checkbox 
 *   label="Accept terms and conditions"
 *   checked={accepted}
 *   onChange={(e) => setAccepted(e.target.checked)}
 * />
 * ```
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  error = false,
  className,
  disabled,
  checked,
  onChange,
  ...props
}, ref) => {
  const checkboxId = React.useId();

  return (
    <div className={cn('flex items-center space-x-2', disabled && 'cursor-not-allowed', error && !disabled && 'cursor-help', className)}>
      <label className={cn('checkbox-container', disabled && 'opacity-50 cursor-not-allowed', error && !disabled && 'cursor-help', !disabled && !error && 'cursor-pointer')}>
        <input
          ref={ref}
          id={checkboxId}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          aria-checked={checked}
          aria-invalid={error}
          aria-disabled={disabled}
          {...props}
        />
        <svg viewBox="0 0 64 64" height="1em" width="1em" aria-hidden="true">
          <path
            d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
            pathLength="575.0541381835938"
            className={cn('checkbox-path', error && 'checkbox-path-error')}
          />
        </svg>
      </label>
      {label && (
        <label
          htmlFor={checkboxId}
          className={cn(
            'text-sm font-medium select-none',
            disabled ? 'text-text-disabled cursor-not-allowed' : error ? 'text-text-primary cursor-help' : 'text-text-primary cursor-pointer'
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
