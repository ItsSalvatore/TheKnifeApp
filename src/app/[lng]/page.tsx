'use client'

import { use } from 'react'
import { useTranslation } from '@/i18n/client'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { FeatureCard } from '@/components/FeatureCard'
import { StepCard } from '@/components/StepCard'
import { features, steps } from '@/data'
import AnimatedHeader from '@/components/AnimatedHeader'

export default function Home({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = use(params)
  const { t } = useTranslation(lng, 'common')

  return (
    <main className="min-h-screen bg-olive-50/30 dark:bg-olive-900">
      <AnimatedHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="header-pattern opacity-30" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl md:text-8xl font-cupcake text-olive-900 dark:text-white mb-4">
            Scout
          </h1>
          <p className="text-2xl md:text-3xl font-cupcake text-honey-600 dark:text-honey-500">
            à la jouw
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-olive-900/80 dark:text-white/80 z-10"
        >
          <span className="font-cupcake">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 mx-auto mt-2 animate-bounce" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden bg-white/50 dark:bg-olive-800/50">
        <div className="section-pattern opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl mb-6 font-display text-olive-900 dark:text-white">
                {t('features.title')}
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-olive-700 dark:text-olive-100">
                {t('features.subtitle')}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={t(`features.items.${index}.title`)}
                description={t(`features.items.${index}.description`)}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 relative overflow-hidden bg-olive-100/30 dark:bg-olive-800/50">
        <div className="honeycomb-pattern opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-white dark:bg-olive-700/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
                <span className="text-honey-500 dark:text-honey-400 font-medium">{t('steps.title')}</span>
              </div>
              <h2 className="text-3xl md:text-5xl mb-6 font-display text-olive-900 dark:text-white">
                {t('steps.subtitle')}
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <StepCard 
                key={index}
                title={t(`steps.items.${index}.title`)}
                description={t(`steps.items.${index}.description`)}
                icon={step.icon}
                number={step.number}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurant Section */}
      <section className="py-24 relative overflow-hidden bg-white/50 dark:bg-olive-800/50">
        <div className="section-pattern opacity-30" />
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
                className="relative overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white dark:bg-olive-800/90 backdrop-blur-lg rounded-2xl p-8
                            border border-olive-100/50 dark:border-olive-700/50 
                            shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square rounded-xl bg-olive-50 dark:bg-olive-700/50 flex items-center justify-center">
                    <div className="text-olive-700 dark:text-white font-display">
                      [Restaurant Image]
                    </div>
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
                <div className="inline-block bg-white dark:bg-olive-700/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6">
                  <span className="text-honey-500 dark:text-honey-400">{t('featured.title')}</span>
                </div>
                <h2 className="text-3xl md:text-5xl mb-6 font-display text-olive-900 dark:text-white">
                  {t('featured.subtitle')}
                </h2>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white dark:bg-olive-800/90 backdrop-blur-lg rounded-xl p-4 
                              border border-olive-100/50 dark:border-olive-700/50">
                    <span className="text-olive-600 dark:text-olive-200 text-sm mb-1 font-display">Keuken</span>
                    <span className="block text-olive-900 dark:text-white">Frans-Nederlands</span>
                  </div>
                  <div className="bg-white dark:bg-olive-800/90 backdrop-blur-lg rounded-xl p-4 
                              border border-olive-100/50 dark:border-olive-700/50">
                    <span className="text-olive-600 dark:text-olive-200 text-sm mb-1 font-display">Sfeer</span>
                    <span className="block text-olive-900 dark:text-white">Casual chic</span>
                  </div>
                  <div className="bg-white dark:bg-olive-800/90 backdrop-blur-lg rounded-xl p-4 
                              border border-olive-100/50 dark:border-olive-700/50">
                    <span className="text-olive-600 dark:text-olive-200 text-sm mb-1 font-display">Prijsklasse</span>
                    <span className="block text-olive-900 dark:text-white">€€ - €€€</span>
                  </div>
                  <div className="bg-white dark:bg-olive-800/90 backdrop-blur-lg rounded-xl p-4 
                              border border-olive-100/50 dark:border-olive-700/50">
                    <span className="text-olive-600 dark:text-olive-200 text-sm mb-1 font-display">Beoordeling</span>
                    <span className="block text-olive-900 dark:text-white">4.8 / 5.0</span>
                  </div>
                </div>
                
                <Button className="btn-primary group w-full md:w-auto">
                  Bekijk details
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-olive-100/50 dark:bg-olive-900">
        <div className="header-pattern opacity-20" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl text-olive-900 dark:text-white mb-6 font-display">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-olive-700 dark:text-white/90 max-w-3xl mx-auto mb-12">
            {t('cta.subtitle')}
          </p>
          <Button className="btn-primary">
            {t('cta.button')}
          </Button>
        </div>
      </section>
    </main>
  )
} 