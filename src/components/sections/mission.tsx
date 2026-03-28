import Link from "next/link";
import { FadeUp } from "@/components/fade-up";
import { getContent } from "@/lib/content";

export async function Mission() {
  const c = await getContent();

  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <FadeUp className="relative bg-accent shadow-2xl overflow-hidden flex flex-col md:flex-row items-start justify-between p-8 md:p-40 gap-10 md:gap-16">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-10 text-lg md:text-[24px] tracking-tight leading-snug max-w-full md:max-w-[540px] text-white">
              <p>{c("home.mission.paragraph1")}</p>
              <p>{c("home.mission.paragraph2")}</p>
            </div>
            <div>
              <Link
                href="/company"
                className="font-mono inline-flex items-center justify-center bg-background text-accent h-14 md:h-[64px] px-8 md:px-[40px] text-base md:text-[24px] tracking-[-0.04em] shadow-2xl hover:bg-background/90 transition-colors"
              >
                {c("home.mission.cta")}
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
