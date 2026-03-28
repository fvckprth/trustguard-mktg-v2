"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { DEFAULTS } from "@/lib/content-defaults";

const SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours

function hashPassword(password: string): string {
  // Simple but sufficient for a single shared password comparison
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return hash.toString(36);
}

function makeToken(password: string): string {
  return hashPassword(password + "__trustguard_admin__");
}

export async function login(_prev: { error?: string }, formData: FormData) {
  const password = formData.get("password") as string;
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || password !== expected) {
    return { error: "Invalid password" };
  }

  const jar = await cookies();
  jar.set(SESSION_COOKIE, makeToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: SESSION_MAX_AGE,
  });

  return {};
}

export async function logout() {
  const jar = await cookies();
  jar.set(SESSION_COOKIE, "", {
    httpOnly: true,
    path: "/admin",
    maxAge: 0,
  });
}

export async function isAuthenticated(): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;

  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  return token === makeToken(expected);
}

export async function saveContent(formData: FormData) {
  if (!(await isAuthenticated())) {
    return { error: "Not authenticated" };
  }

  const entries: [string, string][] = [];
  for (const [key, value] of formData.entries()) {
    if (key.startsWith("content.")) {
      entries.push([key.slice("content.".length), value as string]);
    }
  }

  if (entries.length === 0) {
    return { error: "No content to save" };
  }

  try {
    for (const [key, value] of entries) {
      await sql`
        INSERT INTO content (key, value, updated_at)
        VALUES (${key}, ${value}, now())
        ON CONFLICT (key) DO UPDATE
        SET value = ${value}, updated_at = now()
      `;
    }

    revalidatePath("/");
    revalidatePath("/company");

    return { success: true };
  } catch (e) {
    return { error: `Database error: ${e instanceof Error ? e.message : String(e)}` };
  }
}

export async function seedContent() {
  if (!(await isAuthenticated())) {
    return { error: "Not authenticated" };
  }

  try {
    for (const [key, value] of Object.entries(DEFAULTS)) {
      await sql`
        INSERT INTO content (key, value, updated_at)
        VALUES (${key}, ${value}, now())
        ON CONFLICT (key) DO NOTHING
      `;
    }

    revalidatePath("/");
    revalidatePath("/company");

    return { success: true, count: Object.keys(DEFAULTS).length };
  } catch (e) {
    return { error: `Database error: ${e instanceof Error ? e.message : String(e)}` };
  }
}
