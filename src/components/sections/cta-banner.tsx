import Link from "next/link";
import { FadeUp } from "@/components/fade-up";

export function CtaBanner() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-40">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-20">
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
