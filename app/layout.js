import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import CartProvider from "../components/CartProvider";
import Navbar from "../components/Navbar";
import { WA_NUMBER } from "../lib/products";

const GA_ID = "G-GYWN8BTN2C";
const IG_USERNAME = "secondanddestroy"; // GANTI dengan username Instagram tokomu (tanpa @)

export const metadata = {
  metadataBase: new URL("https://second-and-destroy.vercel.app"),
  title: { default: "Second And Destroy | Kaos Vintage & Abstrak", template: "%s | Second And Destroy" },
  description: "Toko kaos vintage dan abstrak dengan stok terbatas per desain. Pesan mudah lewat WhatsApp.",
  keywords: ["kaos vintage", "kaos abstrak", "thrift style", "Second And Destroy"],
  openGraph: {
    title: "Second And Destroy | Kaos Vintage & Abstrak",
    description: "Kaos vintage dan abstrak dengan stok terbatas. Pesan lewat WhatsApp.",
    siteName: "Second And Destroy",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="footer">
            <strong>Second And Destroy</strong>
            <span>Kaos vintage dan abstrak. Stok terbatas per desain.</span>
            <nav className="footer-links">
              <Link href="/tentang">Tentang</Link>
              <Link href="/cara-pesan">Cara Pesan</Link>
              <Link href="/panduan-ukuran">Panduan Ukuran</Link>
              <a href={`https://instagram.com/${IG_USERNAME}`} target="_blank" rel="noopener noreferrer">Instagram @{IG_USERNAME}</a>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </nav>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
