"use client"
import { motion } from "framer-motion"
import { usePersona } from "@/hooks/usePersona"
import { PHILOSOPHY } from "@/data/personas"
import SectionLabel from "@/components/ui/SectionLabel"

const EASE = [0.22, 1, 0.36, 1] as const

export default function PhilosophySection() {
  const persona = usePersona()
  const quotes = persona.philosophyIndices.map((i) => PHILOSOPHY[i])

  return (
    <section className="bg-surface border-t border-b border-border py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Philosophy</SectionLabel>
        <div className="flex flex-col gap-8 mt-6">
          {quotes.map((quote, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2, ease: EASE }}
              className="font-display text-[24px] italic text-text-primary border-l-2 border-gold pl-6 py-2"
            >
              {quote}
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
