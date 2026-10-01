import { notFound } from "next/navigation";
import Link from "next/link";
import TeeArt from "../../../components/TeeArt";
import AddToCart from "../../../components/AddToCart";
import { products, getProduct, rupiah } from "../../../lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = getProduct(id);
  return p ? { title: p.name, description: p.desc } : {};
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const p = getProduct(id);
  if (!p) notFound();
  return (
    <div className="detail">
      <Link href="/#koleksi" className="inline-link">Kembali ke koleksi</Link>
      <div className="detail-grid">
        <div className="detail-img" style={{ background: p.tee + "22" }}>
          {p.image ? <img src={p.image} alt={p.name} /> : <TeeArt product={p} />}
        </div>
        <div>
          <span className="tag">{p.category}</span>
          <h1>{p.name}</h1>
          <p className="price">{rupiah(p.price)}</p>
          <p className="desc">{p.desc}</p>
          <AddToCart id={p.id} />
        </div>
      </div>
    </div>
  );
}
