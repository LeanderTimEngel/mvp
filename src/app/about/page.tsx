import { Metadata } from 'next';
import { COLORS } from '@/lib/constants';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Link from 'next/link';
import Logo from '@/components/Logo';
import React from 'react';

export default function About() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Replace Navigation with Header */}
      <Header />

      {/* Main Content Wrapper with Padding for Fixed Header */}
      <div className="pt-20">
        
        {/* About Hero Section */}
        <div className="relative pt-24 pb-16 bg-gradient-to-b from-white to-[#fafaf8]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 opacity-50"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Magical Stories</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to Magical Stories, where imagination comes to life! We believe in the power of storytelling to
              inspire, educate, and entertain children. Our mission is to create personalized audio stories that spark
              creativity and make bedtime a truly magical experience.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Founded by a team of passionate parents and educators, Magical Stories uses cutting-edge AI technology to
              craft unique tales tailored to your child&apos;s interests. From brave knights to curious explorers, we bring
              their favorite characters and themes into enchanting audio adventures.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] mx-auto rounded-full"></div>
          </div>
        </div>

        {/* About Content Sections */}
        <div className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">

            {/* Our Story Section */}
            <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className={`text-3xl font-semibold text-[${COLORS.dark}] mb-4`}>Our Story</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Magical Stories, where technology meets creativity to craft unforgettable audio adventures for young listeners.
                  We believe in the power of storytelling to spark imagination, foster learning, and create lasting memories.
                  Our journey began with a simple idea: what if every child could be the hero of their own story?
                  Driven by this vision, we set out to build a platform that uses cutting-edge AI to generate personalized audio narratives
                  tailored to each child&apos;s unique interests and name.
                </p>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                {/* Placeholder Image - Replace with actual image if available */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fa6565]/80 to-[#f2c955]/80 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">📖</span>
                </div>
              </div>
            </section>

            {/* Our Mission Section */}
            <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg order-last md:order-first">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gradient-to-bl from-[#fa6565]/80 to-[#f2c955]/80 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">🎯</span>
                </div>
              </div>
              <div>
                <h2 className={`text-3xl font-semibold text-[${COLORS.dark}] mb-4`}>Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  At Magical Stories, we believe in the power of imagination. Our mission is to create personalized, engaging audio stories that spark children&apos;s creativity and make learning fun. We combine cutting-edge AI technology with a passion for storytelling to deliver unique experiences for every child.
                </p>
              </div>
            </section>
            
            {/* How It Works Section */}
            <section className="text-center bg-white p-8 sm:p-10 rounded-2xl shadow-md border border-gray-100">
              <h2 className={`text-3xl font-semibold text-[${COLORS.dark}] mb-6`}>How the Magic Happens</h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-10">
                Our advanced AI crafts unique stories based on your child&apos;s name, age, interests, and favorite characters. 
                Each tale ensures age-appropriate content with positive messages. Our text-to-speech tech then creates 
                high-quality audio narrations, perfect for screen-free enjoyment anytime.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-4">
                  <div className={`w-12 h-12 rounded-full bg-[${COLORS.primary}]/10 flex items-center justify-center mb-3`}>
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h3 className="font-medium text-gray-800">Provide Details</h3>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className={`w-12 h-12 rounded-full bg-[${COLORS.secondary}]/10 flex items-center justify-center mb-3`}>
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h3 className="font-medium text-gray-800">AI Creates Story</h3>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className={`w-12 h-12 rounded-full bg-[${COLORS.success}]/10 flex items-center justify-center mb-3`}>
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <h3 className="font-medium text-gray-800">Receive & Enjoy</h3>
                </div>
              </div>
            </section>
              
            {/* Why Parents Love Us Section */}
            <section className="bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 p-8 sm:p-10 rounded-2xl">
              <h2 className={`text-3xl font-semibold text-center text-[${COLORS.dark}] mb-8`}>Why Parents Love Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {[ 
                    { icon: '💖', text: 'Personalized stories make their child feel special' },
                    { icon: '🎧', text: 'High-quality audio for screen-free entertainment' },
                    { icon: '✨', text: 'Stories that encourage imagination and creativity' },
                    { icon: '🎓', text: 'Educational content tailored to their child&apos;s age' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-white/70 p-5 rounded-lg shadow-sm backdrop-blur-sm">
                      <span className="text-2xl mr-4 mt-0.5">{item.icon}</span> 
                      <span className="text-gray-700 leading-snug">{item.text}</span>
                    </div>
                  ))}
              </div>
            </section>
              
            {/* Join Community Section */}
            <section className="text-center pt-4">
              <h2 className={`text-3xl font-semibold text-[${COLORS.dark}] mb-4`}>Join Our Community</h2>
              <p className="text-gray-700 leading-relaxed max-w-xl mx-auto mb-8">
                We&apos;re building a community of parents and children who love stories. Follow us on social media for updates, 
                special offers, and tips to encourage a love of reading.
              </p>
              <Link 
                href="/#story-form" 
                className={`inline-block bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium`}
              >
                Create Your First Magical Story
              </Link>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'About Us | Magical Stories',
  description: 'Learn more about Magical Stories and our mission to create personalized audio adventures for children.',
  keywords: ['Magical Stories', 'personalized stories', 'AI storytelling', 'bedtime stories', 'family reading'],
  openGraph: {
    title: 'About Us | Magical Stories',
    description: 'Learn more about Magical Stories and our mission to create personalized audio adventures for children.',
    url: 'https://www.magicalstories.com/about',
    siteName: 'Magical Stories',
    images: [
      {
        url: 'https://www.magicalstories.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Magical Stories'
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Magical Stories',
    description: 'Learn more about Magical Stories and our mission to create personalized audio adventures for children.',
    images: ['https://www.magicalstories.com/og-image.jpg']
  }
}; 