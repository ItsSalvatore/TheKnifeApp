import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { dir } from 'i18next'
import { languages } from '@/i18n/settings'
import I18nProvider from "@/components/I18nProvider";
import AnimatedHeader from "@/components/AnimatedHeader";
import '../globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://the-knife-app.vercel.app'),
  title: "The Knife - Your Social Food Discovery App",
  description: "Find the best restaurants, cafés, and bars in the Netherlands with our AI-powered social food discovery platform.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "The Knife - Social Food Discovery",
    description: "Join our community and discover amazing dining spots in the Netherlands with AI-powered recommendations.",
    images: ['/og-image.png'],
  },
  twitter: {
    title: "The Knife - Social Food Discovery",
    description: "Join our community and discover amazing dining spots in the Netherlands with AI-powered recommendations.",
    images: ['/twitter-image.png'],
    card: 'summary_large_image',
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <head />
      <body className={`${inter.className} bg-white text-gray-900`}>
        <I18nProvider locale={lng}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="light" 
            enableSystem={false}
            disableTransitionOnChange
          >
            <AnimatedHeader />
            <main className="relative min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
              {children}
            </main>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
} 