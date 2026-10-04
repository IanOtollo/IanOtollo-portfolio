export interface RepoGroup {
  name: string
  blurb: string
  repos: string[]
}

// Real repositories from github.com/IanOtollo, grouped by domain.
export const REPO_GROUPS: RepoGroup[] = [
  {
    name: "Government & civic",
    blurb: "Public-sector platforms, alerts and campaign tooling.",
    repos: [
      "busia-county-website",
      "Busia-RMIS",
      "busia-smart-market",
      "busia-alert-system",
      "busia-alert-frontend",
      "Busia-portal-site",
      "electoral-software",
      "KUPPET-Busia",
    ],
  },
  {
    name: "Business systems",
    blurb: "Point-of-sale, inventory, HR and finance for small businesses.",
    repos: [
      "PharmaPOS",
      "Kam2-US-AgrovetPOS",
      "haven-electricals-pos",
      "Clare-Pastries-POS",
      "CT-Inventory",
      "HRRMS",
      "Sacco",
      "asset-mngmt",
    ],
  },
  {
    name: "Health, education & access",
    blurb: "Biometrics, hospitals, campuses and emergency tooling.",
    repos: [
      "school-biometric-system",
      "tanaka-hospital",
      "jkuat-ims",
      "jkuat-emergency-portal",
      "ecdeavotmis",
      "LACOWE-MIS",
    ],
  },
  {
    name: "Commerce & creators",
    blurb: "Storefronts, marketplaces and brand sites.",
    repos: [
      "clare-pastries-platform",
      "busia-pastries",
      "bakebloom-website",
      "lubiri-resort",
      "vals-beauty",
      "bizboost-market-hub",
      "iomcars",
      "online-tribute",
    ],
  },
  {
    name: "IOM ventures",
    blurb: "The products behind the studio.",
    repos: ["IOM-Techs", "IOMForms", "IOM-Transit", "IOMProperties", "hr.donjoafrica.com"],
  },
  {
    name: "Tools, AI & experiments",
    blurb: "Bots, dashboards, ML and design systems.",
    repos: [
      "whatsapp-ai-bot",
      "helpdesk-ticketing-system",
      "sysalert-hub",
      "neural-visualizer",
      "github-dashboard",
      "leilas-design-system",
      "eventflow-pro",
      "worldcup2026",
    ],
  },
]

export const REPO_COUNT = REPO_GROUPS.reduce((n, g) => n + g.repos.length, 0)
