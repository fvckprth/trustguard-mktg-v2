import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  Company: [
    { label: "About", href: "/company" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/trustguardai/",
    },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="max-w-[1280px] mx-auto p-6 md:p-10 flex flex-col">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-0">
          <div className="flex w-full flex-col gap-20">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/assets/tg-logo.svg"
                alt="TG"
                width={89}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
            <p className="shrink-0 text-sm tracking-tight leading-tight text-muted">
              2026 TrustGuard AI Inc.
            </p>
          </div>

          <div className="flex gap-10 md:gap-20">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-4">
                <p className="font-mono text-sm tracking-tight leading-tight text-accent">
                  {title}
                </p>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base tracking-tight leading-tight text-foreground hover:text-accent transition-colors"
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
