'use client';

import Image from 'next/image';

interface HeroSectionProps {
  openDemo: () => void;
}

export default function HeroSection({ openDemo }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fafaf8] via-white to-[#f8f9ff] min-h-screen flex items-center justify-center">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#fa6565]/10 via-[#f2c955]/10 to-[#fa6565]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#f2c955]/10 via-[#1da448]/10 to-[#f2c955]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#fa6565]/5 via-[#f2c955]/5 to-[#1da448]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-20">
        
        {/* Centered content container */}
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Modern badge with more space above */}
          <div className="flex justify-center mb-10 pt-8">
            <div className="inline-flex items-center bg-white/90 backdrop-blur-xl text-[#171c3f] px-7 py-3.5 rounded-full text-sm font-semibold shadow-lg border border-[#fa6565]/15 hover:bg-white transition-all duration-300 hover:shadow-xl">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#fa6565] to-[#f2c955] rounded-full mr-3.5 animate-pulse shadow-sm"></div>
              For children ages 4-10
            </div>
          </div>

          {/* Enhanced headline with consistent colors */}
          <div className="mb-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#171c3f] leading-[0.95] tracking-tight max-w-5xl mx-auto">
              Finding the Right 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fa6565] via-[#fa6565]/80 to-[#f2c955] mt-3"> 
                Bedtime Stories
              </span> 
              <span className="block mt-3 text-[#171c3f]">for Your Child?</span>
            </h1>
          </div>

          {/* Refined description */}
          <div className="max-w-4xl mx-auto mb-16 space-y-5">
            <p className="text-xl sm:text-2xl text-[#171c3f]/90 leading-relaxed font-semibold">
              We create personalized audio stories where your child is the main character.
            </p>
            <p className="text-lg sm:text-xl text-[#171c3f]/70 leading-relaxed font-medium">
              Each story is tailored to their interests and delivered to your email in minutes.
            </p>
          </div>

          {/* Enhanced hero image section */}
          <div className="flex justify-center mb-16">
            <div className="relative max-w-5xl w-full">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm p-3 border border-white/30 hover:shadow-3xl transition-shadow duration-500">
                <div className="rounded-[1.5rem] overflow-hidden bg-white p-8">
                  <Image
                    src="/images/Magical-Stories-1.jpeg"
                    alt="Parent and child enjoying story time together"
                    width={900}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl aspect-[3/2] shadow-inner"
                    priority
                  />
                </div>
                
                {/* Enhanced overlay */}
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/98 backdrop-blur-xl rounded-2xl p-7 shadow-2xl border border-white/50">
                    <p className="text-[#171c3f] font-bold text-lg sm:text-xl leading-relaxed">
                      &quot;Making bedtime stories more engaging&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-3xl flex items-center justify-center shadow-2xl animate-float-gentle z-10 rotate-12 hover:rotate-6 transition-transform duration-300">
                <span className="text-white text-4xl filter drop-shadow-md">📚</span>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#f2c955] to-[#1da448] rounded-3xl flex items-center justify-center shadow-2xl animate-float-gentle z-10 -rotate-12 hover:-rotate-6 transition-transform duration-300" style={{animationDelay: '1s'}}>
                <span className="text-white text-3xl filter drop-shadow-md">🎧</span>
              </div>
            </div>
          </div>

          {/* Enhanced feature grid */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
              <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-7 shadow-lg border border-[#fa6565]/10 hover:bg-white hover:shadow-2xl hover:border-[#fa6565]/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl filter drop-shadow-sm">⭐</span>
                </div>
                <h3 className="text-[#171c3f] text-base font-extrabold mb-2.5 text-center">Personalized</h3>
                <p className="text-[#171c3f]/60 text-sm text-center leading-relaxed">Your child as the main character</p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-7 shadow-lg border border-[#f2c955]/10 hover:bg-white hover:shadow-2xl hover:border-[#f2c955]/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f2c955] to-[#1da448] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl filter drop-shadow-sm">🎨</span>
                </div>
                <h3 className="text-[#171c3f] text-base font-extrabold mb-2.5 text-center">Custom themes</h3>
                <p className="text-[#171c3f]/60 text-sm text-center leading-relaxed">Based on their interests</p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-7 shadow-lg border border-[#1da448]/10 hover:bg-white hover:shadow-2xl hover:border-[#1da448]/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1da448] to-[#fa6565] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl filter drop-shadow-sm">🎙️</span>
                </div>
                <h3 className="text-[#171c3f] text-base font-extrabold mb-2.5 text-center">Audio stories</h3>
                <p className="text-[#171c3f]/60 text-sm text-center leading-relaxed">AI-generated narration</p>
              </div>
              
              <div className="group bg-white/80 backdrop-blur-xl rounded-3xl p-7 shadow-lg border border-[#fa6565]/10 hover:bg-white hover:shadow-2xl hover:border-[#fa6565]/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl filter drop-shadow-sm">📧</span>
                </div>
                <h3 className="text-[#171c3f] text-base font-extrabold mb-2.5 text-center">Email delivery</h3>
                <p className="text-[#171c3f]/60 text-sm text-center leading-relaxed">Sent within minutes</p>
              </div>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex justify-center mb-14">
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <button
                onClick={() => {
                  const storyForm = document.getElementById('story-form');
                  if (storyForm) {
                    storyForm.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative inline-flex items-center justify-center rounded-2xl text-lg font-bold transition-all duration-300 bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:shadow-2xl hover:shadow-[#fa6565]/30 hover:scale-105 h-[4.25rem] px-14 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#f2c955] to-[#fa6565] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative mr-3 text-2xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">✨</span>
                <span className="relative font-extrabold">Create a Story</span>
              </button>
              <button
                onClick={openDemo}
                className="group inline-flex items-center justify-center rounded-2xl text-lg font-bold transition-all duration-300 bg-white/90 backdrop-blur-xl text-[#171c3f] hover:bg-white border-2 border-[#171c3f]/15 hover:border-[#171c3f]/30 hover:shadow-xl h-[4.25rem] px-14"
              >
                <span className="mr-3 text-2xl group-hover:scale-110 transition-transform duration-300">▶️</span>
                <span>See Example</span>
              </button>
            </div>
          </div>

          {/* Enhanced trust indicators */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-col sm:flex-row items-center gap-8 text-sm">
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-xl rounded-full px-7 py-4 border border-[#f2c955]/15 shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="text-yellow-500 text-lg filter drop-shadow-sm">⭐⭐⭐⭐⭐</span>
                <span className="font-bold text-[#171c3f]/80">Loved by parents</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-xl rounded-full px-7 py-4 border border-[#1da448]/15 shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="text-2xl filter drop-shadow-sm">👨‍👩‍👧‍👦</span>
                <span className="font-bold text-[#171c3f]/80">Trusted by families</span>
              </div>
            </div>
          </div>

          {/* Enhanced testimonial */}
          <div className="flex justify-center">
            <div className="max-w-4xl w-full">
              <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-10 border border-[#fa6565]/15 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center space-y-7">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-3xl flex items-center justify-center shadow-xl">
                    <span className="text-white text-4xl filter drop-shadow-md">👩</span>
                  </div>
                  <div>
                    <blockquote className="text-[#171c3f] text-xl sm:text-2xl font-bold mb-5 leading-relaxed max-w-3xl mx-auto">
                      &quot;My daughter loves hearing stories where she&apos;s the main character. 
                      It&apos;s made bedtime much more enjoyable for both of us.&quot;
                    </blockquote>
                    <cite className="text-[#171c3f]/60 text-base font-semibold not-italic">
                      — Sarah M.
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-[#171c3f]/15 rounded-full flex justify-center bg-white/40 backdrop-blur-sm shadow-lg">
          <div className="w-1.5 h-4 bg-gradient-to-b from-[#fa6565] to-[#f2c955] rounded-full mt-2.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 