# Rules for AI

This file provides guidance to AI Agent when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server (localhost:3000)
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint with type-checked rules
- `npm run lint:fix` — auto-fix lint issues
- `npm run format` — Prettier (includes prettier-plugin-tailwindcss)

Pre-commit hooks: husky + lint-staged runs `eslint --fix` on `*.{ts,tsx}` and `prettier --write` on `*.{json,css,md}`.

## Architecture

**Next.js 15 App Router** with React 19, Tailwind CSS 4, Supabase auth, and shadcn/ui components.

### Rendering model

App Router with React Server Components by default. Add `"use client"` only when interactivity is required (useState, useEffect, event handlers, browser APIs). Server Actions replace API routes for mutations.

### Auth flow

- `src/lib/supabase/server.ts` — creates a Supabase SSR client for Server Components and Server Actions using `next/headers` cookies
- `src/lib/supabase/client.ts` — creates a Supabase browser client for Client Components
- `src/middleware.ts` — refreshes the session on every request and redirects unauthenticated users away from `PROTECTED_ROUTES`
- `src/app/auth/actions.ts` — Server Actions: `signIn`, `signUp`, `signOut`
- Auth pages: `src/app/auth/{signin,signup,confirm-email}/page.tsx`
- Protected page example: `src/app/dashboard/page.tsx`

### Key conventions

- **Path alias**: `@/*` maps to `./src/*` (tsconfig paths)
- **Tailwind class merging**: use `cn()` from `@/lib/utils` (clsx + tailwind-merge). Never concatenate class strings manually
- **shadcn/ui**: components live in `src/components/ui/`, "new-york" style. Install new ones with `npx shadcn@latest add [name]`
- **Server Actions + forms**: use `useActionState` in Client Component forms for server-side results; `useFormStatus` inside submit buttons for pending state
- **Supabase server client**: returns `null` when env vars are missing — always guard with `if (!supabase)`
- **Supabase browser client**: use `createClient()` from `@/lib/supabase/client` in Client Components
- **Shared types** (entities, DTOs) go in `src/types.ts`
- **Services/helpers** go in `src/lib/`
- **API routes**: only for non-mutation endpoints (GET). Use Server Actions for POST/PUT/DELETE

### Environment

- Node.js v22 (see `.nvmrc`)
- Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (copy `.env.example` to `.env.local`)
- Local Supabase: `npx supabase start` (requires Docker)

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs lint + build on every push and PR to `main`/`master`. Requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` repository secrets.
