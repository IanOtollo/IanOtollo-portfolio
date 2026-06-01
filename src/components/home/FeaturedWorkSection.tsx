"use client"
import Link from "next/link"
import { usePersona } from "@/hooks/usePersona"
import { PROJECTS } from "@/data/projects"
import SectionLabel from "@/components/ui/SectionLabel"
import ProjectCard from "@/components/ui/ProjectCard"

export default function FeaturedWorkSection() {
  const persona = usePersona()
  const featured = persona.featuredProjectSlugs
    .map((slug) => PROJECTS.find((p) => p.slug === slug))
    .filter((p): p is (typeof PROJECTS)[number] => Boolean(p))

  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <SectionLabel>Selected Work</SectionLabel>
          <h2
            className="font-display text-text-primary leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Proof, not promises.
          </h2>
        </div>
        <Link
          href="/work"
          className="text-[14px] text-text-secondary hover:text-gold transition-colors"
        >
          View all work →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
