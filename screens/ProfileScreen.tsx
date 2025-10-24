import React from 'react';

const ProfileScreen: React.FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center p-6 text-center">
      <div>
        <h1 className="text-2xl font-bold">User Profile</h1>
        <p className="mt-2 text-base-content-secondary">
          User profile, settings, and activity will be managed here.
        </p>
      </div>
    </div>
  );
};

export default ProfileScreen;
