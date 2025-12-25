import React from 'react';
import { cn } from '../utils/cn';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  error = false,
  className,
  disabled,
  checked,
  onChange,
  ...props
}) => {
  const checkboxId = React.useId();

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <label className={cn('checkbox-container', disabled && 'opacity-50 cursor-not-allowed', !disabled && 'cursor-pointer')}>
        <input
          id={checkboxId}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <svg viewBox="0 0 64 64" height="1em" width="1em">
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
            disabled ? 'text-text-disabled cursor-not-allowed' : 'text-text-primary cursor-pointer'
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};
