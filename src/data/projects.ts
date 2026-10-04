export interface Fact {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  category: string
  year: string
  role: string
  stack: string[]
  facts: Fact[]
  context: string
  problem: string
  approach: { title: string; body: string }[]
  outcome: string
  liveUrl?: string
  repoUrl?: string
  featured: boolean
}

export const PROJECTS: Project[] = [
  {
    slug: "school-biometric-system",
    title: "School Biometric System",
    tagline: "Face-recognition access control for schools.",
    category: "Biometrics / Access control",
    year: "2026",
    role: "Full-stack development",
    stack: ["React 18", "Vite", "face-api.js", "Supabase", "Vercel"],
    facts: [
      { label: "Neural models", value: "4" },
      { label: "Identity vector", value: "128-d" },
      { label: "Raw photos stored", value: "0" },
      { label: "Roles", value: "Student · Lecturer · Staff · Visitor" },
    ],
    context:
      "Schools need to know who is on the premises and who is entering, without paper registers or guards squinting at ID cards. Gates are busy, lighting is uneven, and the people using the system range from nervous visitors to students in a rush.",
    problem:
      "Manual entry logs are slow, easy to fake, and impossible to audit. A face-recognition gate fixes that, but only if registration feels effortless, scanning is fast under real conditions, and the school can trust that biometric data is not a liability.",
    approach: [
      {
        title: "Two detectors, one job each",
        body: "SSD MobileNet handles high-accuracy detection at registration. The Tiny Face Detector keeps the live gate responsive. Landmark points (68) guide positioning, and a 128-dimension descriptor is the identity.",
      },
      {
        title: "Store vectors, not faces",
        body: "Only the numeric descriptor is saved. No raw photo sits in the database, so a breach cannot leak a face. Supabase Row-Level Security enforces who can read what at the data layer.",
      },
      {
        title: "Designed for the gate",
        body: "Live camera feed with positioning guides, a continuous scanning mode for unattended entrances, and clear Active/Suspended states so security staff act in one glance.",
      },
      {
        title: "Built to stay up",
        body: "Retry logic with exponential backoff keeps the system stable when the network does not. Responsive glassmorphism UI works on a gate tablet and an admin laptop.",
      },
    ],
    outcome:
      "A deployable access-control platform with live monitoring, access logs, statistics, and role-based administration, running on Vercel over HTTPS.",
    repoUrl: "https://github.com/IanOtollo/school-biometric-system",
    featured: true,
  },
  {
    slug: "donjo-africa",
    title: "Donjo Africa",
    tagline: "Proof over promises: video-first hiring.",
    category: "Hiring platform / SaaS",
    year: "2026",
    role: "Full-stack development",
    stack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Supabase"],
    facts: [
      { label: "Proof clip", value: "60–120s" },
      { label: "Skill Radar", value: "5 areas" },
      { label: "Exports", value: "CSV · PDF" },
      { label: "Auth", value: "Passkeys" },
    ],
    context:
      "CVs reward school names and polish. In Kenya and across East Africa, plenty of capable people never get seen because their paper does not look the part.",
    problem:
      "Hiring teams at startups, hackathons, accelerators, and universities need a fair, fast way to compare people by what they can actually do, and applicants need a way to show it.",
    approach: [
      {
        title: "Show, review, decide",
        body: "Applicants submit a short proof clip. Reviewers work from one unified queue. Decisions are exported as dossiers and kept on record.",
      },
      {
        title: "Skill Radar",
        body: "A five-area rating gives reviewers a consistent, comparable read on each applicant instead of gut feel.",
      },
      {
        title: "Insight for organisers",
        body: "Geospatial heatmaps show where applicants come from, and decision-speed tracking shows how fast a team moves.",
      },
      {
        title: "Trust by default",
        body: "Passkey-based security, role-based access, and CSV/PDF exports for compliance and hand-off.",
      },
    ],
    outcome:
      "Two live surfaces: the public platform at donjoafrica.com and the HR and recruitment console at hr.donjoafrica.com.",
    liveUrl: "https://donjoafrica.com",
    repoUrl: "https://github.com/IanOtollo/hr.donjoafrica.com",
    featured: true,
  },
  {
    slug: "busia-county",
    title: "Busia County Government",
    tagline: "A bilingual civic platform for a whole county.",
    category: "Government web platform",
    year: "2024–2025",
    role: "Web development",
    stack: ["Laravel", "MySQL", "Blade", "Tailwind CSS"],
    facts: [
      { label: "Languages", value: "Swahili · English" },
      { label: "Audience", value: "County constituents" },
      { label: "Focus", value: "Accessibility" },
    ],
    context:
      "The county website was outdated, not mobile-responsive, and available in one language, failing the residents it exists to serve.",
    problem:
      "Government platforms need formal hierarchy, accessibility, and institutional credibility. There is no room for decorative flourish.",
    approach: [
      {
        title: "Bilingual CMS",
        body: "Editors manage Swahili and English versions of every page independently.",
      },
      {
        title: "Civic design language",
        body: "Deliberate information hierarchy and an accessibility-first layout that reads as institutional, not startup.",
      },
      {
        title: "Spec as requirement",
        body: "Procurement specifications were treated as requirements, not suggestions.",
      },
    ],
    outcome:
      "Delivered to specification, with a working bilingual content system and a mobile-ready site residents can actually use.",
    repoUrl: "https://github.com/IanOtollo/busia-county-website",
    featured: true,
  },
  {
    slug: "clare-pastries",
    title: "Clare Pastries",
    tagline: "M-Pesa-native e-commerce a baker runs alone.",
    category: "E-commerce platform",
    year: "2024",
    role: "Full-stack development",
    stack: ["Next.js 15", "Prisma", "Supabase", "Sanity", "PayHero", "CallMeBot"],
    facts: [
      { label: "Payments", value: "M-Pesa STK push" },
      { label: "Alerts", value: "WhatsApp, instant" },
      { label: "Surfaces", value: "Store + Admin" },
    ],
    context:
      "A Busia bakery needed to sell online the way its customers actually pay: M-Pesa.",
    problem:
      "An owner without a developer needed to manage products, see orders the moment they land, and never touch code.",
    approach: [
      {
        title: "Content the owner controls",
        body: "Sanity Studio lets the owner manage every product independently.",
      },
      {
        title: "Payments that feel native",
        body: "PayHero M-Pesa STK push confirms payment in real time.",
      },
      {
        title: "Orders where she already is",
        body: "CallMeBot sends WhatsApp alerts the instant an order arrives. A separate admin dashboard shares the same Supabase backend.",
      },
    ],
    outcome:
      "Storefront and admin dashboard are live, and the owner runs the catalogue herself.",
    liveUrl: "https://clarepastries.vercel.app",
    featured: false,
  },
  {
    slug: "campaign-ims",
    title: "Campaign IMS",
    tagline: "Electoral and campaign management, in one place.",
    category: "Civic software",
    year: "2026",
    role: "Full-stack development",
    stack: ["Next.js", "TypeScript", "Convex", "Tailwind CSS"],
    facts: [
      { label: "Backend", value: "Convex (real-time)" },
      { label: "Domain", value: "Electoral / campaign" },
    ],
    context:
      "Campaign teams run on spreadsheets and WhatsApp groups, and information goes stale the moment it is shared.",
    problem:
      "A campaign needs one real-time source of truth that field teams and coordinators can trust.",
    approach: [
      {
        title: "Real-time by default",
        body: "Convex keeps every client in sync without manual refreshes or polling.",
      },
      {
        title: "Typed end to end",
        body: "TypeScript across the frontend and backend functions keeps a fast-moving build safe to change.",
      },
    ],
    outcome: "Deployed and in active development.",
    liveUrl: "https://campaign-ims.vercel.app",
    repoUrl: "https://github.com/IanOtollo/electoral-software",
    featured: false,
  },
  {
    slug: "mysterylifestyle",
    title: "MYSTERYLIFESTYLE",
    tagline: "A digital-products marketplace that can't be pirated.",
    category: "Marketplace",
    year: "2024",
    role: "Full-stack development",
    stack: ["Next.js", "Supabase", "Paystack", "TypeScript"],
    facts: [
      { label: "Download links", value: "Expire in 15 min" },
      { label: "Fraud incidents", value: "0" },
      { label: "Verification", value: "Server-side webhooks" },
    ],
    context:
      "A Nigerian creator selling Canva templates, e-books, and course guides needed payments she could trust and a brand that felt premium.",
    problem:
      "Files shared after purchase destroy a digital store. Payment status that can be faked on the client destroys it faster.",
    approach: [
      {
        title: "Verify on the server",
        body: "Paystack webhooks are signature-checked in a Next.js API route before any download token exists.",
      },
      {
        title: "Links that expire",
        body: "Supabase Edge Functions mint signed, time-limited URLs that die after 15 minutes.",
      },
      {
        title: "Premium by restraint",
        body: "A strict black-and-white system with Playfair Display and DM Sans, with colour only from the products.",
      },
    ],
    outcome:
      "Live and processing transactions with zero fraudulent downloads. The expiring-token pattern has since been reused on two other client projects.",
    featured: false,
  },
  {
    slug: "pos-suite",
    title: "POS Suite",
    tagline: "Point-of-sale systems for shops that actually run on cash and M-Pesa.",
    category: "Business systems",
    year: "2025–2026",
    role: "Full-stack engineering",
    stack: ["Next.js", "TypeScript", "Supabase"],
    facts: [
      { label: "Verticals", value: "Pharmacy · Agrovet · Electricals · Bakery" },
      { label: "Also", value: "Inventory · HR · Helpdesk" },
    ],
    context:
      "Small and mid-size businesses in Kenya often run on notebooks and memory.",
    problem:
      "Each trade needs the same core, selling, stock, and reporting, but wrapped in its own vocabulary and workflow.",
    approach: [
      {
        title: "One core, many trades",
        body: "A shared foundation adapted for PharmaPOS, Agrovet, Haven Electricals, and Clare Pastries POS.",
      },
      {
        title: "Beyond the till",
        body: "Inventory (CT-Inventory), people management (HRRMS), and a ticketing helpdesk round out the toolkit.",
      },
    ],
    outcome: "A growing family of business systems shipped under IOMTechs.",
    repoUrl: "https://github.com/IanOtollo?tab=repositories",
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
