import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const sans  = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Modera Modular – Design. Define. Dwell.",
  description: "Premium modular kitchens & furniture in Mumbai.",
  openGraph: {
    title: "Modera Modular",
    description: "Premium modular kitchens & furniture in Mumbai.",
    url: "https://www.moderamodular.com",
    siteName: "Modera Modular",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-modera-green text-white font-sans">{children}</body>
    </html>
  );
}
