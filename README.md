# UI Kit

A reusable, themeable component library built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Themeable**: Supports dark and light modes with CSS variables
- 🔧 **TypeScript**: Fully typed components and props
- 🎯 **Accessible**: Built with accessibility best practices
- 📦 **Packaged**: Ready for npm distribution
- 🧩 **Composable**: Primitive components with semantic wrappers
- ⚡ **Lightweight**: No external dependencies except React

## Components

### Primitive Components

- **Button**: Generic visual button with variants, sizes, and states
- **Input**: Form input field with error states
- **Checkbox**: Animated SVG checkbox with smooth checkmark animation and label support
- **RadioButton**: Windows-style radio button with RadioGroup support for form selections
- **Toggle**: Switch/toggle component
- **Loader**: Animated loading spinner with rotating faces and glowing effects
- **ThemeSwitch**: Animated dark/light mode toggle with sun/moon and stars/clouds visual effects

### Semantic Wrappers

- **Form**: Animated form container with rotating border effect, backdrop blur, and composable form components
- **SubmitButton**: Button wrapper for form submissions with loading/success states

## Installation

```bash
npm install @ui-kit/ui-kit
```

## Usage

```tsx
import { Button, Input, ThemeProvider } from '@ui-kit/ui-kit';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
    </ThemeProvider>
  );
}
```

## Theme System

The UI Kit supports dark and light themes:

```tsx
import { ThemeProvider, useTheme } from '@ui-kit/ui-kit';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider defaultTheme="dark">
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </ThemeProvider>
  );
}
```

## Development

### Preview

Start the preview environment to see all components:

```bash
npm run dev
```

### Build

Build the library for distribution:

```bash
npm run build
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Component API

### Button

```tsx
<Button
  variant="primary" | "secondary" | "danger" | "ghost"
  size="sm" | "md" | "lg"
  loading={boolean}
  disabled={boolean}
  onClick={function}
>
  Button text
</Button>
```

### SubmitButton

```tsx
<SubmitButton
  size="sm" | "md" | "lg"
  disabled={boolean}
  onSubmit={async () => { /* submit logic */ }}
  successText="Submitted!"
>
  Submit Form
</SubmitButton>
```

**States:**
- **Disabled** (form incomplete): Greyed out, no animations
- **Ready** (form valid): Full effects and animations
- **Success** (after submission): Automatic "sent" animation

### Input

```tsx
<Input
  size="sm" | "md" | "lg"
  error={boolean}
  placeholder="Enter text"
  value={string}
  onChange={function}
/>
```

### Checkbox

Animated checkbox with smooth SVG checkmark animation. The checkmark animates when checked/unchecked using stroke-dasharray transitions.

```tsx
<Checkbox
  label="Accept terms"
  checked={boolean}
  onChange={function}
  error={boolean}
  disabled={boolean}
/>
```

**Features:**
- Smooth animated checkmark using SVG path animation
- Theme-aware colors (adapts to light/dark mode)
- Error state support with danger color
- Disabled state with reduced opacity
- Size: 2em × 2em (scales with font size)

### RadioButton

Windows-style radio button component with RadioGroup support for form selections. Features custom-styled radio buttons with hover effects and smooth transitions.

```tsx
// Standalone radio button
<RadioButton
  label="Option 1"
  value="option1"
  checked={boolean}
  onChange={function}
  disabled={boolean}
/>

// Radio group
<RadioGroup
  name="options"
  legend="Choose an option"
  value={string}
  onValueChange={function}
  disabled={boolean}
>
  <RadioButton label="Option 1" value="option1" />
  <RadioButton label="Option 2" value="option2" />
  <RadioButton label="Option 3" value="option3" />
</RadioGroup>
```

**Components:**
- **RadioButton**: Individual radio button with label support
- **RadioGroup**: Container for managing multiple radio buttons as a group

**Props:**
- `RadioButton`: `label?: string`, `value: string`, `checked?: boolean`, `disabled?: boolean`, `onChange?: function`, `onCheckedChange?: function`
- `RadioGroup`: `name?: string`, `legend?: string`, `value?: string`, `defaultValue?: string`, `disabled?: boolean`, `onValueChange?: function`

**Features:**
- Windows-style custom radio button appearance with 3D effects
- Smooth hover transitions with blue accent colors
- Support for controlled and uncontrolled modes
- RadioGroup context for managing multiple options
- Disabled state with grayscale filter
- Focus-visible outline for accessibility
- Standalone or grouped usage

### Toggle

Animated toggle switch with celestial sparkle effects and smooth transitions. Features a star icon with animated sparkles that enhance when the toggle is active.

```tsx
<Toggle
  label="Enable feature"
  checked={boolean}
  onChange={function}
  error={boolean}
  disabled={boolean}
