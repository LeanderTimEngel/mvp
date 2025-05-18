'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'react-hot-toast';

// Sample data for countdown timer
const COUNTDOWN_TARGET_DATE = new Date('2024-12-31T23:59:59');

export default function SalesPage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +COUNTDOWN_TARGET_DATE - +new Date();
    let timeLeftCalculation = {};

    if (difference > 0) {
      timeLeftCalculation = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeftCalculation;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    try {
      // Replace with actual API call
      // const res = await fetch('/api/subscribe-sales', { method: 'POST', body: JSON.stringify({ email }) });
      // if (res.ok) {
      toast.success('Thanks for subscribing! We\'ll keep you updated on special offers.');
      setEmail('');
      // } else {
      //   toast.error('Subscription failed. Please try again.');
      // }
    } catch (submitError) {
      console.error('Submission error:', submitError); // Log the error for debugging
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Header />
      
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e293b] pointer-events-none opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Unlock Exclusive Access to Magical Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don&apos;t miss out on our limited-time offer! Get personalized stories that spark imagination and create unforgettable bedtime moments.
          </p>
          
          {/* Placeholder for Video Player */}
          <div className="relative max-w-3xl mx-auto mb-12 aspect-video bg-black/50 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.118v3.764a1 1 0 001.555.832l3.197-1.882a1 1 0 000-1.664l-3.197-1.882z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-white text-xs bg-black/30 px-2 py-1 rounded">
              Video: Magical Stories Demo (1:23)
            </div>
          </div>

          {/* Countdown Timer */}
          {Object.keys(timeLeft).length > 0 && (
            <div className="flex justify-center space-x-3 sm:space-x-6 text-white mb-12">
              {Object.entries(timeLeft).map(([unit, value]: [string, unknown]) => (
                <div key={unit} className="bg-white/10 p-3 sm:p-4 rounded-lg shadow-md min-w-[60px] sm:min-w-[80px]">
                  <div className="text-2xl sm:text-4xl font-bold">{String(value).padStart(2, '0')}</div>
                  <div className="text-xs sm:text-sm uppercase tracking-wider">{unit}</div>
                </div>
              ))}
            </div>
          )}
          
          <a
            href="#pricing-sales"
            className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 h-12 px-8 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get My Discount Now
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Why Choose Magical Stories?</h2>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Create unique, personalized adventures that your child will cherish forever.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎨', title: 'Fully Personalized', description: 'Stories feature your child as the main character, incorporating their name, interests, and friends.' },
              { icon: '📚', title: 'Educational Content', description: 'Subtly woven lessons on kindness, problem-solving, and courage, tailored to their age.' },
              { icon: '🎧', title: 'Engaging Narration', description: 'Professional voice actors bring stories to life with captivating narration and sound effects.' },
            ].map(benefit => (
              <div key={benefit.title} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#171c3f] mb-2">{benefit.title}</h3>
                <p className="text-[#171c3f]/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Sales Focused */}
      <section id="pricing-sales" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Limited-Time Offer: 50% Off!</h2>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Get your first personalized story for half the price. This offer won&apos;t last long!
            </p>
          </div>
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 ring-2 ring-[#fa6565]">
            <h3 className="text-2xl font-semibold text-[#171c3f] mb-2">Special Launch Price</h3>
            <p className="text-4xl font-bold text-gray-900 mb-1">
              $0.49 <span className="text-2xl font-normal text-gray-500 line-through">$0.99</span>
            </p>
            <p className="text-sm text-green-600 font-semibold mb-6">You save 50% instantly!</p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start"><span className="text-lg mr-2.5 mt-0.5">✨</span>One unique, personalized story</li>
              <li className="flex items-start"><span className="text-lg mr-2.5 mt-0.5">🧒</span>Child as the main character</li>
              <li className="flex items-start"><span className="text-lg mr-2.5 mt-0.5">🎧</span>High-quality audio narration</li>
              <li className="flex items-start"><span className="text-lg mr-2.5 mt-0.5">✉️</span>Delivered to your email</li>
              <li className="flex items-start"><span className="text-lg mr-2.5 mt-0.5">🎁</span>Perfect gift idea</li>
            </ul>
            <a
              href="/create-story?plan=sales_offer" // Example: pass plan to create page
              className="block w-full text-center bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white py-3.5 px-6 rounded-lg hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Claim Your 50% Discount
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Brief */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Loved by Parents & Kids</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: "My daughter was THRILLED to hear her name in the story! This is pure magic.", author: "Jessica P." },
              { quote: "The quality is amazing, and it kept my usually restless son captivated. Highly recommend!", author: "David K." },
            ].map(testimonial => (
              <div key={testimonial.author} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <p className="text-[#171c3f]/80 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold text-[#171c3f]">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Signup for Sales Updates */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t Miss Future Deals!</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for exclusive offers, new story alerts, and parenting tips.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#fa6565] text-gray-900 placeholder-gray-500"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 h-12 px-8 disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </>
                ) : 'Subscribe Now'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 