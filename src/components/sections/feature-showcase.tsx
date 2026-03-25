import type { ComponentType } from "react";
import { IllustrationFadeFrame } from "@/components/illustration-fade-frame";
import { AnalyzeEvidenceIllustration } from "@/components/illustrations/analyze-evidence";
import { CentralizeEvidenceIllustration } from "@/components/illustrations/centralize-evidence";
import { VendorRiskRecordIllustration } from "@/components/illustrations/vendor-risk-record";

const FEATURES: {
  title: string;
  description: string;
  layout: "text-left" | "text-right";
  Illustration: ComponentType;
}[] = [
  {
    title: "Analyze evidence automatically",
    description:
      "Surface missing proof and inconsistencies before reviews stall.",
    layout: "text-left",
    Illustration: AnalyzeEvidenceIllustration,
  },
  {
    title: "Centralize vendor evidence",
    description:
      "Evidence stays vendor-scoped and reusable across assessments.",
    layout: "text-right",
    Illustration: CentralizeEvidenceIllustration,
  },
  {
    title: "A single record of vendor risk",
    description:
      "Track fixes with evidence and confirm progress through reassessment.",
    layout: "text-left",
    Illustration: VendorRiskRecordIllustration,
  },
];

export function FeatureShowcase() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-20">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className={`bg-surface rounded-md h-auto md:h-[480px] flex flex-col md:flex-row items-center overflow-hidden ${
              feature.layout === "text-right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-[480px] shrink-0 flex flex-col gap-1 justify-center p-6 md:p-10 md:h-full">
              <p className="text-base md:text-xl tracking-tight leading-tight text-foreground">
                {feature.title}
              </p>
              <p className="text-sm md:text-xl leading-snug text-muted max-w-full md:max-w-[75%]">
                {feature.description}
              </p>
            </div>
            <div className="flex-1 w-full min-h-[200px] md:min-h-0 md:h-full p-4">
              <IllustrationFadeFrame>
                <feature.Illustration />
              </IllustrationFadeFrame>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
