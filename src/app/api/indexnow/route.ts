import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { DEFAULT_INDEXNOW_KEY, submitUrlsToIndexNow } from "@/lib/indexnow";
import { indexableUrls } from "@/lib/sitemap";

export async function GET() {
  const key = process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
  return NextResponse.json({
    status: "active",
    host: new URL(site.url).host,
    keyConfigured: Boolean(key),
    keyLocation: `${site.url}/${key}.txt`,
    endpoints: ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"],
    documentation: "https://www.indexnow.org/",
  });
}

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");
  const secret = process.env.LEAD_WEBHOOK_SECRET || process.env.INDEXNOW_SECRET;

  // Protect submission endpoint in production if secret is configured
  if (secret && authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let body: { urls?: string[]; force?: boolean } = {};
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  let urls = body.urls;
  if (!urls || urls.length === 0) {
    urls = indexableUrls().map((u) => `${site.url}${u.path}`);
  }

  try {
    const results = await submitUrlsToIndexNow({
      host: new URL(site.url).host,
      urls,
      force: body.force ?? false,
    });
    return NextResponse.json({ ok: true, results });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
