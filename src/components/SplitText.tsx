'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type SplitTextProps = {
  text: string
  className?: string
  highlightClassName?: string
  highlightWords?: string[]
  delay?: number
  duration?: number
  staggerChildren?: number
  animationType?: 'fade' | 'slide' | 'bounce'
}

export default function SplitText({
  text,
  className = '',
  highlightClassName = 'text-primary',
  highlightWords = [],
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  animationType = 'fade'
}: SplitTextProps) {
  // Split the text into words
  const words = text.split(' ')
  
  // Animation variants
  const animations = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slide: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    bounce: {
      hidden: { opacity: 0, y: 20, scale: 0.8 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: 'spring',
          damping: 10,
          stiffness: 150
        }
      }
    }
  }

  // Choose animation variant based on prop
  const selectedAnimation = animations[animationType]

  // Parent container variant
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren,
        delayChildren: delay * i 
      }
    })
  }

  return (
    <motion.span
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => {
        const isHighlighted = highlightWords.includes(word)
        return (
          <span key={i} className="inline-block mx-0.5">
            <motion.span
              className={cn(isHighlighted ? highlightClassName : '')}
              variants={selectedAnimation}
              transition={{ duration }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </motion.span>
  )
} 