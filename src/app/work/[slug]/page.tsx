import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight, ExternalLink, Code2 } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { ScanDemo } from "@/components/home/ScanDemo"
import { PROJECTS, getProjectBySlug } from "@/data/projects"

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return { title: project.title, description: project.tagline }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()
  const p = project!

  const index = PROJECTS.findIndex((x) => x.slug === p.slug)
  const next = PROJECTS[(index + 1) % PROJECTS.length]

  return (
    <article>
      <header data-inspect="Case study header" className="section pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All work
          </Link>
          <Reveal>
            <p className="eyebrow mt-8 text-primary">{p.category}</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tighter md:text-7xl">
              {p.title}
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted-foreground">{p.tagline}</p>
          </Reveal>

          <Reveal>
            <dl className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="eyebrow">Role</dt>
                <dd className="mt-2">{p.role}</dd>
              </div>
              <div>
                <dt className="eyebrow">Year</dt>
                <dd className="mt-2">{p.year}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="eyebrow">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-xl border border-border px-4 py-1 text-sm">
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap gap-4">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Visit live site
              </a>
            )}
            {p.repoUrl && (
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-4 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Code2 className="h-4 w-4" aria-hidden="true" />
                Source on GitHub
              </a>
            )}
          </Reveal>
        </div>
      </header>

      <section className="section border-t border-border pt-12 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            <Reveal>
              <h2 className="eyebrow">Context</h2>
              <p className="mt-4 text-xl">{p.context}</p>
            </Reveal>
            <Reveal>
              <h2 className="eyebrow">The problem</h2>
              <p className="mt-4 text-xl">{p.problem}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            {p.slug === "school-biometric-system" ? (
              <ScanDemo />
            ) : (
              <Reveal>
                <dl className="grid grid-cols-2 gap-4">
                  {p.facts.map((f) => (
                    <div key={f.label} className="rounded-2xl border border-border/50 bg-card p-6">
                      <dt className="eyebrow">{f.label}</dt>
                      <dd className="mt-2 font-display text-2xl font-semibold">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {p.slug === "school-biometric-system" && (
        <section className="px-4 sm:px-6 lg:px-8">
          <dl className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.facts.map((f) => (
              <Reveal key={f.label}>
                <div className="rounded-2xl border border-border/50 bg-card p-6">
                  <dt className="eyebrow">{f.label}</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold">{f.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </section>
      )}

      <section className="section" data-inspect="Approach">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="eyebrow">Approach</h2>
          </Reveal>
          <ol className="mt-8 border-t border-border">
            {p.approach.map((a, i) => (
              <li key={a.title} className="border-b border-border">
                <Reveal className="grid gap-4 py-8 md:grid-cols-12">
                  <span className="font-display text-3xl text-primary md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold md:col-span-4">{a.title}</h3>
                  <p className="text-muted-foreground md:col-span-7">{a.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-border bg-card">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="eyebrow text-primary">Outcome</h2>
            <p className="mt-4 max-w-4xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              {p.outcome}
            </p>
          </Reveal>
        </div>
      </section>

      <Link
        href={`/work/${next.slug}`}
        className="group block px-4 py-16 sm:px-6 md:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Next project</p>
          <p className="mt-4 font-display text-4xl font-semibold tracking-tighter transition-colors group-hover:text-primary md:text-6xl">
            {next.title}
            <ArrowUpRight className="ml-4 inline h-8 w-8 md:h-12 md:w-12" aria-hidden="true" />
          </p>
        </div>
      </Link>
    </article>
  )
}
