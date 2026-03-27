const COLOR = {
  fg: "#1C1C1C",
  dim: "rgba(28,28,28,0.5)",
  muted: "rgba(28,28,28,0.2)",
  rowBg: "rgba(28,28,28,0.04)",
  accent: "#1E3A8A",
  critical: "#B91C1C",
  high: "#C2410C",
  medium: "rgba(28,28,28,0.4)",
  low: "rgba(28,28,28,0.15)",
};

const SEVERITY = [
  { label: "Critical", count: 2, color: COLOR.critical, flex: 2 },
  { label: "High", count: 4, color: COLOR.high, flex: 4 },
  { label: "Medium", count: 3, color: COLOR.medium, flex: 3 },
  { label: "Low", count: 3, color: COLOR.low, flex: 3 },
];

const TOTAL = SEVERITY.reduce((s, v) => s + v.count, 0);

const FINDINGS = [
  { title: "Key rotation policy", severity: "Critical", color: COLOR.critical, refs: 3 },
  { title: "Access log retention", severity: "High", color: COLOR.high, refs: 5 },
  { title: "MFA enforcement", severity: "High", color: COLOR.high, refs: 2 },
  { title: "Backup verification", severity: "Medium", color: COLOR.medium, refs: 4 },
];

export function FindingsSummaryIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[280px] flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-baseline justify-between gap-3">
          <span
            className="font-mono text-sm md:text-base leading-tight tracking-tight"
            style={{ color: COLOR.fg }}
          >
            {TOTAL} Findings
          </span>
          <span
            className="font-mono text-xs leading-tight tracking-tight"
            style={{ color: COLOR.dim }}
          >
            4 severity levels
          </span>
        </div>

        {/* Severity bar */}
        <div className="flex gap-0.5 h-3">
          {SEVERITY.map((s) => (
            <div
              key={s.label}
              className="h-full"
              style={{ flex: s.flex, background: s.color }}
            />
          ))}
        </div>

        {/* Severity legend */}
        <div className="flex gap-3">
          {SEVERITY.map((s) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 shrink-0" style={{ background: s.color }} />
              <span className="text-[10px] leading-tight tracking-tight" style={{ color: COLOR.dim }}>
                {s.count}
              </span>
            </div>
          ))}
        </div>

        {/* Findings list */}
        <div className="flex flex-col gap-1.5">
          {FINDINGS.map((f) => (
            <div
              key={f.title}
              className="p-2.5 flex items-center gap-3"
              style={{ background: COLOR.rowBg }}
            >
              <div className="w-1.5 h-1.5 shrink-0" style={{ background: f.color }} />
              <span
                className="text-xs leading-tight tracking-tight flex-1 min-w-0"
                style={{ color: COLOR.fg }}
              >
                {f.title}
              </span>
              <span
                className="font-mono text-[10px] leading-tight tracking-tight shrink-0"
                style={{ color: COLOR.dim }}
              >
                {f.refs} refs
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
