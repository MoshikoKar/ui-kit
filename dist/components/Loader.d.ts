import React from 'react';
export type LoaderSize = 'sm' | 'md' | 'lg';
export type LoaderVariant = 'inline' | 'container';
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: LoaderSize;
}
export declare const Spinner: React.FC<SpinnerProps>;
export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: LoaderSize;
    variant?: LoaderVariant;
    label?: string;
}
export declare const Loader: React.FC<LoaderProps>;
//# sourceMappingURL=Loader.d.ts.map