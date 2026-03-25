import { RiFolderLine } from "@remixicon/react";

const COLOR = {
  fg: "#1F3D60",
  dim: "rgba(31,61,96,0.5)",
  rowBg: "rgba(31,61,96,0.05)",
  tagBg: "rgba(31,61,96,0.05)",
};

const VENDORS = [
  { name: "Acme Corp", files: 14, reusable: true },
  { name: "DataCo", files: 9, reusable: true },
  { name: "CloudSec Ltd", files: 22, reusable: false },
  { name: "NetOps Inc", files: 7, reusable: true },
];

export function CentralizeEvidenceIllustration() {
  return (
    <div className="size-full min-h-0 select-none flex items-start justify-center px-5 pb-5">
      <div className="w-full max-w-[320px] flex flex-col gap-3">
        <span
          className="text-sm md:text-base leading-tight tracking-tight"
          style={{ color: COLOR.dim }}
        >
          Vendor Evidence
        </span>

        <div className="grid grid-cols-2 gap-2">
          {VENDORS.map((v) => (
            <div
              key={v.name}
              className="rounded-md p-4 flex flex-col justify-between min-h-[5.75rem]"
              style={{ background: COLOR.rowBg }}
            >
              <div className="flex items-center gap-2 min-w-0">
                <RiFolderLine size={18} className="shrink-0" style={{ color: COLOR.dim }} />
                <span
                  className="text-sm leading-tight tracking-tight whitespace-nowrap truncate"
                  style={{ color: COLOR.fg }}
                >
                  {v.name}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span
                  className="text-xs leading-tight tracking-tight tabular-nums"
                  style={{ color: COLOR.dim }}
                >
                  {v.files} files
                </span>
                {v.reusable && (
                  <span
                    className="text-xs leading-tight tracking-tight px-2 py-1 rounded-md shrink-0"
                    style={{ background: COLOR.tagBg, color: COLOR.fg }}
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
