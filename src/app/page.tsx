'use client';

import { useState, useEffect } from 'react';
import StoryForm from '@/components/StoryForm';
import Link from 'next/link';
import Logo from '@/components/Logo';

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

  // Feature data
  const features = [
    {
      icon: '🎯',
      title: 'Personalized Content',
      description: "Stories featuring your child's name, interests, and favorite characters.",
      color: 'bg-[#fa6565]/10'
    },
    {
      icon: '🎨',
      title: 'AI-Powered Creativity',
      description: 'Unique stories generated by advanced AI, ensuring endless variety.',
      color: 'bg-[#f2c955]/10'
    },
    {
      icon: '⚡',
      title: 'Instant Delivery',
      description: 'Receive your story via email within minutes, ready to play.',
      color: 'bg-[#fa6565]/10'
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      quote: "My daughter asks for her personalized story every night. It's become our favorite bedtime ritual!",
      author: "Sarah M.",
      role: "Parent of a 6-year-old",
      color: "bg-[#fa6565]"
    },
    {
      quote: "The perfect solution for long car rides. My son is always excited to hear his next adventure!",
      author: "Michael T.",
      role: "Parent of a 5-year-old",
      color: "bg-[#f2c955]"
    }
  ];

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
              <p className="text-[#171c3f]/80">See how Magical Stories brings your child's imagination to life</p>
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

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#171c3f] leading-tight">
                Magical Stories for Your Little One
              </h1>
              <p className="text-lg sm:text-xl text-[#171c3f]/80 max-w-2xl leading-relaxed">
                Create personalized audio stories that spark your child&apos;s imagination. 
                Perfect for bedtime, car rides, or any time they need a magical adventure!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#story-form"
                  className="w-full sm:w-auto bg-[#fa6565] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-center font-medium"
                >
                  Create Your Story
                </Link>
                <button
                  onClick={openDemo}
                  type="button"
                  className="w-full sm:w-auto group bg-[#f2c955] text-[#171c3f] px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-medium"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#f2c955]/20 border-2 border-white" />
                    ))}
                  </div>
                  <span className="text-sm text-[#171c3f]/80 font-medium">1,000+ Happy Parents</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">⭐</span>
                  <span className="text-sm text-[#171c3f]/80 font-medium">4.9/5 Rating</span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0" id="story-form">
              <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/10 to-[#f2c955]/10 rounded-3xl blur-3xl" />
              <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 border border-[#f2c955]/20">
                <StoryForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171c3f]">
              Why Parents Love Our Stories
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-[#171c3f]/80 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge AI with child psychology to create engaging, educational, and magical stories.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#171c3f]/5">
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#171c3f] mb-2">{feature.title}</h3>
                <p className="text-[#171c3f]/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f]">
              What Parents Say
            </h2>
            <p className="mt-4 text-xl text-[#171c3f]/80 max-w-3xl mx-auto">
              Join thousands of parents who have discovered the magic of personalized stories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-[#171c3f]/80 italic text-lg mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center`}>
                    <span className="text-lg font-bold text-white">{testimonial.author[0]}</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-[#171c3f]">{testimonial.author}</p>
                    <p className="text-sm text-[#171c3f]/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-12 sm:py-24 bg-gradient-to-b from-[#FFF5F5] to-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171c3f] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-[#171c3f]/80">Choose the perfect plan for your family</p>
          </div>

          <div className="mt-8 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* One-Time Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#171c3f]/5">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#171c3f]">One-Time Story</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#171c3f]">$9.99</span>
                  <span className="text-[#171c3f]/60">/story</span>
                </div>
                <p className="mt-4 text-[#171c3f]/80">Perfect for special occasions</p>
              </div>
              <ul className="mt-8 space-y-4">
                {["Personalized story", "High-quality audio", "Email delivery"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="h-5 w-5 text-[#fa6565]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-[#171c3f]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="#story-form"
                  className="block w-full bg-[#171c3f] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 text-center font-medium shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Monthly Subscription */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#171c3f]/5 relative">
              <div className="absolute top-0 right-0 bg-[#fa6565] text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#171c3f]">Monthly Subscription</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#171c3f]">$19.99</span>
                  <span className="text-[#171c3f]/60">/month</span>
                </div>
                <p className="mt-4 text-[#171c3f]/80">Unlimited stories for your little one</p>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "4 stories per month",
                  "Priority processing",
                  "Story library access",
                  "Cancel anytime"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="h-5 w-5 text-[#fa6565]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-[#171c3f]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="#story-form"
                  className="block w-full bg-[#fa6565] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 text-center font-medium shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f2c955] rounded-3xl p-8 sm:p-12 text-center text-[#171c3f] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 relative">Ready to Create Magic?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 relative">Join thousands of parents who&apos;re making bedtime magical.</p>
            <Link
              href="#story-form"
              className="inline-block bg-[#fa6565] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#171c3f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Magical Stories</h3>
              <p className="text-[#ffffff]/80">Creating magical moments through personalized stories for children.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Contact', href: '/contact' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-[#ffffff]/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms of Service', href: '/terms' },
                  { label: 'Refund Policy', href: '/refund' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-[#ffffff]/80 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:hello@magicalstories.com" className="text-[#ffffff]/80 hover:text-white transition-colors">
                    hello@magicalstories.com
                  </a>
                </li>
                <li className="text-[#ffffff]/80">123 Story Lane, Imagination City</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#ffffff]/20 text-center text-[#ffffff]/60">
            <p>&copy; {new Date().getFullYear()} Magical Stories. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
