"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Navbar() {
  const { count } = useCart();
  return (
    <header className="nav">
      <Link href="/" className="logo">Second And Destroy</Link>
      <nav>
        <Link href="/#koleksi">Koleksi</Link>
        <Link href="/keranjang">Keranjang <span className="badge">{count}</span></Link>
      </nav>
    </header>
  );
}
