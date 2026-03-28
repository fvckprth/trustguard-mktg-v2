import { Fragment } from "react";
import { RiCheckLine, RiArrowRightLine } from "@remixicon/react";
import { FadeUp } from "@/components/fade-up";
import { getContent } from "@/lib/content";

const STEP_CARD_BG = ["bg-[#191919]", "bg-accent", "bg-accent"];

export async function PilotTimeline() {
  const c = await getContent();

  const steps = [0, 1, 2].map((i) => ({
    label: c(`home.pilotTimeline.${i}.label`),
    description: c(`home.pilotTimeline.${i}.description`),
    items: [0, 1, 2].map((j) => c(`home.pilotTimeline.${i}.items.${j}`)),
    cardBg: STEP_CARD_BG[i],
  }));

  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-16">
        <FadeUp>
          <h2 className="text-lg md:text-[64px] tracking-tight leading-tight text-center">
            {c("home.pilotTimeline.heading")}
          </h2>
        </FadeUp>

        <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-6">
          {steps.map((step, i) => (
            <Fragment key={i}>
              {i > 0 && (
                <>
                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <div className="w-10 h-10 bg-[#191919]/5 flex items-center justify-center">
                      <RiArrowRightLine size={20} className="text-[#191919]/50" />
                    </div>
                  </div>
                  <div className="flex md:hidden items-center justify-center">
                    <div className="w-10 h-10 bg-[#191919]/5 flex items-center justify-center">
                      <RiArrowRightLine size={20} className="text-[#191919]/50 rotate-90" />
                    </div>
                  </div>
                </>
              )}
              <FadeUp delay={80 + i * 80} className="flex-1">
                <div className="bg-background h-full flex flex-col gap-8">
                  <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                    <p className="font-mono text-base md:text-xl tracking-tight leading-tight text-accent">
                      {step.label}
                    </p>
                    <p className="text-sm md:text-lg tracking-tight leading-snug text-[#191919]">
                      {step.description}
                    </p>
                  </div>
                  <div className={`${step.cardBg} shadow-2xl p-6 md:p-8 flex flex-col gap-5 flex-1`}>
                    {step.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-4">
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
