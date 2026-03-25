"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
] as const;

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl">
      <nav className="max-w-[1280px] mx-auto h-16 flex items-center justify-between px-6 md:px-0">
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
              className="text-base tracking-tight leading-tight text-foreground hover:text-muted transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-1 justify-end w-[225px]">
          <Link
            href="/login"
            className="inline-flex items-center justify-center bg-surface text-foreground h-6 px-3 py-1 rounded-full text-base tracking-tight leading-tight hover:opacity-70 transition-opacity"
          >
            Log-in
          </Link>
          <Link
            href="/request-demo"
            className="inline-flex items-center justify-center bg-foreground text-background h-6 px-3 py-1 rounded-full text-base tracking-tight leading-tight hover:opacity-80 transition-opacity"
          >
            Request Demo
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
        <div className="md:hidden overflow-hidden">
          <div className="px-10 pb-6 pt-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base tracking-tight text-foreground hover:text-muted transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-2">
              <Link
                href="/login"
                className="inline-flex items-center justify-center bg-surface text-foreground px-4 py-2 rounded-full text-base tracking-tight hover:opacity-70 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Log-in
              </Link>
              <Link
                href="/request-demo"
                className="inline-flex items-center justify-center bg-foreground text-background px-4 py-2 rounded-full text-base tracking-tight hover:opacity-80 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
