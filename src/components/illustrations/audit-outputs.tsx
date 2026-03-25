import {
  RiFileChartLine,
  RiPresentationLine,
  RiMailSendLine,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";

const COLOR = {
  fg: "#1F3D60",
  dim: "rgba(31,61,96,0.5)",
  rowBg: "rgba(31,61,96,0.05)",
  badgeBg: "rgba(31,61,96,0.05)",
};

const REPORTS: {
  Icon: RemixiconComponentType;
  name: string;
  format: string;
}[] = [
  { Icon: RiFileChartLine, name: "Executive Summary", format: "PDF" },
  { Icon: RiPresentationLine, name: "Control Breakdown", format: "XLSX" },
  { Icon: RiMailSendLine, name: "Evidence Package", format: "ZIP" },
];

export function AuditOutputsIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[280px] flex flex-col gap-2.5">
        {REPORTS.map((report) => (
          <div
            key={report.name}
            className="rounded-md p-4 flex items-center gap-3"
            style={{ background: COLOR.rowBg }}
          >
            <report.Icon size={18} className="shrink-0" style={{ color: COLOR.dim }} />
            <span
              className="text-sm md:text-base leading-tight tracking-tight flex-1 min-w-0"
              style={{ color: COLOR.fg }}
            >
              {report.name}
            </span>
            <span
              className="text-xs md:text-sm leading-tight tracking-tight whitespace-nowrap px-2.5 py-1.5 rounded-md shrink-0"
              style={{ background: COLOR.badgeBg, color: COLOR.dim }}
            >
              {report.format}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
