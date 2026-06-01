import Link from "next/link"
import PageWrapper from "@/components/ui/PageWrapper"
import SectionLabel from "@/components/ui/SectionLabel"

const CARDS = [
  {
    number: "01",
    title: "Product Development",
    description:
      "You have an idea. I have the architecture, the stack, and the judgment to turn it into a product that survives launch day and grows past it. End-to-end ownership: from database schema to deployed frontend to payment integration.",
    deliverables: [
      "Full-stack web applications",
      "SaaS product architecture",
      "E-commerce with African payment rails (M-Pesa, Paystack)",
      "Admin dashboards and CMS integration",
      "Vercel deployment and performance optimisation",
    ],
  },
  {
    number: "02",
    title: "Platform Engineering",
    description:
      "Web infrastructure that doesn't buckle. APIs built for the real world — rate-limited, authenticated, documented, and ready for the traffic you're planning for. Not the traffic you have today.",
    deliverables: [
      "REST API design and documentation",
      "Authentication systems (Supabase Auth, JWT)",
      "Database architecture and schema design",
      "Third-party service integration",
      "CI/CD pipeline configuration",
    ],
  },
  {
    number: "03",
    title: "Integration Work",
    description:
      "M-Pesa. Paystack. Supabase. Sanity. Any third-party service you need connected, I've probably already connected it for someone else. If I haven't, I'll figure it out faster than you will.",
    deliverables: [
      "Payment gateway integration (M-Pesa STK Push, Paystack)",
      "Sanity and Contentful CMS setup",
      "Authentication providers",
      "WhatsApp and SMS automation",
      "External API consumption and wrapping",
    ],
  },
]

const PROCESS = [
  { number: "01", title: "Discovery", description: "Understand the problem, the users, and the constraints before a line of code." },
  { number: "02", title: "Architecture", description: "Design the system to scale. Schema, stack, and structure decided deliberately." },
  { number: "03", title: "Build", description: "Ship working software in tight increments. No surprises at the end." },
  { number: "04", title: "Ship", description: "Deploy, monitor, and hand over a product that runs without me." },
]

export default function ServicesPage() {
  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-8 pt-32 pb-16">
        <SectionLabel>Services</SectionLabel>
        <h1
          className="font-display text-text-primary leading-[1.1]"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          I build the things companies
          <br />
          bet their business on.
        </h1>
        <p className="text-[18px] text-text-secondary max-w-xl mt-4">
          End-to-end ownership. Architecture to deployment. No hand-offs.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-8">
        {CARDS.map((card) => (
          <div
            key={card.number}
            className="border border-border p-10 md:p-14 mb-4 hover:border-gold transition-colors duration-300"
          >
            <span className="font-mono text-[12px] text-gold">{card.number}</span>
            <h2 className="font-display text-[36px] text-text-primary mt-3">{card.title}</h2>
            <p className="text-[16px] text-text-secondary leading-[1.75] mt-4 max-w-xl">
              {card.description}
            </p>
            <div className="mt-8">
              {card.deliverables.map((d, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-border last:border-0"
                >
                  <span className="font-mono text-[12px] text-gold leading-6">—</span>
                  <span className="text-[14px] text-text-secondary">{d}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-8 py-20">
        <SectionLabel>How I Work</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
          {PROCESS.map((step) => (
            <div key={step.number}>
              <span className="font-mono text-[13px] text-gold">{step.number}</span>
              <h3 className="font-display text-[18px] text-text-primary mt-2">{step.title}</h3>
              <p className="text-[14px] text-text-secondary mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-t border-b border-border">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <h3 className="font-display text-[32px] text-text-primary">Working through IOMTechs</h3>
          <p className="text-[16px] text-text-secondary mt-4 max-w-xl leading-relaxed">
            Some projects are better handled under the IOMTechs agency umbrella — especially when
            multiple disciplines, longer timelines, or formal procurement is involved.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-8">
            <a
              href="https://iomtechs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold text-gold px-6 py-3 font-mono text-[13px] hover:bg-gold hover:text-base transition-all"
            >
              Visit IOMTechs ↗
            </a>
            <Link
              href="/contact"
              className="text-[14px] text-text-secondary hover:text-text-primary underline underline-offset-4"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
