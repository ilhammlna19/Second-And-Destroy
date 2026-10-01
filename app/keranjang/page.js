"use client";
import Link from "next/link";
import TeeArt from "../../components/TeeArt";
import { useCart } from "../../components/CartProvider";
import { getProduct, rupiah, WA_NUMBER } from "../../lib/products";

export default function CartPage() {
  const { items, change, clear, ready } = useCart();
  const rows = items.map((i) => ({ ...i, p: getProduct(i.id) })).filter((r) => r.p);
  const total = rows.reduce((n, r) => n + r.p.price * r.qty, 0);

  const message = encodeURIComponent(
    "Halo Second And Destroy, saya mau pesan:\n" +
    rows.map((r) => `- ${r.p.name} (${r.size}) x${r.qty} = ${rupiah(r.p.price * r.qty)}`).join("\n") +
    `\nTotal: ${rupiah(total)}\n\nNama:\nAlamat pengiriman:`
  );

  if (!ready) return <div className="detail"><h1>Keranjang</h1></div>;
  if (rows.length === 0)
    return (
      <div className="detail">
        <h1>Keranjang kosong</h1>
        <p className="desc">Pilih kaos dari koleksi, lalu tambahkan ke sini.</p>
        <Link href="/#koleksi" className="btn">Lihat koleksi</Link>
      </div>
    );

  return (
    <div className="detail">
      <h1>Keranjang</h1>
      <ul className="cart-list">
        {rows.map((r) => (
          <li key={r.id + r.size}>
            <div className="thumb">{r.p.image ? <img src={r.p.image} alt={r.p.name} /> : <TeeArt product={r.p} />}</div>
            <div className="cart-name"><strong>{r.p.name}</strong><span>Ukuran {r.size}</span></div>
            <div className="qty">
              <button onClick={() => change(r.id, r.size, -1)} aria-label="Kurangi">−</button>
              <span>{r.qty}</span>
              <button onClick={() => change(r.id, r.size, 1)} aria-label="Tambah">+</button>
            </div>
            <strong className="line">{rupiah(r.p.price * r.qty)}</strong>
          </li>
        ))}
      </ul>
      <div className="total"><span>Total</span><strong>{rupiah(total)}</strong></div>
      <div className="actions">
        <a className="btn" href={`https://wa.me/${WA_NUMBER}?text=${message}`} target="_blank" rel="noopener noreferrer">Pesan lewat WhatsApp</a>
        <button className="btn ghost" onClick={clear}>Kosongkan keranjang</button>
      </div>
    </div>
  );
}
