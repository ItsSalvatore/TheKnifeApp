'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  
  // Check system preference
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
  );

  useEffect(() => {
    // Initialize theme after mount
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
    setMounted(true);
  }, [systemPrefersDark]);

  useEffect(() => {
    if (!mounted) return;

    // Update data-theme attribute and localStorage when theme changes
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // During SSR, render without theme context
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={!mounted ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // During SSR, return a default theme
    if (typeof window === 'undefined') {
      return { theme: 'light' as const, toggleTheme: () => {} };
    }
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 