import React from 'react';
export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
    name?: string;
    legend?: string;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    onValueChange?: (value: string) => void;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label?: string;
    value: string;
    disabled?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}
export declare const RadioButton: React.FC<RadioButtonProps>;
//# sourceMappingURL=RadioButton.d.ts.map