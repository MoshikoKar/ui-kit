import React from 'react';
import { cn } from '../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
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

export const CardHeader: React.FC<CardSectionProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn('flex items-start justify-between gap-4 px-6 py-4 border-b border-border', className)}
      {...props}
    />
  );
};

export const CardContent: React.FC<CardSectionProps> = ({ className, ...props }) => {
  return <div className={cn('px-6 py-4', className)} {...props} />;
};

export const CardFooter: React.FC<CardSectionProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn('flex items-center justify-end gap-3 px-6 py-4 border-t border-border', className)}
      {...props}
    />
  );
};


