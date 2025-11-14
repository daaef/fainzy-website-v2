# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Fainzy website v2, built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Tech Stack

- **Next.js 16** - App Router architecture
- **React 19** - Latest React version
- **TypeScript 5** - Strict mode enabled
- **Tailwind CSS v4** - Using new inline theme system
- **shadcn/ui** - Component library (new-york style, configured but components not yet installed)
- **Lucide React** - Icon library
- **Geist Fonts** - Sans and Mono font families

## Project Structure

```
app/
  layout.tsx       # Root layout with font configuration
  page.tsx         # Home page
  globals.css      # Tailwind imports and theme variables
lib/
  utils.ts         # cn() utility for class merging
components/
  layout/          # Layout components (Navbar, Footer)
  ui/              # shadcn/ui components will be installed here
```

## Path Aliases

TypeScript and Next.js are configured with path aliases:
- `@/*` maps to project root
- Use `@/components/...`, `@/lib/...`, `@/hooks/...` in imports

## Component Organization

Components are organized into logical groups:
- **`components/layout/`** - Layout components used across the application (Navbar, Footer)
- **`components/ui/`** - shadcn/ui components (installed via `npx shadcn@latest add [component]`)
- Future: Page-specific components can be organized by feature or page

## Styling System

### Tailwind CSS v4 Specifics

This project uses **Tailwind CSS v4**, which has a different configuration approach than v3:

1. **No tailwind.config.js** - Configuration is done via CSS using `@theme` directive
2. **Inline themes** - Theme tokens defined in `app/globals.css` using `@theme inline`
3. **CSS imports** - Tailwind is imported via `@import "tailwindcss"` in CSS
4. **Custom variants** - Dark mode uses `@custom-variant dark (&:is(.dark *))`

### Color System

Colors use **OKLCH color space** and are defined as CSS variables in `globals.css`:
- Light theme: `:root { ... }`
- Dark theme: `.dark { ... }`
- Variables like `--background`, `--foreground`, `--primary`, etc.
- Mapped to Tailwind via `--color-*` in `@theme inline`

To add new colors:
1. Define CSS variable in `:root` and `.dark`
2. Map to Tailwind in `@theme inline` block
3. Use with Tailwind classes: `bg-primary`, `text-foreground`, etc.

### Animation

The project includes `tw-animate-css` for additional animation utilities imported in `globals.css`.

## shadcn/ui Components

Configuration in `components.json`:
- **Style**: new-york
- **Base color**: neutral
- **CSS variables**: enabled
- **Icon library**: lucide
- **RSC**: enabled (React Server Components)

To add components:
```bash
npx shadcn@latest add [component-name]
```

Components will be installed to `components/ui/` and can be imported via `@/components/ui/...`.

## Fonts

The project uses Geist font family (Sans and Mono) loaded via `next/font/google`:
- Variables: `--font-geist-sans` and `--font-geist-mono`
- Configured in `app/layout.tsx`
- Available as Tailwind utilities: `font-sans`, `font-mono`

## Key Utilities

### `cn()` - Class Name Utility

Located in `lib/utils.ts`, combines `clsx` and `tailwind-merge`:
```typescript
import { cn } from "@/lib/utils"

// Use for conditional and merged Tailwind classes
<div className={cn("base-class", condition && "conditional-class")} />
```

This is essential for shadcn/ui components and prevents Tailwind class conflicts.