/>
```

**Features:**
- Beautiful animated sparkle effects with multiple particles
- Star icon that rotates and transforms when toggled
- Smooth transitions with radial gradient backgrounds
- Error state with red border indicator
- Disabled state with reduced opacity and paused animations
- Compact size (15px height) with responsive design

### ThemeSwitch

Animated theme toggle component with beautiful sun/moon and stars/clouds visual effects. Automatically integrates with the ThemeProvider to switch between dark and light modes.

```tsx
import { ThemeSwitch, ThemeProvider } from '@ui-kit/ui-kit';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <ThemeSwitch showLabel={true} />
    </ThemeProvider>
  );
}
```

**Props:**
- `showLabel?: boolean` - Show "Dark"/"Light" text next to the toggle (default: `true`)
- `className?: string` - Additional CSS classes

**Features:**
- Beautiful animated sun/moon transition
- Stars appear in dark mode, clouds in light mode
- Smooth animations with cubic-bezier easing
- Size matches medium button height (40px)
- Fully integrated with ThemeProvider

### Loader

Animated loading spinner with two rotating circular faces featuring glowing effects. Perfect for indicating loading states in your application.

```tsx
import { Loader, Spinner } from '@ui-kit/ui-kit';

// Standalone spinner
<Spinner size="sm" | "md" | "lg" />

// Inline loader with label
<Loader 
  variant="inline" | "container"
  size="sm" | "md" | "lg"
  label="Loading..."
/>

// Full container loader
<Loader variant="container" size="lg" label="Loading content" />
```

**Components:**
- **Spinner**: Standalone animated spinner without label
- **Loader**: Full loader component with optional label and container variant

**Props:**
- `size?: "sm" | "md" | "lg"` - Size of the loader (default: `"md"`)
- `variant?: "inline" | "container"` - Display variant (default: `"inline"`)
- `label?: string` - Optional loading text label

**Features:**
- Beautiful rotating faces animation with two circular arcs
- Gold and black arcs with white glow effects
- Smooth 3-second rotation animation
- Three size variants (sm, md, lg)
- Inline and full container display modes
- Optional loading text label

### Form

Animated form container component with beautiful rotating border effect, backdrop blur, and composable form elements. Perfect for creating elegant login, signup, contact, and survey forms.

```tsx
import { Form, FormField, FormButton, FormFooter, FormFooterLink } from '@ui-kit/ui-kit';

// Basic login form
<Form
  title="Welcome Back"
  showLogo={boolean}
  width={number}
  aspectRatio={number}
  footer={ReactNode}
  onSubmit={function}
>
  <FormField
    type="email"
    placeholder="Email"
    label="Email"
    error={boolean}
  />
  <FormField
    type="password"
    placeholder="Password"
  />
  <FormButton type="submit">Sign In</FormButton>
  <FormButton variant="google" type="button">
    Sign in with Google
  </FormButton>
  <FormFooter>
    Don't have an account?{' '}
    <FormFooterLink href="#">Sign up</FormFooterLink>
  </FormFooter>
</Form>
```

**Components:**
- **Form**: Main form container with animated border and backdrop blur
- **FormField**: Input field wrapper with optional label and error state
- **FormButton**: Button component with primary and Google sign-in variants
- **FormFooter**: Footer container for form links and text
- **FormFooterLink**: Animated link component for footer content

**Props:**
- `Form`: `title?: string`, `showLogo?: boolean`, `width?: number`, `aspectRatio?: number`, `footer?: ReactNode`, `className?: string`, plus all standard form HTML attributes
- `FormField`: `label?: string`, `error?: boolean`, `size?: "sm" | "md" | "lg"`, plus all standard input HTML attributes
- `FormButton`: `variant?: "primary" | "google"`, plus all standard button HTML attributes
- `FormFooter`: Standard div HTML attributes
- `FormFooterLink`: Standard anchor HTML attributes

**Features:**
- Beautiful animated rotating border effect using conic gradient
- Backdrop blur effect for modern glassmorphism look
- Optional user/logo icon with animated design
- Theme-aware colors using CSS variables
- Composable structure - works with Checkbox, RadioButton, and other components
- Animated footer links with hover effects
- Customizable width and aspect ratio
- Full TypeScript support

## Architecture Principles

1. **Intent-based separation**: Components are separated by intent, not by feature
2. **Primitive + Semantic**: Generic visual components with semantic wrappers
3. **No hardcoded colors**: All colors derive from CSS variables
4. **Theme agnostic**: No OS theme detection, explicit theme control
5. **Composable**: Components can be combined and extended

## Quality Assurance

A comprehensive professional audit has been conducted on all components. See [`AUDIT_REPORT.md`](./AUDIT_REPORT.md) for detailed findings, including:

- Architecture and design system integrity analysis
- Component API quality assessment
- Accessibility (A11y) compliance review
- Performance and maintainability evaluation
- Visual consistency and UX rules validation
- Styling strategy assessment
- Improvement recommendations prioritized by severity

The audit identifies critical issues, medium-priority improvements, and long-term scalability considerations to help harden the UI Kit into a production-ready design system.

## License

MIT
