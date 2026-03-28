"use client";

import { useActionState, useTransition } from "react";
import { login, logout, saveContent, seedContent } from "./actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, {});

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form action={formAction} className="w-full max-w-sm flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-[#191919]">Admin Login</h1>
        {state.error && (
          <p className="text-red-600 text-sm">{state.error}</p>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          autoFocus
          className="h-12 px-4 border border-[#ddd] bg-white text-[#191919] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
        />
        <button
          type="submit"
          disabled={pending}
          className="h-12 bg-[#191919] text-white font-mono text-sm tracking-tight hover:bg-[#333] transition-colors disabled:opacity-50"
        >
          {pending ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}

const SECTION_LABELS: Record<string, string> = {
  "home.hero": "Homepage: Hero",
  "home.overview": "Homepage: Overview",
  "home.integrations": "Homepage: Integrations",
  "home.features": "Homepage: Feature Showcase",
  "home.useCases": "Homepage: Use Cases",
  "home.reviewVelocity": "Homepage: Review Velocity",
  "home.platform": "Homepage: Platform",
  "home.benefits": "Homepage: Benefits",
  "home.pilotTimeline": "Homepage: Pilot Timeline",
  "home.mission": "Homepage: Mission",
  "home.cta": "Homepage: CTA Banner",
  "company.hero": "Company: Hero",
  "company.stats": "Company: Stats",
  "company.approach": "Company: Approach",
  "company.letter": "Company: Open Letter",
  "company.people": "Company: People",
  "company.founder": "Company: Founder",
  "company.investors": "Company: Investors",
};

function fieldLabel(key: string): string {
  // Turn "home.hero.headline" into "headline"
  // Turn "home.features.0.label" into "0 - label"
  const parts = key.split(".");
  return parts.slice(2).join(" - ");
}

export function ContentForm({
  groups,
  values,
}: {
  groups: { section: string; keys: string[] }[];
  values: Record<string, string>;
}) {
  const [saving, startSave] = useTransition();
  const [seeding, startSeed] = useTransition();
  const [loggingOut, startLogout] = useTransition();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-[#191919]">Content Editor</h1>
        <div className="flex gap-3">
          <form
            action={() => startSeed(async () => {
              const result = await seedContent();
              if (result.error) alert(result.error);
              else window.location.reload();
            })}
          >
            <button
              type="submit"
              disabled={seeding}
              className="h-10 px-4 border border-[#ddd] bg-white text-sm font-mono text-[#191919] hover:bg-[#f0f0f0] transition-colors disabled:opacity-50"
            >
              {seeding ? "Seeding..." : "Seed defaults"}
            </button>
          </form>
          <form
            action={() => startLogout(async () => {
              await logout();
              window.location.reload();
            })}
          >
            <button
              type="submit"
              disabled={loggingOut}
              className="h-10 px-4 border border-[#ddd] bg-white text-sm font-mono text-[#191919] hover:bg-[#f0f0f0] transition-colors disabled:opacity-50"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>

      <form
        action={(formData) =>
          startSave(async () => {
            const result = await saveContent(formData);
            if (result.error) alert(result.error);
            else alert("Saved! Changes are live.");
          })
        }
      >
        <div className="flex flex-col gap-8">
          {groups.map((group) => (
            <fieldset key={group.section} className="border border-[#ddd] bg-white p-6">
              <legend className="font-mono text-sm text-[#1E3A8A] px-2 font-bold">
                {SECTION_LABELS[group.section] ?? group.section}
              </legend>
              <div className="flex flex-col gap-4 mt-2">
                {group.keys.map((key) => {
                  const value = values[key] ?? "";
                  const isMultiline = value.includes("\n") || value.length > 80;
                  return (
                    <div key={key} className="flex flex-col gap-1">
                      <label
                        htmlFor={`content.${key}`}
                        className="text-xs font-mono text-[#666]"
                      >
                        {fieldLabel(key)}
                        <span className="text-[#aaa] ml-2">({key})</span>
                      </label>
                      {isMultiline ? (
                        <textarea
                          id={`content.${key}`}
                          name={`content.${key}`}
                          defaultValue={value}
                          rows={Math.min(value.split("\n").length + 1, 8)}
                          className="px-3 py-2 border border-[#ddd] text-sm text-[#191919] font-mono resize-y focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                        />
                      ) : (
                        <input
                          id={`content.${key}`}
                          name={`content.${key}`}
                          type="text"
                          defaultValue={value}
                          className="h-10 px-3 border border-[#ddd] text-sm text-[#191919] font-mono focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        <div className="sticky bottom-0 bg-[#f5f5f5] border-t border-[#ddd] mt-8 py-4 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="h-12 px-8 bg-[#1E3A8A] text-white font-mono text-sm tracking-tight hover:bg-[#152c6b] transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save all changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
