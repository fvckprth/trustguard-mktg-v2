import type { ReactNode } from "react";

interface IllustrationFadeFrameProps {
  children: ReactNode;
}

export function IllustrationFadeFrame({ children }: IllustrationFadeFrameProps) {
  return (
    <div className="relative h-full min-h-0 w-full overflow-hidden">
      <div className="flex h-full min-h-0 flex-col pt-10 md:pt-12">
        <div className="relative min-h-0 flex-1">
          <div
            className="relative z-0 box-border h-full min-h-0 w-full pt-4 md:pt-5"
            style={{
              maskImage:
                "linear-gradient(180deg, #000 0%, #000 68%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(180deg, #000 0%, #000 68%, transparent 100%)",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
