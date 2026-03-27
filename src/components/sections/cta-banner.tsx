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
          className="inline-flex items-center justify-center bg-accent text-white h-10 px-5 text-sm md:text-base tracking-tight leading-tight hover:bg-[#0090E0]"
        >
          Request Demo
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
