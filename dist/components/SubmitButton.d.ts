import React from 'react';
import { ButtonSize } from './Button';
export interface SubmitButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    successText?: string;
    onSubmit?: () => Promise<void> | void;
    size?: ButtonSize;
}
export declare const SubmitButton: React.FC<SubmitButtonProps>;
//# sourceMappingURL=SubmitButton.d.ts.map