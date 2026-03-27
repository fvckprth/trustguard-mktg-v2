import { Fragment } from "react";
import { RiCheckLine, RiArrowRightLine } from "@remixicon/react";
import { FadeUp } from "@/components/fade-up";

const STEPS = [
  {
    label: "Upload",
    description: "Import your evidence",
    items: [
      "Connect evidence sources",
      "Import vendors and policies",
      "Organize your portfolio",
    ],
    cardBg: "bg-black",
  },
  {
    label: "Assess",
    description: "Frameworks evaluated in minutes",
    items: [
      "Map evidence to controls",
      "Surface gaps automatically",
      "Generate cited findings",
    ],
    cardBg: "bg-accent",
  },
  {
    label: "Deliver",
    description: "Audit-ready outputs",
    items: [
      "Export stakeholder reports",
      "Track remediation to closure",
      "Reassess and confirm fixes",
    ],
    cardBg: "bg-accent",
  },
];

export function PilotTimeline() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-16">
        <FadeUp>
          <h2 className="text-lg md:text-[64px] tracking-tight leading-tight text-center">
            See results in minutes
          </h2>
        </FadeUp>

        <div className="w-full flex flex-col md:flex-row items-stretch gap-6">
          {STEPS.map((step, i) => (
            <Fragment key={step.label}>
              {i > 0 && (
                <>
                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <div className="w-10 h-10 bg-black/5 flex items-center justify-center">
                      <RiArrowRightLine size={20} className="text-black/50" />
                    </div>
                  </div>
                  <div className="flex md:hidden items-center justify-center">
                    <div className="w-10 h-10 bg-black/5 flex items-center justify-center">
                      <RiArrowRightLine size={20} className="text-black/50 rotate-90" />
                    </div>
                  </div>
                </>
              )}
              <FadeUp delay={80 + i * 80} className="flex-1">
                <div className="bg-background h-full flex flex-col gap-8">
                  <div className="flex flex-col gap-1">
                    <p className="font-mono text-base md:text-xl tracking-tight leading-tight text-accent">
                      {step.label}
                    </p>
                    <p className="text-sm md:text-lg tracking-tight leading-snug text-black">
                      {step.description}
                    </p>
                  </div>
                  <div className={`${step.cardBg} shadow-2xl p-6 md:p-8 flex flex-col gap-5 flex-1`}>
                    {step.items.map((item) => (
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
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
