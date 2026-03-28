import { FadeUp } from "@/components/fade-up";
import { getContent } from "@/lib/content";

export async function UseCases() {
  const c = await getContent();

  const cases = [0, 1, 2].map((i) => ({
    title: c(`home.useCases.${i}.title`),
    description: c(`home.useCases.${i}.description`),
  }));

  return (
    <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-16 items-center">
          <FadeUp>
            <div className="bg-accent p-8 md:p-[40px] shadow-[10px_12px_34px_0px_rgba(0,0,0,0.08),42px_46px_62px_0px_rgba(0,0,0,0.07),94px_104px_84px_0px_rgba(0,0,0,0.04)]">
              <h2 className="font-mono text-white text-base md:text-[24px] leading-[1.5] tracking-[-0.04em]">
                {c("home.useCases.heading")}
              </h2>
            </div>
          </FadeUp>

          <div className="w-full grid md:grid-cols-3 md:auto-rows-[1fr] gap-6">
            {cases.map((item, i) => (
              <FadeUp key={i} delay={i * 80} className="h-full">
                <div className="bg-[#191919] shadow-2xl h-full p-6 md:p-10">
                  <p className="text-base md:text-xl tracking-tight leading-tight text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm md:text-xl leading-snug text-white/50">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
    </section>
  );
}
