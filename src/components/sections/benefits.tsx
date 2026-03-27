import { RiCheckLine } from "@remixicon/react";
import { FadeUp } from "@/components/fade-up";

const BENEFITS = [
  "Cut review cycles from weeks to hours",
  "Consistent methodology across every assessment",
  "Full coverage across vendors, controls, and policies",
  "Audit-ready reports without manual assembly",
] as const;

export function Benefits() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center">
        <FadeUp className="p-10 md:p-40 shrink-0">
          <h2 className="text-lg md:text-[2rem] tracking-tight leading-snug max-w-full md:max-w-[320px]">
            Why Teams Switch<br />to TrustGuard
          </h2>
        </FadeUp>

        <div className="flex-1 flex flex-col gap-6">
          {BENEFITS.map((benefit, i) => (
            <FadeUp key={benefit} delay={i * 60}>
              <div className="bg-black shadow-2xl flex items-center gap-4 p-6 md:p-10">
                <RiCheckLine size={20} className="shrink-0 text-white" />
                <p className="text-base md:text-xl tracking-tight leading-tight text-white">
                  {benefit}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
