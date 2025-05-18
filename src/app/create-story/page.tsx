'use client';

import Header from '@/components/Header';
import StoryForm from '@/components/StoryForm';

export default function CreateStoryPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#171c3f] mb-6">
              Create Your Child&apos;s Story
            </h1>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Tell us about your child and we&apos;ll create a magical story they&apos;ll love
            </p>
          </div>
        </div>
      </section>

      {/* Story Form Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <StoryForm />
        </div>
      </section>
    </main>
  );
} 