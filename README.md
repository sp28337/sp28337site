# sp28337 Website Starter (Astro + Tailwind + TypeScript)

Production-ready starter for a personal brand + web agency website.

## Stack
- Astro 6+
- TailwindCSS 4+
- TypeScript strict mode
- Content Collections (Markdown blog)
- pnpm

## Project Structure

```txt
src/
  components/
    layout/
    sections/
    ui/
  config/
    site.ts
  content/
    blog/
  features/
    auth/
  i18n/
  layouts/
  pages/
  styles/
  utils/
    api/
```

## Run

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Notes for extension
- `src/utils/api/client.ts` is ready for FastAPI integration.
- `src/features/auth` is a placeholder for auth flows.
- `src/i18n` provides i18n-ready structure.
- Blog uses Astro Content Collections and supports pagination via `/blog/[page]`.
