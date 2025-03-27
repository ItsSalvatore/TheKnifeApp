import { motion } from 'framer-motion';

export const Smiley = () => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      transition={{ duration: 0.2 }}
      className="relative w-8 h-8"
    >
      <div className="absolute inset-0 rounded-full border-2 border-olive" />
      <div className="absolute top-[25%] left-[25%] w-1 h-1 rounded-full bg-olive" />
      <div className="absolute top-[25%] right-[25%] w-1 h-1 rounded-full bg-olive" />
      <div className="absolute bottom-[30%] left-[25%] w-[50%] h-[2px] rounded-full bg-olive transform rotate-[15deg]" />
    </motion.div>
  );
}; 