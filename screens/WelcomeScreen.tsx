import React from 'react';
import { GlobeIcon, MapPinIcon } from '../assets/icons';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-900 p-4 font-sans">
      <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl overflow-y-auto max-h-[90vh]">
        <div className="flex flex-col items-center space-y-10 p-8 text-center">

          <MapPinIcon className="h-28 w-28 flex-shrink-0 text-gray-800" />

          <div>
            <h1 className="font-display text-4xl font-extrabold text-gray-800">ExploreAP</h1>
            <p className="mt-2 text-base text-base-content-secondary font-medium">
              Discover Hidden Andhra, Authentically.
            </p>
          </div>

          <div className="w-full space-y-4 px-4">
            <div className="flex gap-4">
                <button
                onClick={onGetStarted}
                className="flex-1 rounded-lg border border-gray-300 py-3 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100"
                >
                Skip
                </button>
                <button
                onClick={onGetStarted}
                className="flex-1 rounded-lg border border-gray-400 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:bg-gray-100"
                >
                Get Started
                </button>
            </div>
          </div>

          <GlobeIcon className="h-28 w-28 flex-shrink-0 text-gray-200" />

        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;