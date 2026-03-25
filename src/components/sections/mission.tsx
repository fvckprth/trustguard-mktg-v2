import Link from "next/link";

export function Mission() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-surface flex flex-col md:flex-row items-start justify-between p-8 md:p-40 gap-10 md:gap-16">
          <p className="text-xl leading-snug text-muted tracking-tight shrink-0">
            Mission
          </p>

          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-10 text-2xl md:text-[2rem] tracking-tight leading-snug max-w-full md:max-w-[540px]">
              <p>
                Our approach is shaped by real reviews, real audits, and real
                constraints.
              </p>
              <p>
                Built by practitioners focused on real operational problems.
              </p>
            </div>
            <div>
              <Link
                href="/company"
                className="inline-flex items-center justify-center bg-foreground text-background h-10 px-5 rounded-full text-base tracking-tight leading-tight hover:opacity-80 transition-opacity"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
