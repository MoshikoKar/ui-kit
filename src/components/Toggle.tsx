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
  id,
  ...props
}) => {
  const toggleId = id || React.useId();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault();
      const input = document.getElementById(toggleId) as HTMLInputElement;
      if (input) {
        input.checked = !input.checked;
        const changeEvent = new Event('change', { bubbles: true });
        input.dispatchEvent(changeEvent);
      }
    }
  };

  return (
    <div className={cn('toggle-wrapper', error && 'toggle-wrapper--error', className)}>
      <input
        id={toggleId}
        className="toggle-checkbox"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        {...props}
      />
      <div 
        className="toggle-container"
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
            disabled ? 'text-text-disabled cursor-not-allowed' : 'text-text-primary cursor-pointer'
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};
