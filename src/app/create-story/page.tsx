'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryForm from '@/components/StoryForm';
import Link from 'next/link';

export default function CreateStoryPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Header isHomePage={false} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#171c3f] leading-tight mb-6">
              Create Your Child&apos;s Story
            </h1>
            <p className="text-xl text-[#171c3f]/80 mb-8">
              Fill out the form below to create a personalized story that will spark your child&apos;s imagination.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Tips */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#171c3f] mb-4">Quick Tips</h2>
                <ul className="space-y-3 text-[#171c3f]/80">
                  <li className="flex items-start">
                    <span className="text-lg mr-2.5 mt-0.5">✨</span>
                    <span>Be specific about your child&apos;s interests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg mr-2.5 mt-0.5">🎯</span>
                    <span>Choose a story length that matches their attention span</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lg mr-2.5 mt-0.5">🎨</span>
                    <span>Include their favorite colors and themes</span>
                  </li>
                </ul>
              </div>

              {/* Story Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#171c3f] mb-4">Story Categories</h2>
                <div className="space-y-4">
                  {[
                    { icon: '🏰', name: 'Adventure' },
                    { icon: '🚀', name: 'Space' },
                    { icon: '🐉', name: 'Fantasy' },
                    { icon: '🌊', name: 'Ocean' },
                    { icon: '🦕', name: 'Dinosaurs' },
                    { icon: '🧙', name: 'Magic' },
                    { icon: '🏆', name: 'Sports' },
                    { icon: '🎵', name: 'Music' }
                  ].map((category, index) => (
                    <div key={index} className="flex items-center text-[#171c3f]/80">
                      <span className="text-xl mr-3">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Story Lengths */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#171c3f] mb-4">Story Lengths</h2>
                <div className="space-y-4">
                  {[
                    { icon: '⏱️', name: 'Short (5-10 min)' },
                    { icon: '⏰', name: 'Medium (10-15 min)' },
                    { icon: '⌛', name: 'Long (15-20 min)' }
                  ].map((length, index) => (
                    <div key={index} className="flex items-center text-[#171c3f]/80">
                      <span className="text-xl mr-3">{length.icon}</span>
                      <span>{length.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Form Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <StoryForm />
              </div>

              {/* What Happens Next */}
              <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-[#171c3f] mb-4">What Happens Next?</h2>
                <div className="space-y-4 text-[#171c3f]/80">
                  <p>1. We&apos;ll generate your personalized story using AI</p>
                  <p>2. Our team will review and enhance the story</p>
                  <p>3. You&apos;ll receive the story via email within minutes</p>
                  <p>4. Play the story for your child and watch their imagination come alive!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Need Help?</h2>
            <p className="text-xl text-[#171c3f]/80 mb-8">
              Our team is here to help you create the perfect story for your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 h-12 px-8 text-lg"
              >
                Contact Support
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-[#171c3f]/10 text-[#171c3f] hover:bg-[#171c3f]/20 h-12 px-8 text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 