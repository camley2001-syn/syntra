import { ImageResponse } from "next/og";

export const alt = "SYNTRA — Precision Engineered Silence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#f5f5f0",
          fontFamily: "Georgia, serif",
        }}
      >
        <p
          style={{
            fontSize: 14,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#6b6b6b",
            marginBottom: 24,
          }}
        >
          Precision Engineered Silence
        </p>
        <p
          style={{
            fontSize: 96,
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 0.9,
          }}
        >
          SYNTRA
        </p>
        <p
          style={{
            fontSize: 20,
            color: "#c9a55c",
            marginTop: 32,
            letterSpacing: "0.2em",
          }}
        >
          Hear nothing. Feel everything.
        </p>
      </div>
    ),
    { ...size },
  );
}
