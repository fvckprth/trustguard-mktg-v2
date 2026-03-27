import { RiCheckLine } from "@remixicon/react";
import { FadeUp } from "@/components/fade-up";

const PILOT_ITEMS = [
  "Your portfolio and evidence organized in one place",
  "Assessments run against your chosen frameworks",
  "Gaps identified with evidence-backed findings",
  "Audit-ready reports delivered to stakeholders",
] as const;

export function PilotTimeline() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-16">
        <FadeUp>
          <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-center">
            30-day pilot
          </h2>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="bg-accent shadow-2xl w-full max-w-[640px] p-8 md:p-12 flex flex-col gap-6">
            {PILOT_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <RiCheckLine size={20} className="shrink-0 text-white" />
                <p className="text-base md:text-xl tracking-tight leading-snug text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
