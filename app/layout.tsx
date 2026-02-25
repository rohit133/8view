import type { Metadata } from "next";
import { Playfair_Display, Elsie, Poppins } from "next/font/google";
import "./globals.css";

import { Toaster } from 'sonner';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const elsie = Elsie({
  subsets: ["latin"],
  variable: "--font-elsie",
  weight: ["400", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Luxury Resort",
  description: "The Luxury Resort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${elsie.variable} ${poppins.variable} antialiased`}>
        {children}
        <Toaster position="top-right" expand={true} />
      </body>
    </html>
  );
}
