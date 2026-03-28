import Link from "next/link";
import { FadeUp } from "@/components/fade-up";
import { getContent } from "@/lib/content";

export async function ReviewVelocity() {
  const c = await getContent();

  const stats = [0, 1, 2].map((i) => ({
    value: c(`home.reviewVelocity.${i}.value`),
    label: c(`home.reviewVelocity.${i}.label`),
  }));

  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 md:gap-16">
        {/* Headline + CTA */}
        <div className="flex flex-col items-center gap-8">
          <FadeUp>
            <div className="flex flex-col gap-2 text-lg md:text-[2.5rem] tracking-tight leading-snug text-center">
              <p className="text-foreground">{c("home.reviewVelocity.heading1")}</p>
              <p className="text-[#191919]">{c("home.reviewVelocity.heading2")}</p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <Link
              href="/request-demo"
              className="font-mono inline-flex items-center justify-center bg-[#191919] text-white h-14 md:h-[64px] px-8 md:px-[40px] text-base md:text-[24px] tracking-[-0.04em] shadow-[2px_2px_7px_0px_rgba(0,0,0,0.08),8px_9px_13px_0px_rgba(0,0,0,0.07)] hover:bg-background hover:text-accent transition-colors w-fit"
            >
              {c("home.reviewVelocity.cta")}
            </Link>
          </FadeUp>
        </div>

        {/* Stat cards — horizontal row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 md:auto-rows-[1fr] gap-6">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={200 + i * 80} className="h-full">
              <div className="bg-accent shadow-2xl p-10 flex flex-col gap-8 h-full">
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
