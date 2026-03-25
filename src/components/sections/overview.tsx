import type { ComponentType } from "react";
import { IllustrationFadeFrame } from "@/components/illustration-fade-frame";
import { EvidenceIngestIllustration } from "@/components/illustrations/evidence-ingest";
import { AIAnalyticsIllustration } from "@/components/illustrations/ai-analytics";
import { AuditOutputsIllustration } from "@/components/illustrations/audit-outputs";

const FLOW_CARDS: {
  title: string;
  subtitle: string;
  Illustration: ComponentType;
}[] = [
  {
    title: "Evidence ingest",
    subtitle: "Policies, attestations, artifacts, etc.",
    Illustration: EvidenceIngestIllustration,
  },
  {
    title: "AI analytics",
    subtitle: "Cross-document reasoning",
    Illustration: AIAnalyticsIllustration,
  },
  {
    title: "Audit-ready outputs",
    subtitle: "Reports, findings, evidence trails",
    Illustration: AuditOutputsIllustration,
  },
];

export function Overview() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight">
          AI-driven assessment for complex risk environments.
        </h2>

        <div className="grid md:grid-cols-3 gap-2">
          {FLOW_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-surface rounded-md h-[280px] md:h-[400px] flex flex-col overflow-hidden"
            >
              <div className="flex flex-col gap-1 p-4">
                <p className="text-base md:text-xl tracking-tight leading-tight text-foreground">
                  {card.title}
                </p>
                <p className="text-sm md:text-xl tracking-tight leading-tight text-muted">
                  {card.subtitle}
                </p>
              </div>
              <div className="flex-1 min-h-0 p-4">
                <IllustrationFadeFrame>
                  <card.Illustration />
                </IllustrationFadeFrame>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
