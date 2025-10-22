# Design Token Synchronization System

## Overview

This project uses an **automated token synchronization system** that keeps design tokens flowing from Supernova to both CSS variables and Tailwind configuration. All design tokens are sourced from a single source of truth - the Supernova-synced CSS files.

## Token Flow Architecture

```
Supernova Design System (Cloud)
    ↓ (sync/export)
CSS Token Files (Source of Truth)
    ├── colors.css (530 tokens)
    ├── measures.css (86 tokens)
    ├── shadows.css (1 token)
    ├── typography.css (Tailwind utilities)
    ├── gradients.css (empty)
    └── borders.css (empty)
    ↓ (imported by)
index.css (Master CSS file)
    ↓ (referenced by)
    ├── figma-variables.css (511 CSS var references)
    └── tailwind-variables.js (577 CSS var references)
    ↓ (used by)
Components & UI
```

## Files in the System

### Source Files (Supernova-synced)
- **`colors.css`** - 530 color tokens including semantic colors, component colors, alpha variants
- **`measures.css`** - 86 dimension tokens including spacing, sizing, borders, typography
- **`shadows.css`** - Shadow definitions
- **`typography.css`** - Tailwind utility classes for typography
- **`gradients.css`** - Gradient definitions (currently empty)
- **`borders.css`** - Border definitions (currently empty)

### Generated Files (Auto-generated, DO NOT EDIT)
- **`figma-variables.css`** (722 lines) - Bridges Figma variable naming to Supernova tokens
- **`tailwind-variables.js`** (1110 lines) - Tailwind theme configuration with CSS variable references

### Generator Scripts
- **`generate-figma-variables.js`** - Generates figma-variables.css from Supernova CSS files
- **`generate-tailwind-variables.js`** - Generates tailwind-variables.js from Supernova CSS files

### Master Files
- **`index.css`** - Master CSS file that imports all token files
- **`tailwind.config.ts`** - Tailwind configuration that imports tailwind-variables.js

## Key Features

### ✅ Single Source of Truth
All design tokens originate from Supernova-synced CSS files. No hardcoded values exist in generated files.

### ✅ CSS Variable References
Both `figma-variables.css` and `tailwind-variables.js` use CSS variable references (`var(--token-name)`) instead of static values. This means:
- Changes to Supernova sync automatically propagate to all components
- No need to regenerate Tailwind config when colors change
- Runtime flexibility for theming

### ✅ Comprehensive Coverage
- **511 CSS variables** in figma-variables.css
- **577 CSS variables** in tailwind-variables.js
- **617 total unique tokens** across the system

### ✅ Automated Generation
Scripts automatically parse CSS files and generate properly structured configuration files.

## Usage

### Regenerating Token Files

When Supernova design tokens are updated:

```bash
# Regenerate both files
npm run generate:tokens

# Or individually
npm run generate:figma
npm run generate:tailwind
```

### NPM Scripts Available

```json
{
  "generate:figma": "node generate-figma-variables.js",
  "generate:tailwind": "node generate-tailwind-variables.js",
  "generate:tokens": "npm run generate:figma && npm run generate:tailwind"
}
```

## Token Naming Conventions

### Supernova CSS Variables
```css
--color-green-default
--measure-dimension-scale-100
--shadow-shad-5
--color-components-button-brand-background-brand-solid
```

### Figma Variable Aliases
```css
--spacing/1: var(--measure-dimension-scale-100)
--radius/4: var(--measure-border-radius-border-radius-large)
--components/button✅/brand/background-brand-solid: var(--color-components-button-brand-background-brand-solid)
```

### Tailwind Configuration
```javascript
{
  colors: {
    green: {
      default: 'var(--color-green-default)'
    }
  },
  spacing: {
    '100': 'var(--measure-dimension-scale-100)'
  }
}
```

## Component Usage Examples

