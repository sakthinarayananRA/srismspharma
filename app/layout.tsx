import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Sms Pharma - Trusted Ophthalmic Pharma Wholesaler in South India",
  description: "Leading ophthalmic pharma wholesaler in South India. Authorized super stockist for Eye Reach Meds, delivering quality eye care products.",
  keywords: ["pharma", "ophthalmic", "wholesaler", "South India"],
  alternates: {
    canonical: "https://srismspharma.com/",
  },
  openGraph: {
    title: "Sri Sms Pharma - Trusted Ophthalmic Pharma Wholesaler in South India",
    description: "Leading ophthalmic pharma wholesaler in South India. Authorized super stockist for Eye Reach Meds, delivering quality eye care products.",
    url: "https://srismspharma.com/",
    siteName: "Sri Sms Pharma",
    images: [
      {
        url: "https://srismspharma.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Sri Sms Pharma",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Sms Pharma",
    description: "Ophthalmic pharma wholesaler in South India",
    images: ["https://srismspharma.com/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
