import React, { ReactNode } from 'react';
export type Theme = 'dark' | 'light';
interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextType;
export {};
//# sourceMappingURL=ThemeProvider.d.ts.map