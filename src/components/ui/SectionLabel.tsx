import { cn } from "@/lib/utils"

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[11px] uppercase tracking-[0.1em] text-gold font-mono border-l-2 border-gold pl-3 mb-4",
        className
      )}
    >
      {children}
    </p>
  )
}
