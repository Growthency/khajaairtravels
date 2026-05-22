import { ImageResponse } from "next/og";
import { SITE } from "@/lib/utils";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "white",
          fontFamily: "system-ui, sans-serif",
          background:
            "radial-gradient(at 20% 20%, #1f72e3 0%, transparent 50%), radial-gradient(at 80% 0%, #059669 0%, transparent 50%), radial-gradient(at 50% 90%, #f96e09 0%, transparent 50%), #0a1426"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a1426",
              fontSize: 24,
              fontWeight: 800
            }}
          >
            KAT
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>{SITE.name}</div>
            <div style={{ fontSize: 13, opacity: 0.7, textTransform: "uppercase", letterSpacing: 4 }}>
              Licence No-{SITE.licence}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 1000 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 16,
              color: "#a7f3d0",
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase"
            }}
          >
            Govt. Approved Hajj Agency
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 800, letterSpacing: -1.5 }}>
            Your journey to the Haramain begins with khedmat.
          </div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.75)", marginTop: 12 }}>
            Hajj · Umrah · Air Ticketing · Visa · Tours · Hotels
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(255,255,255,0.75)"
          }}
        >
          <span>khajaairtravels.com</span>
          <span>Dhaka · Bangladesh</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
