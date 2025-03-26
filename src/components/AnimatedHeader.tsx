'use client'

import { useEffect, useState, useRef } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ui/theme-toggle'
import { useTranslation } from '@/i18n/client'
import logo from '@/assets/images/1.png'

export default function AnimatedHeader() {
  const { t } = useTranslation('common', 'common');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Start at 100vh, shrink to 60vh when scrolled
  const headerHeight = mounted ? Math.max(60, 100 - (scrollPosition / 10)) : 100;
  const showScrollIndicator = headerHeight > 90;

  if (!mounted) return null;

  return (
    <header 
      ref={headerRef}
      className="relative w-full overflow-hidden min-h-[450px]"
      style={{ height: `${headerHeight}vh` }}
    >
      {/* Enhanced animated background gradients */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        {/* Animated gradient orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 0.7, 0.4], 
            scale: [0.8, 1.2, 0.8],
            x: ['-10%', '10%', '-10%'],
            y: ['-10%', '10%', '-10%']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[20%] w-[70%] h-[70%] rounded-full bg-[conic-gradient(from_0deg,#FF6B6B,#4ECDC4,#45B7D1,#FF6B6B)] opacity-40 blur-3xl"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [0.8, 1.1, 0.8],
            x: ['10%', '-10%', '10%'],
            y: ['5%', '-5%', '5%']
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-[conic-gradient(from_180deg,#FF6B6B,#FFE66D,#4ECDC4,#FF6B6B)] opacity-40 blur-3xl"
        />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.03] dark:bg-grid-gray-100/[0.03] bg-[size:50px_50px] animate-grid-flow" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015] [background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABnRSTlMCCgkGBAPs5r9ZAAAARklEQVQ4y2NgGAWjYBSMAkbG/RB6G5T+vw0iG5DiQ0bG/VD6Gkh+P4TOQFbfAKXvQ+V3QOgNyOoboPS1/1D1jMhm7RgFgwQAADLtHbYWzrwgAAAAAElFTkSuQmCC)] dark:opacity-[0.03]" />
      </div>

      {/* Enhanced navigation bar */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-full blur-md" />
                <Image 
                  src={logo}
                  alt="Logo" 
                  width={40} 
                  height={40} 
                  className="relative rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                  priority
                />
              </div>
              <h2 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">The Knife</h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <ThemeToggle />
              <LanguageSwitcher />
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-center"
        >
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] animate-gradient-x">
            {t('discover_your_perfect_spot')}
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-8"
        >
          {t('launch_description')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Button
            variant="default"
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] hover:from-[#FF5B5B] hover:to-[#3EBDB4] text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            onClick={() => scrollToSection('explore')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <span className="relative flex items-center">
              {t('explore_places')}
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showScrollIndicator && (
          <div className="absolute bottom-0 inset-x-0 flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm whitespace-nowrap">
                {t('scroll_to_explore')}
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
              >
                <ChevronDown className="h-6 w-6 text-[#4ECDC4] dark:text-[#4ECDC4]" />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
} 