import { FadeUp } from "@/components/fade-up";
import { getContent } from "@/lib/content";

const ROWS: { name: string; src: string }[][] = [
  [
    { name: "AWS", src: "https://svgl.app/library/aws_dark.svg" },
    { name: "Auth0", src: "https://svgl.app/library/auth0.svg" },
    { name: "GitHub", src: "https://svgl.app/library/github_dark.svg" },
    { name: "Salesforce", src: "https://svgl.app/library/salesforce.svg" },
    { name: "Kubernetes", src: "https://svgl.app/library/kubernetes.svg" },
    { name: "Defender", src: "https://svgl.app/library/microsoft-defender.svg" },
    { name: "Vercel", src: "https://svgl.app/library/vercel_dark.svg" },
    { name: "Snowflake", src: "https://cdn.simpleicons.org/snowflake/29B5E8" },
    { name: "Slack", src: "https://svgl.app/library/slack.svg" },
    { name: "Stripe", src: "https://svgl.app/library/stripe.svg" },
  ],
  [
    { name: "Atlassian", src: "https://svgl.app/library/atlassian.svg" },
    { name: "Datadog", src: "https://svgl.app/library/datadog.svg" },
    { name: "Terraform", src: "https://svgl.app/library/terraform.svg" },
    { name: "GitLab", src: "https://svgl.app/library/gitlab.svg" },
    { name: "PostgreSQL", src: "https://svgl.app/library/postgresql.svg" },
    { name: "Twilio", src: "https://svgl.app/library/twilio.svg" },
    { name: "Google Cloud", src: "https://svgl.app/library/google-cloud.svg" },
    { name: "Docker", src: "https://svgl.app/library/docker.svg" },
    { name: "Dropbox", src: "https://svgl.app/library/dropbox.svg" },
    { name: "MongoDB", src: "https://svgl.app/library/mongodb-icon-dark.svg" },
  ],
  [
    { name: "Linear", src: "https://svgl.app/library/linear.svg" },
    { name: "Azure", src: "https://svgl.app/library/azure.svg" },
    { name: "Supabase", src: "https://svgl.app/library/supabase.svg" },
    { name: "Kafka", src: "https://cdn.simpleicons.org/apachekafka/white" },
    { name: "1Password", src: "https://svgl.app/library/1password-dark.svg" },
    { name: "Notion", src: "https://svgl.app/library/notion.svg" },
    { name: "Postman", src: "https://svgl.app/library/postman.svg" },
    { name: "Cloudflare", src: "https://svgl.app/library/cloudflare.svg" },
    { name: "Grafana", src: "https://svgl.app/library/grafana.svg" },
    { name: "Redis", src: "https://svgl.app/library/redis.svg" },
  ],
];

export async function Integrations() {
  const c = await getContent();

  return (
    <section className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
      <div className="bg-[#191919] px-6 md:px-20 py-12 md:py-20 shadow-2xl overflow-hidden">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <FadeUp className="w-full max-w-[700px] flex flex-col gap-4 items-center text-center">
          <p className="text-2xl md:text-4xl tracking-tight leading-tight text-white">
            {c("home.integrations.heading")}
          </p>
          <p className="text-sm md:text-xl tracking-tight leading-relaxed text-white/50">
            {c("home.integrations.subheading")}
          </p>
        </FadeUp>

        <FadeUp delay={100} className="w-full">
          <div className="flex flex-col gap-2 md:gap-3 -mx-6 md:-mx-20 [--row-offset:-2.25rem] md:[--row-offset:-3.875rem] [--fade-start:12%] [--fade-end:88%] md:[--fade-start:8%] md:[--fade-end:92%]">
            {ROWS.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="w-full overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(90deg, transparent 0%, #000 var(--fade-start), #000 var(--fade-end), transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, #000 var(--fade-start), #000 var(--fade-end), transparent 100%)",
                }}
              >
                <div
                  className="flex gap-2 md:gap-3"
                  style={{
                    transform: rowIndex % 2 === 1 ? "translateX(var(--row-offset))" : undefined,
                  }}
                >
                  {[...row, ...row, ...row].map((item, i) => (
                    <div
                      key={`${item.name}-${rowIndex}-${i}`}
                      className="w-16 h-16 md:w-28 md:h-28 shrink-0 bg-white/5 flex flex-col items-center justify-center gap-0 md:gap-3"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.src}
                        alt={item.name}
                        className="h-5 md:h-7 w-auto shrink-0"
                        loading="lazy"
                      />
                      <span className="hidden md:block text-sm text-white/60 tracking-tight leading-tight">
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
