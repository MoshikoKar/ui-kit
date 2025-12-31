# UI Kit

A reusable, themeable component library built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Themeable**: Supports dark and light modes with CSS variables
- 🔧 **TypeScript**: Fully typed components and props
- 🎯 **Accessible**: Built with accessibility best practices
- 📦 **Packaged**: Ready for npm distribution
- 🧩 **Composable**: Primitive components with semantic wrappers
- ⚡ **Lightweight**: Minimal dependencies (only clsx and tailwind-merge)
- 🎭 **Dynamic Sizing**: Components adapt to content with minimum size constraints

## Components

### Primitive Components

- **Button**: Generic visual button with variants, sizes, and states
- **Input**: Form input field with error states and dynamic sizing
- **Checkbox**: Animated SVG checkbox with smooth checkmark animation and label support
- **RadioButton**: Windows-style radio button with RadioGroup support for form selections
- **Toggle**: Switch/toggle component with celestial sparkle effects
- **Loader**: Animated loading spinner with rotating faces and glowing effects
- **ThemeSwitch**: Animated dark/light mode toggle with sun/moon and stars/clouds visual effects
- **SearchBar**: Gradient search bar input with integrated search icon and dynamic placeholder sizing
- **Card**: Flexible card container with header, content, and footer sections
- **Tooltip**: Accessible tooltip component with position control and delay support
- **SocialLinks**: Social media links component with platform icons and tooltips
- **ContextMenu**: Context menu component with grouped items, icons, and variants
- **CookieConsent**: Configurable cookie consent card component with localStorage persistence
- **ConfirmModal**: Generic confirmation modal for irreversible or sensitive actions with variant support

### Semantic Wrappers

- **Form**: Form container with backdrop blur and composable form components (dynamically sized)
- **SubmitButton**: Button wrapper for form submissions with loading/success states

## Requirements

- React 19.2.3 or higher
- React DOM 19.2.3 or higher
- Node.js 16.0.0 or higher (for development)

**Note:** Tailwind CSS is compiled at build time. Consumers do not need Tailwind installed or configured.

## Installation

```bash
npm install @possibly6400/ui-kit
```

## Usage

Import components and styles separately:

```tsx
import { Button, Input, ThemeProvider } from '@possibly6400/ui-kit';
import '@possibly6400/ui-kit/styles'; // Required: Import styles explicitly

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
    </ThemeProvider>
  );
}
```

**Important:** You must import the styles explicitly. The CSS is not automatically included when importing components.

## Styling & Global CSS

The UI Kit includes global CSS that affects the document root:

- **CSS Variables**: Theme variables are defined on `:root` and `.theme-light`
- **Global Resets**: Basic resets for `box-sizing`, `html`, and `body` elements
- **Theme Classes**: Theme switching applies classes to `document.documentElement`

These global styles are intentional and necessary for the theme system to function. If you need to scope styles or avoid global resets, you can override them in your application CSS.

**SSR Compatibility:** The `ThemeProvider` is SSR-safe and works correctly with Next.js, Remix, and other SSR frameworks. All browser API access is properly guarded.

## Theme System

The UI Kit supports dark and light themes:

```tsx
import { ThemeProvider, useTheme } from '@possibly6400/ui-kit';

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

The preview includes:
- **Component Showcase**: Full demonstration of all component variants and states
- **Landing Page**: Beautiful landing page preview showcasing all components in a cohesive design

Toggle between the showcase and landing page using the button in the bottom-right corner.

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
  variant="primary" | "secondary" | "danger"
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

### SearchBar

Search bar component with dynamic sizing based on placeholder text. Automatically adjusts width to fit placeholder content while maintaining minimum size constraints.

```tsx
<SearchBar
  size="sm" | "md" | "lg"
  placeholder="Search for components..."
  value={string}
  onChange={function}
