export const metadata = {
  title: "Panduan Ukuran",
  description: "Panduan ukuran kaos S, M, L, dan XL di Second And Destroy.",
};

const rows = [
  { s: "S", w: "52", l: "70" },
  { s: "M", w: "54", l: "72" },
  { s: "L", w: "56", l: "74" },
  { s: "XL", w: "58", l: "76" },
];

export default function PanduanUkuran() {
  return (
    <div className="info">
      <h1>Panduan Ukuran</h1>
      <p>Ukuran di bawah dalam sentimeter (cm). Cara mengukur: letakkan kaos yang pas di badanmu secara datar, lalu bandingkan lebar dada dan panjangnya.</p>
      <div className="size-wrap">
        <table className="size-table">
          <thead><tr><th>Ukuran</th><th>Lebar dada (cm)</th><th>Panjang (cm)</th></tr></thead>
          <tbody>
            {rows.map((r) => (<tr key={r.s}><td><b>{r.s}</b></td><td>{r.w}</td><td>{r.l}</td></tr>))}
          </tbody>
        </table>
      </div>
      <p className="note">Ukuran di atas adalah perkiraan. Setiap kaos bisa sedikit berbeda karena potongan dan bahannya, jadi tanyakan ukuran pastinya lewat WhatsApp sebelum memesan.</p>
    </div>
  );
}
