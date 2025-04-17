'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.getElementById('demo-modal');
      if (modal && !modal.contains(event.target as Node)) {
        setShowDemo(false);
      }
    };

    if (showDemo) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [showDemo]);

  // Handle demo button click
  const openDemo = () => {
    setShowDemo(true);
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Demo Video Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div id="demo-modal" className="bg-white rounded-2xl p-6 max-w-4xl w-full relative">
            <button
              onClick={() => setShowDemo(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#f2c955] transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/pyNOR5BSN9I?autoplay=1&rel=0"
                title="Magical Stories Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[#171c3f]/80">See how Magical Stories brings your child&apos;s imagination to life</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#171c3f]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Logo />
            </div>
            {/* Mobile menu button */}
            <button className="lg:hidden p-2 rounded-md text-[#171c3f] hover:text-[#fa6565] focus:outline-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#features" className="text-[#171c3f] hover:text-[#fa6565] transition-colors duration-300 font-medium">Features</a>
              <a href="#testimonials" className="text-[#171c3f] hover:text-[#fa6565] transition-colors duration-300 font-medium">Testimonials</a>
              <a href="#pricing" className="text-[#171c3f] hover:text-[#fa6565] transition-colors duration-300 font-medium">Pricing</a>
              <Link
                href="#story-form"
                className="bg-[#fa6565] text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Render Sections */}
      <HeroSection openDemo={openDemo} />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <Footer />

    </main>
  );
}