/>
```

**Features:**
- Dynamic width calculation based on placeholder text
- Minimum width constraints per size (sm: 200px, md: 260px, lg: 320px)
- Integrated search icon with hover effects
- Gradient background with neumorphic design

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
import { ThemeSwitch, ThemeProvider } from '@possibly6400/ui-kit';

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
import { Loader, Spinner } from '@possibly6400/ui-kit';

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

### Card

Flexible card component for displaying content with header, content, and footer sections.

```tsx
import { Card, CardHeader, CardContent, CardFooter } from '@possibly6400/ui-kit';

<Card>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button variant="ghost" size="sm">Action</Button>
  </CardFooter>
</Card>
```

**Components:**
- **Card**: Main card container
- **CardHeader**: Header section with bottom border
- **CardContent**: Main content area
- **CardFooter**: Footer section with top border

**Features:**
- Theme-aware styling with CSS variables
- Flexible layout with composable sections
- Border separators between sections
- Full TypeScript support

### Tooltip

Accessible tooltip component that displays contextual information on hover or focus.

```tsx
import { Tooltip } from '@possibly6400/ui-kit';

const [tooltipOpen, setTooltipOpen] = useState(false);

<Tooltip
  open={tooltipOpen}
  onOpenChange={setTooltipOpen}
  content="This is a tooltip"
  position="top" | "bottom" | "left" | "right"
  delay={number}
  disabled={boolean}
>
  <Button>Hover me</Button>
</Tooltip>
```

**Props:**
- `open: boolean` - Controlled open state
- `onOpenChange?: (open: boolean) => void` - Callback when open state changes
- `content: React.ReactNode` - Tooltip content
- `position?: "top" | "bottom" | "left" | "right"` - Tooltip position (default: `"top"`)
- `delay?: number` - Delay before showing tooltip in milliseconds (default: `0`)
- `disabled?: boolean` - Disable tooltip functionality
- `children: React.ReactElement` - Child element to attach tooltip to

**Features:**
- Accessible with ARIA attributes
- Keyboard support (focus/blur events)
- Position control (top, bottom, left, right)
- Configurable delay
- Arrow indicator pointing to trigger element
- Theme-aware styling

### SocialLinks

Social media links component with platform-specific icons and tooltips.

```tsx
import { SocialLinks } from '@possibly6400/ui-kit';

const links = [
  { platform: 'github', url: 'https://github.com', label: 'GitHub' },
  { platform: 'linkedin', url: 'https://linkedin.com' },
  { platform: 'x', url: 'https://x.com' },
];

<SocialLinks
  links={links}
  orientation="vertical" | "horizontal"
/>
```

**Props:**
- `links: SocialLink[]` - Array of social link objects
- `orientation?: "vertical" | "horizontal"` - Layout orientation (default: `"vertical"`)
- `className?: string` - Additional CSS classes

**Supported Platforms:**
- LinkedIn, GitHub, Instagram, YouTube, Facebook, Spotify, Telegram, Pinterest, X (Twitter)

**Features:**
- Platform-specific SVG icons
- Hover tooltips with platform names
- Vertical and horizontal layouts
- Smooth animations and transitions
- Accessible with proper ARIA labels

### ContextMenu

Context menu component with grouped items, icons, and variant support.

```tsx
import { ContextMenu } from '@possibly6400/ui-kit';

<ContextMenu
  groups={[
    {
      id: 'actions',
      items: [
        {
          id: 'edit',
          label: 'Edit',
          icon: <EditIcon />,
          onClick: () => console.log('Edit'),
        },
        {
          id: 'copy',
          label: 'Copy',
          icon: <CopyIcon />,
          onClick: () => console.log('Copy'),
        },
      ],
    },
    {
      id: 'danger',
      items: [
        {
          id: 'delete',
          label: 'Delete',
          variant: 'danger',
          icon: <DeleteIcon />,
          onClick: () => console.log('Delete'),
        },
      ],
    },
  ]}
  showSeparators={true}
