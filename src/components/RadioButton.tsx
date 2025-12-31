import React from 'react';
import { cn } from '../utils/cn';

type RadioGroupContextValue = {
  name?: string;
  value?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
};

const RadioGroupContext = React.createContext<RadioGroupContextValue | null>(null);

/**
 * Props for the RadioGroup component.
 */
export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  /** Name attribute for all radio buttons in the group. */
  name?: string;
  /** Legend text displayed above the radio group. */
  legend?: string;
  /** Currently selected value (controlled). */
  value?: string;
  /** Default selected value (uncontrolled). */
  defaultValue?: string;
  /** Whether all radio buttons in the group are disabled. */
  disabled?: boolean;
  /** Callback when the selected value changes. */
  onValueChange?: (value: string) => void;
}

/**
 * A group container for RadioButton components with keyboard navigation.
 * 
 * @example
 * ```tsx
 * <RadioGroup 
 *   legend="Select an option" 
 *   value={selected}
 *   onValueChange={setSelected}
 * >
 *   <RadioButton value="option1" label="Option 1" />
 *   <RadioButton value="option2" label="Option 2" />
 *   <RadioButton value="option3" label="Option 3" />
 * </RadioGroup>
 * ```
 */
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

/**
 * Props for the RadioButton component.
 */
export interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label text displayed next to the radio button. */
  label?: string;
  /** Value of this radio button option. */
  value: string;
  /** Whether this radio button is disabled. */
  disabled?: boolean;
  /** Callback when the checked state changes. */
  onCheckedChange?: (checked: boolean) => void;
}

/**
 * A styled radio button component that works standalone or within a RadioGroup.
 * 
 * @example
 * ```tsx
 * // Standalone
 * <RadioButton 
 *   value="option1" 
 *   label="Option 1"
 *   checked={selected === 'option1'}
 *   onChange={(e) => setSelected(e.target.value)}
 * />
 * 
 * // Within RadioGroup (preferred)
 * <RadioGroup value={selected} onValueChange={setSelected}>
 *   <RadioButton value="option1" label="Option 1" />
 * </RadioGroup>
 * ```
 */
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
