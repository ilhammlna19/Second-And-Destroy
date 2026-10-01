// Ganti nomor WhatsApp toko (format internasional, tanpa +)
export const WA_NUMBER = "629654539713";
export const SIZES = ["S", "M", "L", "XL"];

// Untuk pakai foto asli: taruh file di /public/produk/ lalu isi field image, mis. "/produk/rust-highway.jpg"
export const products = [
  { id: "rust-highway-94", name: "Kaos Vintage Nirvana", category: "Vintage", price: 175000, tee: "#232220", ink: "#EDE6D3", accent: "#E4361B", art: "sun", image: null,
    desc: "Kaos band original, kondisi 9/10, ukuran L. Bahan cotton combed 24s, potongan boxy." },
  { id: "sunday-roller-rink", name: "Sunday Roller Rink", category: "Vintage", price: 149000, tee: "#D9D0B6", ink: "#232220", accent: "#2F5D7C", art: "rink", image: null,
    desc: "Warna krem pudar dengan grafis lingkaran bertumpuk seperti logo arena roller skate lawas. Nyaman untuk dipakai harian." },
  { id: "dust-bowl-tour-89", name: "Dust Bowl Tour '89", category: "Vintage", price: 169000, tee: "#58697A", ink: "#F1EBDD", accent: "#E8B33A", art: "tour", image: null,
    desc: "Kaos band tour fiktif dengan tipografi tebal dan bintang. Biru abu-abu washed, kesan thrift langsung terasa." },
  { id: "static-bloom", name: "Static Bloom", category: "Abstrak", price: 179000, tee: "#ECEAE3", ink: "#232220", accent: "#E4361B", art: "bloom", image: null,
    desc: "Lingkaran transparan yang saling menumpuk, warnanya bercampur di tengah. Satu desain, tidak ada dua sablon yang sama persis." },
  { id: "broken-grid", name: "Broken Grid", category: "Abstrak", price: 189000, tee: "#1C1C1B", ink: "#EDE6D3", accent: "#E8B33A", art: "grid", image: null,
    desc: "Kisi-kisi yang pecah dan bergeser. Hitam pekat dengan sablon dua warna, tegas dan minimal." },
  { id: "melt-form-03", name: "Melt Form No.3", category: "Abstrak", price: 175000, tee: "#6B6A45", ink: "#F1EBDD", accent: "#E4361B", art: "melt", image: null,
    desc: "Bentuk organik yang meleleh di dada. Hijau zaitun dengan tinta krem, cocok dipadukan dengan celana cargo." },
];

export const getProduct = (id) => products.find((p) => p.id === id);
export const rupiah = (n) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
