import { FadeUp } from "@/components/fade-up";
import {
  RiFolderLine,
  RiShieldCheckLine,
  RiSearchEyeLine,
  RiFileWarningLine,
  RiTeamLine,
  RiFileChartLine,
} from "@remixicon/react";
import type { RemixiconComponentType } from "@remixicon/react";
import { getContent } from "@/lib/content";

const ICONS: RemixiconComponentType[] = [
  RiFolderLine,
  RiShieldCheckLine,
  RiSearchEyeLine,
  RiFileWarningLine,
  RiTeamLine,
  RiFileChartLine,
];

export async function Platform() {
  const c = await getContent();

  const capabilities = [0, 1, 2, 3, 4, 5].map((i) => ({
    title: c(`home.platform.${i}.title`),
    description: c(`home.platform.${i}.description`),
    Icon: ICONS[i],
  }));

  return (
    <section id="product" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-16 items-center">
        <FadeUp>
          <h2 className="text-lg md:text-[2.5rem] tracking-tight leading-snug text-center">
            {c("home.platform.heading")}
          </h2>
        </FadeUp>

        <div className="w-full grid md:grid-cols-2 md:auto-rows-[1fr] gap-6">
          {capabilities.map((cap, i) => (
            <FadeUp key={i} delay={i * 60} className="h-full">
              <div className="bg-background shadow-2xl p-6 md:p-10 flex items-start gap-6 h-full">
                <div className="w-10 h-10 shrink-0 bg-accent flex items-center justify-center">
                  <cap.Icon size={20} className="text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-mono text-base md:text-xl tracking-tight leading-tight text-accent">
                    {cap.title}
                  </p>
                  <p className="text-sm md:text-xl leading-normal text-[#191919] max-w-full md:max-w-[75%]">
                    {cap.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
