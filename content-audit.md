# Content Audit — Ian Otollo Portfolio

Extracted from existing codebase before teardown. All real content preserved below.

---

## Projects (from src/data/projects.ts + src/content/work/*.mdx)

### 1. MYSTERYLIFESTYLE
- **Category:** Digital Products Marketplace
- **Client:** Private Client — Nigeria
- **Year:** 2024
- **Stack:** Next.js, Supabase, Paystack, TypeScript, Playfair Display, DM Sans
- **Status:** Shipped
- **Problem:** A Nigerian creator needed a marketplace for digital products — Canva templates, e-books, and course guides. The requirements were unforgiving: server-side payment verification, expiring download tokens to prevent file sharing after purchase, and a brand aesthetic that positioned the product as premium, not generic.
- **Approach:** Payment security was locked down first. Paystack webhooks hit a Next.js API route that verifies signatures server-side before any download token is issued. No payment status can be faked from the client. Download access runs through Supabase Edge Functions generating signed, time-limited URLs. A purchased file URL expires after 15 minutes. The file cannot be shared. The design system was strict: Playfair Display for headings, DM Sans for body copy, black and white throughout. No colour except where product imagery brings it. The brand needed to feel like it cost more than it did.
- **Outcome:** Live and processing transactions. The security architecture has held — zero fraudulent download incidents. The expiring token pattern has since been reused in two other client projects.

### 2. Clare Pastries
- **Category:** E-Commerce Platform
- **Client:** Michael Aderi, Busia Town
- **Year:** 2024
- **Stack:** Next.js 15, Prisma, Supabase, Sanity CMS, PayHero M-Pesa, CallMeBot
- **Status:** Shipped
- **Live URL:** https://clarepastries.vercel.app
- **Problem:** A Busia-based bakery needed an e-commerce platform that handled M-Pesa payments natively, had a content management system the owner could operate without a developer, real-time order notifications, and a separate admin dashboard for order management.
- **Approach:** Multi-system architecture from the start: Next.js 15 storefront, Sanity Studio for product content management, Prisma with Supabase for orders and auth, PayHero for M-Pesa STK push integration, and CallMeBot for instant WhatsApp order alerts to the business owner. The admin dashboard is a separate Next.js application sharing the same Supabase backend. This kept the storefront lean while giving the owner full order visibility. Navigated persistent Prisma schema migration conflicts across environments and resolved Vercel deployment pipeline failures during launch.
- **Outcome:** Both storefront and admin dashboard are live. The owner manages all products independently through Sanity Studio — no developer intervention needed for content. M-Pesa payments process in real time with immediate WhatsApp alerts to the business. The system handles the full customer journey without manual steps.

### 3. Busia County Government
- **Category:** Government Web Platform
- **Client:** Busia County Government
- **Year:** 2024–2025
- **Stack:** Laravel, MySQL, Blade, Tailwind CSS
- **Status:** Shipped
- **Problem:** The county government website was outdated, not mobile-responsive, and offered no bilingual support — failing to serve both Swahili and English-speaking constituents in equal measure. A government platform has different requirements from a startup site: formal hierarchy, accessibility, and institutional credibility are non-negotiable.
- **Approach:** Full revamp on Laravel with a bilingual CMS that allows content editors to manage Swahili and English versions of all pages independently. The design language is formal civic — deliberate information hierarchy, accessibility-first layout, no aesthetic flourishes that would undermine institutional tone. Government procurement specifications were treated as requirements, not suggestions.
- **Outcome:** Delivered to specification. Bilingual content system is operational. The revamped platform communicates government-grade credibility while remaining accessible to the population it serves.

### 4. IOM Medic
- **Category:** Health Companion PWA
- **Client:** IOM Empire — Internal Product
- **Year:** 2025
- **Stack:** Next.js 15, TypeScript, PWA APIs, IndexedDB, Framer Motion
- **Status:** In Progress
- **Problem:** IOM Medic started as a React Native application built with Expo. It ran into persistent EAS Build failures on Windows that blocked every deployment path — cloud builds, local builds, development builds. The product could not wait indefinitely for the toolchain to cooperate.
- **Approach:** I made the decision to migrate entirely to a Next.js 15 PWA. Every native feature was mapped to a browser API equivalent: camera access to getUserMedia(), push notifications to the Web Notifications API, offline data to IndexedDB, installation prompt to the Web App Manifest. Zero feature loss. Full cross-platform compatibility without a native build pipeline. The browser is the runtime.
- **Outcome:** IOM Medic is deployed and fully functional as a Progressive Web App. It is installable on Android and iOS directly from the browser. The architectural decision to migrate saved the product from indefinite delay and produced a more maintainable codebase with a simpler deployment story.

