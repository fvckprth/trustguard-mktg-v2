import { FadeUp } from "@/components/fade-up";
import {
  RiFolderLine,
  RiShieldCheckLine,
  RiSearchEyeLine,
  RiFileWarningLine,
  RiTeamLine,
  RiFileChartLine,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";

const CAPABILITIES: {
  title: string;
  description: string;
  Icon: RemixiconComponentType;
}[] = [
  {
    title: "Organize Evidence",
    description: "Version and reuse files across assessments with full audit trails.",
    Icon: RiFolderLine,
  },
  {
    title: "Assess Against Frameworks",
    description:
      "Map evidence to controls for any framework.",
    Icon: RiShieldCheckLine,
  },
  {
    title: "Surface Gaps",
    description:
      "Flag gaps and inconsistencies across your evidence set.",
    Icon: RiSearchEyeLine,
  },
  {
    title: "Generate Findings",
    description:
      "Tie every finding to a control, evidence source, and severity rating.",
    Icon: RiFileWarningLine,
  },
  {
    title: "Collaborate in Context",
    description:
      "Request evidence, assign owners, and track to closure.",
    Icon: RiTeamLine,
  },
  {
    title: "Produce Reports",
    description:
      "Control breakdowns, summaries, and evidence packages — export-ready.",
    Icon: RiFileChartLine,
  },
];

export function Platform() {
  return (
    <section id="product" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-16 items-center">
        <FadeUp>
          <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-center">
            Evidence in. Findings out. Reports ready.
          </h2>
        </FadeUp>

        <div className="w-full grid md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <FadeUp key={cap.title} delay={i * 60}>
              <div className="bg-background shadow-2xl p-6 md:p-10 flex items-start gap-6">
                <div className="w-10 h-10 shrink-0 bg-accent flex items-center justify-center">
                  <cap.Icon size={20} className="text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-mono text-base md:text-xl tracking-tight leading-tight text-accent">
                    {cap.title}
                  </p>
                  <p className="text-sm md:text-xl leading-normal text-[#191919] max-w-full md:max-w-[75%]">
                    {cap.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
