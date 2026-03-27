import Link from "next/link";
import { FadeUp } from "@/components/fade-up";

export function Mission() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <FadeUp className="bg-accent shadow-2xl flex flex-col md:flex-row items-start justify-between p-8 md:p-40 gap-10 md:gap-16">
          <p className="text-sm md:text-xl leading-snug text-white tracking-tight shrink-0">
            Mission
          </p>

          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-10 text-lg md:text-[2rem] tracking-tight leading-snug max-w-full md:max-w-[540px] text-white">
              <p>
                Our approach is shaped by thousands of reviews, audits, and
                compliance programs.
              </p>
              <p>
                Built by practitioners who managed risk at Fortune 500
                companies.
              </p>
            </div>
            <div>
              <Link
                href="/company"
                className="inline-flex items-center justify-center bg-white text-accent h-10 px-5 text-sm md:text-base tracking-tight leading-tight hover:bg-white/90"
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