### Using CSS Variables Directly
```tsx
<div style={{ 
  backgroundColor: 'var(--color-green-default)',
  padding: 'var(--measure-dimension-scale-400)'
}}>
  Content
</div>
```

### Using Figma Variables
```tsx
<div style={{ 
  backgroundColor: 'var(--surface/page)',
  gap: 'var(--spacing/4)'
}}>
  Content
</div>
```

### Using Tailwind Classes
```tsx
<div className="bg-green-default p-400 rounded-large">
  Content
</div>
```

## Token Categories

### Colors (530 tokens)
- **Base Colors**: green, blue, gray, orange, red (with scales 1-12)
- **Alpha Variants**: Transparent versions of base colors
- **Semantic Colors**: brand, accent, error, success, info, neutral
- **Component Colors**: 200+ component-specific color tokens
- **Functional Colors**: text, icon, surface, border, button

### Spacing & Sizing (86 tokens)
- **Dimension Scales**: 0, 25, 50, 100, 150, 200, 250, 300, 400, 500, 600, 700, 800, 900
- **Gap Values**: 0, sm, md, lg, xl, 2xl, 3xl
- **Padding Values**: 0, sm, md, lg, xl, xxl
- **Margin Values**: 0, sm, md, lg, xl

### Typography
- **Font Sizes**: h1-h6, paragraph (lg, md, sm, xs, xxs)
- **Line Heights**: Corresponding line heights for all font sizes
- **Paragraph Spacing**: Spacing values for paragraphs

### Borders & Radius
- **Border Width**: none, small, medium, large
- **Border Radius**: small, medium, large, extra-large, 2-extra-large
- **Component Radius**: button, inputs, product-cards, modals, avatars, badges, callouts

### Shadows
- **Shadow Definitions**: Multi-layer shadow effects

## Best Practices

### ✅ DO
- Use CSS variable references for all styling
- Run generator scripts after Supernova updates
- Use Tailwind utilities when possible
- Keep figma-variables.css and tailwind-variables.js in version control

### ❌ DON'T
- Manually edit `figma-variables.css` or `tailwind-variables.js`
- Use hardcoded color/spacing values in components
- Modify the generator scripts without testing
- Skip regeneration after Supernova sync

## Troubleshooting

### Colors not updating after Supernova sync?
```bash
# 1. Verify CSS files were updated
git status colors.css measures.css

# 2. Regenerate token files
npm run generate:tokens

# 3. Restart development server
npm run dev
```

### Missing tokens?
Check that the token exists in the source CSS files:
```bash
grep "token-name" colors.css measures.css shadows.css
```

### Build errors?
Ensure all generator scripts complete successfully:
```bash
node generate-figma-variables.js
node generate-tailwind-variables.js
```

## Statistics

- **Total Source Tokens**: 617
- **CSS Variable References**: 511 (figma-variables.css)
- **Tailwind Variable References**: 577 (tailwind-variables.js)
- **Component Color Tokens**: 200+
- **Zero Static Values**: 100% CSS variable references

## Maintenance

### When to Regenerate
- ✅ After Supernova design system updates
- ✅ When CSS token files are modified
- ✅ Before deploying to production
- ✅ When adding new components that need tokens

### Verification
```bash
# Check for static values (should return empty)
grep -E "#[0-9a-fA-F]{6}" figma-variables.css
grep -E "#[0-9a-fA-F]{6}" tailwind-variables.js

# Count CSS variable references
grep -o "var(--" figma-variables.css | wc -l
grep -o "var(--" tailwind-variables.js | wc -l
```

## Contributing

When adding new design tokens:
1. Add tokens to appropriate Supernova CSS file
2. Run `npm run generate:tokens`
3. Verify generated files
4. Test in components
5. Commit all changes including generated files

---

**Last Updated**: Generated automatically by token generation scripts  
**System Version**: 2.0 - CSS Variable References  
**Token Count**: 617 unique tokens
