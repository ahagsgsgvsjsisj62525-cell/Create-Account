import React from 'react';
import { Menu, Maximize2, User } from 'lucide-react';

export const TopBar = () => {
  const currentTime = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });

  return (
    <div className="h-16 bg-orange-600 flex items-center justify-between px-6 text-white shadow-md">
      <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-orange-700 rounded-lg transition-colors">
          <Menu size={24} />
        </button>
        <button className="p-2 hover:bg-orange-700 rounded-lg transition-colors">
          <Maximize2 size={20} />
        </button>
        <div className="hidden md:block text-sm font-medium opacity-90">
          CURRENT PANEL TIME:
          <span className="ml-2">{currentTime}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 bg-orange-700 rounded-md cursor-pointer">
          <img 
            src="https://flagcdn.com/w20/us.png" 
            alt="US" 
            className="w-5 h-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
          <User size={20} />
        </button>
      </div>
    </div>
  );
};
