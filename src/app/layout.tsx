import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Agentation } from "agentation";
import "./globals.css";

const alliance = localFont({
  src: "../../public/fonts/AllianceNo.2-Regular.otf",
  variable: "--font-alliance",
  display: "swap",
});

const berkeleyMono = localFont({
  src: "../../public/fonts/BerkeleyMono-Regular.otf",
  variable: "--font-berkeley-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trustguardai.com"),
  title: {
    default: "TrustGuard | AI for Third-Party Risk",
    template: "%s | TrustGuard AI",
  },
  description:
    "AI-driven compliance assessments for any environment. Assess vendors, audit controls, and evaluate your compliance posture across any framework.",
  openGraph: {
    type: "website",
    siteName: "TrustGuard AI",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://trustguardai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alliance.variable} ${berkeleyMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
