import React from 'react';
import { cn } from '../utils/cn';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  label,
  error = false,
  className,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const toggleId = React.useId();

  return (
    <div className="flex items-center space-x-3">
      {label && (
        <label
          htmlFor={toggleId}
          className={cn(
            'text-sm font-medium select-none',
            disabled ? 'text-text-disabled cursor-not-allowed' : 'text-text-primary cursor-pointer'
          )}
        >
          {label}
        </label>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={label ? toggleId : undefined}
        className={cn(
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent',
          'transition-colors duration-200 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          checked ? 'bg-primary' : 'bg-surface-secondary',
          disabled && 'cursor-not-allowed opacity-50',
          error && 'focus:ring-danger',
          className
        )}
        disabled={disabled}
        onClick={() => onChange?.({ target: { checked: !checked } } as any)}
      >
        <span
          aria-hidden="true"
          className={cn(
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-text-primary shadow ring-0',
            'transition duration-200 ease-in-out',
            checked ? 'translate-x-5' : 'translate-x-0'
          )}
        />
      </button>
      {/* Hidden checkbox for form compatibility */}
      <input
        id={toggleId}
        type="checkbox"
        className="sr-only"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
