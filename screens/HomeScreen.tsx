import React from 'react';
import { AdjustmentsHorizontalIcon, BellIcon, BookOpenIcon, CalendarDaysIcon, MagnifyingGlassIcon, MapIcon, SunIcon } from '../assets/icons';
import { discoverNearYou, featuredDestinations, trendingDestinations, Destination } from '../data/homeScreenData';

interface HomeScreenProps {
  onSelectDestination: (id: string) => void;
  onNavigate: (screen: 'Trips' | 'Map' | 'Stories') => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onSelectDestination, onNavigate }) => {
  return (
    <div className="min-h-screen bg-base-200/50 font-sans text-base-content">
      {/* Header */}
      <header className="p-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-orange-300 p-0.5">
                <img src="https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/avatar.png" alt="User Avatar" className="h-full w-full rounded-full border-2 border-white object-cover"/>
            </div>
            <div>
              <p className="text-sm text-base-content-secondary">Welcome back,</p>
              <h1 className="text-xl font-bold text-base-content">John Doe</h1>
            </div>
          </div>
          <button className="relative rounded-full p-2 hover:bg-base-300/50">
            <BellIcon className="h-6 w-6 text-base-content-secondary" />
          </button>
        </div>
        <div className="relative mt-4">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for places..."
            className="w-full rounded-full border-base-300 bg-white py-3.5 pl-11 pr-16 shadow-sm transition-shadow focus:border-secondary focus:ring-2 focus:ring-secondary/50"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-lg bg-orange-100 p-2 text-secondary transition-colors hover:bg-orange-200">
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="space-y-6 p-6 pt-2">
        {/* Weather Widget */}
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-br from-secondary to-orange-400 p-4 text-white shadow-lg shadow-secondary/30">
          <div className="flex items-center gap-3">
            <SunIcon className="h-8 w-8" />
            <div>
              <p className="font-bold">Visakhapatnam</p>
              <p className="text-sm opacity-90">28°C, Sunny</p>
            </div>
          </div>
          <img src="https://storage.googleapis.com/aistudio-hosting/templates/explore-ap/weather-thumb.png" alt="Beach view" className="h-12 w-16 rounded-lg object-cover" />
        </div>

        {/* Discover Near You */}
        <section>
          <h2 className="font-display text-xl font-bold">Discover Near You</h2>
          <div className="mt-3 grid grid-cols-4 gap-4">
            {discoverNearYou.map((item) => (
              <div key={item.name} className="flex cursor-pointer flex-col items-center gap-2 transition-transform hover:scale-105">
                <div className="h-18 w-18 overflow-hidden rounded-xl shadow-md">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <p className="text-sm font-semibold text-base-content">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Destinations */}
        <section>
          <h2 className="font-display text-xl font-bold">Featured Destinations</h2>
          <div className="mt-3 -mr-6 flex space-x-4 overflow-x-auto pb-2 pr-6">
            {featuredDestinations.map((dest) => (
              <div key={dest.id} className="w-60 flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => onSelectDestination(dest.id)}>
                <div className="relative h-40 overflow-hidden rounded-2xl shadow-lg">
                  <img src={dest.image} alt={dest.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="mt-2">
                  <h3 className="font-bold">{dest.name}</h3>
                  <p className="text-sm text-base-content-secondary">{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
            <button onClick={() => onNavigate('Trips')} className="flex flex-col items-center gap-2 rounded-2xl bg-white py-3 text-primary shadow-sm transition-all hover:shadow-lg hover:scale-105">
                <CalendarDaysIcon className="h-6 w-6"/>
                <span className="text-sm font-semibold">Plan Trip</span>
            </button>
            <button onClick={() => onNavigate('Map')} className="flex flex-col items-center gap-2 rounded-2xl bg-white py-3 text-primary shadow-sm transition-all hover:shadow-lg hover:scale-105">
                <MapIcon className="h-6 w-6"/>
                <span className="text-sm font-semibold">Explore Map</span>
            </button>
            <button onClick={() => onNavigate('Stories')} className="flex flex-col items-center gap-2 rounded-2xl bg-white py-3 text-primary shadow-sm transition-all hover:shadow-lg hover:scale-105">
                <BookOpenIcon className="h-6 w-6"/>
                <span className="text-sm font-semibold">Local Stories</span>
            </button>
        </div>

        {/* Trending Destinations */}
        <section>
          <h2 className="font-display text-xl font-bold">Trending Destinations</h2>
          <div className="mt-3 grid grid-cols-2 gap-4">
            {trendingDestinations.map((dest) => (
               <div key={dest.id} className="relative h-24 cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105" onClick={() => onSelectDestination(dest.id)}>
                 <img src={dest.image} alt={dest.name} className="h-full w-full object-cover"/>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                 <p className="absolute bottom-2 left-3 font-bold text-white">{dest.name}</p>
               </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default HomeScreen;