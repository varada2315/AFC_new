# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Ashish Finance Services Website (`artifacts/ashish-finance`)
- **Type**: React + Vite (frontend-only, no backend needed)
- **Preview path**: `/`
- **Description**: Premium 5-page financial services website for Ashish Finance Services by Mr. Ashish Vilas Urkude
- **Pages**: Home, About, Services, License, Contact, Privacy Policy, Terms
- **Design**: Dark navy (#0D1B2A) + Gold (#C9A84C) + Green CTAs (#2E7D32)
- **Languages**: English + Marathi (bilingual)
- **Fonts**: Cinzel, Playfair Display, Montserrat, DM Sans, Noto Sans Devanagari (Google Fonts)
- **Features**: WhatsApp floating button, scroll-to-top, counter animations, lightbox modals, framer-motion animations, contact form with zod validation

### API Server (`artifacts/api-server`)
- **Type**: Express API server
- **Preview path**: `/api`

### Ashish Finance — Placeholders to Replace
| Placeholder | Replace With |
|-------------|-------------|
| `9876543210` | Actual mobile number |
| `info@ashishfinanceservices.com` | Actual email address |
| YouTube video ID `dQw4w9WgXcQ` | Real YouTube video ID |
| `SEBI REG NO: INH000012345` | Actual SEBI reg number |
| `BROKER CODE: ABC1234` | Actual broker code |
| Certificate numbers | Actual cert numbers |
| Instagram/Facebook URLs | Actual social profile links |
| `ashish-hero.png` in `src/assets/` | Replace with real Ashish photo |
