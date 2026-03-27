import Link from "next/link";
import { Dithering } from "@paper-design/shaders-react";
import { FadeUp } from "@/components/fade-up";

export function Mission() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <FadeUp className="relative bg-accent shadow-2xl overflow-hidden flex flex-col md:flex-row items-start justify-between p-8 md:p-40 gap-10 md:gap-16">
          {/* Dither sphere — bottom-right corner, only quarter visible */}
          <div className="absolute bottom-0 right-0 translate-x-[45%] translate-y-[45%] w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] pointer-events-none">
            <Dithering
              speed={0}
              shape="sphere"
              type="4x4"
              size={14}
              scale={0.5}
              colorFront="#F7F4EF"
              colorBack="#00000000"
              style={{ width: "100%", height: "100%", backgroundColor: "#1E3A8A" }}
            />
          </div>

          <div className="relative z-10 flex flex-col gap-16">
            <div className="flex flex-col gap-10 text-lg md:text-[2rem] tracking-tight leading-snug max-w-full md:max-w-[540px] text-white">
              <p>
                Built for scale. Precision and elegance in every finding.
                Surface what manual assessments can&apos;t.
              </p>
              <p>
                Continuous deep monitoring meets operator mentality&mdash;built
                by practitioners who managed risk at Fortune 500 companies.
              </p>
            </div>
            <div>
              <Link
                href="/company"
                className="font-mono inline-flex items-center justify-center bg-background text-accent h-14 md:h-[64px] px-8 md:px-[40px] text-base md:text-[24px] tracking-[-0.04em] shadow-2xl hover:bg-background/90 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
