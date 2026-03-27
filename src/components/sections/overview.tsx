import type { ComponentType } from "react";
import { FadeUp } from "@/components/fade-up";
import { IllustrationFadeFrame } from "@/components/illustration-fade-frame";
import { EvidenceIngestIllustration } from "@/components/illustrations/evidence-ingest";
import { AIAnalyticsIllustration } from "@/components/illustrations/ai-analytics";
import { FindingsSummaryIllustration } from "@/components/illustrations/findings-summary";

const FLOW_CARDS: {
  title: string;
  subtitle: string;
  Illustration: ComponentType;
}[] = [
  {
    title: "Evidence ingest",
    subtitle: "Policies, attestations, SOC reports, etc.",
    Illustration: EvidenceIngestIllustration,
  },
  {
    title: "AI analytics",
    subtitle: "Claims verified against every document",
    Illustration: AIAnalyticsIllustration,
  },
  {
    title: "Audit-ready outputs",
    subtitle: "Findings, reports, and evidence trails",
    Illustration: FindingsSummaryIllustration,
  },
];

export function Overview() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        <FadeUp>
          <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight">
            Ingest evidence. Analyze risk. Produce audit-ready outputs.
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {FLOW_CARDS.map((card, i) => (
            <FadeUp key={card.title} delay={i * 80}>
              <div className="bg-background shadow-2xl h-[280px] md:h-[400px] flex flex-col overflow-hidden">
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
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
