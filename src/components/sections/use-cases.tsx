"use client";

import { Dithering } from "@paper-design/shaders-react";
import { FadeUp } from "@/components/fade-up";

const CASES = [
  {
    title: "Third-party risk assessments",
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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Dithering
          speed={0.52}
          shape="simplex"
          type="8x8"
          size={11}
          scale={1}
          colorFront="#FFFFFF"
          colorBack="#00000000"
          style={{ width: "100%", height: "100%", backgroundColor: "#F3F3F3" }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-[240px] py-20 md:py-40">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16 items-center">
          <FadeUp>
            <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-center">
              Built for Every Assessment
            </h2>
          </FadeUp>

          <div className="w-full grid md:grid-cols-3 gap-6">
            {CASES.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80}>
                <div className="bg-[#191919] shadow-2xl min-h-[178px] h-auto p-6 md:p-10">
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
      </div>
    </section>
  );
}
