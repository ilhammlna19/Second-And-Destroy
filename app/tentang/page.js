import Link from "next/link";
import { WA_NUMBER } from "../../lib/products";

export const metadata = {
  title: "Tentang Kami",
  description: "Second And Destroy adalah toko kaos vintage dan abstrak dengan stok terbatas per desain.",
};

export default function Tentang() {
  return (
    <div className="info">
      <h1>Tentang Kami</h1>
      <p>Second And Destroy adalah toko kaos vintage dan abstrak. Setiap desain dipilih satu per satu dan tersedia dalam jumlah terbatas, supaya kaos yang kamu pakai tidak pasaran.</p>

      <h2>Apa yang kami jual</h2>
      <p><b>Vintage:</b> kaos bernuansa era lama, mulai dari poster konser, desain retro, sampai gaya thrift yang khas.</p>
      <p><b>Abstrak:</b> kaos dengan grafis berani, bentuk dan wajah yang diolah secara artistik, untuk kamu yang suka tampil beda.</p>

      <h2>Kenapa stok terbatas</h2>
      <p>Kami tidak mengejar jumlah. Satu desain hanya tersedia sedikit, dan kalau sudah habis ditandai Stok habis di halaman produk.</p>

      <h2>Mau bertanya dulu?</h2>
      <p>Tanya ukuran, kondisi kaos, atau ketersediaan langsung lewat WhatsApp.</p>
      <a className="btn" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">Chat lewat WhatsApp</a>
      {" "}
      <Link href="/#koleksi" className="inline-link">Lihat koleksi</Link>
    </div>
  );
}
