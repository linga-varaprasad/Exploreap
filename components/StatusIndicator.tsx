import React from 'react';

interface StatusIndicatorProps {
  count: number;
  activeIndex: number;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ count, activeIndex }) => {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === activeIndex ? 'w-6 bg-secondary' : 'w-2 bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default StatusIndicator;