### 5. Robert Aswani Portfolio
- **Category:** Engineering Portfolio
- **Client:** Robert Aswani — Commissioned via IOMTechs
- **Year:** 2024
- **Stack:** Next.js, TypeScript, Framer Motion, Tailwind CSS
- **Status:** Shipped
- **Live URL:** https://robert-aswani.vercel.app
- **Problem:** A PCB and CAD design engineer needed a portfolio that communicated technical precision and visual attention to detail. The challenge: most developer portfolio templates look like developer portfolio templates. An engineering portfolio needs different visual grammar.
- **Approach:** Near-black background, tight engineering-themed typography, high-fidelity showcase of technical work. Framer Motion used for entrance animations that feel deliberate rather than decorative. Built end-to-end under IOMTechs — design and development as a single engagement.
- **Outcome:** Live at robert-aswani.vercel.app. Used immediately for job applications in the engineering sector. The IOMTechs footer credit is present as agreed with the client.

### 6. Neural Network Visualizer
- **Category:** ML Education Tool
- **Client:** Personal Project
- **Year:** 2023
- **Stack:** Python, JavaScript, D3.js, Vercel, Static Site
- **Status:** Shipped
- **Problem:** Neural network architecture is notoriously difficult to communicate. Existing tools were either too academic for practical use or too simplified to be informative. There was no lightweight, browser-based option that showed weight propagation, layer structure, and activation functions interactively without requiring installation.
- **Approach:** Built a browser-based interactive visualizer that renders configurable neural network architectures in real time. D3.js handles the SVG layer graph. The Python backend generates the initial weight matrices, exported to JSON for the static frontend to consume. Static Vercel deployment — no server, no runtime cost, loads instantly.
- **Outcome:** Used as a reference and teaching tool. Demonstrates machine learning depth beyond what a typical web developer portfolio communicates — the ability to work at the intersection of data science and frontend engineering.

---

## IOM Empire Verticals (from src/data/empire.ts)

**Vision:** A multi-vertical conglomerate being built one product, one client, and one system at a time — from Nairobi, for the world.

1. **IOMTechs** (Active) — The flagship. A software development agency building web platforms, APIs, and digital products for clients across East Africa and beyond. Founded 2023, Nairobi. URL: https://iomtechs.vercel.app
2. **IOM Forms** (Building) — A premium form and data collection SaaS product. Built for businesses that need more than Google Forms.
3. **IOM Transit** (Building) — Global logistics and transport infrastructure. Fleet management and supply chain systems.
4. **IOM Properties** (Vision) — Property development and management vertical. Digital-first approach.
5. **IOM Banks** (Vision) — Financial services vertical. Lending, investment, and financial products for the IOM ecosystem.

---

## Skills (from src/data/skills.ts)

| Skill | Context | Level | Years |
|-------|---------|-------|-------|
| Next.js | IOM Forms, Clare Pastries, IOM Medic | Expert | 3 |
| TypeScript | All active projects, 2023–present | Expert | 3 |
| React | Full portfolio — 20+ projects | Expert | 4 |
| Node.js | API development, backend services | Advanced | 3 |
| Supabase | MYSTERYLIFESTYLE, Clare Pastries | Advanced | 2 |
| Laravel | Busia County Government | Advanced | 2 |
| Prisma | Clare Pastries — complex schema work | Advanced | 2 |
| Tailwind CSS | Design systems across all recent projects | Expert | 3 |
| Framer Motion | IOM Forms, portfolio, animations | Advanced | 2 |
| GSAP | Page transitions, scroll animations | Intermediate | 1 |
| Python | ML visualizer, automation scripts | Intermediate | 3 |
| M-Pesa / Paystack | Clare Pastries, MYSTERYLIFESTYLE | Advanced | 2 |
| Sanity CMS | Clare Pastries content system | Advanced | 2 |
| Vercel | All deployed projects | Expert | 3 |
| PostgreSQL | Production databases via Supabase | Advanced | 2 |

---

## Philosophy Quotes (from src/data/personas.ts)

- "Software is infrastructure. I build it like it has to last."
- "The best code is the code a client never has to think about."
- "I don't distinguish between client work and personal work. Both get the same standard."
- "East Africa does not need to wait for permission to build at scale."
- "Every architecture decision is a bet on the future. I take those bets seriously."
- "I am building the IOM Empire in parallel with every client project. That ambition makes me better at both."
- "Speed and quality are not trade-offs. They're both the result of clear thinking."
- "A portfolio is evidence. Mine should be overwhelming."

---

## Stats

- 8+ Products Shipped
- 3+ Years Building
- 5 IOM Verticals
- 2 Countries Served
- 100% End-to-End Ownership
- 0 Missed Deadlines

---

## Notes for Rebuild

- Projects NOT in codebase but mentioned by user: Dualpix GMS, ECDEAVOTMIS, Perfume POS, Tanaka Nursing Home. No content exists for these — they should only be included if real content is provided.
- /writing page: No writing content exists in the codebase. Per the spec, this page should be CUT, not shipped as a placeholder.
- The persona engine (5 rotating hero variants) is being stripped entirely.
- Lenis smooth scroll is being removed per spec.
- GSAP is being removed — Framer Motion only.
