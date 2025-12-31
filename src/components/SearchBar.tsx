import React from 'react';
import { cn } from '../utils/cn';
import styles from './SearchBar.module.css';

/** Size variants for the SearchBar component */
export type SearchBarSize = 'sm' | 'md' | 'lg';

/**
 * Props for the SearchBar component.
 * Extends standard input attributes (except type, className, and size).
 */
export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className' | 'size'> {
  /** Size variant of the search bar. Affects padding and font size. Defaults to 'md'. */
  size?: SearchBarSize;
  /** Additional className for the outer container wrapper. */
  className?: string;
  /** Additional className for the input element itself. */
  inputClassName?: string;
  /** Additional className for the inner search container (contains input + icon). */
  searchContainerClassName?: string;
}

const sizeClasses: Record<SearchBarSize, { container: string; input: string }> = {
  sm: {
    container: styles['container--size-sm'],
    input: styles['input--size-sm'],
  },
  md: {
    container: styles['container--size-md'],
    input: styles['input--size-md'],
  },
  lg: {
    container: styles['container--size-lg'],
    input: styles['input--size-lg'],
  },
};

/**
 * A styled search input component with responsive sizing.
 * Uses CSS-based sizing for better performance and SSR compatibility.
 * 
 * @example
 * ```tsx
 * <SearchBar 
 *   size="md" 
 *   placeholder="Search..." 
 *   onChange={handleSearch}
 * />
 * ```
 */
export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(({
  size = 'md',
  className,
  inputClassName,
  searchContainerClassName,
  placeholder,
  ...props
}, ref) => {
  const sizeClass = sizeClasses[size];

  return (
    <div
      className={cn(
        styles.container, 
        sizeClass.container,
        // Responsive width using CSS instead of JavaScript calculation
        'min-w-[200px] md:min-w-[260px] lg:min-w-[320px]',
        'w-full max-w-md',
        className
      )}
    >
      <div className={cn(styles['search-container'], searchContainerClassName)}>
        <input
          ref={ref}
          className={cn(styles.input, sizeClass.input, inputClassName)}
          type="search"
          placeholder={placeholder}
          {...props}
        />
        <svg viewBox="0 0 24 24" className={styles.search__icon} aria-hidden="true" focusable="false">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
});

SearchBar.displayName = 'SearchBar';
