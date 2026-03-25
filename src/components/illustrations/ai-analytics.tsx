import {
  RiSearchLine,
  RiCheckDoubleLine,
  RiAlertLine,
} from "@remixicon/react";

const COLOR = {
  fg: "#1F3D60",
  dim: "rgba(31,61,96,0.5)",
  muted: "rgba(31,61,96,0.25)",
  rowBg: "rgba(31,61,96,0.05)",
  badgeBg: "rgba(31,61,96,0.05)",
};

const RESULTS: {
  label: string;
  score: string;
  isGap: boolean;
}[] = [
  { label: "Encryption claim verified", score: "98%", isGap: false },
  { label: "Access control mismatch", score: "Gap", isGap: true },
  { label: "Incident response confirmed", score: "94%", isGap: false },
];

export function AIAnalyticsIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[280px] flex flex-col gap-2.5">
        <div
          className="rounded-md p-4 flex items-center gap-3"
          style={{ background: COLOR.rowBg }}
        >
          <RiSearchLine size={18} className="shrink-0" style={{ color: COLOR.dim }} />
          <span
            className="text-sm md:text-base leading-tight tracking-tight whitespace-nowrap truncate"
            style={{ color: COLOR.muted }}
          >
            Analyzing SOC 2 Type II…
          </span>
        </div>

        {RESULTS.map((r) => (
          <div
            key={r.label}
            className="rounded-md p-4 flex items-center gap-3"
            style={{ background: COLOR.rowBg }}
          >
            {r.isGap ? (
              <RiAlertLine size={18} className="shrink-0" style={{ color: COLOR.dim }} />
            ) : (
              <RiCheckDoubleLine size={18} className="shrink-0" style={{ color: COLOR.dim }} />
            )}
            <span
              className="text-sm md:text-base leading-tight tracking-tight flex-1 min-w-0"
              style={{ color: COLOR.fg }}
            >
              {r.label}
            </span>
            <span
              className="text-xs md:text-sm leading-tight tracking-tight whitespace-nowrap px-2.5 py-1.5 rounded-md shrink-0"
              style={{
                background: COLOR.badgeBg,
                color: r.isGap ? COLOR.dim : COLOR.fg,
              }}
            >
              {r.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
