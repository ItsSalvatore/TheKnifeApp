import { motion } from 'framer-motion';
import { Search, Users, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  feature: string;
  description: string;
  icon: 'search' | 'community' | 'personalized';
}

const iconComponents = {
  search: Search,
  community: Users,
  personalized: Sparkles,
};

export default function FeatureCard({ feature, description, icon }: FeatureCardProps) {
  const IconComponent = iconComponents[icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/5 via-[#4ECDC4]/5 to-[#45B7D1]/5 dark:from-[#FF6B6B]/10 dark:via-[#4ECDC4]/10 dark:to-[#45B7D1]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] p-[1px] group-hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full rounded-xl bg-white dark:bg-dark-800 flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-[#4ECDC4]" />
          </div>
        </div>
        
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
          {feature}
        </h3>
        
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
} 