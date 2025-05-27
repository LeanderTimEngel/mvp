'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import StoryFormSection from '@/components/StoryFormSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import DemoSection from '@/components/DemoSection';
import ExampleStoriesSection from '@/components/ExampleStoriesSection';

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDemoOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Replace inline nav with Header component */}
      <Header isHomePage={true} />

      {/* Render Sections */}
      <HeroSection openDemo={handleOpenDemo} />
      <FeaturesSection />
      <ProcessSection />
      <StoryFormSection />
      <DemoSection openDemo={handleOpenDemo} />
      <ExampleStoriesSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <Footer />

      {/* Render the Demo Modal */}
      <DemoModal show={isDemoOpen} onClose={handleCloseDemo} />
    </main>
  );
}
