import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  // If explicitly designated as staging environment, disallow all crawlers
  if (process.env.NEXT_PUBLIC_ENV === "staging") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  const params = ["utm_", "gclid", "gbraid", "wbraid", "fbclid", "msclkid", "kw", "ref"];
  const disallowPaths = ["/api/", "/thank-you/", "/request-service/", "/lp/", ...params.flatMap((p) => [`/*?${p}`, `/*&${p}`])];

  // Specific AI retrieval & search engine user-agents for citation readiness and Answer Engine Optimization (AEO/GEO)
  const allowedUserAgents = [
    "*",
    "Googlebot",
    "Bingbot",
    "Slurp",
    "DuckDuckBot",
    "GPTBot",
    "ChatGPT-User",
    "PerplexityBot",
    "ClaudeBot",
    "Applebot-Extended",
    "Amazonbot",
  ];

  return {
    rules: allowedUserAgents.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: disallowPaths,
    })),
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
