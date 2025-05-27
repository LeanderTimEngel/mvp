'use client';

import Image from 'next/image';

interface HeroSectionProps {
  openDemo: () => void;
}

export default function HeroSection({ openDemo }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fafaf8] via-white to-[#f8f9ff] min-h-screen flex items-center justify-center">
      {/* Subtle background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#fa6565]/8 to-[#f2c955]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-[#f2c955]/8 to-[#fa6565]/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Target group badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-[#fa6565]/10 to-[#f2c955]/10 text-[#fa6565] px-6 py-3 rounded-full text-sm font-semibold shadow-sm border border-[#fa6565]/20 mb-8">
          <span className="mr-2 text-base">🎯</span>
          Perfect for children ages 4-10
        </div>

        {/* Main headline - centered and clean */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#171c3f] leading-[1.1] tracking-tight mb-8 max-w-5xl mx-auto">
          Struggling to Find 
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fa6565] to-[#f2c955] mt-2"> 
            Engaging Bedtime Stories
          </span> 
          <span className="block mt-2">for Your Child?</span>
        </h1>

        {/* Problem description - centered */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <p className="text-xl sm:text-2xl text-[#171c3f]/80 leading-relaxed">
            Generic audiobooks don&apos;t capture your child&apos;s imagination.
          </p>
          <p className="text-2xl sm:text-3xl font-semibold text-[#171c3f] leading-relaxed">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa6565] to-[#f2c955]">Your child becomes the hero</span> in personalized stories that spark creativity and make bedtime magical again.
          </p>
        </div>

        {/* Hero Image - centered and prominent */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 bg-white p-4 sm:p-6">
            <Image
              src="/images/Magical-Stories-1.jpeg"
              alt="Parent struggling with bedtime stories while child looks restless"
              width={800}
              height={500}
              className="w-full h-auto object-cover rounded-2xl aspect-[16/10]"
              priority
            />
            <div className="absolute inset-4 sm:inset-6 bg-gradient-to-t from-[#171c3f]/20 via-transparent to-transparent rounded-2xl"></div>
            
            {/* Enhanced overlay text */}
            <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 right-8 sm:right-12">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20">
                <p className="text-[#171c3f] font-semibold text-base sm:text-lg leading-relaxed">
                  &quot;Every night, the same struggle...&quot;
                </p>
                <p className="text-[#171c3f]/70 text-sm sm:text-base mt-1">
                  Sound familiar? You&apos;re not alone.
                </p>
              </div>
            </div>
          </div>

          {/* Floating elements - positioned around the image */}
          <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-full flex items-center justify-center shadow-xl animate-float-gentle z-10">
            <span className="text-white text-2xl sm:text-3xl">😴</span>
          </div>
          
          <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#f2c955] to-[#1da448] rounded-full flex items-center justify-center shadow-xl animate-float-gentle z-10" style={{animationDelay: '1s'}}>
            <span className="text-white text-xl sm:text-2xl">📚</span>
          </div>

          {/* Transformation indicator */}
          <div className="absolute top-1/2 -right-8 lg:-right-12 transform -translate-y-1/2 hidden lg:block">
            <div className="bg-white rounded-full p-4 shadow-xl border-2 border-[#fa6565]/20 animate-pulse-soft">
              <div className="text-center">
                <div className="text-xs text-[#171c3f]/60 mb-1 font-medium">Transform to</div>
                <div className="text-3xl">😊✨</div>
              </div>
            </div>
          </div>
        </div>

        {/* Unique selling points - clean grid layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-[#fa6565]/10 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-lg sm:text-xl">⭐</span>
            </div>
            <h3 className="text-[#171c3f] text-sm sm:text-base font-semibold mb-2">Child is the hero</h3>
            <p className="text-[#171c3f]/70 text-xs sm:text-sm">Unlike generic audiobooks</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-[#f2c955]/10 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#f2c955] to-[#1da448] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-lg sm:text-xl">🎨</span>
            </div>
            <h3 className="text-[#171c3f] text-sm sm:text-base font-semibold mb-2">Tailored interests</h3>
            <p className="text-[#171c3f]/70 text-xs sm:text-sm">Matches their passions</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-[#1da448]/10 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1da448] to-[#fa6565] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-lg sm:text-xl">🎙️</span>
            </div>
            <h3 className="text-[#171c3f] text-sm sm:text-base font-semibold mb-2">AI narration</h3>
            <p className="text-[#171c3f]/70 text-xs sm:text-sm">Professional quality</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-sm border border-[#fa6565]/10 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-lg sm:text-xl">⚡</span>
            </div>
            <h3 className="text-[#171c3f] text-sm sm:text-base font-semibold mb-2">Ready in minutes</h3>
            <p className="text-[#171c3f]/70 text-xs sm:text-sm">Instant delivery</p>
          </div>
        </div>

        {/* Call to action buttons - centered */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={() => {
              const storyForm = document.getElementById('story-form');
              if (storyForm) {
                storyForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative inline-flex items-center justify-center rounded-2xl text-lg font-bold transition-all duration-300 bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 hover:scale-105 h-16 px-10 shadow-xl hover:shadow-2xl transform-gpu"
          >
            <span className="mr-3 text-2xl">✨</span>
            <span>Create Your Child&apos;s Story Now</span>
          </button>
          <button
            onClick={openDemo}
            className="group inline-flex items-center justify-center rounded-2xl text-lg font-semibold transition-all duration-300 bg-white/90 backdrop-blur-sm text-[#171c3f] hover:bg-white border-2 border-[#171c3f]/20 hover:border-[#171c3f]/40 hover:shadow-lg h-16 px-10"
          >
            <span className="mr-3 text-2xl group-hover:scale-110 transition-transform duration-300">▶️</span>
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Trust indicators - centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-base text-[#171c3f]/70">
          <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="font-medium">4.9/5 rating</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-xl">👨‍👩‍👧‍👦</span>
            <span className="font-medium">10,000+ happy families</span>
          </div>
        </div>

        {/* Emotional parent quote - centered and prominent */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-[#fa6565]/20 shadow-xl">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl sm:text-3xl">👩</span>
              </div>
              <div>
                <blockquote className="text-[#171c3f] text-lg sm:text-xl lg:text-2xl font-medium italic mb-3 leading-relaxed">
                  &quot;My 6-year-old used to fight bedtime every night. Now she asks for &apos;her stories&apos; 
                  where she&apos;s the brave princess saving the day. It&apos;s completely transformed our evening routine!&quot;
                </blockquote>
                <cite className="text-[#171c3f]/70 text-sm sm:text-base font-semibold not-italic">
                  — Sarah M., Mother of 2
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#171c3f]/30 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-[#fa6565] to-[#f2c955] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 