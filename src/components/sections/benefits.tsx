import { RiCheckLine } from "@remixicon/react";
import { FadeUp } from "@/components/fade-up";
import { getContent } from "@/lib/content";

export async function Benefits() {
  const c = await getContent();

  const items = [0, 1, 2, 3].map((i) => c(`home.benefits.${i}`));

  return (
    <section className="md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10 px-6 py-10 md:p-20 md:bg-[#191919]/5">
        <FadeUp>
          <h2 className="text-lg md:text-[2rem] tracking-tight leading-snug text-left">
            {c("home.benefits.heading")}
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-6">
          {items.map((benefit, i) => (
            <FadeUp key={i} delay={i * 60}>
              <div className="bg-[#191919] shadow-2xl flex items-center gap-4 p-6 md:p-10">
                <RiCheckLine size={20} className="shrink-0 text-white" />
                <p className="font-mono text-base md:text-xl tracking-tight leading-tight text-white">
                  {benefit}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
