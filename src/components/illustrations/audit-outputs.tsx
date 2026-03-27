import {
  RiFileChartLine,
  RiPresentationLine,
  RiMailSendLine,
  RiDownloadLine,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";

const COLOR = {
  fg: "#1C1C1C",
  dim: "rgba(28,28,28,0.5)",
  muted: "rgba(28,28,28,0.2)",
  rowBg: "rgba(28,28,28,0.04)",
  accent: "#318FFA",
  accentDim: "rgba(49,143,250,0.12)",
};

const REPORTS: {
  Icon: RemixiconComponentType;
  name: string;
  format: string;
  barWidth: string;
  primary: boolean;
}[] = [
  { Icon: RiFileChartLine, name: "Executive Summary", format: "PDF", barWidth: "100%", primary: true },
  { Icon: RiPresentationLine, name: "Control Breakdown", format: "XLSX", barWidth: "72%", primary: false },
  { Icon: RiMailSendLine, name: "Evidence Package", format: "ZIP", barWidth: "55%", primary: false },
];

export function AuditOutputsIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[280px] flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-xs md:text-sm leading-tight tracking-tight" style={{ color: COLOR.dim }}>
            3 reports generated
          </span>
          <div className="flex gap-1.5 h-4">
            {REPORTS.map((r) => (
              <div
                key={r.name}
                className="h-full rounded-sm flex-1"
                style={{ width: r.barWidth, background: r.primary ? COLOR.accent : COLOR.muted }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {REPORTS.map((report) => (
            <div
              key={report.name}
              className="rounded-md p-3.5 flex items-center gap-3"
              style={{ background: COLOR.rowBg }}
            >
              <report.Icon
                size={16}
                className="shrink-0"
                style={{ color: report.primary ? COLOR.accent : COLOR.dim }}
              />
              <span
                className="text-sm md:text-base leading-tight tracking-tight flex-1 min-w-0"
                style={{ color: COLOR.fg }}
              >
                {report.name}
              </span>
              <span
                className="text-xs leading-tight tracking-tight whitespace-nowrap px-2 py-1 rounded-sm shrink-0"
                style={{
                  background: report.primary ? COLOR.accentDim : COLOR.rowBg,
                  color: report.primary ? COLOR.accent : COLOR.dim,
                }}
              >
                {report.format}
              </span>
              <RiDownloadLine size={14} className="shrink-0" style={{ color: COLOR.muted }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
