import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/json-ld";
import { FadeUp } from "@/components/fade-up";
import { getContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Built by practitioners who spent decades managing compliance and risk at Fortune 500 companies.",
  alternates: { canonical: "https://trustguardai.com/company" },
};

const PHOTOS = {
  founder: "/assets/elena-kvochko.jpeg",
  investor0: "/assets/jessica-leao.png",
};

const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TrustGuard AI",
  legalName: "OpenAdmin, Inc.",
  url: "https://trustguardai.com",
  logo: "https://trustguardai.com/assets/tg-logo.svg",
  description:
    "AI-driven compliance assessment platform built by practitioners who spent decades managing risk at Fortune 500 companies.",
  email: "contact@trustguardai.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Elena Kvochko",
    jobTitle: "Founder & CEO",
    description:
      "Previously CISO at SAP, led cybersecurity at Barclays and Bank of America.",
  },
};

export default async function CompanyPage() {
  const c = await getContent();

  const heroLines = c("company.hero.heading").split("\n");
  const letterHeadingLines = c("company.letter.heading").split("\n");

  const stats = [0, 1, 2].map((i) => ({
    value: c(`company.stats.${i}.value`),
    label: c(`company.stats.${i}.label`),
  }));

  const approach = [0, 1, 2, 3].map((i) => ({
    title: c(`company.approach.${i}.title`),
    description: c(`company.approach.${i}.description`),
  }));

  return (
    <>
    <JsonLd data={companySchema} />
    <div className="flex flex-col gap-20 md:gap-[120px]">
      {/* Hero */}
      <section className="pt-16 md:pt-32 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center">
          <FadeUp>
            <h1 className="text-[40px] md:text-[64px] leading-tight tracking-tight text-foreground text-center">
              {heroLines.map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>
          </FadeUp>
          <FadeUp delay={100}>
            <Link
              href="/request-demo"
              className="mt-8 md:mt-16 font-mono bg-[#191919] text-white h-14 md:h-[64px] px-8 md:px-[40px] inline-flex items-center justify-center text-base md:text-[24px] tracking-[-0.04em] shadow-[2px_2px_7px_0px_rgba(0,0,0,0.08),8px_9px_13px_0px_rgba(0,0,0,0.07)] hover:bg-background hover:text-accent transition-colors"
            >
              {c("company.hero.cta")}
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Why we exist */}
      <section className="md:px-10">
        <div className="max-w-[1280px] mx-auto md:bg-[#191919]/5 px-6 py-10 md:px-20 md:py-40 flex flex-col gap-8">
          <FadeUp>
            <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight">
              {c("company.stats.heading")}
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div
                  className="bg-accent shadow-2xl min-h-[191px] p-6 md:p-10 flex flex-col justify-between gap-6"
                >
                  <p className="text-[48px] md:text-[4rem] tracking-tighter leading-tight text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-xl leading-snug text-white/50">
                    {stat.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8 items-center">
          <FadeUp>
            <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-center">
              {c("company.approach.heading")}
            </h2>
          </FadeUp>

          <div className="w-full grid md:grid-cols-6 md:auto-rows-[1fr] gap-6">
            {approach.map((item, i) => (
              <FadeUp
                key={i}
                delay={i * 60}
                className="h-full md:col-span-3"
              >
                <div
                  className="bg-background shadow-2xl h-full p-6 md:p-10 flex flex-col gap-2"
                >
                  <p className="text-base md:text-xl tracking-tight leading-tight font-mono text-accent">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-xl leading-snug text-[#191919]">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Open letter */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <FadeUp>
            <div className="bg-accent shadow-2xl p-6 md:p-16 lg:px-60 lg:py-40 flex flex-col gap-10 md:gap-20">
              <Image
                src="/assets/tg-logo.svg"
                alt="TrustGuard AI"
                width={89}
                height={24}
                className="h-6 w-auto brightness-0 invert opacity-25 self-start"
              />
              <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-white">
                {letterHeadingLines.map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h2>

              <div className="text-base md:text-[24px] tracking-tight leading-snug text-white/50 space-y-6 md:space-y-8">
                <p>{c("company.letter.paragraph1")}</p>
                <p>{c("company.letter.paragraph2")}</p>
                <p>{c("company.letter.paragraph3")}</p>
                <p className="text-white">{c("company.letter.paragraph4")}</p>
                <ol className="list-decimal pl-6 md:pl-12 space-y-4 text-white marker:text-white">
                  <li>
                    <span className="text-white">
                      {c("company.letter.principle1.title")}
                    </span>{" "}
                    <span className="text-white/50">
                      {c("company.letter.principle1.description")}
                    </span>
                  </li>
                  <li>
                    <span className="text-white">
                      {c("company.letter.principle2.title")}
                    </span>{" "}
                    <span className="text-white/50">
                      {c("company.letter.principle2.description")}
                    </span>
                  </li>
                </ol>
                <p>{c("company.letter.paragraph5")}</p>
                <p>{c("company.letter.paragraph6")}</p>
                <p>{c("company.letter.closing")}</p>
              </div>

              <div className="flex items-center gap-6">
                <Image
                  src={PHOTOS.founder}
                  alt={c("company.letter.authorName")}
                  width={48}
                  height={48}
                  className="shrink-0 size-12 object-cover"
                />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-base md:text-xl tracking-tight leading-tight text-white">
                    {c("company.letter.authorName")}
                  </p>
                  <p className="text-sm md:text-xl tracking-tight leading-tight text-white/50">
                    {c("company.letter.authorRole")}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Founder & Investors */}
      <section className="px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
          <FadeUp>
            <h2 className="text-lg md:text-[2rem] tracking-tight leading-tight text-center">
              {c("company.people.heading")}
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            <FadeUp delay={60}>
              <div className="bg-[#191919] shadow-2xl p-6 md:p-10 flex flex-col gap-10 h-full">
                <div className="flex items-center gap-6">
                  <Image
                    src={PHOTOS.founder}
                    alt={c("company.founder.name")}
                    width={48}
                    height={48}
                    className="shrink-0 size-12 object-cover"
                  />
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-base md:text-xl tracking-tight leading-tight text-[#F8F5F0]">
                      {c("company.founder.name")}
                    </p>
                    <p className="text-sm md:text-xl tracking-tight leading-tight text-[#F8F5F0]/50">
                      {c("company.founder.role")}
                    </p>
                  </div>
                </div>
                <p className="text-sm md:text-xl leading-snug text-[#F8F5F0]/50">
                  {c("company.founder.bio")}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={120}>
              <div className="bg-[#191919] shadow-2xl p-6 md:p-10 flex flex-col gap-10 h-full">
                <div className="flex items-center gap-6">
                  <Image
                    src={PHOTOS.investor0}
                    alt={c("company.investors.0.name")}
                    width={48}
                    height={48}
                    className="shrink-0 size-12 object-cover"
                  />
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-base md:text-xl tracking-tight leading-tight text-[#F8F5F0]">
                      {c("company.investors.0.name")}
                    </p>
                    <p className="text-sm md:text-xl tracking-tight leading-tight text-[#F8F5F0]/50">
                      {c("company.investors.0.role")}
                    </p>
                  </div>
                </div>
                <p className="text-sm md:text-xl leading-snug text-[#F8F5F0]/50">
                  {c("company.investors.0.bio")}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </div>
    </>
  );
}
