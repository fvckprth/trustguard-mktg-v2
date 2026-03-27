import type { ComponentType } from "react";
import { FadeUp } from "@/components/fade-up";
import { IllustrationFadeFrame } from "@/components/illustration-fade-frame";
import { AnalyzeEvidenceIllustration } from "@/components/illustrations/analyze-evidence";
import { CentralizeEvidenceIllustration } from "@/components/illustrations/centralize-evidence";
import { VendorRiskRecordIllustration } from "@/components/illustrations/vendor-risk-record";
import { AuditOutputsIllustration } from "@/components/illustrations/audit-outputs";

interface Feature {
  label: string;
  title: string;
  description: string;
  span: 8 | 4;
  Illustration: ComponentType;
}

const FEATURES: Feature[] = [
  {
    label: "Analysis",
    title: "Analyze evidence",
    description:
      "Surface missing proof and inconsistencies before reviews stall.",
    span: 8,
    Illustration: AnalyzeEvidenceIllustration,
  },
  {
    label: "Frameworks",
    title: "Map to any framework",
    description:
      "SOC 2, ISO 27001, FedRAMP, NIST, SIG, CAIQ — or define your own.",
    span: 4,
    Illustration: CentralizeEvidenceIllustration,
  },
  {
    label: "Remediation",
    title: "Track remediation to closure",
    description:
      "Follow every finding from gap to fix. Reassess with evidence.",
    span: 4,
    Illustration: VendorRiskRecordIllustration,
  },
  {
    label: "Reporting",
    title: "Produce compliance reports",
    description:
      "Control breakdowns, executive summaries, and full evidence references — ready to hand to auditors.",
    span: 8,
    Illustration: AuditOutputsIllustration,
  },
];

function WideCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-surface shadow-2xl flex flex-col md:flex-row gap-6 p-8 min-h-[320px] md:min-h-0 h-full">
      <div className="w-full md:w-1/2 h-[200px] md:h-auto relative overflow-hidden">
        <IllustrationFadeFrame>
          <feature.Illustration />
        </IllustrationFadeFrame>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
        <p className="font-mono uppercase text-accent tracking-wide text-sm">
          {feature.label}
        </p>
        <p className="text-foreground text-2xl md:text-[32px] leading-snug text-pretty">
          {feature.title}
        </p>
        <p className="text-muted text-base md:text-lg leading-normal">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function NarrowCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-surface shadow-2xl flex flex-col gap-6 p-8 min-h-[320px] md:min-h-0 h-full">
      <div className="w-full h-[200px] relative overflow-hidden grow">
        <IllustrationFadeFrame>
          <feature.Illustration />
        </IllustrationFadeFrame>
      </div>
      <div className="flex flex-col gap-6">
        <p className="font-mono uppercase text-accent tracking-wide text-sm">
          {feature.label}
        </p>
        <p className="text-foreground text-2xl md:text-[32px] leading-snug text-pretty">
          {feature.title}
        </p>
        <p className="text-muted text-base md:text-lg leading-normal">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 md:auto-rows-[1fr] gap-6">
        {FEATURES.map((feature, i) => (
          <FadeUp
            key={feature.title}
            delay={i * 80}
            className={`col-span-1 ${
              feature.span === 8 ? "md:col-span-8" : "md:col-span-4"
            }`}

          >
            {feature.span === 8 ? (
              <WideCard feature={feature} />
            ) : (
              <NarrowCard feature={feature} />
            )}
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
