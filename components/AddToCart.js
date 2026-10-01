"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { SIZES } from "../lib/products";

export default function AddToCart({ id, soldOut = false }) {
  const { add } = useCart();
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);

  return (
    <div>
      {!soldOut && (
        <>
          <p className="label">Ukuran</p>
          <div className="sizes">
            {SIZES.map((s) => (
              <button key={s} onClick={() => setSize(s)} className={s === size ? "on" : ""} aria-pressed={s === size}>{s}</button>
            ))}
          </div>
        </>
      )}
      <button
        className="btn"
        disabled={soldOut}
        onClick={() => { add(id, size); setAdded(true); setTimeout(() => setAdded(false), 1800); }}
      >
        {soldOut ? "Stok habis" : added ? "Masuk keranjang" : "Tambah ke keranjang"}
      </button>
      {added && <Link href="/keranjang" className="inline-link">Lihat keranjang</Link>}
    </div>
  );
}
