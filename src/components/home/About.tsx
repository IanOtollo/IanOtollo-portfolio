"use client"

import { PixelPhoto } from "@/components/home/PixelPhoto"
import { motion } from "framer-motion"
import { Fingerprint, Layers, PenTool, Plug, ShieldCheck, Smartphone } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { stagger, staggerItem } from "@/lib/motion"

const STATS = [
  { value: "65", label: "Repositories on GitHub" },
  { value: "2023", label: "IOMTechs founded" },
  { value: "5", label: "Domains: civic, health, education, commerce, HR" },
  { value: "2", label: "Payment rails: M-Pesa & Paystack" },
]

const CAPABILITIES = [
  { icon: PenTool, title: "Web & front-end development", body: "Responsive, accessible interfaces in React and Next.js with careful, purposeful motion." },
  { icon: Layers, title: "Full-stack engineering", body: "Next.js, React, Laravel, Node and Python, built and deployed end to end." },
  { icon: Fingerprint, title: "Biometrics & AI", body: "Face recognition and computer vision applied to real access-control problems." },
  { icon: Plug, title: "Payments & integrations", body: "M-Pesa, Paystack, WhatsApp alerts and CMS workflows that match how customers pay." },
  { icon: ShieldCheck, title: "Secure systems", body: "Server-side verification, Row-Level Security, passkeys and role-based access." },
  { icon: Smartphone, title: "PWAs & mobile-first", body: "Installable, offline-capable products for the phones and networks people have." },
]

const TOOLKIT = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Python", "PHP", "Java", "C#"] },
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vite", "React Native"] },
  { name: "Backend & data", items: ["Node.js", "Laravel", "Django", "Flask", "FastAPI", "Supabase", "PostgreSQL", "MySQL", "MongoDB", "Convex"] },
  { name: "Delivery", items: ["Vercel", "Render", "GitHub Actions", "Git", "Apache", "Cisco networking"] },
]

export function About() {
  return (
    <section id="about" data-inspect="About" className="section scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <PixelPhoto
                src="/AboutPic.jpeg"
                alt="Ian Otollo in a blue suit"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-8">
            <Reveal>
              <p className="eyebrow">/ about</p>
              <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
                Meet the Dev.
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-2xl leading-snug">
                I&rsquo;m the founder of IOMTechs, a software studio in Nairobi. I take a
                problem from the first sketch to a live URL: the research, the
                interface, the backend, the deployment.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-lg text-muted-foreground">
                My work lives where real constraints are: M-Pesa checkouts, two-language
                government sites, school gates at 7:40am, shop tills with patchy
                internet. I care more about whether a system holds up on a slow phone
                than whether it wins an award.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-lg text-muted-foreground">
                I work across Nairobi and Busia, Kenya, shipping for schools, county
                government, small businesses and creators. Everything ships with full
                ownership from me: design, architecture, code and launch.
              </p>
            </Reveal>
          </div>
        </div>

        <motion.dl
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={staggerItem} className="bg-background p-6 md:p-8">
              <dd className="font-display text-5xl font-semibold tracking-tighter text-primary md:text-6xl">
                {s.value}
              </dd>
              <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
            </motion.div>
          ))}
        </motion.dl>

        <Reveal className="mt-24">
          <p className="eyebrow">What I do</p>
        </Reveal>
        <motion.ul
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {CAPABILITIES.map(({ icon: Icon, title, body }) => (
            <motion.li
              key={title}
              variants={staggerItem}
              className="rounded-2xl border border-border/50 bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10 md:p-8"
            >
              <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal className="mt-24">
          <p className="eyebrow">Currently working with</p>
        </Reveal>
        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {TOOLKIT.map((g) => (
            <motion.div
              key={g.name}
              variants={staggerItem}
              className="rounded-2xl border border-border/50 bg-card p-6 md:p-8"
            >
              <h3 className="eyebrow text-primary">{g.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-xl border border-border px-4 py-1 text-sm">
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
