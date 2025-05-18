'use client';

// Removing unused imports
// import { COLORS } from '@/lib/constants';
// import Image from 'next/image';

interface DemoSectionProps {
  openDemo: () => void;
}

export default function DemoSection({ openDemo }: DemoSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#171c3f] mb-4">See How It Works</h2>
          <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
            Watch a quick demo of how we create personalized stories for your child
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <button
            onClick={openDemo}
            className="w-full aspect-video bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fa6565] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-lg font-medium text-[#171c3f]">Watch Demo</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
} 