// Mockup kaos berbentuk SVG, jadi tidak butuh file gambar. Ganti dengan foto asli lewat field `image` di lib/products.js
export default function TeeArt({ product }) {
  const { tee, ink, accent, art, name } = product;
  return (
    <svg viewBox="0 0 300 340" role="img" aria-label={`Kaos ${name}`} className="tee">
      <path d="M95 20 L60 35 L15 90 L55 115 L75 95 L75 320 L225 320 L225 95 L245 115 L285 90 L240 35 L205 20 Q150 62 95 20Z" fill={tee} />
      <g>
        {art === "sun" && (<>
          <circle cx="150" cy="150" r="46" fill={accent} />
          {[150, 165, 178, 190].map((y, i) => <rect key={y} x="95" y={y} width="110" height={2 + i * 2} fill={tee} />)}
          <text x="150" y="228" textAnchor="middle" fontSize="20" fontWeight="900" fill={ink} fontFamily="Impact, sans-serif">HIGHWAY 1994</text>
        </>)}
        {art === "rink" && (<>
          <circle cx="150" cy="150" r="52" fill="none" stroke={ink} strokeWidth="6" />
          <circle cx="150" cy="150" r="34" fill="none" stroke={accent} strokeWidth="6" />
          <circle cx="150" cy="150" r="14" fill={ink} />
          <text x="150" y="228" textAnchor="middle" fontSize="16" fontWeight="900" fill={ink} fontFamily="Impact, sans-serif">SUNDAY ROLLER RINK</text>
        </>)}
        {art === "tour" && (<>
          <text x="150" y="140" textAnchor="middle" fontSize="38" fontWeight="900" fill={ink} fontFamily="Impact, sans-serif">DUST BOWL</text>
          <rect x="100" y="150" width="100" height="6" fill={accent} />
          <text x="150" y="190" textAnchor="middle" fontSize="30" fontWeight="900" fill={ink} fontFamily="Impact, sans-serif">TOUR '89</text>
          <text x="150" y="222" textAnchor="middle" fontSize="18" fill={accent}>★ ★ ★ ★ ★</text>
        </>)}
        {art === "bloom" && (<g style={{ mixBlendMode: "multiply" }}>
          <circle cx="128" cy="140" r="42" fill={accent} opacity=".85" />
          <circle cx="170" cy="150" r="42" fill="#E8B33A" opacity=".85" />
          <circle cx="148" cy="185" r="42" fill="#2F5D7C" opacity=".85" />
        </g>)}
        {art === "grid" && (<>
          <path d="M100 100 H150 V150 H100Z" fill={ink} />
          <path d="M158 108 H205 V150 H158Z" fill={accent} />
          <path d="M104 160 H146 V212 H104Z" fill="none" stroke={ink} strokeWidth="5" />
          <path d="M160 160 L206 168 L198 214 L156 206Z" fill={ink} />
        </>)}
        {art === "melt" && (<>
          <path d="M100 110 Q150 80 200 115 Q215 150 190 170 Q205 205 170 215 Q150 190 130 215 Q95 200 110 165 Q85 140 100 110Z" fill={ink} />
          <circle cx="150" cy="150" r="16" fill={accent} />
        </>)}
      </g>
    </svg>
  );
}
