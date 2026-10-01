import Catalog from "../components/Catalog";
import Logo from "../components/Logo";
import { products, WA_NUMBER } from "../lib/products";

const ticker = "VINTAGE ✶ ABSTRAK ✶ STOK TERBATAS ✶ KAOS PILIHAN ✶ SECOND AND DESTROY ✶ ";
const pics = [products[0], products[4], products[2]].filter((p) => p && p.image);
const perks = [
  { n: "01", t: "Stok terbatas", d: "Setiap desain hanya tersedia dalam jumlah kecil." },
  { n: "02", t: "Vintage dan abstrak", d: "Dipilih satu per satu, bukan kaos pasaran." },
  { n: "03", t: "Order lewat WhatsApp", d: "Pilih kaos, kirim pesanan, langsung chat penjual." },
];
const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Second And Destroy, saya tertarik dengan koleksi kaosnya.")}`;

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>Second<br />And<br /><span>Destroy</span></h1>
          <p>Kaos vintage dan abstrak. Setiap desain hanya dicetak dalam jumlah terbatas, jadi tidak banyak orang yang punya yang sama denganmu.</p>
          <a href="#koleksi" className="btn">Lihat koleksi</a>
        </div>
        <div className="hero-collage">
          {pics.map((p, i) => (
            <div key={p.id} className={`pic pic-${i + 1}`}>
              <img src={p.image} alt={p.name} />
            </div>
          ))}
          <div className="hero-logo-sticker"><Logo size={110} color="#EDE6D3" /></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track"><span>{ticker.repeat(4)}</span><span>{ticker.repeat(4)}</span></div>
      </div>

      <section className="perks">
        {perks.map((x) => (
          <div key={x.n} className="perk">
            <b>{x.n}</b>
            <h3>{x.t}</h3>
            <p>{x.d}</p>
          </div>
        ))}
      </section>

      <Catalog products={products} />

      <section className="cta">
        <h2>Ada yang kamu suka?</h2>
        <a className="btn" href={waLink} target="_blank" rel="noopener noreferrer">Chat lewat WhatsApp</a>
      </section>
    </>
  );
}
