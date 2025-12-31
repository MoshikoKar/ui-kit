import React, { useRef } from 'react';
import { cn } from '../utils/cn';

/**
 * Props for the Toggle component.
 */
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text displayed next to the toggle. */
  label?: string;
  /** Whether the toggle is in an error state. */
  error?: boolean;
}

/**
 * A toggle switch component with keyboard accessibility.
 * 
 * @example
 * ```tsx
 * <Toggle 
 *   label="Enable notifications" 
 *   checked={enabled}
 *   onChange={(e) => setEnabled(e.target.checked)}
 * />
 * ```
 */
export const Toggle: React.FC<ToggleProps> = ({
  label,
  error = false,
  className,
  disabled,
  checked,
  onChange,
  id,
  ...props
}) => {
  const toggleId = id || React.useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      // Use click() to properly trigger the native change event
      inputRef.current?.click();
    }
  };

  return (
    <div className={cn('toggle-wrapper', error && 'toggle-wrapper--error', disabled && 'cursor-not-allowed', error && !disabled && 'cursor-help', className)}>
      <input
        ref={inputRef}
        id={toggleId}
        className="toggle-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        aria-invalid={error}
        {...props}
      />
      <div 
        className={cn('toggle-container', disabled && 'cursor-not-allowed', error && !disabled && 'cursor-help')}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-hidden="true"
      >
        <div className="toggle-button">
          <div className="toggle-button-circles-container">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="toggle-button-circle" />
            ))}
          </div>
        </div>
      </div>
      {label && (
        <label
          htmlFor={toggleId}
          className={cn(
            'text-sm font-medium select-none ml-2',
            disabled ? 'text-text-disabled cursor-not-allowed' : error ? 'text-text-primary cursor-help' : 'text-text-primary cursor-pointer'
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};
