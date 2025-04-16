import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        {/* Book shape */}
        <div className="w-10 h-12 bg-gradient-to-r from-[#fa6565] to-[#f2c955] rounded-lg shadow-lg transform rotate-3">
          {/* Book pages */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-lg" />
          <div className="absolute top-1 left-1 w-8 h-10 bg-white/10 rounded-md" />
        </div>
        {/* Sparkle */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold bg-gradient-to-r from-[#fa6565] to-[#f2c955] bg-clip-text text-transparent">
          Magical Stories
        </span>
        <span className="text-xs text-[#171c3f]/60">For Little Dreamers</span>
      </div>
    </div>
  );
};

export default Logo; 