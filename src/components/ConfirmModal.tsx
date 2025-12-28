import React, { useEffect, useRef } from 'react';
import { cn } from '../utils/cn';
import { Button, ButtonVariant } from './Button';

export type ConfirmModalVariant = 'neutral' | 'danger' | 'warning' | 'info';

export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  icon?: React.ReactNode;
  confirmLabel: string;
  cancelLabel: string;
  variant?: ConfirmModalVariant;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
  className?: string;
  iconClassName?: string;
  contentClassName?: string;
  confirmButtonClassName?: string;
  cancelButtonClassName?: string;
}

const variantClasses: Record<ConfirmModalVariant, { icon: string; buttonVariant: ButtonVariant }> = {
  neutral: {
    icon: 'text-zinc-600 dark:text-zinc-400',
    buttonVariant: 'primary',
  },
  danger: {
    icon: 'text-red-600 dark:text-red-400',
    buttonVariant: 'danger',
  },
  warning: {
    icon: 'text-yellow-600 dark:text-yellow-400',
    buttonVariant: 'secondary',
  },
  info: {
    icon: 'text-blue-600 dark:text-blue-400',
    buttonVariant: 'primary',
  },
};

const ConfirmModalCard = React.forwardRef<
  HTMLDivElement,
  { className?: string; children: React.ReactNode; role?: string; 'aria-modal'?: string; 'aria-labelledby'?: string; 'aria-describedby'?: string }
>(({ className, children, role, 'aria-modal': ariaModal, 'aria-labelledby': ariaLabelledBy, 'aria-describedby': ariaDescribedBy }, ref) => {
  return (
    <div
      ref={ref}
      role={role}
      aria-modal={ariaModal}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      className={cn(
        'w-full max-w-md',
        'bg-white dark:bg-surface-secondary',
        'rounded-lg',
        'shadow-[2px_2px_20px_rgba(0,0,0,0.062)] dark:shadow-[rgba(0,0,0,0.3)_0_1px_2px_0,rgba(0,0,0,0.15)_0_2px_6px_2px]',
        'p-6',
        'flex flex-col items-center',
        'gap-4',
        'relative',
        'overflow-hidden',
        'transform transition-all duration-200',
        className
      )}
    >
      {children}
    </div>
  );
});

ConfirmModalCard.displayName = 'ConfirmModalCard';

const ConfirmModalIcon: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('flex items-center justify-center mb-2', className)}>
      {children}
    </div>
  );
};

const ConfirmModalActions: React.FC<{
  confirmLabel: string;
  cancelLabel: string;
  variant: ConfirmModalVariant;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonClassName?: string;
  cancelButtonClassName?: string;
}> = ({
  confirmLabel,
  cancelLabel,
  variant,
  onConfirm,
  onCancel,
  confirmButtonClassName,
  cancelButtonClassName,
}) => {
  const variantStyle = variantClasses[variant];

  return (
    <div className="flex gap-4 flex-row w-full justify-center mt-2">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={onCancel}
        className={cancelButtonClassName}
      >
        {cancelLabel}
      </Button>
      <Button
        type="button"
        variant={variantStyle.buttonVariant}
        size="sm"
        onClick={onConfirm}
        className={confirmButtonClassName}
      >
        {confirmLabel}
      </Button>
    </div>
  );
};

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  description,
  icon,
  confirmLabel,
  cancelLabel,
  variant = 'neutral',
  onConfirm,
  onCancel,
  onClose,
  className,
  iconClassName,
  contentClassName,
  confirmButtonClassName,
  cancelButtonClassName,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = useRef(`confirm-modal-title-${Math.random().toString(36).substr(2, 9)}`).current;
  const descriptionId = useRef(`confirm-modal-description-${Math.random().toString(36).substr(2, 9)}`).current;

  useEffect(() => {
    if (!isOpen) return;

    const modalElement = modalRef.current;
    if (!modalElement) return;

    const focusableElements = Array.from(
      modalElement.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (firstElement) {
      firstElement.focus();
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (focusableElements.length === 0) {
        e.preventDefault();
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const variantStyle = variantClasses[variant];

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-50',
        'flex items-center justify-center',
        'p-4',
        'bg-black/20 dark:bg-black/40',
        'transition-opacity duration-200',
        className
      )}
      onClick={handleBackdropClick}
      role="presentation"
    >
      <ConfirmModalCard
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="transform transition-all duration-200 scale-100"
      >
        {icon && (
          <ConfirmModalIcon className={cn(variantStyle.icon, iconClassName)}>
            {icon}
          </ConfirmModalIcon>
        )}

        <div className={cn('flex flex-col items-center text-center gap-2 w-full', contentClassName)}>
          <h2
            id={titleId}
            className="text-lg font-bold text-zinc-900 dark:text-text-primary"
          >
            {title}
          </h2>
          <p
            id={descriptionId}
            className="text-sm font-semibold text-zinc-600 dark:text-text-secondary whitespace-pre-line"
          >
            {description}
          </p>
        </div>

        <ConfirmModalActions
          confirmLabel={confirmLabel}
          cancelLabel={cancelLabel}
          variant={variant}
          onConfirm={onConfirm}
          onCancel={onCancel}
          confirmButtonClassName={confirmButtonClassName}
          cancelButtonClassName={cancelButtonClassName}
        />
      </ConfirmModalCard>
    </div>
  );
};

