import { FadeUp } from "@/components/fade-up";

const CASES = [
  {
    title: "Third-party risk management",
    description:
      "Assess vendors against your frameworks. Get findings with evidence citations and track remediation to closure.",
  },
  {
    title: "Organizational compliance",
    description:
      "Evaluate your compliance posture against any framework. Identify control and evidence gaps before your auditor does.",
  },
  {
    title: "Internal audit programs",
    description:
      "Run control and policy reviews with consistent scoring. Reporting ready for audit committees and executives.",
  },
] as const;

export function UseCases() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-40">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16 items-center">
          <FadeUp>
            <div className="bg-accent p-8 md:p-[40px] shadow-[10px_12px_34px_0px_rgba(0,0,0,0.08),42px_46px_62px_0px_rgba(0,0,0,0.07),94px_104px_84px_0px_rgba(0,0,0,0.04)]">
              <h2 className="font-mono text-white text-base md:text-[24px] leading-[1.5] tracking-[-0.04em]">
                Built for Every Assessment
              </h2>
            </div>
          </FadeUp>

          <div className="w-full grid md:grid-cols-3 md:auto-rows-[1fr] gap-6">
            {CASES.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80} className="h-full">
                <div className="bg-[#191919] shadow-2xl h-full p-6 md:p-10">
                  <p className="text-base md:text-xl tracking-tight leading-tight text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm md:text-xl leading-snug text-white/50">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
    </section>
  );
}
