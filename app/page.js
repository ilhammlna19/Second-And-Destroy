import Catalog from "../components/Catalog";
import { products } from "../lib/products";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Second<br />And<br />Destroy</h1>
        <div className="hero-side">
          <p>Kaos vintage dan abstrak. Setiap desain hanya dicetak dalam jumlah terbatas, jadi tidak banyak orang yang punya yang sama denganmu.</p>
          <a href="#koleksi" className="btn">Lihat koleksi</a>
        </div>
      </section>
      <Catalog products={products} />
    </>
  );
}
