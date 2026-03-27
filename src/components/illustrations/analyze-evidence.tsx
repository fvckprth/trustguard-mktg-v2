const COLOR = {
  fg: "#1C1C1C",
  dim: "rgba(28,28,28,0.5)",
  muted: "rgba(28,28,28,0.2)",
  track: "rgba(28,28,28,0.06)",
  accent: "#1E3A8A",
  accentDim: "rgba(49,143,250,0.12)",
};

const CONTROLS = [
  { label: "Encryption at rest", covered: 92 },
  { label: "Access controls", covered: 68 },
  { label: "Incident response", covered: 45 },
  { label: "Data retention", covered: 88 },
];

const AVG = Math.round(CONTROLS.reduce((s, c) => s + c.covered, 0) / CONTROLS.length);

export function AnalyzeEvidenceIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[320px] flex flex-col gap-5">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-sm md:text-base leading-tight tracking-tight" style={{ color: COLOR.fg }}>
            Control Coverage
          </span>
          <span
            className="text-lg md:text-xl leading-none tracking-tighter tabular-nums"
            style={{ color: COLOR.accent }}
          >
            {AVG}%
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {CONTROLS.map((c) => (
            <div key={c.label} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs md:text-sm leading-tight tracking-tight" style={{ color: COLOR.dim }}>
                  {c.label}
                </span>
                <span className="text-xs md:text-sm leading-tight tracking-tight tabular-nums shrink-0" style={{ color: COLOR.fg }}>
                  {c.covered}%
                </span>
              </div>
              <div className="w-full h-3 overflow-hidden flex" style={{ background: COLOR.track }}>
                <div
                  className="h-full"
                  style={{ width: `${c.covered}%`, background: COLOR.accent }}
                />
              </div>
            </div>
          ))}
        </div>

        <span className="text-xs leading-tight tracking-tight" style={{ color: COLOR.dim }}>
          {AVG}% coverage across {CONTROLS.length} control areas
        </span>
      </div>
    </div>
  );
}
