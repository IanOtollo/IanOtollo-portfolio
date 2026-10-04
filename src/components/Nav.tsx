"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Command, Menu, ScanLine, X } from "lucide-react"
import { CommandPalette } from "@/components/CommandPalette"
import { useInspect } from "@/components/Inspect"
import { ease } from "@/lib/motion"

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Software" },
  { id: "ventures", label: "Ventures" },
]

const PAGES = [
  { href: "/work", label: "All work" },
  { href: "/stack", label: "Stack" },
  { href: "/contact", label: "Contact" },
]

export function Nav() {
  const pathname = usePathname()
  const { on, toggle } = useInspect()
  const [menu, setMenu] = useState(false)
  const [palette, setPalette] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => setMenu(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [menu])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setPalette((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (pathname !== "/") {
      setActive("")
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [pathname])

  return (
    <>
      <nav
        data-inspect="Nav / sticky + blur"
        className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMenu(true)}
              aria-label="Open menu"
              aria-expanded={menu}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:bg-muted md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-tight"
              aria-label="Ian Otollo, home"
            >
              Ian Otollo<span className="text-primary">.</span>
            </Link>
          </div>

          <ul className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/#${s.id}`}
                  className={`relative py-2 text-sm transition-colors hover:text-foreground ${
                    active === s.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-primary"
                      transition={{ duration: 0.3, ease }}
                    />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={`text-sm transition-colors hover:text-foreground ${
                  pathname.startsWith("/contact") ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-pressed={on}
              aria-label="Toggle inspect mode"
              title="Inspect mode: reveal the design system"
              className={`hidden h-10 items-center gap-2 rounded-xl border px-4 text-xs transition-colors sm:flex ${
                on
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              <ScanLine className="h-4 w-4" aria-hidden="true" />
              Inspect
            </button>
            <button
              type="button"
              onClick={() => setPalette(true)}
              aria-label="Open command palette"
              className="flex h-10 items-center gap-2 rounded-xl border border-border px-4 text-xs text-muted-foreground transition-colors hover:bg-muted"
            >
              <Command className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">K</span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menu && (
          <div className="md:hidden">
            <motion.div
              className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenu(false)}
              aria-hidden="true"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="fixed inset-y-0 left-0 z-[61] flex w-full max-w-sm flex-col border-r border-border bg-card p-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="flex items-center justify-between">
                <p className="eyebrow">Menu</p>
                <button
                  type="button"
                  onClick={() => setMenu(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-colors hover:bg-muted"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="eyebrow mt-10 text-primary">On this page</p>
              <ul className="mt-4">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/#${s.id}`}
                      onClick={() => setMenu(false)}
                      className={`flex items-center gap-4 py-2 font-display text-3xl transition-colors hover:text-primary ${
                        active === s.id ? "text-primary" : "text-foreground"
                      }`}
                    >
                      <span
                        className={`h-px transition-all ${
                          active === s.id ? "w-8 bg-primary" : "w-0 bg-transparent"
                        }`}
                        aria-hidden="true"
                      />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="eyebrow mt-10">Pages</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {PAGES.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="inline-block rounded-xl border border-border px-4 py-2 text-sm transition-colors hover:bg-muted"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      <CommandPalette open={palette} onClose={() => setPalette(false)} />
    </>
  )
}
