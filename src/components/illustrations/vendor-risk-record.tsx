const COLOR = {
  fg: "#1C1C1C",
  dim: "rgba(28,28,28,0.5)",
  muted: "rgba(28,28,28,0.15)",
  accent: "#318FFA",
  accentFill: "rgba(49,143,250,0.15)",
};

const AXES = [
  { label: "Encryption", value: 92 },
  { label: "Access", value: 68 },
  { label: "Incident", value: 45 },
  { label: "Retention", value: 88 },
];

const CX = 65;
const CY = 65;
const MAX_R = 48;
const RINGS = [0.33, 0.66, 1];

const AVG = Math.round(AXES.reduce((s, a) => s + a.value, 0) / AXES.length);

function polarToXY(angleDeg: number, r: number): [number, number] {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
}

const ANGLE_STEP = 360 / AXES.length;

function ringPoints(scale: number) {
  return AXES.map((_, i) => polarToXY(i * ANGLE_STEP, MAX_R * scale).join(",")).join(" ");
}

const dataPoints = AXES.map((a, i) =>
  polarToXY(i * ANGLE_STEP, MAX_R * (a.value / 100)).join(","),
).join(" ");

const labelPositions = AXES.map((a, i) => {
  const [x, y] = polarToXY(i * ANGLE_STEP, MAX_R + 14);
  return { label: a.label, x, y, value: a.value };
});

export function VendorRiskRecordIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[320px] flex flex-col items-center gap-4">
        <svg width="130" height="130" viewBox="0 0 130 130" className="overflow-visible">
          {RINGS.map((scale) => (
            <polygon
              key={scale}
              points={ringPoints(scale)}
              fill="none"
              stroke={COLOR.muted}
              strokeWidth="1"
            />
          ))}
          {AXES.map((_, i) => {
            const [x, y] = polarToXY(i * ANGLE_STEP, MAX_R);
            return <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke={COLOR.muted} strokeWidth="1" />;
          })}
          <polygon points={dataPoints} fill={COLOR.accentFill} stroke={COLOR.accent} strokeWidth="1.5" />
          {AXES.map((a, i) => {
            const [x, y] = polarToXY(i * ANGLE_STEP, MAX_R * (a.value / 100));
            return <circle key={i} cx={x} cy={y} r="3" fill={COLOR.accent} />;
          })}
          {labelPositions.map((lp) => (
            <text
              key={lp.label}
              x={lp.x}
              y={lp.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={COLOR.dim}
              fontSize="9"
              fontFamily="inherit"
              style={{ letterSpacing: "-0.02em" }}
            >
              {lp.label}
            </text>
          ))}
        </svg>

        <div className="flex items-baseline gap-2">
          <span
            className="text-lg md:text-xl leading-none tracking-tighter tabular-nums"
            style={{ color: COLOR.accent }}
          >
            {AVG}%
          </span>
          <span className="text-xs leading-tight tracking-tight" style={{ color: COLOR.dim }}>
            overall remediation
          </span>
        </div>

        <span className="text-xs leading-tight tracking-tight" style={{ color: COLOR.muted }}>
          Last assessed: 3d ago
        </span>
      </div>
    </div>
  );
}
