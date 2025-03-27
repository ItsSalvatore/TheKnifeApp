import { motion } from 'framer-motion';
import { Search, Users, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconComponents = {
  search: Search,
  community: Users,
  personalized: Sparkles,
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconComponent = iconComponents[icon as keyof typeof iconComponents];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden"
    >
      <div className="bg-white/90 dark:bg-olive-800/90 backdrop-blur-lg rounded-2xl p-8
                    border border-olive-100/50 dark:border-olive-700/50 
                    shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-olive-50 to-olive-100 dark:from-olive-700/30 dark:to-olive-700/50 
                        flex items-center justify-center shadow-inner">
            {IconComponent && <IconComponent className="w-7 h-7 text-olive-700 dark:text-honey-400" />}
          </div>
          <h3 className="text-2xl font-display text-olive-900 dark:text-white">{title}</h3>
          <p className="text-olive-600 dark:text-olive-100">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default FeatureCard; 