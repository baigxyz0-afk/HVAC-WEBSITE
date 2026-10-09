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
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#1b2838", color: "white", fontFamily: "serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, width: 860 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 64, height: 64, borderRadius: 14, background: "#2f6b5a", display: "flex" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 40, fontWeight: 700 }}>Aspenridge</span>
              <span style={{ fontSize: 16, letterSpacing: 6, color: "#bfe6d8" }}>HEATING & AIR</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, color: "#bfe6d8", textTransform: "uppercase", letterSpacing: 2 }}>{card.eyebrow}</span>
            <span style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, marginTop: 16 }}>{card.title}</span>
          </div>
          <span style={{ fontSize: 26, color: "rgba(255,255,255,0.75)" }}>Denver · Aurora · Lakewood · Littleton · Parker</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", flex: 1, background: "#efe6d6" }}>
          <div style={{ height: 120, background: "#e8c9a0", display: "flex" }} />
          <div style={{ height: 120, background: "#d6a36a", display: "flex" }} />
          <div style={{ height: 120, background: "#c2410c", display: "flex" }} />
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
