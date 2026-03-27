import {
  RiFileTextLine,
  RiShieldCheckLine,
  RiAwardLine,
  RiFilePdf2Line,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";

const COLOR = {
  fg: "#1C1C1C",
  dim: "rgba(28,28,28,0.5)",
  muted: "rgba(28,28,28,0.25)",
  rowBg: "rgba(28,28,28,0.04)",
  accent: "#318FFA",
  accentDim: "rgba(49,143,250,0.12)",
};

const FILES: {
  Icon: RemixiconComponentType;
  name: string;
  status: string;
  state: "done" | "active" | "queued";
}[] = [
  { Icon: RiFileTextLine, name: "SOC 2 Type II", status: "Ingested", state: "done" },
  { Icon: RiShieldCheckLine, name: "Pen Test Report", status: "Ingested", state: "done" },
  { Icon: RiFilePdf2Line, name: "Privacy Policy", status: "Parsing…", state: "active" },
  { Icon: RiAwardLine, name: "ISO 27001 Cert", status: "Queued", state: "queued" },
];

const DONE_COUNT = FILES.filter((f) => f.state === "done").length;
const TOTAL = FILES.length;
const RING_R = 11;
const RING_C = 2 * Math.PI * RING_R;
const RING_OFFSET = RING_C * (1 - DONE_COUNT / TOTAL);

export function EvidenceIngestIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[280px] flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 28 28" className="shrink-0">
            <circle cx="14" cy="14" r={RING_R} fill="none" stroke={COLOR.muted} strokeWidth="3" />
            <circle
              cx="14"
              cy="14"
              r={RING_R}
              fill="none"
              stroke={COLOR.accent}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={RING_C}
              strokeDashoffset={RING_OFFSET}
              transform="rotate(-90 14 14)"
            />
          </svg>
          <span className="font-mono text-xs md:text-sm leading-tight tracking-tight" style={{ color: COLOR.dim }}>
            {DONE_COUNT}/{TOTAL} documents ingested
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {FILES.map((file) => (
            <div
              key={file.name}
              className="p-3.5 flex items-center gap-3"
              style={{ background: COLOR.rowBg }}
            >
              <file.Icon
                size={16}
                className="shrink-0"
                style={{ color: file.state === "done" ? COLOR.accent : COLOR.dim }}
              />
              <span
                className="text-sm md:text-base leading-tight tracking-tight flex-1 min-w-0"
                style={{ color: file.state === "queued" ? COLOR.dim : COLOR.fg }}
              >
                {file.name}
              </span>
              <span
                className="text-xs leading-tight tracking-tight whitespace-nowrap px-2 py-1 shrink-0"
                style={{
                  background: file.state === "done" ? COLOR.accent : COLOR.rowBg,
                  color: file.state === "done" ? "#fff" : COLOR.dim,
                }}
              >
                {file.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
