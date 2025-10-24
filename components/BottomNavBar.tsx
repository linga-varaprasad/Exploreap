import React from 'react';
import { HomeIcon, MapIcon, BriefcaseIcon, BookOpenIcon, UserIcon, ChatBubbleOvalLeftEllipsisIcon } from '../assets/icons';

export type Tab = 'Home' | 'Map' | 'Trips' | 'Stories' | 'Profile';

const navItems: { name: Tab; icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  { name: 'Home', icon: HomeIcon },
  { name: 'Map', icon: MapIcon },
  { name: 'Trips', icon: BriefcaseIcon },
  { name: 'Stories', icon: BookOpenIcon },
  { name: 'Profile', icon: UserIcon },
];

interface BottomNavBarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  onChatClick: () => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabChange, onChatClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-24 border-t border-base-200/80 bg-base-100/90 backdrop-blur-sm">
      <div className="relative mx-auto grid h-full max-w-lg grid-cols-5 font-medium">
        {navItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            type="button"
            className={`group inline-flex flex-col items-center justify-center pt-2 pb-1 transition-colors duration-300 ${
              activeTab === name
                ? 'text-secondary'
                : 'text-base-content-secondary hover:text-primary'
            }`}
            onClick={() => onTabChange(name)}
          >
            <Icon className="mb-1 h-7 w-7" />
            <span className={`text-xs font-semibold ${activeTab === name && 'text-secondary'}`}>{name}</span>
          </button>
        ))}
        <div className="absolute top-[-35px] left-1/2 -translate-x-1/2 transform">
            <button 
              onClick={onChatClick}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/40 transition-transform hover:scale-110"
              aria-label="Open AI Chat"
            >
                <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;