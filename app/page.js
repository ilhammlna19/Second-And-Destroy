import Catalog from "../components/Catalog";
import Logo from "../components/Logo";
import { products } from "../lib/products";

const ticker = "VINTAGE ✶ ABSTRAK ✶ STOK TERBATAS ✶ KAOS PILIHAN ✶ SECOND AND DESTROY ✶ ";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Second<br />And<br /><span>Destroy</span></h1>
        <div className="hero-side">
          <div className="hero-logo"><Logo size={170} color="#EDE9DF" /></div>
          <p>Kaos vintage dan abstrak. Setiap desain hanya dicetak dalam jumlah terbatas, jadi tidak banyak orang yang punya yang sama denganmu.</p>
          <a href="#koleksi" className="btn">Lihat koleksi</a>
        </div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track"><span>{ticker.repeat(4)}</span><span>{ticker.repeat(4)}</span></div>
      </div>
      <Catalog products={products} />
    </>
  );
}
