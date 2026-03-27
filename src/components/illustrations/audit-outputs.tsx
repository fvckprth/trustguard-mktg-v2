import { RiCheckLine, RiCloseLine, RiErrorWarningLine } from "@remixicon/react";

const COLOR = {
  fg: "#1C1C1C",
  dim: "rgba(28,28,28,0.5)",
  muted: "rgba(28,28,28,0.2)",
  rowBg: "rgba(28,28,28,0.04)",
  accent: "#1E3A8A",
  accentDim: "rgba(30,58,138,0.12)",
  pass: "#1E3A8A",
  warn: "rgba(28,28,28,0.4)",
  fail: "#B91C1C",
};

const FINDINGS: {
  id: string;
  control: string;
  status: "pass" | "partial" | "fail";
}[] = [
  { id: "AC-2", control: "Account Management", status: "pass" },
  { id: "AU-6", control: "Audit Review", status: "partial" },
  { id: "CM-6", control: "Configuration Settings", status: "pass" },
  { id: "IR-4", control: "Incident Handling", status: "fail" },
  { id: "SC-7", control: "Boundary Protection", status: "pass" },
];

const STATUS_CONFIG = {
  pass: { label: "Pass", color: COLOR.pass, Icon: RiCheckLine },
  partial: { label: "Partial", color: COLOR.warn, Icon: RiErrorWarningLine },
  fail: { label: "Fail", color: COLOR.fail, Icon: RiCloseLine },
};

const PASS_COUNT = FINDINGS.filter((f) => f.status === "pass").length;
const TOTAL = FINDINGS.length;

export function AuditOutputsIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[320px] flex flex-col gap-4">
        {/* Report header */}
        <div className="flex items-center justify-between gap-3">
          <span
            className="font-mono text-sm md:text-base leading-tight tracking-tight"
            style={{ color: COLOR.fg }}
          >
            Assessment Report
          </span>
          <span
            className="font-mono text-[10px] leading-tight tracking-tight px-2 py-1 shrink-0"
            style={{ background: COLOR.accentDim, color: COLOR.accent }}
          >
            SOC 2
          </span>
        </div>

        {/* Summary metrics */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-0.5">
            <span
              className="font-mono text-lg leading-none tracking-tighter tabular-nums"
              style={{ color: COLOR.accent }}
            >
              {PASS_COUNT}/{TOTAL}
            </span>
            <span className="text-[10px] leading-tight tracking-tight" style={{ color: COLOR.dim }}>
              controls pass
            </span>
          </div>
          <div className="w-px" style={{ background: COLOR.muted }} />
          <div className="flex flex-col gap-0.5">
            <span
              className="font-mono text-lg leading-none tracking-tighter tabular-nums"
              style={{ color: COLOR.fg }}
            >
              12
            </span>
            <span className="text-[10px] leading-tight tracking-tight" style={{ color: COLOR.dim }}>
              findings
            </span>
          </div>
          <div className="w-px" style={{ background: COLOR.muted }} />
          <div className="flex flex-col gap-0.5">
            <span
              className="font-mono text-lg leading-none tracking-tighter tabular-nums"
              style={{ color: COLOR.fg }}
            >
              47
            </span>
            <span className="text-[10px] leading-tight tracking-tight" style={{ color: COLOR.dim }}>
              evidence refs
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px" style={{ background: COLOR.muted }} />

        {/* Findings list */}
        <div className="flex flex-col gap-1.5">
          {FINDINGS.map((finding) => {
            const cfg = STATUS_CONFIG[finding.status];
            return (
              <div
                key={finding.id}
                className="p-2.5 flex items-center gap-3"
                style={{ background: COLOR.rowBg }}
              >
                <span
                  className="font-mono text-[10px] leading-tight tracking-tight shrink-0 w-8"
                  style={{ color: COLOR.dim }}
                >
                  {finding.id}
                </span>
                <span
                  className="text-xs leading-tight tracking-tight flex-1 min-w-0"
                  style={{ color: COLOR.fg }}
                >
                  {finding.control}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <cfg.Icon size={12} style={{ color: cfg.color }} />
                  <span
                    className="font-mono text-[10px] leading-tight tracking-tight"
                    style={{ color: cfg.color }}
                  >
                    {cfg.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
