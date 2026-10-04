export interface Skill {
  name: string
  context: string
  rationale: string
  level: "expert" | "advanced" | "intermediate"
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Core Stack",
    skills: [
      {
        name: "Next.js",
        context: "IOM Forms, Clare Pastries, IOM Medic, MYSTERYLIFESTYLE",
        rationale:
          "My default for anything that needs SSR, API routes, and Vercel deployment in a single framework. I reach for it over plain React when SEO matters or when I need server-side logic without maintaining a separate backend.",
        level: "expert",
      },
      {
        name: "TypeScript",
        context: "All active projects since 2023",
        rationale:
          "Non-negotiable. Every project ships in strict mode. The upfront cost of typing is always recovered in debugging time saved — especially on multi-system architectures like Clare Pastries.",
        level: "expert",
      },
      {
        name: "React",
        context: "20+ projects over 4 years",
        rationale:
          "The component model I think in. I use it through Next.js for production work, rarely standalone anymore. The ecosystem maturity matters more than any single feature.",
        level: "expert",
      },
      {
        name: "Tailwind CSS",
        context: "Design systems across all recent projects",
        rationale:
          "Utility-first approach eliminates the naming-things problem and keeps styles co-located with components. I define all tokens in tailwind.config — no magic values in components.",
        level: "expert",
      },
    ],
  },
  {
    name: "Backend & Data",
    skills: [
      {
        name: "Node.js",
        context: "API development, backend services",
        rationale:
          "The runtime behind every API route and server action I write. JavaScript end-to-end means one language, one mental model, faster iteration.",
        level: "advanced",
      },
      {
        name: "Supabase",
        context: "MYSTERYLIFESTYLE, Clare Pastries",
        rationale:
          "I choose Supabase over raw PostgreSQL when I need auth, real-time subscriptions, and Edge Functions without managing infrastructure. The Row Level Security model is genuinely good for multi-tenant applications.",
        level: "advanced",
      },
      {
        name: "Prisma",
        context: "Clare Pastries — complex schema work",
        rationale:
          "Type-safe database access that catches schema errors at compile time. The migration system has rough edges in multi-environment setups, but the developer experience is worth the trade-off.",
        level: "advanced",
      },
      {
        name: "Laravel",
        context: "Busia County Government",
        rationale:
          "For government and institutional projects where the team maintaining it long-term may not be JavaScript-first. Laravel's convention-over-configuration approach and mature ecosystem make handoff simpler.",
        level: "advanced",
      },
      {
        name: "PostgreSQL",
        context: "Production databases via Supabase",
        rationale:
          "The database behind every production system I build. I access it through Supabase or Prisma, but I write raw SQL when the ORM gets in the way.",
        level: "advanced",
      },
    ],
  },
  {
    name: "Payments & Integration",
    skills: [
      {
        name: "M-Pesa / PayHero",
        context: "Clare Pastries",
        rationale:
          "M-Pesa is the payment rail in East Africa. PayHero provides the STK push integration — I chose it over Safaricom's direct API because their webhook reliability is better and the documentation is actually maintained.",
        level: "advanced",
      },
      {
        name: "Paystack",
        context: "MYSTERYLIFESTYLE",
        rationale:
          "West African payment integration. Server-side webhook verification is non-negotiable — I never trust client-side payment confirmation.",
        level: "advanced",
      },
      {
        name: "Sanity CMS",
        context: "Clare Pastries content system",
        rationale:
          "Headless CMS for when the client needs to manage content independently. Sanity Studio gives non-technical owners a real editing experience without requiring developer intervention for every content change.",
        level: "advanced",
      },
    ],
  },
  {
    name: "Frontend & Motion",
    skills: [
      {
        name: "Framer Motion",
        context: "IOM Forms, portfolio projects",
        rationale:
          "My animation library of choice. The declarative API and layout animations are strong. I use it sparingly — entrance transitions and interactive feedback, not decoration.",
        level: "advanced",
      },
      {
        name: "D3.js",
        context: "Neural Network Visualizer",
        rationale:
          "For data visualization that needs fine-grained SVG control. I used it for the ML Visualizer because no charting library could render dynamic neural network architectures the way I needed.",
        level: "intermediate",
      },
      {
        name: "Python",
        context: "ML visualizer, automation scripts",
        rationale:
          "Not my primary language, but I use it for data processing and ML work. The Neural Network Visualizer's weight matrix generation is Python-powered.",
        level: "intermediate",
      },
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      {
        name: "Vercel",
        context: "All deployed projects",
        rationale:
          "My deployment platform. The integration with Next.js is unmatched — preview deployments, edge functions, analytics. Every project I ship lands here.",
        level: "expert",
      },
    ],
  },
]
