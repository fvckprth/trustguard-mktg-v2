import {
  RiFileTextLine,
  RiShieldCheckLine,
  RiAwardLine,
  RiFilePdf2Line,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";

const COLOR = {
  fg: "#1F3D60",
  dim: "rgba(31,61,96,0.5)",
  muted: "rgba(31,61,96,0.25)",
  rowBg: "rgba(31,61,96,0.05)",
  badgeBg: "rgba(31,61,96,0.05)",
};

const FILES: {
  Icon: RemixiconComponentType;
  name: string;
  status: string;
  done: boolean;
}[] = [
  { Icon: RiFileTextLine, name: "SOC 2 Type II", status: "Ingested", done: true },
  { Icon: RiShieldCheckLine, name: "Pen Test Report", status: "Ingested", done: true },
  { Icon: RiFilePdf2Line, name: "Privacy Policy", status: "Parsing…", done: false },
  { Icon: RiAwardLine, name: "ISO 27001 Cert", status: "Queued", done: false },
];

export function EvidenceIngestIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[280px] flex flex-col gap-2.5">
        {FILES.map((file) => (
          <div
            key={file.name}
            className="rounded-md p-4 flex items-center gap-3"
            style={{ background: COLOR.rowBg }}
          >
            <file.Icon size={18} className="shrink-0" style={{ color: COLOR.dim }} />
            <span
              className="text-sm md:text-base leading-tight tracking-tight flex-1 min-w-0"
              style={{ color: COLOR.fg }}
            >
              {file.name}
            </span>
            <span
              className="text-xs md:text-sm leading-tight tracking-tight whitespace-nowrap px-2.5 py-1.5 rounded-sm shrink-0"
              style={{
                background: COLOR.badgeBg,
                color: file.done ? COLOR.fg : COLOR.dim,
              }}
            >
              {file.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
