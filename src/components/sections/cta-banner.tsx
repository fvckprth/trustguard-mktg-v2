import Link from "next/link";
import { GodRays } from "@paper-design/shaders-react";
import { FadeUp } from "@/components/fade-up";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden px-6 md:px-10 py-20 md:py-40">
      {/* GodRays — beams going up, fades into footer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ maskImage: "linear-gradient(to top, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 60%, transparent 100%)" }}
      >
        <GodRays
          offsetX={-0.34}
          offsetY={0.85}
          intensity={0.79}
          spotty={1}
          midSize={0}
          midIntensity={0.59}
          density={0.41}
          bloom={1}
          speed={1.55}
          scale={4}
          colorBack="#00000000"
          colors={["#ECEAE5"]}
          colorBloom="#ECEAE5"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-20">
        <FadeUp>
          <h2 className="text-2xl md:text-[5rem] tracking-tighter leading-tight text-center">
          Deeper coverage.
          <br />
          Richer findings.
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
