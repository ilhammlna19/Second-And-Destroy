import { products } from "../lib/products";

const base = "https://second-and-destroy.vercel.app";

export default function sitemap() {
  const pages = ["", "/tentang", "/cara-pesan", "/panduan-ukuran"].map((p) => ({ url: base + p, lastModified: new Date() }));
  const items = products.map((p) => ({ url: `${base}/produk/${p.id}`, lastModified: new Date() }));
  return [...pages, ...items];
}
