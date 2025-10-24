import React from 'react';
import { SparklesIcon, MapPinIcon, CalendarDaysIcon } from '../assets/icons';

export interface OnboardingStep {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  background: string;
}

export const onboardingData: OnboardingStep[] = [
  {
    Icon: SparklesIcon,
    title: 'AI-Powered Exploration',
    description: 'Get personalized travel plans and discover hidden gems with our intelligent AI chat.',
    background: 'bg-teal-50',
  },
  {
    Icon: MapPinIcon,
    title: 'Discover Hidden Gems',
    description: 'Explore an interactive map of waterfalls, temples, viewpoints, and more offbeat locations.',
    background: 'bg-orange-50',
  },
  {
    Icon: CalendarDaysIcon,
    title: 'Plan Your Trips Smartly',
    description: 'Let our AI generate the perfect itinerary based on your budget, time, and interests.',
    background: 'bg-yellow-50',
  },
];
