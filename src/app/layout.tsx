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
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrustGuard AI — Native Agentic AI. Precision and Elegance for Every Security Risk Assessment.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://trustguardai.com",
  },
  icons: {
    icon: [
      { url: "/assets/favicon.ico", sizes: "any" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
  manifest: "/assets/site.webmanifest",
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
