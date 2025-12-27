import React from 'react';
import { cn } from '../utils/cn';

type RadioGroupContextValue = {
  name?: string;
  value?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
};

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  name?: string;
  legend?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  legend,
  value,
  defaultValue,
  disabled = false,
  onValueChange,
  className,
  children,
  ...props
}) => {
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState<string | undefined>(defaultValue);
  const currentValue = isControlled ? value : uncontrolledValue;

  const handleValueChange = React.useCallback(
    (next: string) => {
      if (!isControlled) setUncontrolledValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );

  return (
    <RadioGroupContext.Provider value={{ name, value: currentValue, disabled, onValueChange: handleValueChange }}>
      <fieldset
        className={cn('radio-input', disabled && 'opacity-60 cursor-not-allowed', className)}
        disabled={disabled}
        {...props}
      >
        {legend && <legend className="text-sm font-medium text-text-primary">{legend}</legend>}
        {children}
      </fieldset>
    </RadioGroupContext.Provider>
  );
};

export interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  value: string;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  disabled: disabledProp,
  checked: checkedProp,
  defaultChecked,
  name: nameProp,
  onChange,
  onCheckedChange,
  className,
  ...props
}) => {
  const ctx = React.useContext(RadioGroupContext);
  const id = React.useId();

  const disabled = Boolean(disabledProp ?? ctx?.disabled);
  const name = nameProp ?? ctx?.name;

  const isWithinGroup = Boolean(ctx);
  const isControlledStandalone = checkedProp !== undefined;

  const [uncontrolledChecked, setUncontrolledChecked] = React.useState<boolean>(Boolean(defaultChecked));

  const checked = isWithinGroup
    ? ctx?.value === value
    : isControlledStandalone
      ? Boolean(checkedProp)
      : uncontrolledChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextChecked = e.target.checked;

    if (isWithinGroup && nextChecked) {
      ctx?.onValueChange?.(value);
    } else if (!isControlledStandalone) {
      setUncontrolledChecked(nextChecked);
    }

    onCheckedChange?.(nextChecked);
    onChange?.(e);
  };

  const labelElement = (
    <label htmlFor={id} className={cn(disabled && 'cursor-not-allowed', className)} role="radio" aria-checked={checked} aria-disabled={disabled}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled}
        {...props}
      />
      <span>{label || ''}</span>
    </label>
  );

  if (!isWithinGroup) {
    return <div className="radio-input">{labelElement}</div>;
  }

  return labelElement;
};


