import Link from "next/link";

export const metadata = {
  title: "Cara Pesan dan Pengiriman",
  description: "Langkah memesan kaos di Second And Destroy lewat WhatsApp, mulai dari memilih ukuran sampai pengiriman.",
};

export default function CaraPesan() {
  return (
    <div className="info">
      <h1>Cara Pesan</h1>
      <p>Pesan kaos cukup lima langkah, tanpa perlu membuat akun.</p>
      <ol className="steps">
        <li><b>Pilih kaos dan ukuran</b>Buka koleksi, klik kaos yang kamu suka, lalu pilih ukuran. Cek dulu <Link href="/panduan-ukuran" className="inline-link">panduan ukuran</Link>.</li>
        <li><b>Tambah ke keranjang</b>Kamu bisa memasukkan beberapa kaos sekaligus.</li>
        <li><b>Kirim pesanan lewat WhatsApp</b>Di halaman keranjang, klik Pesan lewat WhatsApp. Daftar pesanan dan total sudah terisi otomatis, tinggal tambahkan nama dan alamat.</li>
        <li><b>Konfirmasi dan pembayaran</b>Penjual mengecek stok, lalu memberi tahu total beserta ongkos kirim dan cara pembayarannya lewat chat.</li>
        <li><b>Pengiriman</b>Kaos dikirim setelah pembayaran terkonfirmasi. Estimasi waktu sampai disampaikan lewat chat.</li>
      </ol>
      <p className="note">Ketentuan tukar ukuran, ongkos kirim, dan metode pembayaran dibicarakan lewat WhatsApp sebelum pembayaran.</p>
    </div>
  );
}
