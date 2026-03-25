import type { ComponentType } from "react";
import type { LogoProps } from "@/components/logos";
import {
  JiraLogo,
  GooglecloudLogo,
  OktaLogo,
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

const LOGOS: { name: string; Logo: ComponentType<LogoProps> }[] = [
  { name: "Jira", Logo: JiraLogo },
  { name: "Google Cloud", Logo: GooglecloudLogo },
  { name: "Okta", Logo: OktaLogo },
  { name: "Datadog", Logo: DatadogLogo },
  { name: "Docker", Logo: DockerLogo },
  { name: "GitHub", Logo: GithubLogo },
  { name: "Confluence", Logo: ConfluenceLogo },
  { name: "PagerDuty", Logo: PagerdutyLogo },
  { name: "Notion", Logo: NotionLogo },
  { name: "Splunk", Logo: SplunkLogo },
  { name: "1Password", Logo: Lcn1passwordLogo },
  { name: "Qualys", Logo: QualysLogo },
];

export function Integrations() {
  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8">
        <div className="w-full max-w-[698px] flex flex-col gap-2 items-center text-center">
          <p className="text-2xl md:text-[2rem] tracking-tight leading-tight text-foreground">
            700+ integrations
          </p>
          <p className="text-2xl md:text-[2rem] tracking-tight leading-[1.35] text-muted">
            Connect your existing tools and evidence sources without ripping out
            your stack.
          </p>
        </div>

        <div
          className="w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          }}
        >
          <div className="flex gap-2 w-max mx-auto">
            {[...LOGOS, ...LOGOS].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="w-[160px] h-[80px] shrink-0 bg-foreground/5 rounded-lg flex items-center justify-center"
              >
                <item.Logo
                  color="currentColor"
                  className="h-6 w-auto text-foreground/50"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
