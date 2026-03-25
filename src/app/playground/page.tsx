import type { Metadata } from "next";
import { IllustrationFadeFrame } from "@/components/illustration-fade-frame";
import { EvidenceIngestIllustration } from "@/components/illustrations/evidence-ingest";
import { AIAnalyticsIllustration } from "@/components/illustrations/ai-analytics";
import { AuditOutputsIllustration } from "@/components/illustrations/audit-outputs";
import { AnalyzeEvidenceIllustration } from "@/components/illustrations/analyze-evidence";
import { CentralizeEvidenceIllustration } from "@/components/illustrations/centralize-evidence";
import { VendorRiskRecordIllustration } from "@/components/illustrations/vendor-risk-record";

export const metadata: Metadata = {
  title: "Playground",
  description: "Illustration drafts for review.",
  robots: { index: false, follow: false },
};

const OVERVIEW_ILLUSTRATIONS = [
  {
    title: "Evidence Ingest",
    description: "File upload list with document types and ingestion status badges.",
    Component: EvidenceIngestIllustration,
  },
  {
    title: "AI Analytics",
    description: "Cross-reference panel with query bar and matched findings.",
    Component: AIAnalyticsIllustration,
  },
  {
    title: "Audit Outputs",
    description: "Report export list with document icons and format badges.",
    Component: AuditOutputsIllustration,
  },
] as const;

const SHOWCASE_ILLUSTRATIONS = [
  {
    title: "Analyze Evidence",
    description: "Gap detection card with status indicators and coverage bar.",
    Component: AnalyzeEvidenceIllustration,
  },
  {
    title: "Centralize Evidence",
    description: "Vendor-scoped folder grid with file counts and reusable tags.",
    Component: CentralizeEvidenceIllustration,
  },
  {
    title: "Vendor Risk Record",
    description: "Remediation tracker with horizontal progress bars per finding.",
    Component: VendorRiskRecordIllustration,
  },
] as const;

export default function PlaygroundPage() {
  return (
    <div className="pt-32 md:pt-52 px-6 md:px-10 pb-20 md:pb-40">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-[2rem] tracking-tight leading-tight">
            Illustration Playground
          </h1>
          <p className="text-xl leading-snug text-muted">
            Draft illustrations for the Overview and Feature Showcase sections.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-xl tracking-tight leading-tight">
            Overview Cards (3-up, h-400)
          </h2>
          <div className="grid md:grid-cols-3 gap-2">
            {OVERVIEW_ILLUSTRATIONS.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="bg-surface rounded-lg h-[400px] overflow-hidden p-4">
                  <div className="h-full min-h-0">
                    <IllustrationFadeFrame>
                      <item.Component />
                    </IllustrationFadeFrame>
                  </div>
                </div>
                <div className="flex flex-col gap-1 px-1">
                  <p className="text-base tracking-tight leading-tight">
                    {item.title}
                  </p>
                  <p className="text-sm leading-snug text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-xl tracking-tight leading-tight">
            Feature Showcase Cards (side panel, h-480)
          </h2>
          <div className="flex flex-col gap-6">
            {SHOWCASE_ILLUSTRATIONS.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="bg-surface rounded h-[480px] overflow-hidden p-4">
                  <div className="h-full min-h-0">
                    <IllustrationFadeFrame>
                      <item.Component />
                    </IllustrationFadeFrame>
                  </div>
                </div>
                <div className="flex flex-col gap-1 px-1">
                  <p className="text-base tracking-tight leading-tight">
                    {item.title}
                  </p>
                  <p className="text-sm leading-snug text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
