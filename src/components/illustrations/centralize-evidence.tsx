const COLOR = {
  fg: "#1C1C1C",
  dim: "rgba(28,28,28,0.5)",
  muted: "rgba(28,28,28,0.2)",
  rowBg: "rgba(28,28,28,0.04)",
  accent: "#318FFA",
  accentDim: "rgba(49,143,250,0.12)",
};

const VENDORS = [
  { name: "Acme Corp", initial: "A", files: 14, reusable: true, active: false },
  { name: "DataCo", initial: "D", files: 9, reusable: true, active: false },
  { name: "CloudSec", initial: "C", files: 22, reusable: false, active: true },
  { name: "NetOps", initial: "N", files: 7, reusable: true, active: false },
  { name: "FinServ", initial: "F", files: 18, reusable: false, active: false },
  { name: "LogiTech", initial: "L", files: 11, reusable: true, active: false },
];

export function CentralizeEvidenceIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-4 pb-4">
      <div className="w-full max-w-[340px] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs md:text-sm leading-tight tracking-tight" style={{ color: COLOR.dim }}>
            Vendor Evidence
          </span>
          <span className="text-xs leading-tight tracking-tight tabular-nums" style={{ color: COLOR.muted }}>
            {VENDORS.length} vendors
          </span>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {VENDORS.map((v) => (
            <div
              key={v.name}
              className="rounded-md p-3 flex flex-col gap-2"
              style={{ background: COLOR.rowBg }}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs leading-none shrink-0"
                  style={{ background: COLOR.accentDim, color: COLOR.accent }}
                >
                  {v.initial}
                </div>
                <span
                  className="text-xs leading-tight tracking-tight whitespace-nowrap truncate"
                  style={{ color: COLOR.fg }}
                >
                  {v.name}
                </span>
              </div>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] leading-tight tracking-tight tabular-nums" style={{ color: COLOR.dim }}>
                  {v.files} files
                </span>
                {v.reusable && (
                  <span
                    className="text-[10px] leading-tight tracking-tight px-1.5 py-0.5 rounded-sm shrink-0"
                    style={{ background: COLOR.accentDim, color: COLOR.accent }}
                  >
                    Reusable
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
