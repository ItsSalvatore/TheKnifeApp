'use client'

import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import i18next from 'i18next'

// Create a context to hold the current language
export const I18nContext = createContext({
  locale: 'en',
  setLocale: (_locale: string) => {},
})

export default function I18nProvider({
  children,
  locale = 'en',
  namespaces = ['common'],
}: {
  children: React.ReactNode
  locale?: string
  namespaces?: string[]
}) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  // Set the language once the component is mounted
  useEffect(() => {
    if (i18next.language !== locale) {
      i18next.changeLanguage(locale)
    }
    setMounted(true)
  }, [locale])

  // Only render children once mounted (to avoid hydration issues)
  if (!mounted) return <>{children}</>

  return (
    <I18nContext.Provider value={{ locale, setLocale: (newLocale) => {
      if (newLocale === locale) return
      // Handle language change here (you could redirect to the new locale path)
      const currentPath = window.location.pathname
      const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`)
      router.push(newPath)
    }}}>
      {children}
    </I18nContext.Provider>
  )
} 