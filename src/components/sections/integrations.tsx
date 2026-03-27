import type { ComponentType } from "react";
import { FadeUp } from "@/components/fade-up";
import type { LogoProps } from "@/components/logos";
import {
  JiraLogo,
  GooglecloudLogo,
  OktaLogo,
  SlackwareLogo,
  SplunkLogo,
  Lcn1passwordLogo,
  ConfluenceLogo,
  DatadogLogo,
  DockerLogo,
  GithubLogo,
  NotionLogo,
  PagerdutyLogo,
  QualysLogo,
} from "@/components/logos";

const ROWS: { name: string; Logo: ComponentType<LogoProps> }[][] = [
  [
    { name: "Jira", Logo: JiraLogo },
    { name: "Google Cloud", Logo: GooglecloudLogo },
    { name: "Okta", Logo: OktaLogo },
    { name: "Datadog", Logo: DatadogLogo },
    { name: "Docker", Logo: DockerLogo },
    { name: "GitHub", Logo: GithubLogo },
    { name: "Splunk", Logo: SplunkLogo },
  ],
  [
    { name: "Confluence", Logo: ConfluenceLogo },
    { name: "PagerDuty", Logo: PagerdutyLogo },
    { name: "Notion", Logo: NotionLogo },
    { name: "1Password", Logo: Lcn1passwordLogo },
    { name: "Qualys", Logo: QualysLogo },
    { name: "Slackware", Logo: SlackwareLogo },
  ],
  [
    { name: "Docker", Logo: DockerLogo },
    { name: "Okta", Logo: OktaLogo },
    { name: "Splunk", Logo: SplunkLogo },
    { name: "GitHub", Logo: GithubLogo },
    { name: "Google Cloud", Logo: GooglecloudLogo },
    { name: "PagerDuty", Logo: PagerdutyLogo },
    { name: "Jira", Logo: JiraLogo },
  ],
  [
    { name: "Qualys", Logo: QualysLogo },
    { name: "Notion", Logo: NotionLogo },
    { name: "Datadog", Logo: DatadogLogo },
    { name: "1Password", Logo: Lcn1passwordLogo },
    { name: "Confluence", Logo: ConfluenceLogo },
    { name: "Slackware", Logo: SlackwareLogo },
  ],
];

export function Integrations() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
      <div className="bg-[#191919] px-6 md:px-10 py-20 md:py-30 shadow-2xl">
      <div className="flex flex-col items-center gap-8">
        <FadeUp className="w-full max-w-[700px] flex flex-col gap-6 items-center text-center">
          <p className="text-2xl md:text-4xl tracking-tight leading-tight text-white">
            700+ integrations
          </p>
          <p className="text-sm md:text-xl tracking-tight leading-relaxed text-white/50">
            Pull evidence from the tools your team already uses.
          </p>
        </FadeUp>

        <FadeUp delay={100} className="w-full">
          <div className="flex flex-col gap-1.5 md:gap-2">
            {ROWS.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="w-full overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                }}
              >
                <div
                  className="flex gap-1.5 md:gap-2 w-max mx-auto"
                  style={{
                    transform: rowIndex % 2 === 1 ? "translateX(calc(5rem + 0.25rem))" : undefined,
                  }}
                >
                  {[...row, ...row].map((item, i) => (
                    <div
                      key={`${item.name}-${rowIndex}-${i}`}
                      className="w-28 h-14 md:w-40 md:h-20 shrink-0 bg-white/5 flex items-center justify-center"
                    >
                      <item.Logo
                        color="currentColor"
                        className="h-6 md:h-8 w-auto text-white/50"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
      </div>
      </div>
    </section>
  );
}
