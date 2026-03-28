import { cache } from "react";
import { sql } from "@vercel/postgres";
import { DEFAULTS } from "./content-defaults";

type ContentLookup = (key: string) => string;

/**
 * Fetches all content overrides from the database in a single query.
 * Returns a lookup function: c("home.hero.headline") → string.
 * Falls back to DEFAULTS when a key is missing or the DB is unreachable.
 * Deduplicated per render via React cache().
 */
export const getContent = cache(async (): Promise<ContentLookup> => {
  let overrides: Record<string, string> = {};

  try {
    const { rows } = await sql<{ key: string; value: string }>`
      SELECT key, value FROM content
    `;
    for (const row of rows) {
      overrides[row.key] = row.value;
    }
  } catch {
    // DB unreachable — fall back to defaults entirely
  }

  return (key: string): string => {
    return overrides[key] ?? DEFAULTS[key] ?? key;
  };
});
