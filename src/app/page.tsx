'use client'

import AnimatedHeader from '@/components/AnimatedHeader'
import { useEffect, useState } from 'react'
import { useTranslation } from '@/i18n/client'
import { MapPin, Search, Upload, Heart, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import MagicText from '@/components/MagicText'

export default function Home() {
  const { t } = useTranslation('en', 'common')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: 'easeOut'
      }
    })
  }

  const features = [
    { 
      icon: <Search className="w-10 h-10 mb-4 text-primary" />, 
      title: t('ai_powered_search'), 
      description: t('ai_powered_search_desc'),
    },
    { 
      icon: <Heart className="w-10 h-10 mb-4 text-primary" />, 
      title: t('personalized_recommendations'), 
      description: t('personalized_recommendations_desc'),
    },
    { 
      icon: <Upload className="w-10 h-10 mb-4 text-primary" />, 
      title: t('community_driven'), 
      description: t('community_driven_desc'), 
    },
    { 
      icon: <MapPin className="w-10 h-10 mb-4 text-primary" />, 
      title: t('location_based'), 
      description: t('location_based_desc'), 
    },
  ]

  return (
    <div className="w-full overflow-x-hidden">
      <AnimatedHeader />
      
      {/* Launch countdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary font-bold mb-4">
              <MagicText text={t('coming_soon')} hoverColor="text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              {t('discover_your_perfect_spot')}
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
              {t('launch_description')}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-600 shadow-sm text-white font-bold gap-x-2 transition-all duration-200 hover:scale-[1.02] hover:shadow"
              >
                {t('join_waitlist')}
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 hover:border-primary/50 text-primary/80 hover:text-primary font-medium transition-all duration-200 hover:scale-[1.02]"
              >
                {t('learn_more')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            >
              <MagicText 
                text={t('key_features')} 
                fontSize="4xl" 
                className="font-bold"
              />
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            >
              {t('key_features_description')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow transition-shadow duration-300"
                whileHover={{ 
                  y: -3, 
                  boxShadow: "0 8px 20px -5px rgba(0, 0, 0, 0.08), 0 8px 8px -5px rgba(0, 0, 0, 0.03)" 
                }}
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              {t('how_it_works')}
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              {t('how_it_works_description')}
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {/* Timeline items */}
              {[1, 2, 3].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
                  className="relative mb-12"
                >
                  <div className={`flex items-center ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-1 p-6">
                      <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm ${i % 2 === 0 ? 'mr-6' : 'ml-6'}`}>
                        <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary font-bold mb-3">
                          {t(`step_${step}`)}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                          {t(`how_it_works_step_${step}_title`)}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {t(`how_it_works_step_${step}_desc`)}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full w-10 h-10 flex items-center justify-center z-10 shadow-sm">
                      <span className="text-white font-bold">{step}</span>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <MagicText 
                text={t('be_the_first')} 
                fontSize="4xl" 
                className="font-bold" 
                hoverColor="text-white"
              />
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {t('be_the_first_description')}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/95 shadow-sm font-bold gap-x-2 transition-all duration-200 hover:scale-[1.02] hover:shadow"
            >
              {t('join_waitlist')}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 