const COLOR = {
  fg: "#1F3D60",
  dim: "rgba(31,61,96,0.5)",
  muted: "rgba(31,61,96,0.25)",
  rowBg: "rgba(31,61,96,0.05)",
  barTrack: "rgba(31,61,96,0.05)",
  barFill: "rgba(31,61,96,0.5)",
};

const FINDINGS = [
  { label: "Encryption at rest", percent: 100 },
  { label: "Access controls", percent: 78 },
  { label: "Incident response", percent: 45 },
  { label: "Data retention", percent: 92 },
];

export function VendorRiskRecordIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div
        className="w-full max-w-[320px] rounded-md flex flex-col gap-4 p-4"
        style={{ background: COLOR.rowBg }}
      >
        <div className="flex items-center justify-between">
          <span
            className="text-sm md:text-base leading-tight tracking-tight"
            style={{ color: COLOR.fg }}
          >
            Remediation Progress
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {FINDINGS.map((f) => (
            <div key={f.label} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-3">
                <span
                  className="text-xs md:text-sm leading-tight tracking-tight"
                  style={{ color: COLOR.dim }}
                >
                  {f.label}
                </span>
                <span
                  className="text-xs md:text-sm leading-tight tracking-tight tabular-nums shrink-0"
                  style={{ color: f.percent === 100 ? COLOR.fg : COLOR.dim }}
                >
                  {f.percent}%
                </span>
              </div>
              <div
                className="w-full h-2 rounded-md overflow-hidden"
                style={{ background: COLOR.barTrack }}
              >
                <div
                  className="h-full rounded-md"
                  style={{ width: `${f.percent}%`, background: COLOR.barFill }}
                />
              </div>
            </div>
          ))}
        </div>

        <span
          className="text-xs leading-tight tracking-tight pt-0.5"
          style={{ color: COLOR.muted }}
        >
          Last assessed: 3d ago
        </span>
      </div>
    </div>
  );
}
