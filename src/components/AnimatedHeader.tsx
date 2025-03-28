'use client'

import { useEffect, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { ThemeToggle } from './ui/theme-toggle'
import { useTranslation } from '@/i18n/client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function AnimatedHeader() {
  const pathname = usePathname()
  const lng = pathname.split('/')[1]
  const { t } = useTranslation(lng, 'common')

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="px-4 py-6">
        <div className="mx-auto max-w-5xl">
          <div className="relative bg-white/90 dark:bg-olive-800/90 
                      backdrop-blur-sm rounded-2xl shadow-sm 
                      border border-olive-300/50 dark:border-olive-700/50 
                      px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link href={`/${lng}`} className="flex items-center space-x-3 group">
                <span className="font-cupcake text-3xl text-olive-900 dark:text-white animate-fade-in">
                  Scout
                </span>
                <span className="font-cupcake text-lg text-honey-600 animate-fade-in">
                  à la jouw
                </span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-12 animate-fade-in">
                <Link href={`/${lng}/explore`} className="nav-link font-cupcake text-olive-800 hover:text-honey-600 dark:text-white dark:hover:text-honey-500">
                  {t('nav.discover')}
                </Link>
                <Link href={`/${lng}/how-it-works`} className="nav-link font-cupcake text-olive-800 hover:text-honey-600 dark:text-white dark:hover:text-honey-500">
                  {t('nav.how_it_works')}
                </Link>
                <Link href={`/${lng}/about`} className="nav-link font-cupcake text-olive-800 hover:text-honey-600 dark:text-white dark:hover:text-honey-500">
                  {t('nav.about')}
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4 animate-fade-in">
                <LanguageSwitcher />
                <ThemeToggle />
                <Button className="btn-primary font-cupcake px-6 py-2 bg-honey-500 hover:bg-honey-600 text-white">
                  {t('nav.join_now')}
                </Button>
              </div>
              <button className="md:hidden p-2 text-olive-900 dark:text-white hover:text-honey-600 dark:hover:text-honey-500 transition-colors animate-fade-in">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
} 