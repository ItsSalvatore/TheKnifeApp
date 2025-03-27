import { motion } from 'framer-motion';

interface MagicTextProps {
  text: string;
  className?: string;
  useGradient?: boolean;
}

export function MagicText({ text, className = '', useGradient = true }: MagicTextProps) {
  return (
    <motion.span
      className={`${className} ${useGradient ? 'bg-clip-text text-transparent bg-gradient-to-r from-honey-500 to-honey-600' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.span>
  );
} 