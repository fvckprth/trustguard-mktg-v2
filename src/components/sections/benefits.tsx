import { RiCheckLine } from "@remixicon/react";

const BENEFITS = [
  "Reduce manual review time",
  "Improve consistency across assessments",
  "Increase visibility across the vendor portfolio",
  "Simplify audit and executive reporting",
] as const;

export function Benefits() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center">
        <div className="p-10 md:p-40 shrink-0">
          <h2 className="text-2xl md:text-[2rem] tracking-tight leading-snug max-w-full md:max-w-[320px]">
            Complete visibility across your vendor portfolio
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-1">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit}
              className="bg-surface flex items-center gap-4 p-6 md:p-10"
            >
              <RiCheckLine size={20} className="shrink-0 text-foreground" />
              <p className="text-xl tracking-tight leading-tight text-foreground">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
