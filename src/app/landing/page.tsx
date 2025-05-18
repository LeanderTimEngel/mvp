'use client';

import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-hot-toast';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast.success('Thanks for joining! Check your email for next steps.');
        setEmail('');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#171c3f] leading-tight mb-6">
              Struggling to Find Engaging Bedtime Stories for Your Child?
            </h1>
            <p className="text-xl text-[#171c3f]/80 mb-8">
              &quot;My son wouldn&apos;t settle down at night until we found stories he loved.&quot; - Sarah, mother of a 6-year-old
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/create-story"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 h-12 px-8 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Create a Story to Spark Your Child&apos;s Imagination
              </Link>
              <button
                onClick={() => {
                  const sampleSection = document.getElementById('sample-story');
                  if (sampleSection) {
                    sampleSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-[#171c3f]/10 text-[#171c3f] hover:bg-[#171c3f]/20 h-12 px-8 text-lg"
              >
                Listen to a Free Sample
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex justify-center items-center gap-8 text-sm text-[#171c3f]/60">
              <div className="flex items-center">
                <span className="text-2xl mr-2">⭐️</span>
                <span>4.9/5 Parent Rating</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">👨‍👩‍👧‍👦</span>
                <span>10k+ Happy Families</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                <span>Perfect for ages 3-8</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Unlike Generic Audiobooks, Your Child Becomes the Hero</h2>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Our stories are designed to captivate and educate your child, featuring them as the main character in their own adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us About Your Child",
                description: "Share your child&apos;s name, age, favorite character, and interests. We&apos;ll use these to create a story they&apos;ll love."
              },
              {
                step: "2",
                title: "We Create a Magical Story",
                description: "Our story experts craft a unique adventure that&apos;s perfect for your child&apos;s age and interests, making them the hero of their own tale."
              },
              {
                step: "3",
                title: "Enjoy Together",
                description: "Get your story delivered to your email with professional narration, ready for bedtime, car rides, or any time they need a magical adventure."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="text-4xl font-bold text-[#fa6565] mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-[#171c3f] mb-3">{step.title}</h3>
                  <p className="text-[#171c3f]/80">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="text-2xl text-[#171c3f]/20">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Story Section */}
      <section id="sample-story" className="py-20 bg-gradient-to-b from-white to-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Listen to a Sample Story</h2>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Experience the magic of a personalized story featuring Emma and her favorite unicorn
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            {/* Audio Player */}
            <div className="mb-8">
              <audio 
                controls 
                className="w-full h-12 rounded-lg"
                src="/audio/Tom-adventure-story.mp3"
              >
                Your browser does not support the audio element.
              </audio>
            </div>

            {/* Story Text */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-[#171c3f] mb-4">Tom&apos;s Magical Adventure</h3>
              <p className="text-[#171c3f]/80 mb-4">
                Listen to Tom&apos;s exciting adventure story, featuring his favorite character and interests. This is just one example of the personalized stories we create for your child.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/create-story"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 h-12 px-8 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Create Your Child&apos;s Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Why Parents Choose Magical Stories</h2>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Everything you need to create magical moments your child will cherish
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🎨",
                title: "Your Child as the Hero",
                description: "Unlike generic stories, your child becomes the main character, making the story more engaging and meaningful."
              },
              {
                icon: "🎧",
                title: "Professional Narration",
                description: "High-quality audio narration with engaging voices and sound effects that bring stories to life and keep your child&apos;s attention."
              },
              {
                icon: "⏱️",
                title: "Perfect for Every Moment",
                description: "Stories tailored to your child&apos;s attention span, perfect for bedtime, car rides, or any time they need a magical adventure."
              },
              {
                icon: "📱",
                title: "Instant Magic",
                description: "Get your personalized story delivered to your email within minutes, ready to play anywhere, anytime."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#171c3f] mb-3">{feature.title}</h3>
                <p className="text-[#171c3f]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">What Parents Are Saying</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "My daughter asks for her personalized story every night. It's become our special bedtime ritual!",
                author: "Sarah M.",
                role: "Mother of 6-year-old"
              },
              {
                quote: "The stories are so engaging and the personalization makes my son feel special. Worth every penny!",
                author: "Michael T.",
                role: "Father of 8-year-old"
              },
              {
                quote: "Perfect for long car rides. The kids are quiet and engaged, and I get some peace!",
                author: "Emma R.",
                role: "Mother of twins, age 5"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#fafaf8] rounded-2xl p-8">
                <div className="text-2xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>
                <p className="text-[#171c3f]/80 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <div className="font-semibold text-[#171c3f]">{testimonial.author}</div>
                  <div className="text-sm text-[#171c3f]/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Choose the plan that sparks the most joy and imagination for your family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* One-Time Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[#171c3f]">One-Time Story</h3>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  $0.99 <span className="text-base font-normal text-gray-500">/ story</span>
                </p>
                <p className="text-lg font-semibold text-green-600 mt-1">Currently Free!</p>
              </div>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">✨</span>
                  <span>One personalized story</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">🎧</span>
                  <span>High-quality audio narration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">✉️</span>
                  <span>Delivered straight to your email</span>
                </li>
              </ul>
              <Link
                href="/create-story"
                className="block w-full text-center bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold"
              >
                Create Your Story
              </Link>
            </div>

            {/* Monthly Subscription */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-[#171c3f]">Monthly Subscription</h3>
                  <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold px-4 py-1 rounded-full">Coming Soon</span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  $4.99 <span className="text-base font-normal text-gray-500">/ month</span>
                </p>
              </div>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">✨</span>
                  <span>Unlimited personalized stories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">🎧</span>
                  <span>High-quality audio narration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">📚</span>
                  <span>Access to all story categories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">⏳</span>
                  <span>Priority story generation</span>
                </li>
              </ul>
              <button
                onClick={() => toast.success("We'll notify you when the subscription is available!")}
                className="block w-full text-center bg-gray-200 text-gray-600 py-3 px-6 rounded-xl cursor-not-allowed font-semibold"
              >
                Notify Me (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#fa6565] to-[#f2c955] rounded-3xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">30-Day Money-Back Guarantee</h2>
              <p className="text-white/90 text-xl mb-8">
                We&apos;re confident you&apos;ll love our stories. If you&apos;re not completely satisfied, we&apos;ll refund your purchase within 30 days.
              </p>
              <Link
                href="/create-story"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-white text-[#171c3f] hover:bg-white/90 h-12 px-8 text-lg"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Get Early Access</h2>
            <p className="text-[#171c3f]/80 mb-8">
              Be the first to know when we launch new features and exclusive story templates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#fa6565]/20 focus:border-[#fa6565]"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 h-12 px-8 disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 