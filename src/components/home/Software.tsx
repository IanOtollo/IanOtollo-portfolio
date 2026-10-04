"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { ScanDemo } from "@/components/home/ScanDemo"
import { PROJECTS } from "@/data/projects"
import { REPO_GROUPS } from "@/data/repos"
import { ease } from "@/lib/motion"

export function Software() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const p = PROJECTS[index]
  const region = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = region.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Auto-advance every 3s; pauses on hover/focus, off-screen, or reduced motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (paused || !inView || reduce) return
    const id = setTimeout(
      () => setState(([cur]) => [(cur + 1) % PROJECTS.length, 1]),
      3000,
    )
    return () => clearTimeout(id)
  }, [index, paused, inView])

  const go = (next: number) =>
    setState(([cur]) => [(next + PROJECTS.length) % PROJECTS.length, next > cur ? 1 : -1])

  return (
    <section id="work" data-inspect="Software / slider" className="section scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">/ software</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">
              Systems real organisations depend on.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-4 text-sm font-medium transition-colors hover:bg-muted"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div
          ref={region}
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(index + 1)
            if (e.key === "ArrowLeft") go(index - 1)
          }}
        >
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.article
                key={p.slug}
                custom={dir}
                initial={{ opacity: 0, x: dir * 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -48 }}
                transition={{ duration: 0.4, ease }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(index + 1)
                  else if (info.offset.x > 80) go(index - 1)
                }}
                className="grid gap-8 p-6 md:p-8 lg:grid-cols-12 lg:gap-12"
              >
                <div className="flex flex-col justify-between lg:col-span-7">
                  <div>
                    <p className="eyebrow text-primary">
                      {index === 0 ? "Flagship · " : ""}
                      {p.category}
                    </p>
                    <h3 className="mt-4 text-4xl font-semibold md:text-5xl">{p.title}</h3>
                    <p className="mt-4 max-w-lg text-lg text-muted-foreground">{p.tagline}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-xl border border-border px-4 py-1 text-xs text-muted-foreground">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
                      {p.facts.slice(0, 3).map((f) => (
                        <div key={f.label}>
                          <dt className="eyebrow">{f.label}</dt>
                          <dd className="mt-2 font-display text-xl font-semibold">{f.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        href={`/work/${p.slug}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
                      >
                        Read the case study
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-4 text-sm font-medium transition-colors hover:bg-muted"
                        >
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          Live
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
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  {p.slug === "school-biometric-system" ? (
                    <ScanDemo />
                  ) : (
                    <div className="flex aspect-[4/5] flex-col justify-end rounded-2xl border border-border bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.18),transparent_60%)] p-6">
                      <span className="font-display text-7xl font-semibold tracking-tighter text-primary/80">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-2 text-sm text-muted-foreground">{p.year}</span>
                    </div>
                  )}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose project">
              {PROJECTS.map((x, i) => (
                <button
                  key={x.slug}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Project ${i + 1}: ${x.title}`}
                  onClick={() => go(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
              <span className="ml-4 text-xs tabular-nums text-muted-foreground" aria-live="polite">
                {index + 1} / {PROJECTS.length}
                {paused && " · paused"}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous project"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:bg-muted"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next project"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:bg-muted"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <Reveal className="mt-24">
          <p className="eyebrow">The full index</p>
          <h3 className="mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">
            Everything else I&rsquo;ve built, by domain.
          </h3>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REPO_GROUPS.map((g) => (
            <Reveal key={g.name} className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <h4 className="text-2xl font-semibold">{g.name}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{g.blurb}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.repos.map((r) => (
                  <li key={r}>
                    <a
                      href={`https://github.com/IanOtollo/${r}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-xl border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {r}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
