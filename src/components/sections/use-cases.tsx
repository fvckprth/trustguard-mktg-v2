const CASES = [
  {
    title: "Third-party audits",
    description:
      "Assess vendors against your frameworks, centralize evidence, and produce defensible findings for procurement, security, and compliance reviews.",
  },
  {
    title: "Internal audits",
    description:
      "Run internal control and policy reviews with the same rigor: structured evidence, consistent scoring, and audit-ready reporting for your own programs.",
  },
] as const;

export function UseCases() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        <h2 className="text-2xl md:text-[2rem] tracking-tight leading-tight">
          Built for third-party and internal audit programs
        </h2>

        <div className="grid md:grid-cols-2 gap-1">
          {CASES.map((item) => (
            <div key={item.title} className="bg-surface rounded min-h-[178px] h-auto p-6 md:p-10">
              <p className="text-xl tracking-tight leading-tight text-foreground">
                {item.title}
              </p>
              <p className="text-xl leading-snug text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
