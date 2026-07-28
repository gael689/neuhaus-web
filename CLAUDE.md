# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server on port 8080
npm run build      # Production build → /dist
npm run build:dev  # Development-mode build
npm run lint       # ESLint
npm run preview    # Preview production build
npm run test       # Run Vitest tests once
npm run test:watch # Vitest in watch mode
```

Run a single test file:
```bash
npx vitest run src/path/to/file.test.ts
```

## Architecture

**Stack:** React 18 + TypeScript + Vite (SWC) + Tailwind CSS + shadcn/ui + React Router DOM v6 + Framer Motion + React Hook Form + Zod + TanStack Query.

This is a multi-page marketing site for Neuhaus S.A. (a printing company). Content is entirely in Spanish.

### Routing (`src/App.tsx`)

| Route | Page |
|---|---|
| `/` | `HomePage` |
| `/nosotros` | `NosotrosPage` |
| `/servicios/prospectos` | `ProspectosPage` |
| `/servicios/etiquetas` | `EtiquetasPage` |
| `/calidad` | `CalidadPage` |
| `/contacto` | `ContactoPage` |

`App.tsx` wraps everything in `QueryClientProvider → TooltipProvider → BrowserRouter → Layout`. `Layout` applies header/footer and scrolls to top on navigation.

### Page/Section pattern

Every page lives in `src/pages/<PageName>/index.tsx` and composes sections from `src/pages/<PageName>/sections/`. Each section is a standalone component imported and rendered in sequence.

### Shared components (`src/components/`)

- `Layout.tsx` — header + footer wrapper, scroll-to-top on route change
- `Header.tsx` — navigation with mobile hamburger menu
- `Footer.tsx`
- `PageHero.tsx` — reusable hero template used across pages
- `ParallaxImage.tsx` — scroll parallax wrapper
- `AnimatedSection.tsx` — Framer Motion scroll-triggered animation wrapper
- `ContactForm.tsx` / quote forms — React Hook Form + Zod validation
- `CounterNumber.tsx` — animated stat counter
- `ui/` — shadcn/ui components (Radix UI + Tailwind); do not edit these manually

### Styling

Tailwind CSS with `@/` path alias. Custom design tokens in `tailwind.config.ts`:
- Fonts: **DM Serif Display** (serif headings) / **DM Sans** (sans body)
- Colors: `navy`, `steel`, plus shadcn/ui CSS variable palette
- Dark mode: class-based

Use the `cn()` utility from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class names.

### Path alias

`@/` resolves to `src/`. Use it for all internal imports (e.g. `import { cn } from '@/lib/utils'`).

### Forms

Quote forms (in `EtiquetasPage` and `ProspectosPage`) and the main `ContactForm` use React Hook Form with Zod schemas for validation. Feedback is shown via Sonner toasts.

### Tests

Vitest with jsdom. Setup file at `src/test/setup.ts` adds a `matchMedia` polyfill. Test files follow the pattern `src/**/*.{test,spec}.{ts,tsx}`.
