import type { ComponentType } from "react";
import { FadeUp } from "@/components/fade-up";
import { IllustrationFadeFrame } from "@/components/illustration-fade-frame";
import { AnalyzeEvidenceIllustration } from "@/components/illustrations/analyze-evidence";
import { CentralizeEvidenceIllustration } from "@/components/illustrations/centralize-evidence";
import { VendorRiskRecordIllustration } from "@/components/illustrations/vendor-risk-record";
import { AuditOutputsIllustration } from "@/components/illustrations/audit-outputs";
import { getContent } from "@/lib/content";

const ILLUSTRATIONS: ComponentType[] = [
  AnalyzeEvidenceIllustration,
  CentralizeEvidenceIllustration,
  VendorRiskRecordIllustration,
  AuditOutputsIllustration,
];

function FeatureCard({
  label,
  title,
  description,
  Illustration,
}: {
  label: string;
  title: string;
  description: string;
  Illustration: ComponentType;
}) {
  return (
    <div className="bg-surface shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col h-full">
      <div className="w-full h-[240px] relative overflow-hidden">
        <IllustrationFadeFrame>
          <Illustration />
        </IllustrationFadeFrame>
      </div>
      <div className="flex flex-col gap-4 p-8">
        <p className="font-mono uppercase text-accent tracking-wide text-sm">
          {label}
        </p>
        <p className="text-foreground text-2xl md:text-[32px] leading-snug text-pretty">
          {title}
        </p>
        <p className="text-muted text-base md:text-lg leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

export async function FeatureShowcase() {
  const c = await getContent();

  const features = [0, 1, 2, 3].map((i) => ({
    label: c(`home.features.${i}.label`),
    title: c(`home.features.${i}.title`),
    description: c(`home.features.${i}.description`),
    Illustration: ILLUSTRATIONS[i],
  }));

  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 md:auto-rows-[1fr] gap-6">
        {features.map((feature, i) => (
          <FadeUp
            key={i}
            delay={i * 80}
            className="h-full"
          >
            <FeatureCard {...feature} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
