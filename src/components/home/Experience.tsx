"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Reveal } from "@/components/Reveal"
import { ease } from "@/lib/motion"

const STEPS = [
  { n: "01", title: "Understand", body: "Who uses it, where, and under what pressure. A school gate at 7:40am is a different problem from a boardroom." },
  { n: "02", title: "Plan", body: "Flows, data models and interfaces mapped against real constraints: slow networks, shared devices, first-time users." },
  { n: "03", title: "Build", body: "Typed, secured at the data layer, deployed end to end. I own architecture through launch." },
  { n: "04", title: "Prove", body: "Live URLs, real transactions, real logs. If it can't be shown working, it isn't finished." },
]

const ROLES = [
  {
    id: "ioms",
    org: "IOMTechs",
    role: "Founder & Lead Engineer",
    period: "2023 — Present",
    points: [
      "Founded a Nairobi software studio delivering platforms, APIs and digital products for clients across East Africa.",
      "Own each engagement end to end: requirements, architecture, development and deployment.",
      "Built a repeatable toolkit of M-Pesa, Paystack, WhatsApp-alert and secure-download patterns reused across clients.",
    ],
  },
  {
    id: "busia",
    org: "Busia County Government",
    role: "Web Developer",
    period: "2024 — 2025",
    points: [
      "Rebuilt the county website on Laravel with a bilingual (Swahili and English) content system.",
      "Built an accessibility-first, institutional front end and delivered it to procurement specification.",
    ],
  },
  {
    id: "donjo",
    org: "Donjo Africa",
    role: "Full-Stack Developer",
    period: "2026",
    points: [
      "Built a video-first hiring platform with a five-area Skill Radar and CSV/PDF dossiers.",
      "Shipped both the public site and the HR console, with passkey authentication and role-based access.",
    ],
  },
  {
    id: "clients",
    org: "Client work",
    role: "Full-Stack Developer",
    period: "2024 — 2026",
    points: [
      "MYSTERYLIFESTYLE: server-verified payments with 15-minute expiring download links.",
      "Clare Pastries: M-Pesa e-commerce with a Sanity CMS the owner runs alone.",
      "A growing POS, inventory and helpdesk suite for small businesses.",
    ],
  },
]

export function Experience() {
  const [active, setActive] = useState(ROLES[0].id)
  const current = ROLES.find((r) => r.id === active)!

  return (
    <section id="experience" data-inspect="Experience" className="section scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">/ experience</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
            Where the work happened.
          </h2>
        </Reveal>

        <div className="mt-12">
          <div
            role="tablist"
            aria-label="Experience"
            className="flex gap-2 overflow-x-auto border-b border-border pb-px"
            onKeyDown={(e) => {
              const i = ROLES.findIndex((r) => r.id === active)
              if (e.key === "ArrowRight") setActive(ROLES[(i + 1) % ROLES.length].id)
              if (e.key === "ArrowLeft") setActive(ROLES[(i - 1 + ROLES.length) % ROLES.length].id)
            }}
          >
            {ROLES.map((r) => (
              <button
                key={r.id}
                role="tab"
                id={`tab-${r.id}`}
                aria-selected={active === r.id}
                aria-controls="exp-panel"
                tabIndex={active === r.id ? 0 : -1}
                onClick={() => setActive(r.id)}
                className={`relative whitespace-nowrap px-6 py-4 text-sm transition-colors ${
                  active === r.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r.org}
                {active === r.id && (
                  <motion.span
                    layoutId="exp-underline"
                    className="absolute inset-x-0 -bottom-px h-0.5 bg-primary"
                    transition={{ duration: 0.3, ease }}
                  />
                )}
              </button>
            ))}
          </div>

          <div
            id="exp-panel"
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="min-h-64 pt-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease }}
                className="max-w-3xl"
              >
                <h3 className="text-3xl font-semibold">
                  {current.role} <span className="text-primary">@ {current.org}</span>
                </h3>
                <p className="eyebrow mt-2">{current.period}</p>
                <ul className="mt-6 space-y-4">
                  {current.points.map((pt) => (
                    <li key={pt} className="flex gap-4 text-muted-foreground">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal className="mt-24">
          <p className="eyebrow">How I work</p>
        </Reveal>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {STEPS.map((st) => (
            <li key={st.n} className="bg-background p-6 md:p-8">
              <span className="font-display text-5xl font-semibold text-primary">{st.n}</span>
              <h3 className="mt-4 text-2xl font-semibold">{st.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{st.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
