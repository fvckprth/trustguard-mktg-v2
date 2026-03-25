import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="px-6 md:px-10 py-20 md:py-40">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-20">
        <h2 className="text-4xl md:text-[5rem] tracking-tighter leading-tight text-center">
          The Future of TPRM,
          <br />
          Delivered Today.
        </h2>

        <Link
          href="/request-demo"
          className="inline-flex items-center justify-center bg-foreground text-background h-10 px-5 rounded-full text-base tracking-tight leading-tight hover:opacity-80 transition-opacity"
        >
          Request Demo
        </Link>
      </div>
    </section>
  );
}
