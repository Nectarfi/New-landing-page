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
  title: "NectarFi - Receive, Save and Spend USD Globally powered by stablecoins",
  description: "Get a USD and EUR account with your name to receive or send money globally. Sign up for free, in a tap.",
  keywords: ["virtual card", "stablecoins", "USD card", "online payments", "international payments", "fintech", "NectarFi"],
  authors: [{ name: "NectarFi" }],
  creator: "NectarFi",
  publisher: "NectarFi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nectarfi.finance"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/images/nectar-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "NectarFi - Receive, Save and Spend USD Globally powered by stablecoins",
    description: "Get a USD and EUR account with your name to receive or send money globally. Sign up for free, in a tap.",
    url: "https://nectarfi.finance",
    siteName: "NectarFi",
    images: [
      {
        url: "/images/nectar-logo.png",
        width: 1200,
        height: 630,
        alt: "NectarFi - Virtual USD Cards",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NectarFi - Receive, Save and Spend USD Globally powered by stablecoins",
    description: "Get a USD and EUR account with your name to receive or send money globally. Sign up for free, in a tap.",
    images: ["/images/nectar-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
