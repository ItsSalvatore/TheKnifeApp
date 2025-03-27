'use client';

import { ThemeProvider } from "@/components/ThemeProvider";
import I18nProvider from "@/components/I18nProvider";

export function Providers({
  children,
  locale
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <ThemeProvider>
      <I18nProvider locale={locale}>
        {children}
      </I18nProvider>
    </ThemeProvider>
  );
} 