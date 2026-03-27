"use client";

import type { FormEvent } from "react";

interface DemoFormValues {
  fullName: string;
  workEmail: string;
  company: string;
  message: string;
}

function getDemoFormValues(form: HTMLFormElement): DemoFormValues {
  const formData = new FormData(form);

  return {
    fullName: String(formData.get("fullName") ?? "").trim(),
    workEmail: String(formData.get("workEmail") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
}

function toMailBody(values: DemoFormValues): string {
  return [
    "Request Demo Submission",
    "",
    `Full name: ${values.fullName}`,
    `Work email: ${values.workEmail}`,
    `Company: ${values.company}`,
    "",
    "Message:",
    values.message || "(none provided)",
  ].join("\n");
}

function toMailtoHref(values: DemoFormValues): string {
  const params = new URLSearchParams({
    subject: "Demo Request",
    body: toMailBody(values),
  });

  return `mailto:elena@trustguardai.com?${params.toString()}`;
}

export default function RequestDemoPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const values = getDemoFormValues(event.currentTarget);
    window.location.href = toMailtoHref(values);
  }

  return (
    <section className="pt-16 md:pt-32 px-6 md:px-10 pb-20 md:pb-40">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-16">
        <div className="flex flex-col gap-2 text-lg md:text-[2rem] tracking-tight">
          <h1 className="leading-tight text-foreground">Request a demo</h1>
          <p className="text-sm md:text-[2rem] leading-snug text-muted max-w-[40rem]">
            See how TrustGuard helps your team assess vendors faster, surface
            real risk, and stay audit-ready.
          </p>
        </div>

        <div className="bg-surface rounded-md p-6 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="text-sm md:text-base tracking-tight leading-tight"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  className="h-12 rounded-md border border-border bg-background px-4 text-base leading-tight placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="workEmail"
                  className="text-sm md:text-base tracking-tight leading-tight"
                >
                  Work email
                </label>
                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  autoComplete="email"
                  required
                  className="h-12 rounded-md border border-border bg-background px-4 text-base leading-tight placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="company"
                  className="text-sm md:text-base tracking-tight leading-tight"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  required
                  className="h-12 rounded-md border border-border bg-background px-4 text-base leading-tight placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  placeholder="Acme Corp"
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm md:text-base tracking-tight leading-tight"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="rounded-md border border-border bg-background px-4 py-3 text-base leading-snug placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-y"
                  placeholder="What are you trying to improve in your current vendor review process?"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <p className="text-sm md:text-base leading-snug text-muted max-w-[36rem]">
                Typical response time is one business day. We only use this
                information to schedule and run your demo.
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-accent text-white h-10 px-5 text-sm md:text-base tracking-tight leading-tight hover:bg-[#0090E0]"
              >
                Request demo
              </button>
            </div>
          </form>
        </div>

        <div className="text-sm leading-snug text-muted">
          By submitting, you agree to be contacted about TrustGuard.
        </div>
      </div>
    </section>
  );
}
