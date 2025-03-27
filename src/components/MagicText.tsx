'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type MagicTextProps = {
  text: string
  className?: string
  hoverColor?: string
  fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  interactive?: boolean
  useGradient?: boolean
}

export default function MagicText({
  text,
  className = '',
  hoverColor = 'gradient-text',
  fontSize = 'base',
  interactive = true,
  useGradient = true
}: MagicTextProps) {
  // Split the text into character spans
  const characters = text.split('')
  
  return (
    <div className={cn(
      `text-${fontSize} inline-block font-normal`,
      useGradient && 'gradient-text',
      className
    )}>
      {characters.map((char, index) => (
        <CharacterSpan 
          key={index} 
          char={char} 
          index={index} 
          hoverColor={hoverColor} 
          interactive={interactive}
          delay={index * 0.01}
          totalChars={characters.length}
          useGradient={useGradient}
        />
      ))}
    </div>
  )
}

type CharacterSpanProps = {
  char: string
  index: number
  hoverColor: string
  interactive: boolean
  delay: number
  totalChars: number
  useGradient: boolean
}

function CharacterSpan({ char, index, hoverColor, interactive, delay, totalChars, useGradient }: CharacterSpanProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const hasMounted = useRef(false)
  
  // Initial animation to stagger in characters
  useEffect(() => {
    hasMounted.current = true
  }, [])
  
  // Animate the character on hover
  const handleHover = () => {
    if (!interactive) return
    
    setIsHovered(true)
    // Subtle movement on hover
    setPosition({ 
      x: (Math.random() - 0.5) * 4, 
      y: (Math.random() - 0.5) * 3
    })
  }
  
  // Reset the character when leaving
  const handleLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
  }
  
  // Determine if the character is a space
  const isSpace = char === " "
  
  // Careful staggered fade in from left to right
  const entryDelay = delay + (index / totalChars) * 0.2
  
  return (
    <motion.span
      className={cn(
        "inline-block transition-colors duration-100 font-normal",
        isHovered ? hoverColor : "",
        useGradient && "gradient-text"
      )}
      initial={{ 
        opacity: 0,
        y: 3,
        filter: "blur(1px)"
      }}
      animate={{
        opacity: 1,
        y: isHovered ? position.y : 0,
        x: isHovered ? position.x : 0,
        scale: isHovered ? 1.05 : 1,
        filter: "blur(0px)",
        rotate: isHovered ? (Math.random() - 0.5) * 6 : 0,
        transition: {
          delay: entryDelay,
          duration: 0.15,
          type: "spring",
          damping: 15,
          stiffness: 200
        }
      }}
      whileHover={{ 
        scale: interactive ? 1.05 : 1,
        transition: { 
          duration: 0.1, 
          type: "spring",
          damping: 12 
        }
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{ 
        whiteSpace: isSpace ? "pre" : "normal",
        textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
        transformOrigin: "center bottom"
      }}
    >
      {char}
    </motion.span>
  )
} 