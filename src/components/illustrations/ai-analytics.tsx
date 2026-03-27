const COLOR = {
  fg: "#1C1C1C",
  dim: "rgba(28,28,28,0.5)",
  muted: "rgba(28,28,28,0.2)",
  accent: "#318FFA",
  warn: "rgba(28,28,28,0.35)",
  gap: "rgba(28,28,28,0.12)",
};

const SEGMENTS = [
  { label: "Verified", value: 64, color: COLOR.accent },
  { label: "Warning", value: 23, color: COLOR.warn },
  { label: "Gap", value: 13, color: COLOR.gap },
];

const TOTAL = SEGMENTS.reduce((s, seg) => s + seg.value, 0);
const SCORE = 87;
const R = 52;
const C = 2 * Math.PI * R;

function buildArcs() {
  let offset = 0;
  return SEGMENTS.map((seg) => {
    const dash = (seg.value / TOTAL) * C;
    const arc = { ...seg, dashArray: `${dash} ${C - dash}`, dashOffset: -offset };
    offset += dash;
    return arc;
  });
}

const ARCS = buildArcs();

export function AIAnalyticsIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[280px] flex flex-col items-center gap-5">
        <div className="relative">
          <svg width="130" height="130" viewBox="0 0 130 130">
            <circle cx="65" cy="65" r={R} fill="none" stroke={COLOR.muted} strokeWidth="12" />
            {ARCS.map((arc) => (
              <circle
                key={arc.label}
                cx="65"
                cy="65"
                r={R}
                fill="none"
                stroke={arc.color}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={arc.dashArray}
                strokeDashoffset={arc.dashOffset}
                transform="rotate(-90 65 65)"
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span
              className="text-2xl md:text-3xl tracking-tighter leading-none tabular-nums"
              style={{ color: COLOR.accent }}
            >
              {SCORE}%
            </span>
            <span className="text-xs leading-tight tracking-tight mt-0.5" style={{ color: COLOR.dim }}>
              compliance
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          {SEGMENTS.map((seg) => (
            <div key={seg.label} className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: seg.color }} />
              <span className="text-xs md:text-sm leading-tight tracking-tight flex-1" style={{ color: COLOR.fg }}>
                {seg.label}
              </span>
              <span className="font-mono text-xs md:text-sm leading-tight tracking-tight tabular-nums" style={{ color: COLOR.dim }}>
                {seg.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
