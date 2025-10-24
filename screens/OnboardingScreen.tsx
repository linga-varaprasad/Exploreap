import React, { useState } from 'react';
import { onboardingData } from '../data/onboardingData';
import StatusIndicator from '../components/StatusIndicator';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = onboardingData.length;
  const isLastStep = currentStep === totalSteps - 1;

  const nextStep = () => {
    if (isLastStep) {
      onComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const { Icon, title, description, background } = onboardingData[currentStep];

  return (
    <div className={`relative flex min-h-screen w-full flex-col items-center justify-end p-6 transition-colors duration-500 ${background}`}>
      <div className="absolute top-0 flex h-3/5 w-full items-center justify-center">
         <Icon className="h-32 w-32 text-primary opacity-80" />
      </div>
      
      <div className="flex h-2/5 w-full flex-col justify-between rounded-2xl border border-base-200 bg-base-100/80 p-6 shadow-2xl backdrop-blur-md">
        <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-primary">{title}</h2>
            <p className="mt-4 text-base-content-secondary">{description}</p>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
            <StatusIndicator count={totalSteps} activeIndex={currentStep} />
            <div className="flex w-full items-center justify-between">
            <button onClick={onComplete} className="px-4 py-2 font-medium text-base-content-secondary transition-colors hover:text-primary">
                Skip
            </button>
            <button 
                onClick={nextStep} 
                className="min-w-[120px] rounded-full bg-secondary px-8 py-3 font-bold text-white shadow-md shadow-secondary/30 transition-transform hover:scale-105"
            >
                {isLastStep ? 'Get Started' : 'Next'}
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;