import Link from "next/link";
import { GodRays } from "@paper-design/shaders-react";
import { FadeUp } from "@/components/fade-up";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden px-6 md:px-10 py-20 md:py-40" style={{ background: "linear-gradient(to bottom, #F8F5F0, #ECEAE5)" }}>
      {/* GodRays — accent blue beams, masked top and bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)" }}
      >
        <GodRays
          offsetX={0}
          offsetY={0.55}
          intensity={0.8}
          spotty={0.58}
          midSize={0.32}
          midIntensity={1}
          density={0.31}
          bloom={0.92}
          speed={0}
          scale={0.51}
          colorBack="#00000000"
          colors={["#1E3A8A"]}
          colorBloom="#1E3A8A"
          style={{ width: "100%", height: "100%", backgroundColor: "#1919190D" }}
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
