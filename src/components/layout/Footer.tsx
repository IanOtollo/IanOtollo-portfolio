import Link from "next/link"

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/empire", label: "Empire" },
  { href: "/contact", label: "Contact" },
]

const SOCIALS = [
  { href: "https://github.com/IanOtollo", label: "GitHub" },
  { href: "https://linkedin.com/in/ian-otollo-07b86a348", label: "LinkedIn" },
  { href: "https://twitter.com/Ian_Otollo", label: "X" },
  { href: "https://wa.me/+254112993859", label: "WhatsApp" },
]

export default function Footer() {
  return (
    <footer>
      {/* Section 1 — CTA */}
      <div className="max-w-6xl mx-auto px-8 py-32">
        <h2 className="font-display text-text-primary leading-[1.1]" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
          Ready to build
          <br />
          something that matters?
        </h2>
        <div className="flex flex-wrap items-center gap-8 mt-10">
          <Link
            href="/contact"
            data-cursor="hover"
            className="border border-gold text-gold px-8 py-4 text-[14px] hover:bg-gold hover:text-base transition-all duration-300"
          >
            Start a project →
          </Link>
          <Link
            href="/work"
            className="text-text-secondary hover:text-text-primary underline underline-offset-4 text-[14px]"
          >
            View all work
          </Link>
        </div>
      </div>

      {/* Section 2 — Links bar */}
      <div className="border-t border-border px-8 py-8 flex flex-col md:flex-row gap-6 justify-between items-center">
        <p className="font-display text-[16px] text-text-primary">Ian Otollo</p>
        <nav className="flex flex-wrap gap-6 justify-center">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[13px] text-text-secondary hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap gap-4 justify-center">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-text-secondary hover:text-gold transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Section 3 — Empire bar */}
      <div className="bg-surface border-t border-border py-4 text-center">
        <p className="text-gold text-[11px] uppercase tracking-widest font-mono">Part of the IOM Empire</p>
        <p className="text-[12px] text-text-tertiary mt-1">
          IOMTechs · IOM Forms · IOM Transit · IOM Properties · IOM Banks
        </p>
      </div>

      {/* Bottom line */}
      <div className="border-t border-border py-4 text-center">
        <p className="text-[11px] text-text-tertiary">© 2025 Ian Otollo. All rights reserved.</p>
      </div>
    </footer>
  )
}
