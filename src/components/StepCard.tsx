import { motion } from 'framer-motion';
import { Code, Users, Rocket } from 'lucide-react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const icons = {
  1: Code,
  2: Users,
  3: Rocket,
};

export default function StepCard({ number, title, description }: StepCardProps) {
  const Icon = icons[number as keyof typeof icons];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      className="relative group"
    >
      {/* Timeline connector */}
      {number !== 3 && (
        <div className="hidden md:block absolute top-[40px] left-[50%] w-full h-[2px] bg-gradient-to-r from-[#F85E00]/20 to-[#F85E00]/0 dark:from-[#F85E00]/40 dark:to-[#F85E00]/0" />
      )}
      
      <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none hover:shadow-[0_20px_40px_rgb(248,94,0,0.12)] transition-shadow duration-300">
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F85E00] via-[#FF8243] to-[#FFA07A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px]" />
        
        {/* Content */}
        <div className="relative">
          {/* Number badge with icon */}
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F85E00] rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative w-14 h-14 bg-gradient-to-br from-[#F85E00] to-[#FF8243] rounded-xl flex items-center justify-center shadow-lg">
                <Icon className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold text-[#F85E00]">Phase {number}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
} 