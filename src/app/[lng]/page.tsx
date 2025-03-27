'use client'

import { useTranslation } from '@/i18n/client'
import { FeatureCard } from '@/components/FeatureCard'
import { StepCard } from '@/components/StepCard'
import { features, steps } from '@/data'

export default function Home({ params }: { params: { lng: string } }) {
  const { t } = useTranslation(params.lng, 'common')

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-32">
        <div className="absolute inset-0 bg-honeycomb opacity-5 dark:opacity-10" />
        <div className="container mx-auto text-center z-10">
          <h1 className="font-cupcake text-8xl md:text-9xl lg:text-[10rem] text-olive-900 dark:text-white mb-4 tracking-wide">
            Scout
          </h1>
          <div className="space-y-4">
            <p className="font-cupcake text-3xl md:text-4xl text-honey-600 dark:text-honey-500">
              à la jouw
            </p>
            <p className="text-xl md:text-2xl text-olive-800 dark:text-olive-100 max-w-2xl mx-auto">
              {t('header.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white/80 dark:bg-olive-800/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="font-cupcake text-4xl md:text-5xl text-olive-900 dark:text-white text-center mb-16">
            {t('features.title')}
          </h2>
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
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="font-cupcake text-4xl md:text-5xl text-olive-900 dark:text-white text-center mb-16">
            {t('steps.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="py-24 px-4 bg-olive-900 dark:bg-olive-950">
        <div className="container mx-auto text-center">
          <h2 className="font-cupcake text-4xl md:text-5xl text-white mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-olive-100 max-w-2xl mx-auto mb-12">
            {t('cta.subtitle')}
          </p>
          <button className="btn-primary font-cupcake text-xl px-8 py-3 bg-honey-500 hover:bg-honey-600 text-white rounded-full">
            {t('cta.button')}
          </button>
        </div>
      </section>
    </div>
  )
} 