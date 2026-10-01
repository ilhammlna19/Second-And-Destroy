import "./globals.css";
import { Archivo_Black, IBM_Plex_Sans } from "next/font/google";
import CartProvider from "../components/CartProvider";
import Navbar from "../components/Navbar";
import Script from "next/script";
const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = IBM_Plex_Sans({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-body" });

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

   const GA_ID = "G-GYWN8BTN2C";

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
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
            <span>Instagram: @secondanddestroy</span>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
