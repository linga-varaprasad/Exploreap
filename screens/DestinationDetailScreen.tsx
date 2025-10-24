import React, { useState } from 'react';
import { destinationDetailData } from '../data/destinationDetailData';
import { ArrowLeftIcon, ArrowUpOnSquareIcon, HandThumbDownIcon, HandThumbUpIcon, MapPinIcon, SunIcon } from '../assets/icons';
import StarRating from '../components/StarRating';

interface DestinationDetailScreenProps {
  destinationId: string;
  onBack: () => void;
  onNavigate: (screen: 'Trips') => void;
}

const DestinationDetailScreen: React.FC<DestinationDetailScreenProps> = ({ destinationId, onBack, onNavigate }) => {
  const [readMore, setReadMore] = useState(false);
  const destination = destinationDetailData[destinationId];

  if (!destination) {
    return (
      <div className="flex h-screen flex-col items-center justify-center p-6 text-center">
        <h2 className="text-xl font-bold">Destination not found.</h2>
        <p className="text-base-content-secondary">
          The selected destination does not exist.
        </p>
        <button onClick={onBack} className="mt-4 rounded-lg bg-secondary px-4 py-2 text-white">
          Go Back
        </button>
      </div>
    );
  }

  const description = readMore ? destination.description : `${destination.description.substring(0, 150)}...`;

  return (
    <div className="min-h-screen bg-base-100 font-sans">
      {/* Hero Carousel */}
      <div className="relative h-96 w-full">
        <img src={destination.heroImages[0]} alt={destination.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-6 flex w-full justify-between px-4">
          <button onClick={onBack} className="rounded-full bg-black/40 p-2 text-white transition-transform hover:scale-110 backdrop-blur-sm">
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <button className="rounded-full bg-black/40 p-2 text-white transition-transform hover:scale-110 backdrop-blur-sm">
            <ArrowUpOnSquareIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {destination.heroImages.map((_, index) => (
            <div key={index} className={`h-2 rounded-full transition-all ${index === 0 ? 'w-5 bg-white' : 'w-2 bg-white/50'}`} />
          ))}
        </div>
      </div>

      <div className="transform rounded-t-3xl bg-base-100 p-6 -mt-8">
        {/* Title and Info */}
        <div className="flex items-center gap-1 text-sm text-base-content-secondary">
          <MapPinIcon className="h-4 w-4" />
          {destination.location}
        </div>
        <h1 className="font-display text-3xl font-bold text-base-content">{destination.title}</h1>
        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={destination.rating} showText={false}/>
          <span className="text-sm font-medium text-base-content-secondary">{destination.rating} ({destination.reviews.length} reviews)</span>
        </div>
        
        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
            {destination.tags.map(tag => (
                <span key={tag} className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-secondary-focus">{tag}</span>
            ))}
        </div>

        {/* Description */}
        <p className="mt-4 text-base-content-secondary leading-relaxed">
          {description}
          <button onClick={() => setReadMore(!readMore)} className="ml-1 font-semibold text-secondary hover:text-secondary-focus">
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        </p>

        {/* Weather */}
        <div className="mt-6">
            <h2 className="font-display text-xl font-bold">Weather</h2>
            <div className="mt-2 flex items-center justify-between rounded-2xl bg-base-200/50 p-4">
                <div>
                    <p className="text-3xl font-bold">28°C</p>
                    <p className="text-base-content-secondary">Sunny</p>
                </div>
                <div className="rounded-lg bg-primary p-3 text-white">
                    <SunIcon className="h-8 w-8"/>
                </div>
            </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-6">
          <h2 className="font-display text-xl font-bold">Photo Gallery</h2>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {destination.gallery.slice(0, 5).map((img, index) => (
              <div key={index} className="h-24 w-full overflow-hidden rounded-lg">
                <img src={img} alt={`Gallery image ${index + 1}`} className="h-full w-full object-cover"/>
              </div>
            ))}
            <div className="relative h-24 w-full cursor-pointer overflow-hidden rounded-lg">
              <img src={destination.gallery[5]} alt="More photos" className="h-full w-full object-cover brightness-50"/>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                +12
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-3">
            <button onClick={() => onNavigate('Trips')} className="w-full rounded-xl bg-secondary py-4 text-lg font-bold text-white shadow-md shadow-secondary/30 transition-transform hover:scale-105">
                Add to Trip
            </button>
            <button className="w-full rounded-xl bg-orange-100 py-4 text-lg font-bold text-secondary transition-colors hover:bg-orange-200">
                Add Review
            </button>
        </div>

        {/* Reviews */}
        <div className="mt-6">
          <h2 className="font-display text-xl font-bold">Reviews</h2>
          <div className="mt-3 space-y-4">
            {destination.reviews.map((review, index) => (
              <div key={index} className="rounded-xl bg-base-200/50 p-4">
                <div className="flex items-center gap-3">
                  <img src={review.avatar} alt={review.name} className="h-10 w-10 rounded-full object-cover"/>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-xs text-base-content-secondary">{review.time}</p>
                  </div>
                </div>
                <div className="mt-2 flex">
                    <StarRating rating={review.rating} showText={false}/>
                </div>
                <p className="mt-2 text-base-content-secondary">{review.comment}</p>
                <div className="mt-3 flex items-center gap-4 text-base-content-secondary">
                    <button className="flex items-center gap-1.5 transition-colors hover:text-primary"><HandThumbUpIcon className="h-5 w-5"/> {review.likes}</button>
                    <button className="flex items-center gap-1.5 transition-colors hover:text-primary"><HandThumbDownIcon className="h-5 w-5"/> {review.dislikes}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Destinations */}
        <div className="mt-6 pb-24">
          <h2 className="font-display text-xl font-bold">Similar Destinations</h2>
          <div className="mt-3 -mr-6 flex space-x-4 overflow-x-auto pb-2 pr-6">
            {destination.similarDestinations.map((dest) => (
              <div key={dest.id} className="w-40 flex-shrink-0 cursor-pointer">
                <div className="h-28 w-full overflow-hidden rounded-2xl">
                  <img src={dest.image} alt={dest.name} className="h-full w-full object-cover" />
                </div>
                <div className="mt-2">
                  <h3 className="font-bold truncate">{dest.name}</h3>
                  <p className="text-sm text-base-content-secondary truncate">{dest.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailScreen;