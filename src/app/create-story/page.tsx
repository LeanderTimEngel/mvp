'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryForm from '@/components/StoryForm';
import { COLORS } from '@/lib/constants';
import Link from 'next/link';

export default function CreateStoryPage() {
  const [activeTab, setActiveTab] = useState('form');

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Header isHomePage={false} />
      
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#fa6565]/10 to-[#f2c955]/10 text-[#171c3f] text-sm font-medium">
                ✨ Create Magical Stories
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#171c3f] leading-tight mb-6 animate-fade-in">
              Create Your Child's Story
            </h1>
            <p className="text-xl text-[#171c3f]/80 mb-8 animate-fade-in-delay">
              Fill in the details below to create a magical, personalized story for your child.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Tips and Guidance */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Tips */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#fa6565]/10 to-[#f2c955]/10 flex items-center justify-center mr-3">
                    <span className="text-xl">💡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#171c3f]">Quick Tips</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <span className="text-[#fa6565] mr-2 group-hover:scale-110 transition-transform">•</span>
                    <span className="text-[#171c3f]/80 group-hover:text-[#171c3f] transition-colors">Be specific with your child's interests for better personalization</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-[#fa6565] mr-2 group-hover:scale-110 transition-transform">•</span>
                    <span className="text-[#171c3f]/80 group-hover:text-[#171c3f] transition-colors">Choose a story length that matches your child's attention span</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-[#fa6565] mr-2 group-hover:scale-110 transition-transform">•</span>
                    <span className="text-[#171c3f]/80 group-hover:text-[#171c3f] transition-colors">Select a category that aligns with your child's current interests</span>
                  </li>
                </ul>
              </div>

              {/* Story Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#fa6565]/10 to-[#f2c955]/10 flex items-center justify-center mr-3">
                    <span className="text-xl">📚</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#171c3f]">Story Categories</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: '🚀', name: 'Adventure', desc: 'Exciting journeys and discoveries' },
                    { icon: '🦄', name: 'Fantasy', desc: 'Magical worlds and creatures' },
                    { icon: '🦁', name: 'Animals', desc: 'Wildlife and pet adventures' },
                    { icon: '🌌', name: 'Space', desc: 'Cosmic adventures and exploration' },
                    { icon: '🦸', name: 'Superheroes', desc: 'Heroic tales and powers' },
                    { icon: '👑', name: 'Princesses', desc: 'Royal adventures and magic' },
                    { icon: '🦕', name: 'Dinosaurs', desc: 'Prehistoric adventures' },
                    { icon: '🏴‍☠️', name: 'Pirates', desc: 'Treasure hunts and sea adventures' }
                  ].map((category, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#171c3f]/5 transition-colors group">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                      <div>
                        <div className="font-medium text-[#171c3f] group-hover:text-[#fa6565] transition-colors">{category.name}</div>
                        <div className="text-sm text-[#171c3f]/60">{category.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Story Lengths */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#fa6565]/10 to-[#f2c955]/10 flex items-center justify-center mr-3">
                    <span className="text-xl">⏱️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#171c3f]">Story Lengths</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { length: 'Short', time: '5-10 minutes', use: 'Perfect for bedtime' },
                    { length: 'Medium', time: '10-15 minutes', use: 'Great for car rides' },
                    { length: 'Long', time: '15-20 minutes', use: 'For longer attention spans' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#171c3f]/5 transition-colors group">
                      <div>
                        <div className="font-medium text-[#171c3f] group-hover:text-[#fa6565] transition-colors">{item.length}</div>
                        <div className="text-sm text-[#171c3f]/60">{item.time}</div>
                      </div>
                      <div className="text-[#171c3f]/40 group-hover:text-[#171c3f]/60 transition-colors">{item.use}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Form Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#fa6565]/10 to-[#f2c955]/10 flex items-center justify-center mr-4">
                      <span className="text-2xl">✍️</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#171c3f]">Story Details</h2>
                      <p className="text-[#171c3f]/80">
                        Fill in the details below to create a personalized story for your child. The more specific you are, the better the story will be!
                      </p>
                    </div>
                  </div>
                </div>
                <StoryForm />
              </div>

              {/* Additional Information */}
              <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#171c3f]/5 flex items-center justify-center mr-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#171c3f]">What Happens Next?</h3>
                </div>
                <ol className="space-y-6">
                  {[
                    { step: '1', text: 'Submit your story details' },
                    { step: '2', text: 'Our AI creates a personalized story (5-10 minutes)' },
                    { step: '3', text: 'Receive your story via email' },
                    { step: '4', text: 'Enjoy the story with your child!' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="w-8 h-8 rounded-full bg-[#171c3f]/5 flex items-center justify-center mr-4 group-hover:bg-[#171c3f]/10 transition-colors text-[#171c3f] font-medium">
                        {item.step}
                      </span>
                      <span className="text-lg text-[#171c3f]/80 group-hover:text-[#171c3f] transition-colors group-hover:translate-x-1 transition-transform">{item.text}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#fa6565] to-[#f2c955] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
            <div className="relative">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium">
                  Need Assistance?
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">We're Here to Help!</h2>
              <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                Our support team is here to help you create the perfect story for your child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all bg-white text-[#171c3f] hover:bg-white/90 h-12 px-8 text-lg hover:scale-105 active:scale-95"
                >
                  Contact Support
                </Link>
                <Link
                  href="/sales"
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all bg-white/20 text-white hover:bg-white/30 h-12 px-8 text-lg hover:scale-105 active:scale-95"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 