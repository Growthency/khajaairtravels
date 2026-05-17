import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const required = ["name", "email", "phone", "service", "message"];
  for (const field of required) {
    const value = body[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      return NextResponse.json(
        { ok: false, error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  const lead = {
    name: String(body.name).trim().slice(0, 120),
    email: String(body.email).trim().slice(0, 160),
    phone: String(body.phone).trim().slice(0, 40),
    service: String(body.service).trim().slice(0, 80),
    message: String(body.message).trim().slice(0, 2000),
    source: "website",
    created_at: new Date().toISOString()
  };

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.info("[contact] Supabase not configured — printing payload.", lead);
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("leads").insert(lead);
  if (error) {
    console.error("[contact] supabase insert failed", error);
    return NextResponse.json(
      { ok: false, error: "Could not save lead. Please WhatsApp us." },
      { status: 500 }
    );
  }
  return NextResponse.json({ ok: true, stored: true });
}
