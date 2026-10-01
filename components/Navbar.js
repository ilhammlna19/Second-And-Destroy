"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
import Logo from "./Logo";

export default function Navbar() {
  const { count } = useCart();
  return (
    <header className="nav">
      <Link href="/" className="brand">
        <Logo size={46} color="#EDE9DF" />
        <span>Second And Destroy</span>
      </Link>
      <nav>
        <Link href="/#koleksi">Koleksi</Link>
        <Link href="/keranjang">Keranjang <span className="badge">{count}</span></Link>
      </nav>
    </header>
  );
}
