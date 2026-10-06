import { NextResponse } from "next/server";
import { zipCoverage } from "@/content/coverage";

// ZIP coverage lookup for the ZIP checker and lead form. Returns no payout data.
export function GET(req: Request) {
  const zip = new URL(req.url).searchParams.get("zip") ?? "";
  if (!/^\d{5}$/.test(zip)) return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  const c = zipCoverage(zip);
  return NextResponse.json(c ? { ok: true, city: c.city, state: c.state } : { ok: false }, { headers: { "cache-control": "public, max-age=86400" } });
}
