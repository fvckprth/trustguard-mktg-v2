const CAPABILITIES = [
  {
    title: "Centralize your vendor evidence",
    description: "Store and reuse files across assessments, with versioning included.",
  },
  {
    title: "Run reviews against frameworks",
    description:
      "Use NIST, ISO, FedRAMP, SIG, CAIQ, or create your own framework.",
  },
  {
    title: "Evaluate evidence across documents",
    description:
      "Analyze claims against the full evidence set to surface gaps and inconsistencies.",
  },
  {
    title: "Generate structured findings",
    description:
      "Tie every finding to controls, evidence, severity, and more.",
  },
  {
    title: "Communicate with vendors in context",
    description:
      "Request evidence, track responses, and close remediation.",
  },
  {
    title: "Produce audit-ready reports",
    description:
      "Generate executive summaries, control breakdowns, and evidence refs.",
  },
] as const;

export function Platform() {
  return (
    <section id="product" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16 items-center">
        <h2 className="text-2xl md:text-[2rem] tracking-tight leading-tight text-center">
          Evidence in. Findings out. Reports ready.
        </h2>

        <div className="w-full flex flex-col gap-1">
          {[0, 1, 2].map((row) => (
            <div key={row} className="grid md:grid-cols-2 gap-1">
              {CAPABILITIES.slice(row * 2, row * 2 + 2).map((cap) => (
                <div key={cap.title} className="bg-surface rounded min-h-[151px] h-auto p-6 md:p-10">
                  <p className="text-xl tracking-tight leading-tight text-foreground">
                    {cap.title}
                  </p>
                  <p className="text-xl leading-snug text-muted max-w-full md:max-w-[75%]">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
