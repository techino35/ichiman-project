import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "転生メーカー";
  const charClass = searchParams.get("class") || "";
  const race = searchParams.get("race") || "";
  const level = searchParams.get("level") || "";
  const skill = searchParams.get("skill") || "";
  const rarity = searchParams.get("rarity") || "";
  const name = searchParams.get("name") || "";

  const rarityColor: Record<string, string> = {
    UR: "#ff2d55",
    SSR: "#ffd700",
    SR: "#a855f7",
    R: "#3b82f6",
    N: "#9ca3af",
  };

  const color = rarityColor[rarity] || "#d4a847";
  const isDefault = !name;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200",
          height: "630",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0a0a12, #1a1a2e, #0a0a12)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Border */}
        <div
          style={{
            position: "absolute",
            inset: "12px",
            border: `3px solid ${color}40`,
            borderRadius: "24px",
            display: "flex",
          }}
        />

        {isDefault ? (
          /* Default OGP - サイト紹介 */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "24",
                color: "#d4a84780",
                letterSpacing: "8px",
                marginBottom: "16",
                display: "flex",
              }}
            >
              AI ISEKAI DIAGNOSTIC
            </div>
            <div
              style={{
                fontSize: "64",
                fontWeight: "900",
                color: "#d4a847",
                marginBottom: "24",
                display: "flex",
              }}
            >
              転生メーカー
            </div>
            <div
              style={{
                fontSize: "32",
                color: "#e8e6df",
                marginBottom: "16",
                display: "flex",
              }}
            >
              異世界に転生したら何者になる？
            </div>
            <div
              style={{
                fontSize: "20",
                color: "#888",
                display: "flex",
              }}
            >
              AIがあなたの異世界転生ステータスを診断
            </div>
          </div>
        ) : (
          /* Result OGP - 診断結果 */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Rarity */}
            <div
              style={{
                fontSize: "20",
                fontWeight: "900",
                color: color,
                letterSpacing: "4px",
                border: `2px solid ${color}`,
                borderRadius: "999px",
                padding: "6px 24px",
                marginBottom: "20",
                display: "flex",
              }}
            >
              {rarity}
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: "48",
                fontWeight: "900",
                color: color,
                marginBottom: "8",
                display: "flex",
              }}
            >
              {title}
            </div>

            {/* Name */}
            <div
              style={{
                fontSize: "28",
                color: "#e8e6df",
                marginBottom: "12",
                display: "flex",
              }}
            >
              {name}
            </div>

            {/* Class / Race / Level */}
            <div
              style={{
                fontSize: "20",
                color: "#888",
                marginBottom: "32",
                display: "flex",
                gap: "16px",
              }}
            >
              <span>{race}</span>
              <span style={{ color: color }}>|</span>
              <span>{charClass}</span>
              <span style={{ color: color }}>|</span>
              <span>Lv.{level}</span>
            </div>

            {/* Skill */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: `1px solid ${color}40`,
                borderRadius: "16px",
                padding: "16px 32px",
                background: `${color}10`,
              }}
            >
              <div
                style={{
                  fontSize: "14",
                  color: "#d4a847",
                  letterSpacing: "3px",
                  marginBottom: "8",
                  display: "flex",
                }}
              >
                CHEAT SKILL
              </div>
              <div
                style={{
                  fontSize: "32",
                  fontWeight: "900",
                  color: "#ffd700",
                  display: "flex",
                }}
              >
                {skill}
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                position: "absolute",
                bottom: "28",
                fontSize: "16",
                color: "#555",
                display: "flex",
              }}
            >
              tensei-maker | あなたも転生してみる →
            </div>
          </div>
        )}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
