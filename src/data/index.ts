type IconType = 'search' | 'community' | 'personalized';

interface Feature {
  title: string;
  description: string;
  icon: IconType;
}

interface Step {
  title: string;
  description: string;
  icon: string;
  number: number;
}

export const features: Feature[] = [
  {
    title: 'Persoonlijke Match',
    description: 'Ontdek restaurants die perfect bij jouw smaak en voorkeuren passen.',
    icon: 'personalized'
  },
  {
    title: 'Lokale Ontdekkingen',
    description: 'Verken de beste lokale restaurants in jouw buurt.',
    icon: 'search'
  },
  {
    title: 'Community Reviews',
    description: 'Lees eerlijke beoordelingen van andere Scout gebruikers.',
    icon: 'community'
  }
]

export const steps: Step[] = [
  {
    title: 'Maak je profiel',
    description: 'Vertel ons over je smaak en voorkeuren.',
    icon: '👤',
    number: 1
  },
  {
    title: 'Krijg aanbevelingen',
    description: 'Ontvang persoonlijke restaurantsuggesties.',
    icon: '✨',
    number: 2
  },
  {
    title: 'Deel je ervaringen',
    description: 'Help anderen door je ervaringen te delen.',
    icon: '📝',
    number: 3
  }
] 