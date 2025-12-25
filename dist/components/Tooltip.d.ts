import React from 'react';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps {
    open: boolean;
    onOpenChange?: (open: boolean) => void;
    content: React.ReactNode;
    position?: TooltipPosition;
    delay?: number;
    disabled?: boolean;
    children: React.ReactElement;
    className?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
//# sourceMappingURL=Tooltip.d.ts.map