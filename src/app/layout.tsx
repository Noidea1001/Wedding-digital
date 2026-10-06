import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vows & Bloom - Digital Wedding Invitation Platform",
  description: "Create elegant, interactive digital wedding invitations with real-time RSVP, WhatsApp links, music, and countdown timers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans antialiased text-slate-800 bg-[#FAF7F5] selection:bg-rose-200 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}
