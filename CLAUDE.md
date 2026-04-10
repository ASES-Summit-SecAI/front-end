# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16.2.2** with App Router (`app/` directory)
- **Tailwind CSS v4** — configured via `postcss.config.mjs`, no `tailwind.config.js` needed
- **Framer Motion** — used for all animations (`"use client"` required on animated components)
- **TypeScript**

> This is Next.js 16 — APIs and conventions may differ from older versions. Check `node_modules/next/dist/docs/` if unsure.

## Architecture

Single-page marketing/showcase site. All content lives in `app/page.tsx`, which composes these section components in order:

```
Navbar → Hero → Problem → Solution → HowItWorks → Footer
```

All components are in `app/components/`. Each is a `"use client"` component using Framer Motion's `motion` and `whileInView` for scroll-triggered animations.

**Color scheme:** dark background `#050508`, text `#f0f0f5`, accent `indigo-400/500/600`, danger accents `red-400` (Problem section), success `green-400` (HowItWorks section).

**Sections and their IDs** (used by Navbar anchor links):
- `#problem` — Problem.tsx
- `#solution` — Solution.tsx
- `#how` — HowItWorks.tsx
- `#contact` — Footer.tsx
