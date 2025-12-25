import React from 'react';
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    error?: boolean;
}
export declare const Toggle: React.FC<ToggleProps>;
//# sourceMappingURL=Toggle.d.ts.map