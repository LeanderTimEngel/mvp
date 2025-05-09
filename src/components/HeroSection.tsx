'use client';

import StoryForm from '@/components/StoryForm';
import Image from 'next/image';
import Link from 'next/link';

// Define props interface
interface HeroSectionProps {
  openDemo: () => void;
}

// Placeholder avatar URLs - replace with actual filenames in public/images/
const avatarUrls = [
  '/images/customer1.jpeg', // Replace with your actual image path
  '/images/customer2.jpeg', // Replace with your actual image path
  '/images/customer3.jpeg', // Replace with your actual image path
  '/images/customer4.jpeg', // Replace with your actual image path
];

export default function HeroSection({ openDemo }: HeroSectionProps) { // Destructure openDemo prop
  return (
    <div className="relative overflow-hidden pt-24 pb-10 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 pointer-events-none" />
      
      {/* Floating images - smaller and more subtle than sales page */}
      {/* Oben mitte rechts */}
      <div className="absolute top-[9%] right-[20%] w-16 h-9 md:w-24 md:h-13.5 rounded-lg overflow-hidden shadow-sm border border-white/30 transform rotate-2 animate-float-slow z-10 hidden lg:block aspect-video">
        <Image 
          src="/images/Magical-Stories-6.jpg" 
          alt="Magical story moment" 
          width={96} 
          height={54}
          className="w-full h-full object-cover brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/15 to-transparent"></div>
      </div>
      
      {/* Oben links */}
      <div className="absolute bottom-[75%] left-[5%] w-20 h-11 md:w-28 md:h-16 rounded-lg overflow-hidden shadow-sm border border-white/30 transform -rotate-2 animate-float-slower z-10 hidden lg:block aspect-video">
        <Image 
          src="/images/Magical-Stories-2.jpeg" 
          alt="Parent with child" 
          width={112} 
          height={63}
          className="w-full h-full object-cover brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/15 to-transparent"></div>
      </div>
      
      {/* Unten links */}
      <div className="absolute top-[62%] left-[3%] w-14 h-8 md:w-20 md:h-11 rounded-lg overflow-hidden shadow-sm border border-white/30 transform rotate-3 animate-float-medium z-10 hidden lg:block aspect-video">
        <Image 
          src="/images/Magical-Stories-3.jpeg" 
          alt="Child with story" 
          width={80} 
          height={45}
          className="w-full h-full object-cover brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/15 to-transparent"></div>
      </div>
      
      {/* Mitte rechts */}
      <div className="absolute top-[45%] right-[6%] w-16 h-9 md:w-22 md:h-12 rounded-lg overflow-hidden shadow-sm border border-white/30 transform rotate-4 animate-float-medium z-10 hidden lg:block aspect-video">
        <Image 
          src="/images/Magical-Stories-1.jpeg" 
          alt="Child enjoying story" 
          width={88} 
          height={49}
          className="w-full h-full object-cover brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/15 to-transparent"></div>
      </div>
      
      {/* Unten rechts */}
      <div className="absolute bottom-[8%] right-[57%] w-14 h-8 md:w-18 md:h-10 rounded-lg overflow-hidden shadow-sm border border-white/30 transform -rotate-3 animate-float-fast z-10 hidden lg:block aspect-video">
        <Image 
          src="/images/Magical-Stories-4.jpeg" 
          alt="Magical adventure" 
          width={72} 
          height={40}
          className="w-full h-full object-cover brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/15 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="space-y-5 sm:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#171c3f] leading-tight">
              Magical Stories for Your Little One
            </h1>
            <p className="text-base sm:text-xl text-[#171c3f]/80 max-w-2xl leading-relaxed">
              Create personalized audio stories that spark your child&apos;s imagination.
              Perfect for bedtime, car rides, or any time they need a magical adventure!
            </p>
            
            {/* CTA Buttons - Full width on mobile */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={openDemo}
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#171c3f]/10 text-[#171c3f] hover:bg-[#171c3f]/20 h-11 px-6 sm:px-8 w-full sm:w-auto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </button>
              <Link
                href="#story-form"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 h-11 px-6 sm:px-8 w-full sm:w-auto"
              >
                Create a Story
              </Link>
            </div>
            
            {/* Social proof - better mobile layout */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 pt-3 sm:pt-0">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2 overflow-hidden">
                  {avatarUrls.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt={`Happy parent ${index + 1}`}
                      width={28}
                      height={28}
                      className="inline-block rounded-full border-2 border-white object-cover sm:w-8 sm:h-8"
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-[#171c3f]/80 font-medium">1,000+ Happy Parents</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl">⭐</span>
                <span className="text-xs sm:text-sm text-[#171c3f]/80 font-medium">4.9/5 Rating</span>
              </div>
            </div>
          </div>
          
          {/* Story Form - improved mobile spacing */}
          <div className="relative mt-6 lg:mt-0" id="story-form">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/10 to-[#f2c955]/10 rounded-2xl sm:rounded-3xl blur-3xl" />
            <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8 border border-[#f2c955]/20">
              <StoryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 