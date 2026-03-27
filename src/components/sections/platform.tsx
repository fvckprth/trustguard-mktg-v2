import { FadeUp } from "@/components/fade-up";

const CAPABILITIES = [
  {
    title: "Organize Evidence",
    description: "Version and reuse files across assessments with full audit trails.",
  },
  {
    title: "Assess Against Frameworks",
    description:
      "Map evidence to controls for any framework.",
  },
  {
    title: "Surface Gaps",
    description:
      "Flag gaps and inconsistencies across your evidence set.",
  },
  {
    title: "Generate Findings",
    description:
      "Tie every finding to a control, evidence source, and severity rating.",
  },
  {
    title: "Collaborate in Context",
    description:
      "Request missing evidence, assign owners, and track responses to closure.",
  },
  {
    title: "Produce Reports",
    description:
      "Control breakdowns, summaries, and evidence packages — export-ready.",
  },
] as const;

export function Platform() {
  return (
    <section id="product" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16 items-center">
        <FadeUp>
          <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-center">
            Evidence in. Findings out. Reports ready.
          </h2>
        </FadeUp>

        <div className="w-full grid md:grid-cols-2 md:auto-rows-[1fr] gap-6">
          {CAPABILITIES.map((cap, i) => (
            <FadeUp key={cap.title} delay={i * 60} className="h-full">
              <div className="bg-accent shadow-2xl h-full p-6 md:p-10">
                <p className="text-base md:text-xl tracking-tight leading-tight text-white">
                  {cap.title}
                </p>
                <p className="text-sm md:text-xl leading-snug text-white/50 max-w-full md:max-w-[75%]">
                  {cap.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
