import { ImageResponse } from "next/og";

export const alt = "Second And Destroy - Kaos Vintage dan Abstrak";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#E8B33A", color: "#1D2B3A" }}>
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 6 }}>KAOS VINTAGE DAN ABSTRAK</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, fontWeight: 900, lineHeight: 0.95, textTransform: "uppercase" }}>
          <span>Second</span>
          <span>And</span>
          <span style={{ color: "#E4361B" }}>Destroy</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
