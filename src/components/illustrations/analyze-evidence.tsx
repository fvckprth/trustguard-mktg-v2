import {
  RiCheckLine,
  RiAlertLine,
  RiErrorWarningLine,
} from "@remixicon/react";

const COLOR = {
  fg: "#1F3D60",
  dim: "rgba(31,61,96,0.5)",
  muted: "rgba(31,61,96,0.25)",
  rowBg: "rgba(31,61,96,0.05)",
  barTrack: "rgba(31,61,96,0.05)",
  barFill: "rgba(31,61,96,0.5)",
};

const FINDINGS = [
  { icon: RiCheckLine, label: "Policy verified", severity: "pass" },
  { icon: RiAlertLine, label: "Missing attestation", severity: "warn" },
  { icon: RiErrorWarningLine, label: "Inconsistency found", severity: "fail" },
] as const;

const COVERAGE = 72;

export function AnalyzeEvidenceIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[320px] flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <span
            className="text-sm md:text-base leading-tight tracking-tight"
            style={{ color: COLOR.fg }}
          >
            Evidence Review
          </span>
          <span
            className="text-xs md:text-sm leading-tight tracking-tight shrink-0"
            style={{ color: COLOR.dim }}
          >
            3 findings
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {FINDINGS.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.label}
                className="rounded-md p-4 flex items-center gap-3"
                style={{ background: COLOR.rowBg }}
              >
                <Icon
                  size={18}
                  className="shrink-0"
                  style={{
                    color:
                      f.severity === "pass"
                        ? COLOR.fg
                        : f.severity === "warn"
                          ? COLOR.dim
                          : COLOR.muted,
                  }}
                />
                <span
                  className="text-sm md:text-base leading-tight tracking-tight"
                  style={{ color: COLOR.fg }}
                >
                  {f.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 pt-0.5">
          <div className="flex items-center justify-between">
            <span
              className="text-xs md:text-sm leading-tight tracking-tight"
              style={{ color: COLOR.dim }}
            >
              Coverage
            </span>
            <span
              className="text-xs md:text-sm leading-tight tracking-tight tabular-nums"
              style={{ color: COLOR.fg }}
            >
              {COVERAGE}%
            </span>
          </div>
          <div
            className="w-full h-2 rounded-sm overflow-hidden"
            style={{ background: COLOR.barTrack }}
          >
            <div
              className="h-full rounded-sm"
              style={{ width: `${COVERAGE}%`, background: COLOR.barFill }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
