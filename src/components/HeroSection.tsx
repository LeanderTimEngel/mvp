'use client';

import Link from 'next/link';
import StoryForm from '@/components/StoryForm';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#171c3f] leading-tight">
              Magical Stories for Your Little One
            </h1>
            <p className="text-lg sm:text-xl text-[#171c3f]/80 max-w-2xl leading-relaxed">
              Create personalized audio stories that spark your child&apos;s imagination.
              Perfect for bedtime, car rides, or any time they need a magical adventure!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#f2c955]/20 border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm text-[#171c3f]/80 font-medium">1,000+ Happy Parents</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <span className="text-sm text-[#171c3f]/80 font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0" id="story-form">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/10 to-[#f2c955]/10 rounded-3xl blur-3xl" />
            <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-[#f2c955]/20">
              <StoryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 