import Link from "next/link";
import TeeArt from "./TeeArt";
import { rupiah } from "../lib/products";

export default function ProductCard({ product }) {
  return (
    <Link href={`/produk/${product.id}`} className={`card${product.soldOut ? " soldout" : ""}`}>
      <div className="card-img" style={{ background: product.tee + "22" }}>
        <span className="sticker">{product.category}</span>
        {product.soldOut && <span className="sold-badge">Stok habis</span>}
        {product.image ? <img src={product.image} alt={product.name} /> : <TeeArt product={product} />}
      </div>
      <div className="card-info">
        <h3>{product.name}</h3>
        <strong>{rupiah(product.price)}</strong>
      </div>
    </Link>
  );
}
