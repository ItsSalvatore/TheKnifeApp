import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local';
import { dir } from 'i18next'
import { languages } from '@/i18n/settings'
import AnimatedHeader from "@/components/AnimatedHeader";
import { Providers } from "@/components/Providers";
import '../globals.css'
import '@/styles/themes.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const cupcakes = localFont({
  src: '../../assets/fonts/CupCakes.otf',
  variable: '--font-cupcake',
  preload: true,
  display: 'block',
  fallback: ['cursive'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://scout-app.vercel.app'),
  title: "Scout - à la jouw",
  description: "Ontdek jouw perfecte eetplekken, op jouw manier. Scout helpt je bij het vinden van restaurants die precies bij je passen.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <head>
        <link 
          rel="preload" 
          href="/assets/fonts/CupCakes.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="" 
          fetchPriority="high"
        />
      </head>
      <body className={`${poppins.variable} ${cupcakes.variable} antialiased min-h-screen font-normal bg-[#cddfcd] dark:bg-olive-900`}>
        <Providers locale={lng}>
          <AnimatedHeader />
          <main className="relative min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
} 