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
- **Toggle**: Switch/toggle component
- **ThemeSwitch**: Animated dark/light mode toggle with sun/moon and stars/clouds visual effects

### Semantic Wrappers

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

## Architecture Principles

1. **Intent-based separation**: Components are separated by intent, not by feature
2. **Primitive + Semantic**: Generic visual components with semantic wrappers
3. **No hardcoded colors**: All colors derive from CSS variables
4. **Theme agnostic**: No OS theme detection, explicit theme control
5. **Composable**: Components can be combined and extended

## License

MIT
