'use client'

import { useContext } from 'react'
import { I18nContext } from './I18nProvider'
import { languages } from '@/i18n/settings'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useContext(I18nContext)

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className="appearance-none bg-white/80 backdrop-blur-sm text-olive-800 
                   border-2 border-olive-200 rounded-full px-4 py-2
                   hover:bg-olive-50 transition-all duration-300
                   font-display tracking-wide cursor-pointer
                   focus:outline-none focus:ring-2 focus:ring-olive-300
                   dark:bg-olive-900/50 dark:text-olive-100 dark:border-olive-700
                   dark:hover:bg-olive-800/70"
      >
        {languages.map((lng) => (
          <option key={lng} value={lng} className="font-sans bg-white dark:bg-olive-900">
            {lng.toUpperCase()}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-olive-800 dark:text-olive-100" />
        </svg>
      </div>
    </div>
  )
} 