import React from 'react';

const StoriesScreen: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center p-6 text-center">
      <div>
        <h1 className="text-2xl font-bold">Local Stories</h1>
        <p className="mt-2 text-base-content-secondary">
          Community-driven stories and content will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default StoriesScreen;
