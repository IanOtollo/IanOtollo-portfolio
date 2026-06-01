import Link from "next/link"
import SectionLabel from "@/components/ui/SectionLabel"
import { IOM_EMPIRE } from "@/data/empire"

export default function EmpireTeaserSection() {
  return (
    <section className="bg-surface border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel>The IOM Empire</SectionLabel>
          <h2
            className="font-display text-text-primary leading-[1.1]"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            IOMTechs is the first proof.
          </h2>
          <p className="text-[16px] text-text-secondary mt-6 leading-relaxed max-w-md">
            {IOM_EMPIRE.vision}
          </p>
          <Link
            href="/empire"
            className="inline-block mt-8 border border-gold text-gold px-6 py-3 text-[13px] font-mono hover:bg-gold hover:text-base transition-all duration-300"
          >
            Enter the Empire →
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-border border-t border-b border-border">
          {IOM_EMPIRE.verticals.map((v) => (
            <div key={v.name} className="flex items-center justify-between py-4">
              <div>
                <p className="font-display text-[20px] text-text-primary">{v.name}</p>
                <p className="font-mono text-[12px] text-text-tertiary mt-0.5">{v.tagline}</p>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-text-tertiary">
                {v.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
