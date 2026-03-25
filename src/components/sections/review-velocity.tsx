import Link from "next/link";

const STATS = [
  { value: "90%", label: "Reduction in review time" },
  { value: "10X", label: "More risks surfaced vs manual reviews" },
  { value: "100X", label: "Increase in coverage and visibility" },
] as const;

export function ReviewVelocity() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-2 text-lg md:text-[2rem] tracking-tight">
          <p className="text-foreground leading-snug md:leading-none">
            Review more vendors with the same team
          </p>
          <p className="text-muted max-w-full md:max-w-[36rem] leading-tight">
            Standardize your engineering team on the same tools and best
            practices.
          </p>
        </div>

        <div>
          <Link
            href="/request-demo"
            className="inline-flex items-center justify-center bg-foreground text-background h-10 px-5 rounded-full text-sm md:text-base tracking-tight leading-tight hover:opacity-80 transition-opacity"
          >
            Request demo
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface rounded-md min-h-0 md:min-h-[164px] p-6 md:p-8 flex flex-col justify-between gap-4"
            >
              <p className="text-3xl md:text-[4rem] tracking-tighter leading-tight text-foreground">
                {stat.value}
              </p>
              <p className="text-sm md:text-xl leading-snug text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
