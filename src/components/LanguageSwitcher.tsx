'use client'

import { useContext } from 'react'
import { I18nContext } from './I18nProvider'
import { languages } from '@/i18n/settings'
import { motion } from 'framer-motion'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useContext(I18nContext)

  return (
    <div className="relative flex h-9 items-center rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-1 shadow-sm">
      {languages.map((lng) => (
        <motion.button
          key={lng}
          className="relative px-3 py-1 text-sm font-medium z-10 transition-colors duration-100"
          onClick={() => setLocale(lng)}
          whileHover={{ scale: lng === locale ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Active background pill */}
          {lng === locale && (
            <motion.div
              layoutId="activeLang"
              className="absolute inset-0 bg-white/90 rounded-md shadow-sm"
              initial={false}
              transition={{ 
                type: "spring", 
                duration: 0.35,
                bounce: 0.1
              }}
            />
          )}
          
          {/* Text with conditional styling */}
          <span 
            className={`relative z-10 ${
              lng === locale 
                ? 'text-primary-600 font-bold' 
                : 'text-white/90 font-medium'
            }`}
          >
            {lng.toUpperCase()}
          </span>
        </motion.button>
      ))}
    </div>
  )
} 