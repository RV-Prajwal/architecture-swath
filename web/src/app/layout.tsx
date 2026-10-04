import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Architecture + Swath | Award-Winning Architectural Design Studio, Bengaluru",
  description:
    "Architecture + Swath is a boutique architectural and interior design studio in Bengaluru, founded by Ar. Meinathan N (FOAID 2022 Gold Winner) and Ar. Sai Harini Karthikeyan. Specialising in bespoke courtyard residences, Kerala Vastu-informed spatial planning, and premium villa design.",
  keywords: [
    "architecture studio Bengaluru",
    "luxury residence design",
    "FOAID award architect",
    "Kerala Vastu architecture",
    "courtyard house designer",
    "boutique architecture firm India",
    "Ar Meinathan N",
    "Architecture Swath",
    "interior design HSR Layout",
  ],
  openGraph: {
    title: "Architecture + Swath — Bengaluru's Boutique Architecture Studio",
    description:
      "FOAID 2022 Gold Award-winning studio designing bespoke courtyard homes in Bengaluru.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
