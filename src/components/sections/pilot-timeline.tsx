import { RiCheckLine } from "@remixicon/react";

const PHASES = [
  {
    day: "Today",
    title: "Baseline the portfolio",
    items: [
      "Import vendors + tier risk",
      "Ingest existing evidence",
      "Start framework assessments",
    ],
  },
  {
    day: "Day 7",
    title: "Triage the backlog",
    items: [
      "Populate findings by vendor",
      "Map severity + controls",
      "Generate gap requests",
    ],
  },
  {
    day: "Day 30",
    title: "Deliver audit-ready outputs",
    items: [
      "Track remediation to closure",
      "Reassess and confirm fixes",
      "Reports for audit / execs",
    ],
  },
] as const;

export function PilotTimeline() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-16">
        <h2 className="text-2xl md:text-[2rem] tracking-tight leading-tight text-center">
          30 day pilot
        </h2>

        <div className="grid md:grid-cols-3 gap-2 w-full">
          {PHASES.map((phase) => (
            <div
              key={phase.day}
              className="bg-surface rounded-lg h-auto md:h-[400px] flex flex-col overflow-hidden"
            >
              <div className="flex flex-col gap-3 p-4">
                <p className="text-xl tracking-tight leading-tight text-foreground">
                  {phase.day}
                </p>
                <p className="text-xl tracking-tight leading-tight text-muted">
                  {phase.title}
                </p>
              </div>

              <div className="flex-1 p-10 flex flex-col gap-6 justify-center">
                {phase.items.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <RiCheckLine size={20} className="shrink-0 text-foreground" />
                    <p className="text-xl tracking-tight leading-snug text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
