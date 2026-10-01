"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function Catalog({ products }) {
  const [filter, setFilter] = useState("Semua");
  const list = filter === "Semua" ? products : products.filter((p) => p.category === filter);
  return (
    <section id="koleksi" className="section">
      <div className="section-head">
        <h2>Koleksi</h2>
        <div className="filters">
          {["Semua", "Vintage", "Abstrak"].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={f === filter ? "on" : ""} aria-pressed={f === filter}>{f}</button>
          ))}
        </div>
      </div>
      <div className="grid">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
    </section>
  );
}
