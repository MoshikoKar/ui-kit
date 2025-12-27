import React, { useState, useId, useRef } from 'react';
import { cn } from '../utils/cn';
import styles from './SubmitButton.module.css';

export type SubmitButtonVariant = 'primary' | 'secondary' | 'danger';
export type SubmitButtonSize = 'sm' | 'md' | 'lg';

export interface SubmitButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  successText?: string;
  onSubmit?: () => Promise<void> | void;
  variant?: SubmitButtonVariant;
  size?: SubmitButtonSize;
}

const splitText = (text: string) => {
  return text.split('').map((char, index) => {
    const displayChar = char === ' ' ? '\u00A0' : char;

    return (
      <span key={index} style={{ '--i': index } as React.CSSProperties}>
        {displayChar}
      </span>
    );
  });
};

const sizeClassMap: Record<SubmitButtonSize, string> = {
  sm: styles['button--size-sm'],
  md: styles['button--size-md'],
  lg: styles['button--size-lg'],
};

const variantClasses: Record<SubmitButtonVariant, string> = {
  primary: 'text-[#7e97b8] bg-[#dbeafe] border-[rgba(255,255,255,0.333)] shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(59_130_246_/_48%)] hover:text-[#516d91] hover:bg-[#bfdbfe] hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(59_130_246_/_48%)]',
  secondary: 'text-[#6b7280] bg-[#d1fae5] border-[rgba(255,255,255,0.4)] shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(34_197_94_/_35%)] hover:text-[#4b5563] hover:bg-[#a7f3d0] hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(34_197_94_/_35%)]',
  danger: 'text-[#ef4444] bg-[#fecaca] border-[rgba(255,255,255,0.5)] shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(239_68_68_/_35%)] hover:text-[#dc2626] hover:bg-[#fed7d7] hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(239_68_68_/_35%)]',
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children = 'Send Message',
  successText = 'Sent',
  onSubmit,
  disabled,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const [success, setSuccess] = useState(false);
  const shadowFilterId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onSubmit && !success) {
      try {
        await onSubmit();
        setSuccess(true);
        // Keep focus to show the success animation
        buttonRef.current?.focus();
        // Reset success state after 3 seconds
        setTimeout(() => {
          setSuccess(false);
          buttonRef.current?.blur();
        }, 3000);
      } catch (error) {
        console.error('Submit failed:', error);
        // Error state handled - no visual changes per requirements
      }
    }
    // Call the original onClick if provided
    props.onClick?.(event);
  };

  return (
    <button
      {...props}
      ref={buttonRef}
      type="submit"
      disabled={disabled}
      onClick={handleClick}
      className={cn(styles.button, variantClasses[variant], sizeClassMap[size], className)}
      aria-label={success ? 'Submission successful' : (props['aria-label'] || 'Submit')}
      aria-disabled={disabled}
    >
      <div className={styles.outline}></div>
      <div className={cn(styles.state, styles['state--default'])}>
        <div className={styles.icon}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g style={{ filter: `url(#${shadowFilterId})` }}>
              <path
                d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                fill="currentColor"
              ></path>
              <path
                d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <filter id={shadowFilterId}>
                <feDropShadow
                  dx="0"
                  dy="1"
                  stdDeviation="0.6"
                  floodOpacity="0.5"
                ></feDropShadow>
              </filter>
            </defs>
          </svg>
        </div>
        <p>{splitText(typeof children === 'string' ? children : 'Send Message')}</p>
      </div>
      <div className={cn(styles.state, styles['state--sent'])}>
        <div className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            strokeWidth="0.5px"
            stroke="black"
          >
            <g style={{ filter: `url(#${shadowFilterId})` }}>
              <path
                fill="currentColor"
                d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
              ></path>
              <path
                fill="currentColor"
                d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
              ></path>
            </g>
          </svg>
        </div>
        <p>{splitText(successText)}</p>
      </div>
    </button>
  );
};
