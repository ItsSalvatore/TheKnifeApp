'use client'

import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import i18next from 'i18next'

// Create a context to hold the current language
export const I18nContext = createContext({
  locale: 'en',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLocale: (locale: string) => {},
})

export default function I18nProvider({
  children,
  locale = 'en',
}: {
  children: React.ReactNode
  locale?: string
}) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  // Set the language immediately to avoid hydration mismatch
  useEffect(() => {
    i18next.changeLanguage(locale)
  }, [])

  // Set mounted state after hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <I18nContext.Provider value={{ 
      locale, 
      setLocale: (newLocale) => {
        if (newLocale === locale) return
        const currentPath = window.location.pathname
        const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`)
        router.push(newPath)
      }
    }}>
      {children}
    </I18nContext.Provider>
  )
} 