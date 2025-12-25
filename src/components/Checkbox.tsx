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
    <div className="flex items-center space-x-2">
      <input
        id={checkboxId}
        type="checkbox"
        className={cn(
          'w-4 h-4',
          'bg-surface border border-border rounded',
          'text-primary focus:ring-primary focus:ring-2 focus:ring-offset-0',
          'transition-colors duration-200',
          'disabled:bg-surface-secondary disabled:text-text-disabled disabled:cursor-not-allowed',
          error && 'border-danger focus:border-danger focus:ring-danger',
          className
        )}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
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
