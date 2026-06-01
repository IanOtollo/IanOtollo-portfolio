export interface Persona {
  id: number
  heroHeadline: string[]
  heroSub: string
  heroCTA: { primary: string; secondary: string }
  contactOpener: string
  featuredProjectSlugs: string[]
  philosophyIndices: number[]
  accentStatIndices: number[]
}

export const PHILOSOPHY: string[] = [
  "Software is infrastructure. I build it like it has to last.",
  "The best code is the code a client never has to think about.",
  "I don't distinguish between client work and personal work. Both get the same standard.",
  "East Africa does not need to wait for permission to build at scale.",
  "Every architecture decision is a bet on the future. I take those bets seriously.",
  "I am building the IOM Empire in parallel with every client project. That ambition makes me better at both.",
  "Speed and quality are not trade-offs. They're both the result of clear thinking.",
  "A portfolio is evidence. Mine should be overwhelming.",
]

export const STATS = [
  { value: "8+", label: "Products Shipped" },
  { value: "3+", label: "Years Building" },
  { value: "5", label: "IOM Verticals" },
  { value: "2", label: "Countries Served" },
  { value: "100%", label: "End-to-End Ownership" },
  { value: "0", label: "Missed Deadlines" },
]

export const PERSONAS: Persona[] = [
  {
    id: 1,
    heroHeadline: ["I don't build websites.", "I build the infrastructure", "companies stake their future on."],
    heroSub: "Full-stack developer. Founder. Building the IOM Empire from Nairobi.",
    heroCTA: { primary: "View the work", secondary: "The IOM Empire" },
    contactOpener: "If you've scrolled this far, you already know you want to work together. Let's make it official.",
    featuredProjectSlugs: ["mysterylifestyle", "clare-pastries", "busia-county"],
    philosophyIndices: [0, 3, 6],
    accentStatIndices: [0, 1, 2],
  },
  {
    id: 2,
    heroHeadline: ["Every line of code", "is a decision.", "I make good ones."],
    heroSub: "Full-stack engineer specialising in products that scale, APIs that hold, and interfaces that convert.",
    heroCTA: { primary: "See the proof", secondary: "Work with me" },
    contactOpener: "I build with founders, agencies, and anyone serious about what they're building. Are you?",
    featuredProjectSlugs: ["iom-medic", "ml-visualizer", "mysterylifestyle"],
    philosophyIndices: [1, 5, 7],
    accentStatIndices: [0, 3, 4],
  },
  {
    id: 3,
    heroHeadline: ["Building world-class", "products from", "East Africa."],
    heroSub: "Nairobi-based. Global standard. Founder of IOMTechs — a software agency that ships.",
    heroCTA: { primary: "Our work", secondary: "IOMTechs agency" },
    contactOpener: "Tell me what you're building. I'll tell you whether I can make it better.",
    featuredProjectSlugs: ["busia-county", "robert-aswani", "iom-medic"],
    philosophyIndices: [2, 3, 4],
    accentStatIndices: [1, 2, 3],
  },
  {
    id: 4,
    heroHeadline: ["Your product idea", "deserves an engineer", "who gives a damn."],
    heroSub: "I take ownership from architecture to deployment. No hand-offs. No excuses. Just shipped products.",
    heroCTA: { primary: "What I build", secondary: "Let's talk" },
    contactOpener: "I respond within 24 hours. I deliver within deadlines. Let's start.",
    featuredProjectSlugs: ["clare-pastries", "mysterylifestyle", "ml-visualizer"],
    philosophyIndices: [0, 1, 7],
    accentStatIndices: [0, 4, 5],
  },
  {
    id: 5,
    heroHeadline: ["Most developers", "build for launch day.", "I build for year three."],
    heroSub: "Systems architecture. Scalable APIs. Products that survive success. Built in Nairobi for the world.",
    heroCTA: { primary: "The work", secondary: "Start a project" },
    contactOpener: "Let's build something that outlasts both of us.",
    featuredProjectSlugs: ["busia-county", "iom-medic", "clare-pastries"],
    philosophyIndices: [4, 5, 6],
    accentStatIndices: [2, 3, 4],
  },
]
