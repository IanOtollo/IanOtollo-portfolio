export interface EmpireVertical {
  name: string
  tagline: string
  description: string
  status: "active" | "building" | "vision"
  url?: string
  isFlagship?: boolean
}

export const IOM_EMPIRE = {
  vision:
    "A multi-vertical conglomerate being built one product, one client, and one system at a time — from Nairobi, for the world.",
  verticals: [
    {
      name: "IOMTechs",
      tagline: "Software that ships.",
      description:
        "The flagship. A software development agency building web platforms, APIs, and digital products for clients across East Africa and beyond. Founded 2023, Nairobi.",
      status: "active" as const,
      url: "https://iomtechs.vercel.app",
      isFlagship: true,
    },
    {
      name: "IOM Forms",
      tagline: "Forms that convert.",
      description:
        "A premium form and data collection SaaS product. Built for businesses that need more than Google Forms. Currently in active development.",
      status: "building" as const,
    },
    {
      name: "IOM Transit",
      tagline: "Logistics at scale.",
      description:
        "Global logistics and transport infrastructure. Fleet management and supply chain systems designed for continent-scale operation.",
      status: "building" as const,
    },
    {
      name: "IOM Properties",
      tagline: "Real estate, reimagined.",
      description:
        "Property development and management vertical. Digital-first approach to real estate acquisition, management, and client experience.",
      status: "vision" as const,
    },
    {
      name: "IOM Banks",
      tagline: "Capital that builds.",
      description:
        "Financial services vertical. The long-term infrastructure powering the Empire — lending, investment, and financial products for the IOM ecosystem.",
      status: "vision" as const,
    },
  ] as EmpireVertical[],
}
