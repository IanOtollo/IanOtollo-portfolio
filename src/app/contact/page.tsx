import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ian Otollo. Email, X, LinkedIn, and GitHub.",
}

const METHODS = [
  { label: "Email", value: "ianotollo0@gmail.com", href: "mailto:ianotollo0@gmail.com" },
  { label: "LinkedIn", value: "ian-otollo", href: "https://www.linkedin.com/in/ian-otollo-07b86a348" },
  { label: "GitHub", value: "IanOtollo", href: "https://github.com/IanOtollo" },
  { label: "X / Twitter", value: "@Ian_Otollo", href: "https://x.com/Ian_Otollo" },
]

export default function ContactPage() {
  return (
    <section className="section" data-inspect="Contact">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tighter md:text-7xl">
            Let&rsquo;s build something
            <br />
            that <em className="font-normal italic text-primary">holds up.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Tell me what you&rsquo;re building. I reply within 24 hours and I&rsquo;ll
            be straight about whether I can make it better.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {METHODS.map((m) => (
            <li key={m.label}>
              <Reveal>
                <a
                  href={m.href}
                  {...(m.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center justify-between rounded-2xl border border-border/50 bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10 md:p-8"
                >
                  <span>
                    <span className="eyebrow block">{m.label}</span>
                    <span className="mt-2 block font-display text-2xl font-semibold">
                      {m.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-6 w-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
