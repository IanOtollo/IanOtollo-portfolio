"use client"

import { motion } from "framer-motion"
import { Reveal } from "@/components/Reveal"
import { stagger, staggerItem } from "@/lib/motion"

const VENTURES = [
  { name: "IOMTechs", status: "Active", body: "The studio. Platforms, APIs and digital products." },
  { name: "IOM Forms", status: "Building", body: "Premium form and data-collection SaaS." },
  { name: "IOM Transit", status: "Building", body: "Logistics and fleet infrastructure." },
  { name: "IOM Properties", status: "Vision", body: "Digital-first real estate." },
  { name: "IOM Medic", status: "In progress", body: "A health companion PWA: camera, notifications and offline data, installable from the browser." },
  { name: "Donjo Africa", status: "Live", body: "Video-first hiring, built so skill outweighs school names." },
]

export function Ventures() {
  return (
    <>
      <section id="ventures" data-inspect="Ventures" className="section scroll-mt-16 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">/ ventures</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">
              The IOM ecosystem, one system at a time.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Client work funds the ambition, and the ambition makes the client work
              better. Each venture starts as a real problem I&rsquo;ve already solved
              once for someone else.
            </p>
          </Reveal>
          <motion.ul
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {VENTURES.map((v) => (
              <motion.li
                key={v.name}
                variants={staggerItem}
                className="rounded-2xl border border-border/50 bg-card p-6 md:p-8"
              >
                <span className="eyebrow text-primary">{v.status}</span>
                <h3 className="mt-2 text-2xl font-semibold">{v.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </>
  )
}
