# Migration Guide

This document provides guidance for upgrading between major versions of `@possibly6400/ui-kit`.

---

## 1.x to 2.x (Future)

When version 2.0 is released, migration notes will be added here.

---

## API Changes in 1.0.15+

### Form Component

The Form component has been updated for better responsiveness:

**Before (1.0.14 and earlier):**
```tsx
<Form width={315} aspectRatio={1.33}>
  {/* content */}
</Form>
```

**After (1.0.15+):**
```tsx
<Form size="md">
  {/* content */}
</Form>
```

#### Size Options
| Size | Max Width | Description |
|------|-----------|-------------|
| `sm` | 320px | Compact forms |
| `md` | 384px | Default size |
| `lg` | 448px | Larger forms |
| `full` | 100% | Full width |

### FormField Component

Enhanced with better error handling and helper text support:

**Before:**
```tsx
<FormField label="Email" error={hasError} />
```

**After:**
```tsx
<FormField 
  label="Email" 
  error="Please enter a valid email"  // Can now be a string
  helperText="We'll never share your email"
/>
```

### SearchBar Component

The SearchBar no longer calculates width dynamically (improves performance and SSR compatibility):

**Before (1.0.14 and earlier):**
- Width was calculated based on placeholder text
- Could cause layout shifts
- Not SSR-compatible

**After (1.0.15+):**
- Uses responsive CSS classes
- No layout shifts
- SSR-compatible
- Override with className if needed:

```tsx
<SearchBar 
  className="w-[400px]"  // Custom width
  placeholder="Search..." 
/>
```

### SubmitButton Component

Now includes loading state and prevents race conditions:

**New features:**
- Shows loading spinner during async operations
- Prevents multiple simultaneous submissions
- Memory-safe timeout handling

```tsx
<SubmitButton 
  onSubmit={async () => {
    await api.submit();
    // Button automatically shows loading during this
  }}
>
  Submit
</SubmitButton>
```

---

## Deprecation Notices

### Form `width` and `aspectRatio` props

These props are deprecated and will be removed in 2.0:
- Use the `size` prop instead
- Use custom className for specific dimensions

### Removed Features

None in current version.

---

## Security

All user-provided content is automatically escaped by React.
If you need to render HTML, sanitize it first using a library like DOMPurify.

---

## Getting Help

- Open an issue on [GitHub](https://github.com/MoshikoKar/ui-kit/issues)
- Check the [README](./README.md) for usage examples

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

