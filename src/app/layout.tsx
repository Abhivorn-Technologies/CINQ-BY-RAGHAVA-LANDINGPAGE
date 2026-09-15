import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cinqbyraghava.com"),
  title: "CINQ by Raghava | Luxury Residences in Hyderabad",
  description:
    "Discover CINQ by Raghava, a premium residential development in Hyderabad's Financial District, Nanakramguda featuring 5 iconic 61-storey towers.",
  keywords: [
    "CINQ by Raghava",
    "Luxury Apartments Hyderabad",
    "Financial District Nanakramguda Residences",
    "Raghava Projects",
    "Luxury 4 BHK Hyderabad",
    "61 Storey Towers Hyderabad",
  ],
  authors: [{ name: "Raghava Projects" }],
  openGraph: {
    title: "CINQ by Raghava | Luxury Residences in Hyderabad",
    description:
      "A landmark luxury residential address in Hyderabad's Financial District. Five soaring towers crafted for multi-generational luxury.",
    url: "https://cinqbyraghava.com",
    siteName: "CINQ by Raghava",
    images: [
      {
        url: "/assets/hero/hero 2.png",
        width: 1200,
        height: 630,
        alt: "CINQ by Raghava Luxury Residences",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CINQ by Raghava | Luxury Residences in Hyderabad",
    description:
      "A landmark luxury residential address in Hyderabad's Financial District.",
    images: ["/assets/hero/hero 2.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#160608",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-brand-wine text-stone-200 antialiased selection:bg-brand-gold selection:text-brand-wine">
        {children}
      </body>
    </html>
  );
}
