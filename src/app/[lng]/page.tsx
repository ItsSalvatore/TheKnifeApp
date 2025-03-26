'use client'

import React from 'react'
import { useTranslation } from '@/i18n/client'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import MagicText from '@/components/MagicText'
import FeatureCard from '@/components/FeatureCard'
import StepCard from '@/components/StepCard'

type FeatureType = {
  feature: string;
  description: string;
  icon: 'search' | 'community' | 'personalized';
};

export default function Home({
  params
}: {
  params: Promise<{ lng: string }>
}) {
  // Unwrap params using React.use()
  const { lng } = React.use(params)
  const { t } = useTranslation(lng, 'common')

  const features: FeatureType[] = [
    {
      feature: t('ai_powered_search'),
      description: t('ai_powered_search_description'),
      icon: 'search' as const
    },
    {
      feature: t('community_driven'),
      description: t('community_driven_description'),
      icon: 'community' as const
    },
    {
      feature: t('personalized_experience'),
      description: t('personalized_experience_description'),
      icon: 'personalized' as const
    }
  ]

  const steps = [
    {
      number: 1,
      title: t('step_1'),
      description: t('step_1_description')
    },
    {
      number: 2,
      title: t('step_2'),
      description: t('step_2_description')
    },
    {
      number: 3,
      title: t('step_3'),
      description: t('step_3_description')
    }
  ]

  return (
    <main className="relative">
      {/* Hero section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark-800 dark:to-dark-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="inline-block bg-primary-50 dark:bg-primary-900/20 px-4 py-2 rounded-full text-primary-600 dark:text-primary-400 font-semibold mb-6">
              <MagicText text={t('featured_restaurants') || 'Featured Restaurants'} hoverColor="text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {t('discover_dining') || 'Discover Amazing Dining Spots'}
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-300">
              {t('dining_description') || 'From cozy cafés to fine dining restaurants, find your next favorite spot with personalized recommendations.'}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold gap-x-2 transition-all duration-300 hover:-translate-y-1"
              >
                {t('explore_places') || 'Explore Places'}
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
              >
                {t('learn_more') || 'Learn More'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features section */}
      <section id="explore" className="py-24 bg-gray-50/50 dark:bg-dark-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-900/[0.015] dark:bg-grid-gray-100/[0.015] bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                {t('key_features')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('key_features_description')}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white dark:from-dark-800 dark:to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,94,0,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-gray-900/[0.015] dark:bg-grid-gray-100/[0.015] bg-[size:30px_30px]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#F85E00]/10 dark:bg-[#F85E00]/20 px-4 py-2 rounded-full text-[#F85E00] font-semibold mb-6">
                Timeline
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F85E00] to-[#FF8243]">
                {t('how_it_works')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F85E00] to-[#FF8243] mx-auto rounded-full mb-6" />
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Follow our journey from development to launch as we build the future of dining discovery.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <StepCard key={i} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurant section */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/2">
              <motion.div 
                className="bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square rounded-xl bg-white dark:bg-dark-700 flex items-center justify-center shadow-inner">
                  <div className="text-gray-400 dark:text-gray-500">
                    [Restaurant Image]
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-primary-50 dark:bg-primary-900/20 px-4 py-2 rounded-full text-primary-600 dark:text-primary-400 font-semibold mb-6">
                  {t('featured_spot')}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t('restaurant_title')}
                </h2>
                <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                  {t('restaurant_description')}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col bg-gray-50 dark:bg-dark-800 p-4 rounded-xl">
                    <span className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t('cuisine')}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{t('cuisine_value')}</span>
                  </div>
                  <div className="flex flex-col bg-gray-50 dark:bg-dark-800 p-4 rounded-xl">
                    <span className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t('atmosphere')}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{t('atmosphere_value')}</span>
                  </div>
                  <div className="flex flex-col bg-gray-50 dark:bg-dark-800 p-4 rounded-xl">
                    <span className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t('price_range')}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{t('price_range_value')}</span>
                  </div>
                  <div className="flex flex-col bg-gray-50 dark:bg-dark-800 p-4 rounded-xl">
                    <span className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t('rating')}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{t('rating_value')}</span>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold gap-x-2 w-full md:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {t('view_details')}
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('join_beta_title')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            {t('join_beta_description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {t('join_now')}
          </motion.button>
        </div>
      </section>
    </main>
  )
} 