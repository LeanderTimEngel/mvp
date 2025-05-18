'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

export default function SalesPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        return {
          days: Math.floor(totalSeconds / 86400),
          hours: Math.floor((totalSeconds % 86400) / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
      <Header isHomePage={false} />
      
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 pointer-events-none" />
        
        {/* Floating images with 16:9 aspect ratio - positioned absolutely */}
        <div className="absolute top-[12%] right-[5%] w-32 h-18 md:w-48 md:h-27 rounded-lg overflow-hidden shadow-lg transform rotate-3 animate-float-slow z-10 hidden sm:block aspect-video">
          <Image 
            src="/images/Magical-Stories-6.jpg" 
            alt="Child enjoying a story" 
            width={192} 
            height={108}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/30 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-[15%] left-[7%] w-40 h-22.5 md:w-56 md:h-31.5 rounded-lg overflow-hidden shadow-lg transform -rotate-6 animate-float-slower z-10 hidden sm:block aspect-video">
          <Image 
            src="/images/Magical-Stories-2.jpeg" 
            alt="Parent sharing magical story" 
            width={224} 
            height={126}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/30 to-transparent"></div>
        </div>
        
        <div className="absolute top-[35%] left-[12%] w-28 h-16 md:w-40 md:h-22.5 rounded-lg overflow-hidden shadow-lg transform rotate-6 animate-float-medium z-10 hidden lg:block aspect-video">
          <Image 
            src="/images/Magical-Stories-3.jpeg" 
            alt="Child with story book" 
            width={160} 
            height={90}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/30 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-[30%] right-[12%] w-24 h-13.5 md:w-36 md:h-20 rounded-lg overflow-hidden shadow-lg transform -rotate-3 animate-float-fast z-10 hidden lg:block aspect-video">
          <Image 
            src="/images/Magical-Stories-5.jpeg" 
            alt="Magical story illustration" 
            width={144} 
            height={81}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/30 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#171c3f] leading-tight mb-6">
              Create Magical Stories Your Child Will Love
            </h1>
            <p className="text-xl text-[#171c3f]/80 mb-8">
              Transform your child&apos;s imagination into personalized audio stories that spark creativity and joy.
            </p>
            
            {/* Mobile image display for smaller screens */}
            <div className="flex justify-center gap-4 mb-8 sm:hidden">
              <div className="w-36 h-20 rounded-lg overflow-hidden shadow-lg transform rotate-2 aspect-video">
                <Image 
                  src="/images/Magical-Stories-1.jpeg" 
                  alt="Child enjoying a story" 
                  width={144} 
                  height={81}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/30 to-transparent"></div>
              </div>
              <div className="w-36 h-20 rounded-lg overflow-hidden shadow-lg transform -rotate-2 aspect-video">
                <Image 
                  src="/images/Magical-Stories-2.jpeg" 
                  alt="Parent sharing magical story" 
                  width={144} 
                  height={81}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171c3f]/30 to-transparent"></div>
              </div>
            </div>
            
            {/* Sales Video */}
            <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.loom.com/embed/b0f9157b0ee04dbabc66bbbc4d0aefe7"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/create-story"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 h-12 px-8 text-lg"
              >
                Start Creating Stories
              </Link>
              <button
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-[#171c3f]/10 text-[#171c3f] hover:bg-[#171c3f]/20 h-12 px-8 text-lg"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#171c3f] mb-2">10k+</div>
              <div className="text-sm text-[#171c3f]/60">Stories Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#171c3f] mb-2">4.9/5</div>
              <div className="text-sm text-[#171c3f]/60">Parent Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#171c3f] mb-2">50k+</div>
              <div className="text-sm text-[#171c3f]/60">Happy Kids</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#171c3f] mb-2">24/7</div>
              <div className="text-sm text-[#171c3f]/60">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Who Is This For?</h2>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Perfect for parents who want to create meaningful, personalized stories for their children.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Busy Parents",
                description: "Create engaging stories in minutes, perfect for bedtime or long car rides."
              },
              {
                title: "Creative Parents",
                description: "Express your creativity through personalized stories that your child will love."
              },
              {
                title: "Tech-Savvy Parents",
                description: "Enjoy the convenience of instant story delivery and easy sharing."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#171c3f] mb-3">{item.title}</h3>
                <p className="text-[#171c3f]/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      {/*<section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">See It In Action</h2>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Our platform creates beautiful, personalized stories that capture your child&apos;s imagination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#fa6565]/20 to-[#f2c955]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full transform translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-[#171c3f]/80 to-transparent transition-transform duration-300 z-20">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Magical Storytelling</h3>
                  <p className="text-white/90">AI-powered personalization that makes each story unique to your child.</p>
                </div>
              </div>
              <Image 
                src="/images/Magical-Stories-1.jpeg" 
                alt="Child enjoying a personalized magical story" 
                width={600} 
                height={338}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#fa6565]/20 to-[#f2c955]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full transform translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-[#171c3f]/80 to-transparent transition-transform duration-300 z-20">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Enchanting Experiences</h3>
                  <p className="text-white/90">Create special moments and memories that last a lifetime.</p>
                </div>
              </div>
              <Image 
                src="/images/Magical-Stories-2.jpeg" 
                alt="Parent sharing magical story with child" 
                width={600} 
                height={338}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#fa6565]/20 to-[#f2c955]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full transform translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-[#171c3f]/80 to-transparent transition-transform duration-300 z-20">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Story Adventures</h3>
                  <p className="text-white/90">Exciting narratives that spark imagination and creativity.</p>
                </div>
              </div>
              <Image 
                src="/images/Magical-Stories-3.jpeg" 
                alt="Child with storybook adventure" 
                width={600} 
                height={338}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#fa6565]/20 to-[#f2c955]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full transform translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-[#171c3f]/80 to-transparent transition-transform duration-300 z-20">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Personalized Magic</h3>
                  <p className="text-white/90">Stories tailored to your child's interests and personality.</p>
                </div>
              </div>
              <Image 
                src="/images/Magical-Stories-4.jpeg" 
                alt="Magical story illustration" 
                width={600} 
                height={338}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/create-story"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 py-3 px-8 text-lg"
            >
              Create Your Story Now
            </Link>
          </div>
        </div>
      </section> */}

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">What You&apos;ll Get</h2>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Everything you need to create magical stories your child will cherish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Personalized Characters',
                description: 'Your child becomes the hero of their own story, with their favorite interests and hobbies woven into the narrative.'
              },
              {
                icon: '🎧',
                title: 'Professional Narration',
                description: 'High-quality audio narration that brings stories to life with engaging voices and sound effects.'
              },
              {
                icon: '⏱️',
                title: 'Perfect Length',
                description: 'Stories tailored to your child&apos;s attention span, from quick 5-minute tales to longer 20-minute adventures.'
              },
              {
                icon: '📱',
                title: 'Instant Delivery',
                description: 'Get your story delivered to your email within minutes, ready to play anywhere, anytime.'
              },
              {
                icon: '🎯',
                title: 'Age-Appropriate',
                description: 'Content carefully crafted for children aged 4-10, ensuring appropriate themes and language.'
              },
              {
                icon: '🔄',
                title: 'Unlimited Stories',
                description: 'Create as many stories as you want with our flexible subscription plans.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#171c3f] mb-3">{feature.title}</h3>
                <p className="text-[#171c3f]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">What Parents Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "My daughter asks for her personalized story every night. It&apos;s become our special bedtime ritual!",
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
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
      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-[#171c3f]/80 max-w-2xl mx-auto">
              Choose the plan that sparks the most joy and imagination for your family.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* One-Time Story */}
            <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-[#171c3f]">One-Time Story</h3>
              </div>
              <div className="mb-2">
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                  $0.99 <span className="text-base font-normal text-gray-500">/ story</span>
                </p>
                <p className="text-lg font-semibold text-green-600 mt-1">Currently Free!</p>
              </div>
              <p className="text-gray-600 mb-6 text-sm">Perfect for trying out or special occasions.</p>
              <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
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
                className="w-full text-center bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
              >
                Create Your Story
              </Link>
            </div>

            {/* Monthly Subscription */}
            <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-[#171c3f]">Monthly Subscription</h3>
                <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold px-4 py-1 rounded-full uppercase shadow-sm">Coming Soon</span>
              </div>
              <div className="mb-2">
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                  $4.99 <span className="text-base font-normal text-gray-500">/ month</span>
                </p>
              </div>
              <p className="text-gray-600 mb-6 text-sm">Best value for unlimited story creation.</p>
              <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
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
                  <span>Priority story generation (coming soon)</span>
                </li>
              </ul>
              <button
                onClick={() => {
                  // Add email notification logic here
                  toast.success('We&apos;ll notify you when the subscription is available!');
                }}
                className="w-full text-center bg-gradient-to-r from-gray-400 to-gray-500 text-white py-3 px-6 rounded-xl cursor-not-allowed opacity-60 font-semibold shadow-md"
              >
                Notify Me (Coming Soon)
              </button>
            </div>

            {/* Ultra Premium */}
            <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/90">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-[#171c3f]">Ultra Premium</h3>
                <span className="bg-indigo-200 text-indigo-800 text-sm font-semibold px-4 py-1 rounded-full uppercase shadow-sm">On Request</span>
              </div>
              <div className="mb-2">
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                  On Request
                </p>
              </div>
              <p className="text-gray-600 mb-6 text-sm">Experience stories in a personalized voice crafted just for you.</p>
              <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">🎙️</span>
                  <span>Custom voice narration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">💼</span>
                  <span>Exclusive storyline design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">🔒</span>
                  <span>Limited availability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">⏳</span>
                  <span>On-demand scheduling</span>
                </li>
              </ul>
              <Link
                href="/ultra-premium"
                className="w-full text-center bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
              >
                Request Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does it take to create a story?",
                answer: "Most stories are generated and delivered within 5-10 minutes. Longer stories may take up to 15 minutes."
              },
              {
                question: "Can I customize the story length?",
                answer: "Yes! You can choose from short (5-10 minutes), medium (10-15 minutes), or long (15-20 minutes) stories."
              },
              {
                question: "What age range are the stories suitable for?",
                answer: "Our stories are carefully crafted for children aged 4-10, with content and language appropriate for each age group."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. You&apos;ll continue to have access until the end of your billing period."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#171c3f] mb-3">{faq.question}</h3>
                <p className="text-[#171c3f]/80">{faq.answer}</p>
              </div>
            ))}
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/create-story"
                  className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors bg-white text-[#171c3f] hover:bg-white/90 h-12 px-8 text-lg"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-12 bg-[#171c3f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Limited Time Offer – Get Your First Story for Free!</h3>
            <div className="flex justify-center gap-4">
              <div className="bg-white/10 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
            <p className="mt-6 text-lg text-white/90">For a short time, you can create your first personalized story completely free. Don&apos;t miss out!</p>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#171c3f] mb-4">Stay Updated</h2>
            <p className="text-[#171c3f]/80 mb-8">
              Get early access to new features and exclusive story templates.
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

      {/* Disclaimer */}
      <section className="py-8 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-[#171c3f]/60 text-center">
            Results may vary. The stories are generated using AI and may require parental review. We are not responsible for the content of user-generated stories.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
} 