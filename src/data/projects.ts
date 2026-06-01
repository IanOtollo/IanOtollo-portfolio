export interface Project {
  slug: string
  title: string
  category: string
  categoryTag: "product" | "platform" | "government" | "empire" | "personal"
  client: string
  year: string
  stack: string[]
  problem: string
  approach: string
  outcome: string
  liveUrl?: string
  featured: boolean
  status: "shipped" | "in-progress" | "vision"
  coverColor: string
}

export const PROJECTS: Project[] = [
  {
    slug: "mysterylifestyle",
    title: "MYSTERYLIFESTYLE",
    category: "Digital Products Marketplace",
    categoryTag: "product",
    client: "Private Client — Nigeria",
    year: "2024",
    stack: ["Next.js", "Supabase", "Paystack", "TypeScript", "Playfair Display", "DM Sans"],
    problem:
      "A Nigerian creator needed a premium marketplace for digital products with airtight payment security and no dependency on platforms that take 30% cuts.",
    approach:
      "Paystack webhooks with server-side verification. Expiring signed download tokens via Supabase Edge Functions. Strict black-and-white design with Playfair Display.",
    outcome:
      "Live and processing transactions. Zero payment fraud incidents. Token architecture reused in two subsequent client projects.",
    featured: true,
    status: "shipped",
    coverColor: "#111111",
  },
  {
    slug: "clare-pastries",
    title: "Clare Pastries",
    category: "E-Commerce Platform",
    categoryTag: "product",
    client: "Michael Aderi, Busia Town",
    year: "2024",
    stack: ["Next.js 15", "Prisma", "Supabase", "Sanity CMS", "PayHero M-Pesa", "CallMeBot"],
    problem:
      "A bakery needed M-Pesa-native e-commerce, a CMS the owner could use without a developer, and a separate admin dashboard for order management.",
    approach:
      "Multi-system architecture: Next.js 15 storefront, Sanity Studio CMS, Prisma + Supabase for orders, PayHero for M-Pesa STK push, CallMeBot for WhatsApp alerts.",
    outcome:
      "Both storefront and admin live. Owner manages all products independently. M-Pesa processing with real-time WhatsApp alerts.",
    liveUrl: "https://clarepastries.vercel.app",
    featured: true,
    status: "shipped",
    coverColor: "#0D0D0D",
  },
  {
    slug: "busia-county",
    title: "Busia County Government",
    category: "Government Web Platform",
    categoryTag: "government",
    client: "Busia County Government",
    year: "2024–2025",
    stack: ["Laravel", "MySQL", "Blade", "Tailwind CSS"],
    problem:
      "The county website was outdated, not mobile-responsive, and offered no bilingual support for Swahili and English-speaking constituents.",
    approach:
      "Full revamp on Laravel with bilingual CMS. Formal civic design — government-grade, not startup-grade. Accessibility compliance throughout.",
    outcome:
      "Delivered to specification. Bilingual system operational. Formal government aesthetic achieved without compromising usability.",
    featured: true,
    status: "shipped",
    coverColor: "#080808",
  },
  {
    slug: "iom-medic",
    title: "IOM Medic",
    category: "Health Companion PWA",
    categoryTag: "empire",
    client: "IOM Empire — Internal",
    year: "2025",
    stack: ["Next.js 15", "TypeScript", "PWA APIs", "IndexedDB", "Framer Motion"],
    problem:
      "Started as React Native/Expo — hit persistent EAS Build failures on Windows that blocked every deployment path.",
    approach:
      "Migrated to Next.js 15 PWA. Every native feature mapped to a browser API equivalent: camera to getUserMedia(), notifications to Web Notifications API, storage to IndexedDB. Zero feature loss.",
    outcome:
      "Deployed and functional as a PWA. Installable on Android and iOS from the browser. Migration decision saved the project from indefinite delay.",
    featured: false,
    status: "in-progress",
    coverColor: "#0A0F0A",
  },
  {
    slug: "robert-aswani",
    title: "Robert Aswani Portfolio",
    category: "Engineering Portfolio",
    categoryTag: "platform",
    client: "Robert Aswani — IOMTechs",
    year: "2024",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    problem:
      "A PCB and CAD design engineer needed a portfolio communicating technical precision without looking like a generic developer site.",
    approach:
      "Near-black background, engineering-themed typography, technical work showcased with high-fidelity image treatment. Built end-to-end under IOMTechs.",
    outcome: "Live at robert-aswani.vercel.app. Used immediately for job applications.",
    liveUrl: "https://robert-aswani.vercel.app",
    featured: false,
    status: "shipped",
    coverColor: "#05080D",
  },
  {
    slug: "ml-visualizer",
    title: "Neural Network Visualizer",
    category: "ML Education Tool",
    categoryTag: "personal",
    client: "Personal Project",
    year: "2023",
    stack: ["Python", "JavaScript", "D3.js", "Vercel"],
    problem:
      "Neural network architecture is notoriously difficult to communicate visually. Existing tools were either too academic or too simplified.",
    approach:
      "Browser-based interactive visualizer rendering neural network layers, activation functions, and weight propagation in real time. Static Vercel deployment — no server.",
    outcome:
      "Used as a reference and teaching tool. Demonstrates ML depth beyond typical web developer portfolios.",
    featured: false,
    status: "shipped",
    coverColor: "#030508",
  },
]
