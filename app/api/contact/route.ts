// Minimal POST stub; we’ll wire to email/CRM later
import { NextResponse } from "next/server";
export async function POST() {
  return NextResponse.json({ ok: true });
}
