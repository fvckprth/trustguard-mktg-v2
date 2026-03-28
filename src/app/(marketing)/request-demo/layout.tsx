import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "See how TrustGuard AI cuts vendor assessment time by 90%. Book a walkthrough with our team.",
  alternates: { canonical: "https://trustguardai.com/request-demo" },
};

export default function RequestDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
