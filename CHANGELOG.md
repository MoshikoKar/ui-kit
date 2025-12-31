# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.16] - 2025-12-31

### Added
- Tests for ThemeSwitch component (13 tests)
- Tests for SocialLinks component (14 tests)
- Tests for ContextMenu component (14 tests)
- Tests for CookieConsent component (16 tests)
- JSDoc documentation for ContextMenu, CookieConsent, SearchBar, SocialLinks
- CSS architecture documentation in README

### Changed
- Refactored globals.css into organized modular structure:
  - `theme/variables.css` - Theme color variables
  - `base.css` - Base/reset styles
  - `components/*.css` - Individual component styles
  - `utilities/*.css` - Animations and reduced motion support
- Improved code organization and maintainability

### Fixed
- Reduced motion already supported in SocialLinks.module.css (verified)

## [1.0.15] - 2025-12-31

### Added
- Vitest + Testing Library setup
- 12 comprehensive test files (101+ tests)
- Migration guide (MIGRATION.md)
- Form `size` prop with responsive presets
- FormField `error` string support
- FormField `helperText` prop
- SubmitButton loading state
- SearchBar responsive sizing

### Fixed
- SubmitButton memory leaks
- SubmitButton race conditions
- Form hardcoded dimensions
- SearchBar dynamic width performance
- ConfirmModal focus restoration
- Tooltip focus management

### Changed
- Moved `/src/preview/` → `/showcase/`
- SearchBar uses CSS-based sizing

### Deprecated
- Form `width` prop (use `size` instead)
- Form `aspectRatio` prop (use `size` instead)

## [1.0.0] - 2025-01-XX

### Added
- Initial public release
- Button component with variants and sizes
- Input component with error states
- Checkbox component with animated checkmark
- RadioButton and RadioGroup components
- Toggle switch component
- Loader and Spinner components
- ThemeSwitch component
- Form components (Form, FormField, FormButton, FormFooter, FormFooterLink)
- Card components (Card, CardHeader, CardContent, CardFooter)
- Tooltip component
- ThemeProvider with dark/light mode support
- TypeScript type definitions
- SSR-safe ThemeProvider implementation
- Explicit CSS import support

