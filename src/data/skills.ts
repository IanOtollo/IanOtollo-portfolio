export interface Skill {
  name: string
  context: string
  level: "expert" | "advanced" | "intermediate"
  years: string
}

export const SKILLS: Skill[] = [
  { name: "Next.js", context: "IOM Forms, Clare Pastries, IOM Medic", level: "expert", years: "3" },
  { name: "TypeScript", context: "All active projects, 2023–present", level: "expert", years: "3" },
  { name: "React", context: "Full portfolio — 20+ projects", level: "expert", years: "4" },
  { name: "Node.js", context: "API development, backend services", level: "advanced", years: "3" },
  { name: "Supabase", context: "MYSTERYLIFESTYLE, Clare Pastries", level: "advanced", years: "2" },
  { name: "Laravel", context: "Busia County Government", level: "advanced", years: "2" },
  { name: "Prisma", context: "Clare Pastries — complex schema work", level: "advanced", years: "2" },
  { name: "Tailwind CSS", context: "Design systems across all recent projects", level: "expert", years: "3" },
  { name: "Framer Motion", context: "IOM Forms, portfolio, animations", level: "advanced", years: "2" },
  { name: "GSAP", context: "Page transitions, scroll animations", level: "intermediate", years: "1" },
  { name: "Python", context: "ML visualizer, automation scripts", level: "intermediate", years: "3" },
  { name: "M-Pesa / Paystack", context: "Clare Pastries, MYSTERYLIFESTYLE", level: "advanced", years: "2" },
  { name: "Sanity CMS", context: "Clare Pastries content system", level: "advanced", years: "2" },
  { name: "Vercel", context: "All deployed projects", level: "expert", years: "3" },
  { name: "PostgreSQL", context: "Production databases via Supabase", level: "advanced", years: "2" },
]
