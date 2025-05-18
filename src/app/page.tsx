'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ExampleStoriesSection from '@/components/ExampleStoriesSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import DemoSection from '@/components/DemoSection';

export default function HomePage() {
  const handleOpenDemo = () => {
    // Demo functionality will be implemented later
    console.log('Opening demo...');
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Replace inline nav with Header component */}
      <Header />

      {/* Render Sections */}
      <HeroSection openDemo={handleOpenDemo} />
      <FeaturesSection />
      <ExampleStoriesSection />
      <PricingSection />
      <Footer />

      {/* Demo Section */}
      <DemoSection openDemo={handleOpenDemo} />
    </main>
  );
}
