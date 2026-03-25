import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Agentation } from "agentation";
import "./globals.css";

const fkGrotesk = localFont({
  src: "../../public/fonts/FKGrotesk-Regular.otf",
  variable: "--font-fk-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrustGuard AI — Minimize your third-party risk",
  description:
    "The most advanced assessment platform to improve review speed, visibility, and audit readiness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fkGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
