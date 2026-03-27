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
  Illustration: ComponentType;
}

const FEATURES: Feature[] = [
  {
    label: "Analysis",
    title: "Analyze evidence",
    description:
      "Surface missing proof and inconsistencies automatically.",
    Illustration: AnalyzeEvidenceIllustration,
  },
  {
    label: "Frameworks",
    title: "Map to any framework",
    description:
      "SOC 2, ISO 27001, FedRAMP, NIST, SIG, CAIQ.",
    Illustration: CentralizeEvidenceIllustration,
  },
  {
    label: "Remediation",
    title: "Track remediation to closure",
    description:
      "Follow every finding from gap to fix.",
    Illustration: VendorRiskRecordIllustration,
  },
  {
    label: "Reporting",
    title: "Produce compliance reports",
    description:
      "Summaries, breakdowns, and evidence references — audit-ready.",
    Illustration: AuditOutputsIllustration,
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-surface shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col h-full">
      <div className="w-full h-[240px] relative overflow-hidden">
        <IllustrationFadeFrame>
          <feature.Illustration />
        </IllustrationFadeFrame>
      </div>
      <div className="flex flex-col gap-4 p-8">
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
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 md:auto-rows-[1fr] gap-6">
        {FEATURES.map((feature, i) => (
          <FadeUp
            key={feature.title}
            delay={i * 80}
            className="h-full"
          >
            <FeatureCard feature={feature} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
