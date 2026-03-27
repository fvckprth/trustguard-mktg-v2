import { FadeUp } from "@/components/fade-up";

const CAPABILITIES = [
  {
    title: "Organize Evidence",
    description: "Upload, version, and reuse files across assessments. Full audit trail on every artifact.",
  },
  {
    title: "Assess Against Frameworks",
    description:
      "Map evidence to controls across SOC 2, ISO, FedRAMP, NIST, or custom frameworks.",
  },
  {
    title: "Surface Gaps",
    description:
      "Cross-reference claims against the full evidence set. Flag inconsistencies automatically.",
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
      "Export control breakdowns, summaries, and evidence packages for auditors and executives.",
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

        <div className="w-full flex flex-col gap-6">
          {[0, 1, 2].map((row) => (
            <div key={row} className="grid md:grid-cols-2 gap-6">
              {CAPABILITIES.slice(row * 2, row * 2 + 2).map((cap, i) => (
                <FadeUp key={cap.title} delay={(row * 2 + i) * 60} className="h-full">
                  <div className="bg-accent shadow-2xl min-h-[151px] h-full p-6 md:p-10">
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
          ))}
        </div>
      </div>
    </section>
  );
}
