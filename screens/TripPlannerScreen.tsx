import React, { useState } from 'react';
import { ArrowLeftIcon, ChevronDownIcon, CrosshairsGpsIcon } from '../assets/icons';

interface TripPlannerScreenProps {
    onBack: () => void;
}

type TripType = 'Day' | 'Weekend' | 'Week-long';

const TripPlannerScreen: React.FC<TripPlannerScreenProps> = ({ onBack }) => {
    const [tripType, setTripType] = useState<TripType>('Weekend');
    const [budget, setBudget] = useState(25000);

  return (
    <div className="flex min-h-[calc(100vh-6rem)] flex-col bg-base-200/50 font-sans">
      <header className="flex items-center justify-between p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeftIcon className="h-6 w-6 text-base-content" />
        </button>
        <h1 className="text-xl font-bold text-primary">Plan Your Trip</h1>
        <div className="w-8"></div>
      </header>

      <main className="flex-1 space-y-6 overflow-y-auto p-6">
        {/* Trip Type */}
        <div>
          <label className="text-lg font-bold text-base-content">Trip Type</label>
          <div className="mt-2 grid grid-cols-3 gap-2 rounded-xl bg-gray-200 p-1">
            {(['Day', 'Weekend', 'Week-long'] as TripType[]).map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`rounded-lg py-2 text-sm font-semibold transition-colors ${
                  tripType === type ? 'bg-white text-primary shadow' : 'text-base-content-secondary'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Start Location */}
        <div>
          <label className="text-lg font-bold text-base-content">Start Location</label>
          <div className="relative mt-2">
            <input 
              type="text" 
              placeholder="Enter your location"
              className="w-full rounded-xl border-base-300 bg-white p-4 pr-12 focus:border-secondary focus:ring-secondary"
            />
            <CrosshairsGpsIcon className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-base-content-secondary" />
          </div>
        </div>
        
        {/* Destination */}
        <div>
          <label className="text-lg font-bold text-base-content">Destination</label>
          <div className="relative mt-2">
            <select className="w-full appearance-none rounded-xl border-base-300 bg-white p-4 pr-12 focus:border-secondary focus:ring-secondary">
              <option>Select a destination</option>
              <option>Araku Valley</option>
              <option>Tirupati</option>
              <option>Visakhapatnam</option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-base-content-secondary" />
          </div>
        </div>

        {/* Budget */}
        <div>
            <label className="text-lg font-bold text-base-content">Budget</label>
            <div className="mt-3">
                <input 
                    type="range" 
                    min="500" 
                    max="50000" 
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="mt-2 flex justify-between text-sm font-medium text-base-content-secondary">
                    <span>₹500</span>
                    <span>₹50,000+</span>
                </div>
            </div>
        </div>

        {/* Number of Travelers */}
        <div>
          <label className="text-lg font-bold text-base-content">Number of Travelers</label>
          <input 
            type="number"
            placeholder="e.g., 2"
            className="mt-2 w-full rounded-xl border-base-300 bg-white p-4 focus:border-secondary focus:ring-secondary"
          />
        </div>
      </main>

      <footer className="bg-base-100 p-6">
        <button className="w-full rounded-xl bg-secondary py-4 text-lg font-bold text-white shadow-md shadow-secondary/30 transition-transform hover:scale-105">
          Generate Itinerary
        </button>
      </footer>
    </div>
  );
};

export default TripPlannerScreen;
