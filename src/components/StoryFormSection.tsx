'use client';

import StoryForm from '@/components/StoryForm';

export default function StoryFormSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="story-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#171c3f] mb-4">
            Create Your Child&apos;s Magical Story
          </h2>
          <p className="text-xl text-[#171c3f]/80 max-w-3xl mx-auto mb-8">
            Fill in the details below and we&apos;ll create a personalized story where your child is the hero. 
            The entire process takes just a few minutes!
          </p>
          
          {/* Benefits reminder */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <span className="text-[#fa6565]">⚡</span>
              <span className="text-sm text-[#171c3f]/80">Ready in minutes</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <span className="text-[#f2c955]">🎭</span>
              <span className="text-sm text-[#171c3f]/80">Your child is the hero</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <span className="text-[#1da448]">🎙️</span>
              <span className="text-sm text-[#171c3f]/80">Professional narration</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <span className="text-[#fa6565]">💝</span>
              <span className="text-sm text-[#171c3f]/80">First story free</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Decorative background */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 border border-[#f2c955]/20">
              <StoryForm />
            </div>
          </div>
        </div>

        {/* Trust indicators below form */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#171c3f]/60">
            <div className="flex items-center space-x-2">
              <span className="text-[#1da448]">🔒</span>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#fa6565]">⭐</span>
              <span>4.9/5 Parent Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#f2c955]">👨‍👩‍👧‍👦</span>
              <span>10,000+ Happy Families</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#1da448]">💌</span>
              <span>Instant Email Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 