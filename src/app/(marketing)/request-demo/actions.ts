"use server";

import { sql } from "@vercel/postgres";

export async function submitDemoRequest(formData: FormData) {
  const fullName = (formData.get("fullName") as string)?.trim();
  const workEmail = (formData.get("workEmail") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const message = (formData.get("message") as string)?.trim() || null;

  if (!fullName || !workEmail || !company) {
    return { error: "Please fill in all required fields." };
  }

  try {
    await sql`
      INSERT INTO demo_requests (full_name, work_email, company, message)
      VALUES (${fullName}, ${workEmail}, ${company}, ${message})
    `;
    return { success: true };
  } catch (e) {
    console.error("Failed to save demo request:", e);
    return { error: "Something went wrong. Please try again." };
  }
}
