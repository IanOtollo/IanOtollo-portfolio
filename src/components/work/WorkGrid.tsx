"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PROJECTS } from "@/data/projects"
import ProjectCard from "@/components/ui/ProjectCard"
import { cn } from "@/lib/utils"

const FILTERS = [
  { label: "All", tag: "all" },
  { label: "Products", tag: "product" },
  { label: "Platforms", tag: "platform" },
  { label: "Government", tag: "government" },
  { label: "IOM Empire", tag: "empire" },
  { label: "Personal", tag: "personal" },
] as const

export default function WorkGrid() {
  const [active, setActive] = useState<string>("all")

  const visible = PROJECTS.filter((p) => active === "all" || p.categoryTag === active)

  return (
    <div>
      <div className="flex gap-3 flex-wrap mt-12">
        {FILTERS.map((f) => {
          const isActive = active === f.tag
          return (
            <button
              key={f.tag}
              onClick={() => setActive(f.tag)}
              className={cn(
                "text-[13px] font-mono px-4 py-2 transition-colors",
                isActive
                  ? "text-gold border-b-2 border-gold pb-1"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
