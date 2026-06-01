import Link from "next/link"
import SectionLabel from "@/components/ui/SectionLabel"

const SERVICES = [
  {
    number: "01",
    title: "Products",
    description: "Full-stack web applications and SaaS products, architected to survive launch day and grow past it.",
  },
  {
    number: "02",
    title: "Platforms",
    description: "APIs and web infrastructure built for the traffic you're planning for — rate-limited, authenticated, documented.",
  },
  {
    number: "03",
    title: "Integrations",
    description: "M-Pesa, Paystack, Supabase, Sanity. Any third-party service connected cleanly and reliably.",
  },
]

export default function ServicesTeaserSection() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24">
      <div className="mb-12">
        <SectionLabel>What I Build</SectionLabel>
        <h2
          className="font-display text-text-primary leading-[1.1]"
          style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
        >
          Three ways to work together.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SERVICES.map((s) => (
          <div
            key={s.number}
            className="border border-border p-8 hover:border-gold transition-colors duration-300"
          >
            <span className="font-mono text-[12px] text-gold">{s.number}</span>
            <h3 className="font-display text-[28px] text-text-primary mt-3">{s.title}</h3>
            <p className="text-[14px] text-text-secondary mt-4 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/services"
          className="text-[14px] text-text-secondary hover:text-gold transition-colors"
        >
          Explore services →
        </Link>
      </div>
    </section>
  )
}
