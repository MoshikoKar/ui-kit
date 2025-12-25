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
- **Checkbox**: Form checkbox with label support
- **Toggle**: Switch/toggle component

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

```tsx
<Checkbox
  label="Accept terms"
  checked={boolean}
  onChange={function}
  error={boolean}
/>
```

### Toggle

```tsx
<Toggle
  label="Enable feature"
  checked={boolean}
  onChange={function}
  error={boolean}
/>
```

## Architecture Principles

1. **Intent-based separation**: Components are separated by intent, not by feature
2. **Primitive + Semantic**: Generic visual components with semantic wrappers
3. **No hardcoded colors**: All colors derive from CSS variables
4. **Theme agnostic**: No OS theme detection, explicit theme control
5. **Composable**: Components can be combined and extended

## License

MIT