/>
```

**Props:**
- `groups: ContextMenuGroupData[]` - Array of menu groups
- `showSeparators?: boolean` - Show separators between groups (default: `true`)
- `className?: string` - Additional CSS classes

**Item Variants:**
- `default` - Standard menu item
- `danger` - Destructive action (red styling)
- `accent` - Accented item (highlighted)

**Features:**
- Grouped menu items with separators
- Icon support for each item
- Variant styling (default, danger, accent)
- Disabled state support
- Theme-aware styling

### CookieConsent

Configurable cookie consent card component with localStorage persistence. A pure UI component that can be used inline or within a modal wrapper.

```tsx
import { CookieConsent } from '@possibly6400/ui-kit';

<CookieConsent
  title="Your privacy is important to us"
  description="We process your personal information to measure and improve our sites and services, to assist our campaigns and to provide personalised content."
  privacyLink="/privacy"
  privacyLinkText="Privacy Policy"
  acceptLabel="Accept"
  optionsLabel="More Options"
  onAccept={() => console.log('Accepted')}
  onOptions={() => console.log('More options')}
  storageKey="cookie-consent"
  storageValue="accepted"
  icon={cookieIcon}
  privacyLinkTarget="_blank"
  privacyLinkRel="noopener noreferrer"
  className="transition-transform duration-300"
  iconClassName=""
  contentClassName=""
  acceptButtonClassName=""
  optionsButtonClassName=""
/>
```

**Props:**
- `title: string` - Consent card title
- `description: string` - Consent description text
- `privacyLink: string` - Privacy policy URL
- `privacyLinkText: string` - Privacy policy link text
- `acceptLabel: string` - Accept button label
- `optionsLabel: string` - More options button label
- `onAccept: () => void` - Callback when accept is clicked
- `onOptions: () => void` - Callback when more options is clicked
- `storageKey: string` - localStorage key for persisting consent
- `storageValue: string` - Value to store when consent is accepted
- `icon?: React.ReactNode` - Optional icon/illustration (typically a cookie icon)
- `privacyLinkTarget?: string` - Link target attribute (e.g., "_blank")
- `privacyLinkRel?: string` - Link rel attribute (e.g., "noopener noreferrer")
- `className?: string` - Additional CSS classes for the card container
- `iconClassName?: string` - Additional CSS classes for the icon wrapper
- `contentClassName?: string` - Additional CSS classes for the content wrapper
- `acceptButtonClassName?: string` - Additional CSS classes for the accept button
- `optionsButtonClassName?: string` - Additional CSS classes for the options button

**Features:**
- Pure UI component - no modal/backdrop assumptions
- localStorage persistence - automatically checks and stores consent state
- Fully props-driven - all text, links, and behavior controlled via props
- Optional icon support - layout adapts when icon is omitted
- Customizable styling - all elements can be styled via className props
- Dark mode support - theme-aware colors and styling
- Accessible - proper semantic HTML and keyboard navigation
- Inline or modal usage - can be embedded anywhere or wrapped in a modal

**Usage Notes:**
- Component automatically hides once consent is stored in localStorage
- Reset consent by removing the storageKey from localStorage
- For modal usage, wrap the component in a backdrop/overlay div
- All styling is customizable via className props while maintaining sensible defaults

### ConfirmModal

Generic confirmation modal component for irreversible or sensitive actions. Fully data-driven with no hard-coded text, icons, or colors. Perfect for delete confirmations, warning dialogs, and other critical user actions.

```tsx
import { ConfirmModal } from '@possibly6400/ui-kit';

const [isOpen, setIsOpen] = useState(false);

<ConfirmModal
  isOpen={isOpen}
  title="Delete Item"
  description="Are you sure you want to delete this item? This action cannot be undone."
  icon={deleteIcon}
  confirmLabel="Delete"
  cancelLabel="Cancel"
  variant="danger"
  onConfirm={() => {
    console.log('Confirmed');
    setIsOpen(false);
  }}
  onCancel={() => setIsOpen(false)}
  onClose={() => setIsOpen(false)}
