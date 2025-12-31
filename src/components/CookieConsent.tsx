import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

/**
 * Props for the CookieConsent component.
 */
export interface CookieConsentProps {
  /** Title text displayed at the top of the consent banner */
  title: string;
  /** Description text explaining the cookie usage */
  description: string;
  /** URL to the privacy policy page */
  privacyLink: string;
  /** Text for the privacy policy link */
  privacyLinkText: string;
  /** Text for the accept button */
  acceptLabel: string;
  /** Text for the options/customize button */
  optionsLabel: string;
  /** Callback fired when user accepts cookies */
  onAccept: () => void;
  /** Callback fired when user clicks options button */
  onOptions: () => void;
  /** localStorage key for storing consent state */
  storageKey: string;
  /** Value to store when consent is given */
  storageValue: string;
  /** Optional icon to display above the title */
  icon?: React.ReactNode;
  /** Additional className for the container */
  className?: string;
  /** Target attribute for the privacy link */
  privacyLinkTarget?: string;
  /** Rel attribute for the privacy link */
  privacyLinkRel?: string;
  /** Additional className for the icon wrapper */
  iconClassName?: string;
  /** Additional className for the content wrapper */
  contentClassName?: string;
  /** Additional className for the accept button */
  acceptButtonClassName?: string;
  /** Additional className for the options button */
  optionsButtonClassName?: string;
}

/**
 * A cookie consent banner component that stores user preferences in localStorage.
 * Automatically hides when consent has already been given.
 * 
 * @example
 * ```tsx
 * <CookieConsent
 *   title="We use cookies"
 *   description="This website uses cookies to improve your experience."
 *   privacyLink="/privacy"
 *   privacyLinkText="Learn more"
 *   acceptLabel="Accept"
 *   optionsLabel="Customize"
 *   onAccept={() => console.log('Accepted')}
 *   onOptions={() => setShowOptions(true)}
 *   storageKey="cookie-consent"
 *   storageValue="accepted"
 * />
 * ```
 */
export const CookieConsent: React.FC<CookieConsentProps> = ({
  title,
  description,
  privacyLink,
  privacyLinkText,
  acceptLabel,
  optionsLabel,
  onAccept,
  onOptions,
  storageKey,
  storageValue,
  icon,
  className,
  privacyLinkTarget,
  privacyLinkRel,
  iconClassName,
  contentClassName,
  acceptButtonClassName,
  optionsButtonClassName,
}) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem(storageKey);
      return !consent;
    }
    return false;
  });

  useEffect(() => {
    const consent = localStorage.getItem(storageKey);
    setIsVisible(!consent);
  }, [storageKey]);

  const handleAccept = () => {
    localStorage.setItem(storageKey, storageValue);
    setIsVisible(false);
    onAccept();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <article
      className={cn(
        'w-4/5 max-w-[300px] h-auto rounded-2xl',
        'bg-white dark:bg-surface-secondary',
        'shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px]',
        'dark:shadow-[rgba(0,0,0,0.3)_0_1px_2px_0,rgba(0,0,0,0.15)_0_2px_6px_2px]',
        className
      )}
    >
      <div className={cn('flex flex-col items-center justify-between pt-9 px-6 pb-6 relative', contentClassName)}>
        {icon && (
          <span className={cn('relative mx-auto -mt-16 mb-8 text-zinc-700 dark:text-zinc-300', iconClassName)}>
            {icon}
          </span>
        )}

        <h5 className="text-sm font-semibold mb-2 text-left mr-auto text-zinc-700 dark:text-text-primary">
          {title}
        </h5>

        <p className="w-full mb-4 text-sm text-justify text-zinc-600 dark:text-text-secondary">
          {description}
        </p>

        <p className="w-full mb-4 text-sm text-justify text-zinc-600 dark:text-text-secondary">
          <a
            href={privacyLink}
            className="mb-2 text-sm cursor-pointer font-semibold transition-colors underline underline-offset-2 text-zinc-700 dark:text-text-primary"
            target={privacyLinkTarget}
            rel={privacyLinkRel}
          >
            {privacyLinkText}
          </a>
        </p>

        <button
          type="button"
          onClick={onOptions}
          className={cn(
            'mb-2 text-sm mr-auto text-zinc-600 dark:text-text-secondary',
            'cursor-pointer font-semibold transition-colors',
            'hover:text-[#634647] dark:hover:text-[#ddad81]',
            'hover:underline underline-offset-2',
            'focus-visible:outline-2 focus-visible:outline-offset-2',
            'focus-visible:outline-[#634647] dark:focus-visible:outline-[#ddad81]',
            optionsButtonClassName
          )}
        >
          {optionsLabel}
        </button>

        <button
          type="button"
          onClick={handleAccept}
          className={cn(
            'absolute font-semibold right-6 bottom-6',
            'cursor-pointer py-2 px-8 w-max break-keep',
            'text-sm rounded-lg transition-colors',
            'text-[#634647] hover:text-[#ddad81]',
            'bg-[#ddad81] hover:bg-[#634647]',
            'dark:text-white dark:bg-[#634647]',
            'dark:hover:bg-[#ddad81] dark:hover:text-[#634647]',
            'focus-visible:outline-2 focus-visible:outline-offset-2',
            'focus-visible:outline-[#634647] dark:focus-visible:outline-[#ddad81]',
            acceptButtonClassName
          )}
        >
          {acceptLabel}
        </button>
      </div>
    </article>
  );
};


