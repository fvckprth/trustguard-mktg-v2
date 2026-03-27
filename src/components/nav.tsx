"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
] as const;

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-colors duration-300 ${
        scrolled ? "bg-background" : ""
      }`}
    >
      <nav className="max-w-[1280px] mx-auto h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center w-[225px]">
          <Image
            src="/assets/tg-logo.svg"
            alt="TG"
            width={89}
            height={24}
            className="h-6 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-base leading-[1.2] tracking-[-0.04em] text-[#191919] hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/request-demo"
            className="font-mono inline-flex items-center justify-center bg-[#1E3A8A] text-white h-[40px] px-6 text-base leading-[1.2] tracking-[-0.04em] shadow-[2px_2px_7px_0px_rgba(0,0,0,0.08),8px_9px_13px_0px_rgba(0,0,0,0.07)] hover:opacity-90 transition-opacity"
          >
            Request a demo
          </Link>
        </div>

        <button
          className="md:hidden p-1 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden overflow-hidden bg-background">
          <div className="px-10 pb-6 pt-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-base tracking-[-0.04em] text-[#191919] hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2">
              <Link
                href="/request-demo"
                className="font-mono inline-flex items-center justify-center bg-[#1E3A8A] text-white h-[40px] px-6 text-base tracking-[-0.04em] hover:opacity-90 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