/>
```

**Props:**
- `isOpen: boolean` - Controls modal visibility
- `title: string` - Modal title text
- `description: string` - Modal description text (supports multi-line with `\n`)
- `icon?: React.ReactNode` - Optional icon/illustration
- `confirmLabel: string` - Confirm button label
- `cancelLabel: string` - Cancel button label
- `variant?: "neutral" | "danger" | "warning" | "info"` - Visual variant (default: `"neutral"`)
- `onConfirm: () => void` - Callback when confirm is clicked
- `onCancel: () => void` - Callback when cancel is clicked
- `onClose: () => void` - Callback when modal is closed (backdrop click or ESC key)
- `className?: string` - Additional CSS classes for the backdrop
- `iconClassName?: string` - Additional CSS classes for the icon wrapper
- `contentClassName?: string` - Additional CSS classes for the content wrapper
- `confirmButtonClassName?: string` - Additional CSS classes for the confirm button
- `cancelButtonClassName?: string` - Additional CSS classes for the cancel button

**Variants:**
- `neutral` - Standard confirmation (primary button)
- `danger` - Destructive actions (danger button, red icon)
- `warning` - Warning messages (secondary button, yellow icon)
- `info` - Informational confirmations (primary button, blue icon)

**Features:**
- Fully data-driven - no hard-coded text, icons, or colors
- Backdrop click to close
- ESC key to close
- Focus trap - keyboard navigation stays within modal
- Automatic focus management - focuses first button when opened
- Accessibility - proper ARIA attributes (role="dialog", aria-modal, aria-labelledby, aria-describedby)
- Dark mode support - theme-aware colors and styling
- Uses Button component - consistent styling with rest of UI kit
- Smooth transitions - subtle opacity and scale animations

**Usage Notes:**
- Component uses the Button component internally for consistent styling
- All text content must be provided via props (no defaults)
- Icon is optional - layout adapts when omitted
- Description supports multi-line text using `\n` or whitespace-pre-line
- Modal automatically manages focus and keyboard navigation

### Form

Form container component with backdrop blur and composable form elements. Dynamically sizes based on content.

```tsx
import { Form, FormField, FormButton, FormFooter, FormFooterLink } from '@possibly6400/ui-kit';

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
- **Form**: Main form container with backdrop blur
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
- Backdrop blur effect for modern glassmorphism look
- Optional user/logo icon with animated design
- Theme-aware colors using CSS variables
- Composable structure - works with Checkbox, RadioButton, and other components
- Animated footer links with hover effects
- Customizable width and aspect ratio
- Dynamic sizing based on content
- Full TypeScript support

## Architecture Principles

1. **Intent-based separation**: Components are separated by intent, not by feature
2. **Primitive + Semantic**: Generic visual components with semantic wrappers
3. **No hardcoded colors**: All colors derive from CSS variables
4. **Theme agnostic**: No OS theme detection, explicit theme control
5. **Composable**: Components can be combined and extended
6. **Dynamic sizing**: Components adapt to content while maintaining minimum constraints

## CSS Architecture

The UI Kit uses an organized CSS structure for maintainability:

```
src/styles/
├── globals.css           # Main entry point (imports all CSS)
├── base.css              # Base/reset styles
├── theme/
│   └── variables.css     # Theme color variables (dark/light)
├── components/
│   ├── checkbox.css      # Checkbox component styles
│   ├── theme-switch.css  # ThemeSwitch component styles
│   ├── toggle.css        # Toggle component styles
│   ├── loader.css        # Loader component styles
│   ├── radio.css         # RadioButton component styles
│   └── card.css          # Card component styles
└── utilities/
    ├── animations.css    # Animation keyframes
    └── reduced-motion.css # Accessibility: reduced motion support
```

### CSS Approach

The library uses a hybrid CSS approach:

- **CSS Modules** for components with complex, scoped styles: `SubmitButton`, `ContextMenu`, `SearchBar`, `SocialLinks`
- **Global CSS** for components with theme-dependent styles that need class-based selectors: `Checkbox`, `Toggle`, `Loader`, `RadioButton`, `ThemeSwitch`, `Card`

### Reduced Motion Support

All animated components respect `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  .loader-face { animation: none !important; }
  .toggle-button { transition: none !important; }
  /* ... other animations disabled */
}
```

## License

MIT
