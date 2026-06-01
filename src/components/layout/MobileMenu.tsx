"use client"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

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

const EASE = [0.22, 1, 0.36, 1] as const

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-base flex flex-col"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div className="flex justify-end px-8 py-5">
            <button
              onClick={onClose}
              className="text-[12px] font-mono uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors"
            >
              Close
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 flex-1">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="font-display text-[48px] text-text-primary hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-8 justify-center pb-12">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-text-secondary hover:text-gold transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
