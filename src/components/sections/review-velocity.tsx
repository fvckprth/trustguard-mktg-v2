import Link from "next/link";
import { FadeUp } from "@/components/fade-up";

const STATS = [
  { value: "90%", label: "Reduction in review time" },
  { value: "10X", label: "More risks surfaced per assessment" },
  { value: "100X", label: "Increase in assessment coverage" },
] as const;

export function ReviewVelocity() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center gap-16 md:gap-20">
        {/* Left – headline + CTA */}
        <div className="flex flex-col gap-10 md:flex-1">
          <FadeUp>
            <div className="flex flex-col gap-2 text-lg md:text-[2.5rem] tracking-tight leading-snug">
              <p className="text-foreground">Review more with the same team</p>
              <p className="text-muted">Same hours. Broader coverage.</p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center bg-accent text-white font-mono h-10 px-6 text-sm md:text-base tracking-tight leading-tight hover:bg-[#0090E0] transition-colors w-fit"
            >
              Request a demo
            </Link>
          </FadeUp>
        </div>

        {/* Right – stat cards */}
        <div className="flex flex-col gap-6 md:w-[424px] shrink-0">
          {STATS.map((stat, i) => (
            <FadeUp key={stat.label} delay={200 + i * 80}>
              <div className="bg-accent shadow-2xl p-10 flex flex-col gap-8">
                <p className="text-5xl md:text-[4rem] tracking-tighter leading-none text-white">
                  {stat.value}
                </p>
                <p className="text-sm md:text-xl leading-snug text-white tracking-tight">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
