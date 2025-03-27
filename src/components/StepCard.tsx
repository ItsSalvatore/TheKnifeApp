import { motion } from 'framer-motion';

interface StepCardProps {
  title: string;
  description: string;
  icon: string;
  number: number;
}

export function StepCard({ title, description, icon, number }: StepCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative overflow-hidden"
    >
      <div className="bg-white/90 dark:bg-olive-800/90 backdrop-blur-lg rounded-2xl p-8
                    border border-olive-100/50 dark:border-olive-700/50 
                    shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="relative">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-olive-50 to-olive-100 dark:from-olive-700/30 dark:to-olive-700/50 
                          flex items-center justify-center shadow-inner">
              <span className="text-2xl text-olive-700 dark:text-white">{icon}</span>
            </div>
            <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-honey-400 to-honey-500 
                          text-white flex items-center justify-center text-sm font-bold shadow-md">
              {number}
            </span>
          </div>
          <h3 className="text-2xl font-display text-olive-900 dark:text-white">{title}</h3>
          <p className="text-olive-600 dark:text-olive-100">{description}</p>
        </div>
      </div>
    </motion.div>
  );
} 