import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { withBasePath } from "@/lib/publicPath";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "BeauDev - Belleza y Tecnología en Código",
  description:
    "Consultora de programación y diseño digital que crea páginas web con belleza, funcionalidad y armonía visual.",
  generator: "v0.app",
  keywords: [
    "desarrollo web",
    "diseño web",
    "UX/UI",
    "programación",
    "consultora digital",
  ],
  authors: [{ name: "BeauDev" }],

  icons: {
    icon: [
      {
        url: withBasePath("/images/design-mode/logo.png"),
        media: "(prefers-color-scheme: light)",
      },
      {
        url: withBasePath("/images/design-mode/logo.png"),
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: withBasePath("/images/design-mode/logo.png"),
        type: "image/png",
      },
    ],
    apple: withBasePath("/images/design-mode/logo.png"),
  },
};

export const viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
