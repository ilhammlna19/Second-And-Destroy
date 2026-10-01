// Logo stempel Second And Destroy (SVG). Ubah warna lewat props color dan accent.
export default function Logo({ size = 48, color = "#141312", accent = "#E4361B" }) {
  const f = { fontFamily: "var(--f-display), Impact, 'Arial Black', sans-serif" };
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" role="img" aria-label="Logo Second And Destroy">
      <defs>
        <path id="sad-ring" d="M100,100 m-73,0 a73,73 0 1,1 146,0 a73,73 0 1,1 -146,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke={color} strokeWidth="5" />
      <circle cx="100" cy="100" r="53" fill="none" stroke={color} strokeWidth="3" />
      <text fontSize="20" fill={color} style={f}>
        <textPath href="#sad-ring" textLength="450" lengthAdjust="spacing">SECOND AND DESTROY ✶ VINTAGE ✶ ABSTRAK ✶</textPath>
      </text>
      <text x="100" y="121" textAnchor="middle" fontSize="54" style={f}>
        <tspan fill={color}>S</tspan><tspan fill={accent}>/</tspan><tspan fill={color}>D</tspan>
      </text>
      <path d="M62 150 L138 150" stroke={accent} strokeWidth="4" />
    </svg>
  );
}
