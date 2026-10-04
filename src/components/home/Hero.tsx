"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail, MousePointerClick } from "lucide-react"
import { useEffect, useState } from "react"
import { ParticlePortrait } from "@/components/home/ParticlePortrait"
import { Typed, useTypewriter, type Segment } from "@/components/home/Typewriter"
import { ease, stagger, staggerItem } from "@/lib/motion"

const HEADLINE: Segment[] = [
  { text: "Hello, I’m " },
  { text: "Ian", className: "text-primary" },
  { text: "." },
]

const INTRO: Segment[] = [
  {
    text: "Web and software developer in Nairobi. I build and ship softwares used across the web.",
  },
]

export function Hero() {
  // On a first visit the intro loader covers the page for ~1.7s; wait for it.
  const [delay, setDelay] = useState(400)
  useEffect(() => {
    try {
      setDelay(sessionStorage.getItem("io-loader-seen") === "1" ? 400 : 1800)
    } catch {
      setDelay(400)
    }
  }, [])
  const { counts } = useTypewriter(HEADLINE, INTRO, delay)
  const headlineDone = counts[0] >= HEADLINE.reduce((n, s) => n + s.text.length, 0)

  return (
    <section
      data-inspect="Hero / split on desktop"
      className="flex min-h-[calc(100svh-4rem)] items-center px-4 py-8 sm:px-6 md:py-12 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          className="flex flex-col items-center lg:order-2"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease }}
        >
          <div className="relative aspect-square h-[38svh] max-h-[34rem] min-h-52 lg:h-[68svh]">
            <ParticlePortrait src="/ian-portrait.jpg" className="h-full w-full" />
          </div>
          <MousePointerClick
            className="mt-2 h-5 w-5 text-primary"
            role="img"
            aria-label="Interactive: move your cursor over the portrait and click"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={staggerItem}
            className="text-5xl font-semibold tracking-tighter md:text-6xl lg:text-7xl"
          >
            <Typed segments={HEADLINE} count={counts[0]} caret={!headlineDone} />
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            <Typed segments={INTRO} count={counts[1]} caret={headlineDone} />
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary/10 px-6 py-4 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Say hi
            </Link>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-4 text-sm font-medium transition-colors hover:bg-muted"
            >
              See my work
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
