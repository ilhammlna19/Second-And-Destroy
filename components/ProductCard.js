import Link from "next/link";
import TeeArt from "./TeeArt";
import { rupiah } from "../lib/products";

export default function ProductCard({ product }) {
  return (
    <Link href={`/produk/${product.id}`} className="card">
      <div className="card-img" style={{ background: product.tee + "22" }}>
        {product.image ? <img src={product.image} alt={product.name} /> : <TeeArt product={product} />}
      </div>
      <div className="card-info">
        <div>
          <h3>{product.name}</h3>
          <span className="tag">{product.category}</span>
        </div>
        <strong>{rupiah(product.price)}</strong>
      </div>
    </Link>
  );
}
