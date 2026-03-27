import type { ComponentType } from "react";
import { FadeUp } from "@/components/fade-up";
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
  AwsLogo,
  SlackLogo,
  SnowflakeLogo,
  TerraformLogo,
  SalesforceLogo,
  SnykLogo,
  ElasticLogo,
  CloudflareLogo,
  MongodbLogo,
  AzureLogo,
  GrafanaLogo,
} from "@/components/logos";

const ROWS: { name: string; Logo: ComponentType<LogoProps> }[][] = [
  [
    { name: "AWS", Logo: AwsLogo },
    { name: "Okta", Logo: OktaLogo },
    { name: "GitHub", Logo: GithubLogo },
    { name: "Salesforce", Logo: SalesforceLogo },
    { name: "Snowflake", Logo: SnowflakeLogo },
    { name: "Qualys", Logo: QualysLogo },
  ],
  [
    { name: "Slack", Logo: SlackLogo },
    { name: "Jira", Logo: JiraLogo },
    { name: "Datadog", Logo: DatadogLogo },
    { name: "Terraform", Logo: TerraformLogo },
    { name: "Elastic", Logo: ElasticLogo },
    { name: "Snyk", Logo: SnykLogo },
  ],
  [
    { name: "Google Cloud", Logo: GooglecloudLogo },
    { name: "Docker", Logo: DockerLogo },
    { name: "Confluence", Logo: ConfluenceLogo },
    { name: "MongoDB", Logo: MongodbLogo },
    { name: "PagerDuty", Logo: PagerdutyLogo },
    { name: "Azure", Logo: AzureLogo },
  ],
  [
    { name: "1Password", Logo: Lcn1passwordLogo },
    { name: "Notion", Logo: NotionLogo },
    { name: "Splunk", Logo: SplunkLogo },
    { name: "Cloudflare", Logo: CloudflareLogo },
    { name: "Grafana", Logo: GrafanaLogo },
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
                      className="w-28 h-14 md:w-40 md:h-20 shrink-0 bg-white/5 flex items-center justify-center gap-2"
                    >
                      <item.Logo className="h-5 md:h-6 w-auto shrink-0" />
                      <span className="text-[10px] md:text-xs text-white/60 tracking-tight leading-tight">
                        {item.name}
                      </span>
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
