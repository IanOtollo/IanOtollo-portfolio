import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { PROJECTS } from "@/data/projects"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects by Ian Otollo: biometrics, hiring, civic, e-commerce and business systems.",
}

export default function WorkPage() {
  return (
    <section className="section" data-inspect="Work index">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Work</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tighter md:text-7xl">
            Everything I&rsquo;ve shipped worth showing.
          </h1>
        </Reveal>

        <ul className="mt-16 border-t border-border">
          {PROJECTS.map((p, i) => (
            <li key={p.slug} className="border-b border-border">
              <Reveal>
                <Link
                  href={`/work/${p.slug}`}
                  className="group grid items-center gap-4 py-8 transition-colors hover:bg-card md:grid-cols-12 md:px-4"
                >
                  <span className="font-display text-xl text-muted-foreground md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="md:col-span-6">
                    <h2 className="text-3xl font-semibold transition-colors group-hover:text-primary md:text-4xl">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground">{p.tagline}</p>
                  </div>
                  <p className="text-sm text-muted-foreground md:col-span-3">
                    {p.category}
                    <br />
                    {p.year}
                  </p>
                  <ArrowUpRight
                    className="h-6 w-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:col-span-2 md:justify-self-end"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
