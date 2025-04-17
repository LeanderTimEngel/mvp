'use client';

import Link from 'next/link';
import StoryForm from '@/components/StoryForm';

interface HeroSectionProps {
  openDemo: () => void;
}

export default function HeroSection({ openDemo }: HeroSectionProps) {
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#story-form"
                className="w-full sm:w-auto bg-[#fa6565] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-center font-medium"
              >
                Create Your Story
              </Link>
              <button
                onClick={openDemo}
                type="button"
                className="w-full sm:w-auto group bg-[#f2c955] text-[#171c3f] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-medium"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>
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