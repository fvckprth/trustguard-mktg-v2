import { sql } from "@vercel/postgres";
import { DEFAULTS } from "@/lib/content-defaults";
import { isAuthenticated } from "./actions";
import { LoginForm, ContentForm } from "./client";

async function getDbValues(): Promise<Record<string, string>> {
  try {
    const { rows } = await sql<{ key: string; value: string }>`
      SELECT key, value FROM content
    `;
    const map: Record<string, string> = {};
    for (const row of rows) {
      map[row.key] = row.value;
    }
    return map;
  } catch {
    return {};
  }
}

// Group keys by section for the admin UI
function groupKeys(keys: string[]): { section: string; keys: string[] }[] {
  const map = new Map<string, string[]>();

  for (const key of keys) {
    // e.g. "home.hero" from "home.hero.headline"
    const parts = key.split(".");
    const section = parts.slice(0, 2).join(".");
    if (!map.has(section)) {
      map.set(section, []);
    }
    map.get(section)!.push(key);
  }

  return Array.from(map.entries()).map(([section, sectionKeys]) => ({
    section,
    keys: sectionKeys,
  }));
}

export default async function AdminPage() {
  const authed = await isAuthenticated();

  if (!authed) {
    return <LoginForm />;
  }

  const dbValues = await getDbValues();
  const allKeys = Object.keys(DEFAULTS);
  const groups = groupKeys(allKeys);

  // Merge: DB overrides take precedence
  const values: Record<string, string> = {};
  for (const key of allKeys) {
    values[key] = dbValues[key] ?? DEFAULTS[key];
  }

  return <ContentForm groups={groups} values={values} />;
}
