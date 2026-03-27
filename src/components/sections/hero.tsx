"use client";

import Link from "next/link";
import { Dithering } from "@paper-design/shaders-react";
import { FadeUp } from "@/components/fade-up";

export function Hero() {
  return (
    <section className="relative min-h-[700px] md:min-h-[904px] overflow-hidden bg-white">
      <div className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none">
        <Dithering
          speed={0.52}
          shape="wave"
          type="random"
          size={11}
          scale={1}
          colorFront="#318FFA"
          colorBack="#00000000"
          style={{ width: "100%", height: "100%", backgroundColor: "#FFFFFF" }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 pt-28 md:pt-[160px] flex flex-col">
        <FadeUp>
          <h1
            className="text-[40px] md:text-[80px] leading-[1.25] tracking-[-0.02em] text-[#191919] text-left md:pl-[120px]"
            style={{ fontFeatureSettings: "'ordn' 1, 'ss04' 1, 'liga' 0, 'lnum' 1, 'tnum' 1" }}
          >
            AI-Driven Compliance
            <br />
            Assessments for Any Environment
          </h1>
        </FadeUp>

        <FadeUp
          delay={100}
          className="mt-16 md:mt-20 flex flex-col items-start w-full md:w-[633px] md:ml-[calc(50%-192px)]"
        >
          <div className="bg-[#318FFA] p-8 md:p-[40px] w-full shadow-[10px_12px_34px_0px_rgba(0,0,0,0.08),42px_46px_62px_0px_rgba(0,0,0,0.07),94px_104px_84px_0px_rgba(0,0,0,0.04)]">
            <p className="font-mono text-white text-base md:text-[24px] leading-[1.5] tracking-[-0.04em]">
              Assess vendors, audit controls, and evaluate your compliance posture — one engine, any framework.
            </p>
          </div>
          <Link
            href="/request-demo"
            className="font-mono bg-[#191919] text-white h-14 md:h-[64px] px-8 md:px-[40px] inline-flex items-center justify-center text-base md:text-[24px] tracking-[-0.04em] shadow-[2px_2px_7px_0px_rgba(0,0,0,0.08),8px_9px_13px_0px_rgba(0,0,0,0.07)] hover:opacity-90 transition-opacity"
          >
            Request a demo
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
