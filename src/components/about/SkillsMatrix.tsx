"use client"
import { useState, useEffect } from "react"
import { SKILLS } from "@/data/skills"
import SectionLabel from "@/components/ui/SectionLabel"
import TechIcon from "@/components/ui/TechIcon"
import { cn } from "@/lib/utils"

const LEVEL_CLASS: Record<string, string> = {
  expert: "text-gold",
  advanced: "text-text-secondary",
  intermediate: "text-text-tertiary",
}

export default function SkillsMatrix() {
  const [highlight, setHighlight] = useState<number>(-1)

  useEffect(() => {
    setHighlight(Math.floor(Math.random() * SKILLS.length))
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <SectionLabel>Technical Stack</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
        {SKILLS.map((skill, i) => {
          const isHi = i === highlight
          return (
            <div
              key={skill.name}
              className={cn(
                "bg-surface border p-4 transition-colors",
                isHi ? "border-gold" : "border-border"
              )}
            >
              <div className="flex items-center gap-2.5">
                <TechIcon
                  name={skill.name}
                  className={cn(
                    "h-[18px] w-[18px] flex-shrink-0 transition-colors",
                    isHi ? "text-gold" : "text-text-secondary"
                  )}
                />
                <p
                  className={cn(
                    "font-mono text-[14px]",
                    isHi ? "text-gold" : "text-text-primary"
                  )}
                >
                  {skill.name}
                </p>
              </div>
              <p className="text-[12px] text-text-tertiary mt-1">{skill.context}</p>
              <p
                className={cn(
                  "text-[10px] uppercase tracking-widest mt-2",
                  LEVEL_CLASS[skill.level]
                )}
              >
                {skill.level}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
