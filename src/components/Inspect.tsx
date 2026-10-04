"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface InspectState {
  on: boolean
  toggle: () => void
}

const InspectContext = createContext<InspectState>({ on: false, toggle: () => {} })

export const useInspect = () => useContext(InspectContext)

const TOKENS = [
  { name: "background", cls: "bg-background" },
  { name: "card", cls: "bg-card" },
  { name: "muted", cls: "bg-muted" },
  { name: "border", cls: "bg-border" },
  { name: "foreground", cls: "bg-foreground" },
  { name: "primary", cls: "bg-primary" },
]

export function InspectProvider({ children }: { children: ReactNode }) {
  const [on, setOn] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    document.documentElement.classList.toggle("inspect", on)
  }, [on])

  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <InspectContext.Provider value={{ on, toggle: () => setOn((v) => !v) }}>
      {children}
      {on && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-40 mx-auto grid max-w-7xl grid-cols-4 gap-4 px-4 sm:px-6 md:grid-cols-12 lg:px-8"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`bg-primary/5 ${i >= 4 ? "hidden md:block" : ""}`}
              />
            ))}
          </div>
          <aside
            aria-label="Design system inspector"
            className="fixed bottom-4 right-4 z-[70] w-64 rounded-2xl border border-border bg-card/95 p-4 text-xs backdrop-blur-md"
          >
            <p className="eyebrow mb-3 text-primary">Inspect mode</p>
            <dl className="space-y-1 text-muted-foreground">
              <div className="flex justify-between">
                <dt>Viewport</dt>
                <dd className="text-foreground">{width}px</dd>
              </div>
              <div className="flex justify-between">
                <dt>Display</dt>
                <dd className="font-display text-foreground">Fraunces</dd>
              </div>
              <div className="flex justify-between">
                <dt>Body</dt>
                <dd className="text-foreground">Inter</dd>
              </div>
              <div className="flex justify-between">
                <dt>Grid</dt>
                <dd className="text-foreground">12 col / 8px base</dd>
              </div>
              <div className="flex justify-between">
                <dt>Reveal ease</dt>
                <dd className="text-foreground">0.16, 1, 0.3, 1</dd>
              </div>
            </dl>
            <div className="mt-4 grid grid-cols-6 gap-1">
              {TOKENS.map((t) => (
                <div key={t.name} className="space-y-1 text-center">
                  <div className={`h-6 rounded-xl border border-border ${t.cls}`} />
                  <span className="block truncate text-[8px] text-muted-foreground">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </>
      )}
    </InspectContext.Provider>
  )
}
