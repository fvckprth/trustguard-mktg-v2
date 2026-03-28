"use client";

import { useActionState } from "react";
import { submitDemoRequest } from "./actions";

function toMailtoHref(formData: FormData): string {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const workEmail = String(formData.get("workEmail") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const body = [
    "Request Demo Submission",
    "",
    `Full name: ${fullName}`,
    `Work email: ${workEmail}`,
    `Company: ${company}`,
    "",
    "Message:",
    message || "(none provided)",
  ].join("\n");

  const params = new URLSearchParams({
    subject: "Demo Request",
    body,
  });

  return `mailto:elena@trustguardai.com?${params.toString()}`;
}

type FormState = { success?: boolean; error?: string };

export default function RequestDemoPage() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    async (_prev, formData) => {
      // Save to database
      const result = await submitDemoRequest(formData);

      // Also open mailto as backup notification
      if (result.success) {
        window.location.href = toMailtoHref(formData);
      }

      return result;
    },
    {}
  );

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

        <div className="bg-[#191919] rounded-md shadow-2xl p-6 md:p-10">
          {state.success ? (
            <div className="flex flex-col gap-4 py-10 items-center text-center">
              <p className="text-lg md:text-2xl tracking-tight text-foreground">
                Thank you for your interest.
              </p>
              <p className="text-sm md:text-base text-muted">
                We&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form action={formAction} className="flex flex-col gap-10">
              {state.error && (
                <p className="text-red-600 text-sm">{state.error}</p>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm md:text-base tracking-tight leading-tight text-white/50"
                  >
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    className="h-12 bg-white/10 px-4 text-white text-base leading-tight placeholder:text-white/30 focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="workEmail"
                    className="text-sm md:text-base tracking-tight leading-tight text-white/50"
                  >
                    Work email
                  </label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    autoComplete="email"
                    required
                    className="h-12 bg-white/10 px-4 text-white text-base leading-tight placeholder:text-white/30 focus:outline-none"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label
                    htmlFor="company"
                    className="text-sm md:text-base tracking-tight leading-tight text-white/50"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    required
                    className="h-12 bg-white/10 px-4 text-white text-base leading-tight placeholder:text-white/30 focus:outline-none"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm md:text-base tracking-tight leading-tight text-white/50"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="bg-white/10 px-4 py-3 text-white text-base leading-snug placeholder:text-white/30 focus:outline-none resize-y"
                    placeholder="What are you trying to improve in your current vendor review process?"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="text-sm md:text-base leading-snug text-white/50 max-w-[36rem]">
                  Typical response time is one business day. We only use this
                  information to schedule and run your demo.
                </p>
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex items-center justify-center bg-accent text-white h-10 px-5 text-sm md:text-base tracking-tight leading-tight hover:bg-[#152E6B] disabled:opacity-50"
                >
                  {pending ? "Submitting..." : "Request demo"}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="text-sm leading-snug text-muted">
          By submitting, you agree to be contacted about TrustGuard.
        </div>
      </div>
    </section>
  );
}
