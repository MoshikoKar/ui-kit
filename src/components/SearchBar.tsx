import React from 'react';
import { cn } from '../utils/cn';
import styles from './SearchBar.module.css';

export type SearchBarSize = 'sm' | 'md' | 'lg';

export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'className' | 'size'> {
  size?: SearchBarSize;
  className?: string;
  inputClassName?: string;
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

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(({
  size = 'md',
  className,
  inputClassName,
  searchContainerClassName,
  ...props
}, ref) => {
  const sizeClass = sizeClasses[size];

  return (
    <div className={cn(styles.container, sizeClass.container, className)}>
      <div className={cn(styles['search-container'], searchContainerClassName)}>
        <input
          ref={ref}
          className={cn(styles.input, sizeClass.input, inputClassName)}
          type="search"
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


