export function ScanDemo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card ${className}`}
      role="img"
      aria-label="Illustration of the face-scan gate interface showing a match result"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,hsl(var(--primary)/0.14),transparent_60%)]" />

      <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <ellipse cx="100" cy="112" rx="52" ry="68" fill="none" stroke="hsl(var(--foreground) / 0.25)" strokeWidth="1" strokeDasharray="3 5" />
        {[
          [64, 54, 1, 1],
          [136, 54, -1, 1],
          [64, 170, 1, -1],
          [136, 170, -1, -1],
        ].map(([x, y, sx, sy], i) => (
          <path
            key={i}
            d={`M${x} ${y + sy * 14} V${y} H${x + sx * 14}`}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
        ))}
        {[
          [84, 96],
          [116, 96],
          [100, 118],
          [88, 140],
          [112, 140],
          [100, 150],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2" fill="hsl(var(--primary))" />
        ))}
      </svg>

      <div className="absolute left-[18%] right-[18%] h-px animate-scan bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />

      <div className="absolute inset-x-4 bottom-4 space-y-2 rounded-xl border border-border bg-background/80 p-4 text-xs backdrop-blur-md">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-medium text-primary">
            <span className="h-2 w-2 animate-blink rounded-full bg-primary" />
            MATCH
          </span>
          <span className="tabular-nums text-muted-foreground">distance 0.42</span>
        </div>
        <div className="flex items-center justify-between text-muted-foreground">
          <span>Role: Student</span>
          <span>Status: Active</span>
        </div>
      </div>
    </div>
  )
}
