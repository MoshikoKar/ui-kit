import React from 'react';
import { cn } from '../utils/cn';

/**
 * Props for the Card component.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Props for Card section components (CardHeader, CardContent, CardFooter).
 */
export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * A card container component with styled shadow and border.
 * 
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <h3>Card Title</h3>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Card content goes here</p>
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 * ```
 */
export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'card',
        'w-full',
        'rounded-lg border border-border',
        'bg-surface-secondary text-text-primary',
        'shadow-sm',
        className
      )}
      {...props}
    />
  );
};

/**
 * Card header section with bottom border.
 */
export const CardHeader: React.FC<CardSectionProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn('flex items-start justify-between gap-4 px-6 py-4 border-b border-border', className)}
      {...props}
    />
  );
};

/**
 * Main content area of the card.
 */
export const CardContent: React.FC<CardSectionProps> = ({ className, ...props }) => {
  return <div className={cn('px-6 py-4', className)} {...props} />;
};

/**
 * Card footer section with top border, typically for actions.
 */
export const CardFooter: React.FC<CardSectionProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn('flex items-center justify-end gap-3 px-6 py-4 border-t border-border', className)}
      {...props}
    />
  );
};
