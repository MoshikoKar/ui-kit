/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware colors using CSS variables
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
          disabled: 'var(--color-primary-disabled)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
          active: 'var(--color-secondary-active)',
          disabled: 'var(--color-secondary-disabled)',
        },
        danger: {
          DEFAULT: 'var(--color-danger)',
          hover: 'var(--color-danger-hover)',
          active: 'var(--color-danger-active)',
          disabled: 'var(--color-danger-disabled)',
        },
        ghost: {
          DEFAULT: 'var(--color-ghost)',
          hover: 'var(--color-ghost-hover)',
          active: 'var(--color-ghost-active)',
          disabled: 'var(--color-ghost-disabled)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          secondary: 'var(--color-surface-secondary)',
          tertiary: 'var(--color-surface-tertiary)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          disabled: 'var(--color-text-disabled)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          focus: 'var(--color-border-focus)',
        },
        shadow: {
          primary: {
            light: 'var(--color-primary-shadow-light)',
            dark: 'var(--color-primary-shadow-dark)',
          },
          secondary: {
            light: 'var(--color-secondary-shadow-light)',
            dark: 'var(--color-secondary-shadow-dark)',
          },
          danger: {
            light: 'var(--color-danger-shadow-light)',
            dark: 'var(--color-danger-shadow-dark)',
          },
          ghost: {
            light: 'var(--color-ghost-shadow-light)',
            dark: 'var(--color-ghost-shadow-dark)',
          },
        },
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        md: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
      },
      spacing: {
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('theme-light', '.theme-light &');
    },
  ],
}
