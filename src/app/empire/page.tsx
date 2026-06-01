import PageWrapper from "@/components/ui/PageWrapper"
import SectionLabel from "@/components/ui/SectionLabel"
import { IOM_EMPIRE } from "@/data/empire"

export default function EmpirePage() {
  const flagship = IOM_EMPIRE.verticals.find((v) => v.isFlagship)!
  const others = IOM_EMPIRE.verticals.filter((v) => !v.isFlagship)

  return (
    <PageWrapper>
      {/* Section 1 — Declaration */}
      <section className="pt-32 pb-16 px-8">
        <SectionLabel>IOM Empire</SectionLabel>
        <h1
          className="font-display text-text-primary leading-[1.05] mt-4 max-w-5xl"
          style={{ fontSize: "clamp(40px, 5.5vw, 88px)" }}
        >
          IOMTechs is not the
          <br />
          destination.
          <br />
          It is the first proof.
        </h1>
        <p className="text-[20px] text-text-secondary max-w-2xl mt-8 leading-relaxed">
          {IOM_EMPIRE.vision}
        </p>
        <div className="w-full h-px bg-gold opacity-20 mt-16" />
      </section>

      {/* Section 2 — IOMTechs Flagship Card */}
      <section className="max-w-6xl mx-auto px-8 mt-16">
        <div className="bg-surface border border-gold p-10 md:p-14">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-display text-[48px] text-text-primary leading-none">
              {flagship.name}
            </span>
            <span className="text-[11px] font-mono text-gold border border-gold px-3 py-1 rounded-full">
              Active — Flagship
            </span>
          </div>
          <p className="font-mono text-[13px] text-text-tertiary mt-2">
            Founded 2023 · Nairobi, Kenya
          </p>
          <p className="text-[16px] text-text-secondary mt-6 max-w-xl leading-relaxed">
            {flagship.description}
          </p>
          {flagship.url && (
            <a
              href={flagship.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[13px] text-gold border border-gold px-6 py-3 mt-8 hover:bg-gold hover:text-base transition-all"
            >
              Visit IOMTechs ↗
            </a>
          )}
        </div>
      </section>

      {/* Section 3 — Other Verticals */}
      <section className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {others.map((v) => (
            <div
              key={v.name}
              className="bg-surface border border-border p-8 hover:border-[#333330] transition-colors relative"
            >
              <span
                className={
                  v.status === "building"
                    ? "absolute top-8 right-8 text-[11px] font-mono bg-surface border border-border text-text-secondary px-2 py-1 rounded-full"
                    : "absolute top-8 right-8 text-[11px] font-mono text-text-tertiary"
                }
              >
                {v.status}
              </span>
              <h2 className="font-display text-[32px] text-text-primary">{v.name}</h2>
              <p className="font-mono text-[13px] text-gold mt-2">{v.tagline}</p>
              <p
                className={
                  v.status === "vision"
                    ? "text-[14px] text-text-secondary mt-4 leading-relaxed opacity-60"
                    : "text-[14px] text-text-secondary mt-4 leading-relaxed"
                }
              >
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Vision Pull Quote */}
      <section className="bg-base border-t border-b border-border py-24 mt-16">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <blockquote className="font-display text-[24px] italic text-text-primary leading-[1.6]">
            &ldquo;The IOM Empire is not a brand exercise. It is a long-term infrastructure play. Each
            vertical is a system that compounds — revenue, knowledge, and leverage — until the sum is
            larger than the parts.&rdquo;
          </blockquote>
          <cite className="font-mono text-[12px] text-text-tertiary mt-6 block not-italic">
            — Ian Otollo, Founder
          </cite>
        </div>
      </section>
    </PageWrapper>
  )
}
