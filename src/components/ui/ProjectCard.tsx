"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
}

const EASE = [0.22, 1, 0.36, 1] as const

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="hover"
        className="project-card group block"
      >
        <div
          className="relative aspect-[4/3] overflow-hidden border border-border"
          style={{ backgroundColor: project.coverColor }}
        >
          {project.status === "in-progress" && (
            <span className="absolute top-3 right-3 z-10 bg-surface border border-border text-gold text-[11px] font-mono px-2 py-1 rounded-full">
              Building
            </span>
          )}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              filter: "grayscale(100%) contrast(1.05)",
              transition: "filter 500ms ease, transform 500ms ease",
            }}
          >
            <span className="font-display text-[clamp(20px,3vw,32px)] text-text-tertiary px-6 text-center">
              {project.title}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3 className="text-[18px] font-display text-text-primary">{project.title}</h3>
            <p className="text-[12px] font-mono text-text-tertiary mt-1">{project.category}</p>
          </div>
          <span className="text-gold text-[18px] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
