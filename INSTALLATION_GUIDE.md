# Installation Guide for GitHub Package

## Issues Fixed

The following issues have been resolved to make the package installable from GitHub:

1. ✅ **Repository field added** - `package.json` now includes GitHub repository URL
2. ✅ **TypeScript declarations** - `.d.ts` files will be generated on build
3. ✅ **CSS bundling** - CSS files will be included in the build
4. ✅ **Exports field** - Modern package.json exports for better module resolution
5. ✅ **Build configuration** - Separate TypeScript config for building declarations

## Installation from GitHub

### Option 1: Install directly from GitHub (Recommended)

```bash
npm install MoshikoKar/ui-kit
# or
npm install github:MoshikoKar/ui-kit
```

### Option 2: Install from GitHub with specific branch/tag

```bash
npm install MoshikoKar/ui-kit#main
# or for a specific tag
npm install MoshikoKar/ui-kit#v1.0.0
```

## Important: Build Before Publishing

**You must build the package before committing/pushing to GitHub:**

```bash
npm run build
```

This will:
1. Generate TypeScript declaration files (`.d.ts`)
2. Bundle JavaScript files (`.js` and `.mjs`)
3. Extract and bundle CSS files (`styles.css`)

## After Building

After running `npm run build`, the `dist` folder will contain:
```
dist/
  ├── index.js          (CommonJS)
  ├── index.mjs         (ES Modules)
  ├── index.d.ts        (TypeScript declarations)
  ├── index.d.ts.map    (Declaration source maps)
  └── styles.css        (All CSS bundled)
```

**Important:** You need to commit the `dist` folder to GitHub for the package to work when installed.

## Usage in Your Project

### 1. Install the package

```bash
npm install MoshikoKar/ui-kit
```

### 2. Import components

```tsx
import { Button, Input, ThemeProvider } from '@ui-kit/ui-kit';
// CSS is automatically imported via the main entry point
```

### 3. Use in your app

```tsx
import { Button, ThemeProvider } from '@ui-kit/ui-kit';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

## Alternative: Manual CSS Import

If you prefer to import CSS separately:

```tsx
import { Button } from '@ui-kit/ui-kit';
import '@ui-kit/ui-kit/styles'; // Import CSS separately
```

## Troubleshooting

### Issue: "Cannot find module '@ui-kit/ui-kit'"

**Solution:** Make sure you've built the package and committed the `dist` folder to GitHub.

### Issue: "Module has no exported member"

**Solution:** Make sure TypeScript declaration files (`.d.ts`) are in the `dist` folder.

### Issue: "Styles not loading"

**Solution:** The CSS is automatically imported, but if it's not working, try:
```tsx
import '@ui-kit/ui-kit/styles';
```

### Issue: Build fails

**Solution:** Make sure all dependencies are installed:
```bash
npm install
npm run build
```

## Publishing to npm (Optional)

If you want to publish to npm instead of GitHub:

1. Update `package.json` name (remove `@ui-kit/` scope or use your npm username)
2. Run `npm run build`
3. Run `npm publish`

## Git Workflow

1. Make changes to source code
2. Run `npm run build` to generate dist files
3. Commit both source and dist files:
   ```bash
   git add .
   git commit -m "Update components"
   git push
   ```
4. Users can now install with `npm install MoshikoKar/ui-kit`

## Note on .gitignore

The `dist` folder is currently in `.gitignore`. For GitHub package distribution, you have two options:

**Option A:** Remove `dist/` from `.gitignore` and commit built files
**Option B:** Keep `dist/` in `.gitignore` and add a `postinstall` script (less reliable)

For a library package, **Option A is recommended** - commit the dist folder so users don't need to build.

