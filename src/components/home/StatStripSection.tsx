"use client"
import { usePersona } from "@/hooks/usePersona"
import { STATS } from "@/data/personas"
import StatStrip from "@/components/ui/StatStrip"

export default function StatStripSection() {
  const persona = usePersona()
  const selected = persona.accentStatIndices.map((i) => STATS[i])

  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <StatStrip stats={selected} />
    </section>
  )
}
