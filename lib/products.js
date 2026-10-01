// Ganti nomor WhatsApp toko (format internasional, tanpa +)
export const WA_NUMBER = "629654539713";
export const SIZES = ["S", "M", "L", "XL"];

// Untuk pakai foto asli: taruh file di /public/produk/ lalu isi field image, mis. "/produk/rust-highway.jpg"
export const products = [
  { id: "kaos-vintage-nirvana", name: "Kaos Vintage Nirvana", category: "Vintage", price: 4500000, tee: "#232220", ink: "#EDE6D3", accent: "#E4361B", art: "sun", image: "/produk/kaos1.jpg",
    desc: "Kaos putih dengan grafis kolase foto konser hitam putih dan tipografi bergaya poster tur klasik. Warnanya bersih dan potongannya santai, mudah dipadukan dengan outfit apa saja. Stok terbatas." },
  { id: "sunday-roller-rink", name: "Sunday Roller Rink", category: "Vintage", price: 4200000, tee: "#D9D0B6", ink: "#232220", accent: "#2F5D7C", art: "rink", image: "/produk/kaos2.jpg",
    desc: "Kaos ringer putih dengan kerah dan ujung lengan navy, bergrafis truk bergaya poster acara otomotif lawas dengan aksen merah dan biru. Tampilan retro khas era 70-80an. Stok terbatas." },
  { id: "dust-bowl-tour-89", name: "Dust Bowl Tour '89", category: "Vintage", price: 4800000, tee: "#58697A", ink: "#F1EBDD", accent: "#E8B33A", art: "tour", image: "/produk/kaos3.jpg",
    desc: "Kaos warna krem dengan ilustrasi mobil klasik dan dua karakter bergaya poster vintage. Warnanya hangat dan kesan thrift-nya kuat. Stok terbatas." },
  { id: "static-bloom", name: "Static Bloom", category: "Abstrak", price: 4600000, tee: "#ECEAE3", ink: "#232220", accent: "#E4361B", art: "bloom", image: "/produk/kaos4.jpg",
    desc: "Kaos hitam dengan grafis wajah monokrom berefek glitch, dipadukan huruf besar yang menyatu dengan desain. Kontras hitam putihnya tegas dan artistik. Stok terbatas." },
  { id: "broken-grid", name: "Broken Grid", category: "Abstrak", price: 5000000, tee: "#1C1C1B", ink: "#EDE6D3", accent: "#E8B33A", art: "grid", image: "/produk/kaos5.jpg",
    desc: "Kaos hitam bertampilan washed dengan grafis wajah bergaya ilustrasi gelap yang dikelilingi bentuk bergerigi seperti ledakan. Tegas dan penuh karakter. Stok terbatas." },
  { id: "melt-form-03", name: "Melt Form No.3", category: "Abstrak", price: 4400000, tee: "#6B6A45", ink: "#F1EBDD", accent: "#E4361B", art: "melt", image: "/produk/kaos6.jpg",
    desc: "Kaos lengan panjang hitam berpotongan boxy dengan tulisan bergaya kaligrafi berwarna merah di bagian depan. Sederhana namun mencolok. Stok terbatas." },
];

export const getProduct = (id) => products.find((p) => p.id === id);
export const rupiah = (n) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
