import { ImageResponse } from "next/og";
import { ogCards } from "@/lib/og";

export const dynamicParams = false;
export function generateStaticParams() {
  return ogCards().map((c) => ({ key: `${c.key}.png` }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ key: string }> }) {
  const key = (await params).key.replace(/\.png$/, "");
  const card = ogCards().find((c) => c.key === key) ?? ogCards()[0];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#14263a", color: "white", fontFamily: "serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, width: 860 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <svg width="64" height="64" viewBox="0 0 40 40">
              <rect width="40" height="40" rx="9" fill="#ffffff" fillOpacity="0.08" />
              <path d="M7.5 19.5 20 8.5l12.5 11" fill="none" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.5 17.2v14.3h17V17.2" fill="none" stroke="#ffffff" strokeWidth="2.3" strokeLinejoin="round" />
              <path d="M16 21.4v7.4M12.8 23.25l6.4 3.7M12.8 26.95l6.4-3.7" fill="none" stroke="#4aa8ec" strokeWidth="1.7" strokeLinecap="round" />
              <path d="M24.3 20.6c2 1.7 3.5 3.5 3.5 5.5a3.4 3.4 0 0 1-6.8 0c0-1.25.6-2.2 1.35-2.9.2 1 .8 1.65 1.45 1.65 0-1.65-.3-2.85.5-4.25z" fill="#f08a35" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 40, fontWeight: 700 }}>HVAC Services Hub</span>
              <span style={{ fontSize: 16, letterSpacing: 6, color: "#bfdcf5" }}>HEATING · COOLING · AIR</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, color: "#bfdcf5", textTransform: "uppercase", letterSpacing: 2 }}>{card.eyebrow}</span>
            <span style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, marginTop: 16 }}>{card.title}</span>
          </div>
          <span style={{ fontSize: 26, color: "rgba(255,255,255,0.75)" }}>All 50 states · Washington, D.C.</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, background: "#1f6fb2" }}>
          <svg width="230" height="230" viewBox="0 0 40 40">
            <rect width="40" height="40" rx="9" fill="#14263a" />
            <path d="M7.5 19.5 20 8.5l12.5 11" fill="none" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.5 17.2v14.3h17V17.2" fill="none" stroke="#ffffff" strokeWidth="2.3" strokeLinejoin="round" />
            <path d="M16 21.4v7.4M12.8 23.25l6.4 3.7M12.8 26.95l6.4-3.7" fill="none" stroke="#4aa8ec" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M24.3 20.6c2 1.7 3.5 3.5 3.5 5.5a3.4 3.4 0 0 1-6.8 0c0-1.25.6-2.2 1.35-2.9.2 1 .8 1.65 1.45 1.65 0-1.65-.3-2.85.5-4.25z" fill="#f08a35" />
          </svg>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
