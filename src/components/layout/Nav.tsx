"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import MobileMenu from "./MobileMenu"

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/empire", label: "Empire" },
  { href: "/contact", label: "Contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between transition-all duration-300",
          scrolled ? "bg-base/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        )}
      >
        <Link href="/" data-cursor="hover" className="outline-none focus:outline-none focus-visible:outline-none">
          <div>
            <p className="font-display text-[18px] text-text-primary leading-tight">Ian Otollo</p>
            <p className="font-mono text-[11px] text-gold tracking-wider">IOMTechs · Founder</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[14px] transition-colors relative",
                  active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold" />
                )}
              </Link>
            )
          })}
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-[12px] font-mono uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
        >
          Menu
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
