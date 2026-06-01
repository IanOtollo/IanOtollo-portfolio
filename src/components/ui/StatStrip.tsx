interface StatStripProps {
  stats: Array<{ value: string; label: string }>
}

export default function StatStrip({ stats }: StatStripProps) {
  return (
    <div className="border-t border-b border-border py-10 w-full">
      <div className="flex items-center justify-between gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-1 items-center justify-between">
            <div className="flex-1 text-center">
              <p
                className="font-display text-text-primary leading-none"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                {stat.value}
              </p>
              <p className="text-[12px] uppercase tracking-widest text-text-secondary mt-2">
                {stat.label}
              </p>
            </div>
            {i < stats.length - 1 && <div className="w-px h-12 bg-border" />}
          </div>
        ))}
      </div>
    </div>
  )
}
