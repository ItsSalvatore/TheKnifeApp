"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we can show the toggle
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-9 w-9 rounded-md border border-white/30 bg-white/10 backdrop-blur-sm overflow-hidden"
    >
      <span className="sr-only">Toggle theme</span>
      
      <div className="relative flex items-center justify-center">
        {/* Animated sun */}
        <motion.div
          initial={{ opacity: theme === "dark" ? 0 : 1, scale: theme === "dark" ? 0.5 : 1 }}
          animate={{ opacity: theme === "dark" ? 0 : 1, scale: theme === "dark" ? 0.5 : 1, rotate: theme === "dark" ? -45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute ${theme === "dark" ? "text-white/80" : "text-primary"}`}
        >
          <SunIcon className="h-5 w-5" />
        </motion.div>
        
        {/* Animated moon */}
        <motion.div
          initial={{ opacity: theme === "dark" ? 1 : 0, scale: theme === "dark" ? 1 : 0.5 }}
          animate={{ opacity: theme === "dark" ? 1 : 0, scale: theme === "dark" ? 1 : 0.5, rotate: theme === "dark" ? 0 : 45 }}
          transition={{ duration: 0.3 }}
          className={`absolute ${theme === "dark" ? "text-white" : "text-white/80"}`}
        >
          <MoonIcon className="h-5 w-5" />
        </motion.div>
      </div>
    </Button>
  )
} 