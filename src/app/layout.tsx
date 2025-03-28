import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dir } from 'i18next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Knife - Your Perfect Spot Awaits",
  description: "Coming soon: AI-powered recommendations for the best cafés, restaurants, and bars in the Netherlands",
  icons: {
    icon: [
      { url: '/images/1.png', sizes: '32x32' },
      { url: '/images/2.png', sizes: '192x192' }
    ],
    apple: '/images/2.png',
  },
  openGraph: {
    title: "The Knife - Your Perfect Spot Awaits",
    description: "Coming soon: AI-powered recommendations for the best cafés, restaurants, and bars in the Netherlands",
    images: [
      {
        url: '/images/2.png',
        width: 192,
        height: 192,
        alt: 'The Knife App Icon',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
} 