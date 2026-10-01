import "./globals.css";
import { Archivo_Black, IBM_Plex_Sans } from "next/font/google";
import CartProvider from "../components/CartProvider";
import Navbar from "../components/Navbar";

const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = IBM_Plex_Sans({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: { default: "Second And Destroy | Kaos Vintage & Abstrak", template: "%s | Second And Destroy" },
  description: "Toko kaos vintage dan abstrak dengan stok terbatas per desain. Pesan mudah lewat WhatsApp.",
  keywords: ["kaos vintage", "kaos abstrak", "thrift style", "Second And Destroy"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="footer">
            <strong>Second And Destroy</strong>
            <span>Kaos vintage dan abstrak. Stok terbatas per desain.</span>
            <span>Instagram: @secondanddestroy</span>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
