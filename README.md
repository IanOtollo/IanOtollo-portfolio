# Ian Otollo — Portfolio

A 7-page Next.js 14 (App Router) portfolio with a dynamic content **persona engine**:
each visit randomly selects one of five personas (stored in `sessionStorage`) that drives
the hero copy, featured projects, philosophy quotes, stat selection, and contact opener.

## Stack

- **Next.js 14** (App Router, `src/` dir, TypeScript strict mode)
- **Tailwind CSS** — custom dark design system (near-black + gold accent)
- **Framer Motion** — entrance + scroll animations
- **Lenis** — smooth scroll
- **react-hook-form + zod** — contact form
- **next-mdx-remote** — MDX-driven case studies
- Fonts: Playfair Display (display), DM Sans (body), DM Mono (mono)

## Routes

`/` · `/about` · `/work` · `/work/[slug]` · `/services` · `/empire` · `/contact`

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
src/
├── app/            # routes (home, about, work, work/[slug], services, empire, contact)
├── components/     # layout/, ui/, home/, about/, work/
├── data/           # personas, projects, skills, empire
├── hooks/          # usePersona, useLenis
├── lib/            # cn() util
└── content/work/   # 6 MDX case studies
```

## Notes

- `public/ian-portrait.jpg` is currently a **generated placeholder**. Replace it with the
  real 400×533 portrait (same filename) before deploying.
- The contact form logs submissions to the console; wire it to an email/API endpoint for
  production.
