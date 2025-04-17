'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import DemoSection from '@/components/DemoSection';

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoOpen(true);
  const handleCloseDemo = () => setIsDemoOpen(false);

  // // Effect to handle body scroll and Escape key is now inside DemoModal
  // useEffect(() => { ... }, [showDemo]); // Keep this comment or remove if preferred

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Replace inline nav with Header component */}
      <Header isHomePage={true} />

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
