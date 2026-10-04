import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/Reveal"

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/IanOtollo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ian-otollo-07b86a348" },
  { label: "X", href: "https://x.com/Ian_Otollo" },
]

export function Footer() {
  return (
    <footer
      data-inspect="Footer"
      className="border-t border-border px-4 pb-8 pt-16 sm:px-6 md:pt-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Next</p>
          <Link
            href="/contact"
            className="group mt-4 block font-display text-5xl font-semibold tracking-tighter transition-colors hover:text-primary md:text-7xl"
          >
            Got something that needs proving?
            <ArrowUpRight
              className="ml-4 inline h-10 w-10 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 md:h-14 md:w-14"
              aria-hidden="true"
            />
          </Link>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ian Otollo. Built in Nairobi.</p>
          <ul className="flex gap-6">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
