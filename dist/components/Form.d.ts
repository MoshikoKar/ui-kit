import React from 'react';
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    title?: string;
    showLogo?: boolean;
    footer?: React.ReactNode;
    width?: number;
    aspectRatio?: number;
    className?: string;
}
export interface FormFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: boolean;
    size?: 'sm' | 'md' | 'lg';
}
export interface FormFooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}
export declare const Form: React.FC<FormProps>;
export declare const FormField: React.FC<FormFieldProps>;
export declare const FormButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'google';
}>;
export declare const FormFooter: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export declare const FormFooterLink: React.FC<FormFooterLinkProps>;
//# sourceMappingURL=Form.d.ts.map