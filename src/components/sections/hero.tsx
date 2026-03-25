import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 md:pt-52 pb-12 md:pb-24 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex items-start gap-16">
        <div className="flex flex-col gap-10 md:gap-16 max-w-full md:max-w-[540px]">
          <div className="flex flex-col gap-2 text-lg md:text-[2rem] tracking-tight leading-tight">
            <p className="text-foreground leading-none">
              Minimize your third-party risks
            </p>
            <p className="text-muted">
              Most advanced assessment platform to improve review speed,
              visibility, and audit readiness.
            </p>
          </div>
          <div>
            <Link
              href="/request-demo"
              className="inline-flex items-center justify-center bg-foreground text-background h-10 px-5 rounded-full text-sm md:text-base tracking-tight leading-tight hover:opacity-80 transition-opacity"
            >
              Request demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
