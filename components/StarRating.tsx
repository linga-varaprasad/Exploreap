import React from 'react';
import { StarIcon, HalfStarIcon } from '../assets/icons';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
  starClassName?: string;
  showText?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  totalStars = 5,
  className = "flex items-center",
  starClassName = "h-5 w-5 text-yellow-400",
  showText = true,
}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - fullStars - halfStar;

  return (
    <div className={className}>
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} className={starClassName} />
        ))}
        {halfStar === 1 && <HalfStarIcon className={starClassName} />}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={`empty-${i}`} className={`${starClassName} text-gray-300`} />
        ))}
      </div>
      {showText && (
        <span className="ml-2 text-sm font-medium text-base-content-secondary">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;
