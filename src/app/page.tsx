'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import DemoSection from '@/components/DemoSection';
import { COLORS } from '@/lib/constants';
import dynamic from 'next/dynamic';
import StoryForm from '@/components/StoryForm';

// Dynamically import components to potentially reduce initial bundle size
// const Navigation = dynamic(() => import('@/components/Navigation'));

// DEMO_VIDEO_URL constant - if not used elsewhere, it could be moved into DemoModal.tsx
const DEMO_VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Example URL

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  // // Effect to handle body scroll and Escape key is now inside DemoModal
  // useEffect(() => { ... }, [showDemo]); // Keep this comment or remove if preferred

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[${COLORS.dark}]/10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />
            
            {/* Navigation links */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              <a href="#features" className={`text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-300 font-medium hidden sm:block`}>Features</a>
              <a href="#testimonials" className={`text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-300 font-medium hidden sm:block`}>Testimonials</a>
              <a href="#pricing" className={`text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-300 font-medium hidden sm:block`}>Pricing</a>
              <Link
                href="#story-form"
                className={`bg-[${COLORS.primary}] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:opacity-90 transition-all duration-300 font-medium`}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Render Sections */}
      <HeroSection openDemo={handleOpenDemo} />
      <FeaturesSection />
      <DemoSection openDemo={handleOpenDemo} />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <Footer />

      {/* Render the Demo Modal */}
      <DemoModal show={isDemoOpen} onClose={handleCloseDemo} />
    </main>
  );
}
