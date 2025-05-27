import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-white via-[#fafaf8] to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#fa6565]/5 to-[#f2c955]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#f2c955]/5 to-[#1da448]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-[2rem] p-10 sm:p-16 text-center shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#fa6565] via-[#f2c955] to-[#1da448]"></div>
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#fa6565]/10 to-[#f2c955]/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#f2c955]/10 to-[#1da448]/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <span className="text-4xl text-white filter drop-shadow-md">✨</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#171c3f] mb-6 leading-tight">
              Ready to Create 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fa6565] to-[#f2c955] mt-2">
                Some Magic?
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-[#171c3f]/70 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Give your child the gift of imagination. Generate their unique, personalized audio story today and make storytime unforgettable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#story-form"
                className="group relative inline-flex items-center justify-center rounded-2xl text-lg font-bold transition-all duration-300 bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:shadow-2xl hover:shadow-[#fa6565]/30 hover:scale-105 h-16 px-12 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#f2c955] to-[#fa6565] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative mr-3 text-2xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">🎯</span>
                <span className="relative font-extrabold">Create a Story Now</span>
              </Link>
              
              <div className="flex items-center space-x-3 text-[#171c3f]/60 font-medium">
                <span className="text-2xl">⚡</span>
                <span>Ready in just 2 minutes</span>
              </div>
            </div>

            {/* Trust elements */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-[#171c3f]/60">
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-lg">✓</span>
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-lg">✓</span>
                <span className="font-medium">First story free</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-lg">✓</span>
                <span className="font-medium">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 