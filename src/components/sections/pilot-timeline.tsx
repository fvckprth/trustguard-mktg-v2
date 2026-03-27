import { RiCheckLine, RiArrowRightLine } from "@remixicon/react";
import { FadeUp } from "@/components/fade-up";

const BASELINE = {
  label: "Today",
  description: "Baseline the portfolio",
  items: [
    "Import vendors + tier risk",
    "Ingest existing evidence",
    "Start framework assessments",
  ],
};

const DAY_30 = {
  label: "Day 7",
  description: "Deliver audit-ready outputs",
  items: [
    "Track remediation to closure",
    "Reassess and confirm fixes",
    "Reports for audit / execs",
  ],
};

export function PilotTimeline() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-16">
        <FadeUp>
          <h2 className="text-lg md:text-[64px] tracking-tight leading-tight text-center">
            30-day pilot
          </h2>
        </FadeUp>

        <div className="w-full flex flex-col md:flex-row items-stretch gap-6">
          {/* Baseline card */}
          <FadeUp delay={80} className="flex-1">
            <div className="bg-background shadow-2xl h-full p-8 md:p-10 flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <p className="font-mono text-base md:text-xl tracking-tight leading-tight text-accent">
                  {BASELINE.label}
                </p>
                <p className="text-sm md:text-lg tracking-tight leading-snug text-black">
                  {BASELINE.description}
                </p>
              </div>
              <div className="bg-black p-6 md:p-8 flex flex-col gap-5 flex-1">
                {BASELINE.items.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <RiCheckLine size={18} className="shrink-0 text-white" />
                    <p className="font-mono text-sm md:text-base tracking-tight leading-snug text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center shrink-0">
            <div className="w-10 h-10 bg-accent flex items-center justify-center">
              <RiArrowRightLine size={20} className="text-white" />
            </div>
          </div>
          <div className="flex md:hidden items-center justify-center">
            <div className="w-10 h-10 bg-accent flex items-center justify-center">
              <RiArrowRightLine size={20} className="text-white rotate-90" />
            </div>
          </div>

          {/* Day 30 card */}
          <FadeUp delay={160} className="flex-1">
            <div className="bg-background shadow-2xl h-full p-8 md:p-10 flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <p className="font-mono text-base md:text-xl tracking-tight leading-tight text-accent">
                  {DAY_30.label}
                </p>
                <p className="text-sm md:text-lg tracking-tight leading-snug text-black">
                  {DAY_30.description}
                </p>
              </div>
              <div className="bg-accent p-6 md:p-8 flex flex-col gap-5 flex-1">
                {DAY_30.items.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <RiCheckLine size={18} className="shrink-0 text-white" />
                    <p className="font-mono text-sm md:text-base tracking-tight leading-snug text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
