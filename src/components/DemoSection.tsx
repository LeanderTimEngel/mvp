'use client';

// Removing unused imports
// import { COLORS } from '@/lib/constants';
// import Image from 'next/image';

interface DemoSectionProps {
  openDemo: () => void;
}

export default function DemoSection({ openDemo }: DemoSectionProps) {
  return (
    <section id="demo" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f8f9fe]" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#fa6565]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#f2c955]/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#171c3f] mb-4">
            See Magical Stories in Action!
          </h2>
          <p className="text-base sm:text-lg text-[#171c3f]/80 max-w-2xl mx-auto">
            Watch our quick demo to see how easy it is to create personalized audio adventures 
            that your child will love.
          </p>
        </div>
        
        {/* Video preview card */}
        <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-10 border border-[#f2c955]/20 group cursor-pointer" onClick={openDemo}>
          {/* Placeholder gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fa6565]/80 to-[#f2c955]/80 animate-gradient bg-[length:200%_200%]" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 animate-gradient-pulse">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#fa6565] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          
          {/* Optional video thumbnail - uncomment and use a real image when available */}
          {/* <Image 
            src="/images/demo-preview.jpg" 
            alt="Demo video preview" 
            fill 
            className="object-cover"
          /> */}
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-end p-6 sm:p-8 text-white">
            <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-xl">
              <p className="text-lg sm:text-xl font-medium">Creating stories for your little dreamer</p>
              <p className="text-sm opacity-90">Watch how it works (2:15)</p>
            </div>
          </div>
        </div>
        
        {/* Primary CTA */}
        {/*<div className="flex justify-center">
          <button
            onClick={openDemo}
            type="button"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base sm:text-lg"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo Video
          </button>
        </div>*/}
      </div>
    </section>
  );
} 