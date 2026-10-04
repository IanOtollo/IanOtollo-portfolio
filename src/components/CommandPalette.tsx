"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, CornerDownLeft, Search } from "lucide-react"
import { PROJECTS } from "@/data/projects"
import { ease } from "@/lib/motion"
import { useInspect } from "@/components/Inspect"

interface Command {
  id: string
  label: string
  hint: string
  run: () => void
}

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const router = useRouter()
  const { toggle } = useInspect()
  const [query, setQuery] = useState("")
  const [index, setIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = useMemo<Command[]>(() => {
    const go = (href: string) => () => router.push(href)
    const open_ = (href: string) => () => window.open(href, "_blank", "noopener")
    return [
      { id: "home", label: "Home", hint: "Page", run: go("/") },
      { id: "work", label: "All work", hint: "Page", run: go("/work") },
      { id: "about", label: "About", hint: "Page", run: go("/about") },
      { id: "stack", label: "Stack", hint: "Page", run: go("/stack") },
      { id: "contact", label: "Contact", hint: "Page", run: go("/contact") },
      ...PROJECTS.map((p) => ({
        id: p.slug,
        label: p.title,
        hint: "Case study",
        run: go(`/work/${p.slug}`),
      })),
      { id: "inspect", label: "Toggle inspect mode", hint: "Tool", run: toggle },
      { id: "email", label: "Email Ian", hint: "Contact", run: open_("mailto:ianotollo0@gmail.com") },
      { id: "github", label: "GitHub", hint: "Link", run: open_("https://github.com/IanOtollo") },
      { id: "linkedin", label: "LinkedIn", hint: "Link", run: open_("https://www.linkedin.com/in/ian-otollo-07b86a348") },
    ]
  }, [router, toggle])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? commands.filter((c) => c.label.toLowerCase().includes(q)) : commands
  }, [commands, query])

  useEffect(() => {
    if (open) {
      setQuery("")
      setIndex(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => setIndex(0), [query])

  const choose = (c?: Command) => {
    if (!c) return
    onClose()
    c.run()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter") {
      e.preventDefault()
      choose(results[index])
    } else if (e.key === "Escape") {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-background/70 px-4 pt-24 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease }}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
          >
            <div className="flex items-center gap-4 border-b border-border px-4">
              <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a page, project, or link…"
                className="h-14 w-full bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
                aria-label="Search commands"
              />
              <kbd className="rounded-xl border border-border px-2 text-xs text-muted-foreground">
                esc
              </kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-muted-foreground">
                  Nothing matches &ldquo;{query}&rdquo;.
                </li>
              )}
              {results.map((c, i) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setIndex(i)}
                    onClick={() => choose(c)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-2 text-left text-sm transition-colors ${
                      i === index ? "bg-primary text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    <span>{c.label}</span>
                    <span
                      className={`flex items-center gap-2 text-xs ${
                        i === index ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {c.hint}
                      {i === index ? (
                        <CornerDownLeft className="h-3 w-3" aria-hidden="true" />
                      ) : (
                        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
