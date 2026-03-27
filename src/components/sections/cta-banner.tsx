import Link from "next/link";
import { Dithering } from "@paper-design/shaders-react";
import { FadeUp } from "@/components/fade-up";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden px-6 md:px-10 py-20 md:py-40">
      {/* Dither — bottom-anchored, blends into footer */}
      <div className="absolute inset-x-0 bottom-0 h-[70%] pointer-events-none">
        <Dithering
          speed={0.26}
          shape="wave"
          type="random"
          size={11}
          scale={1}
          colorFront="#ECEAE5"
          colorBack="#00000000"
          style={{ width: "100%", height: "100%", backgroundColor: "#F8F5F0" }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-20">
        <FadeUp>
          <h2 className="text-2xl md:text-[5rem] tracking-tighter leading-tight text-center">
          Assessments that
          <br />
          actually hold up.
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <Link
          href="/request-demo"
          className="font-mono inline-flex items-center justify-center bg-[#191919] text-white h-14 md:h-[64px] px-8 md:px-[40px] text-base md:text-[24px] tracking-[-0.04em] shadow-[2px_2px_7px_0px_rgba(0,0,0,0.08),8px_9px_13px_0px_rgba(0,0,0,0.07)] hover:bg-accent hover:text-white transition-colors"
        >
          Request a demo
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
