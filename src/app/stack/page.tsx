import type { Metadata } from "next"
import { Reveal } from "@/components/Reveal"
import { SKILL_CATEGORIES } from "@/data/skills"

export const metadata: Metadata = {
  title: "Stack",
  description: "The technologies Ian Otollo builds with, and why he chooses them.",
}

export default function StackPage() {
  return (
    <section className="section" data-inspect="Stack">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Stack</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tighter md:text-7xl">
            What I build with, and why.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Not a logo wall. Each of these has run in production, and I can say why
            I picked it over the alternative.
          </p>
        </Reveal>

        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.name} className="mt-16 border-t border-border pt-8">
            <Reveal>
              <h2 className="text-3xl font-semibold">{cat.name}</h2>
            </Reveal>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {cat.skills.map((s) => (
                <li key={s.name}>
                  <Reveal className="h-full rounded-2xl border border-border/50 bg-card p-6 md:p-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold">{s.name}</h3>
                      <span className="eyebrow text-primary">{s.level}</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{s.context}</p>
                    <p className="mt-4 text-sm text-muted-foreground">{s.rationale}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
