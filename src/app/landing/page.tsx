'use client';

import { useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer';
import Button from '@/components/ui/Button';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    // Simulate loading for better UX
    setTimeout(() => {
      window.location.href = '/create';
    }, 500);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#171c3f] mb-6 sm:mb-8">
              Bedtime Stories That Make Your Child&apos;s Eyes Light Up
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10">
              &quot;Mom, can we read another story?&quot; - Create personalized, magical stories that your child will beg to hear again and again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                isLoading={isLoading}
                size="lg"
                fullWidth
              >
                Create Your Child&apos;s Story
              </Button>
              <Button
                onClick={() => document.getElementById('sample-story')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                fullWidth
              >
                Listen to a Free Sample
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Story Section */}
      <section id="sample-story" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171c3f] mb-8 text-center">
              Experience the Magic
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <AudioPlayer
                src="/audio/Tom-adventure-story.mp3"
                title="Tom's Magical Adventure"
                description="Listen to how Tom's story comes to life with our AI-powered narration. This is just one example of the personalized stories we create for your child."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171c3f] mb-6">
              Why Parents Love Our Stories
            </h2>
            <p className="text-lg text-gray-600">
              Create unique stories that match your child&apos;s interests, favorite characters, and learning goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personalized Characters',
                description: 'Your child becomes the hero of their own story, with their name, favorite things, and unique traits woven into the narrative.',
                icon: '👑'
              },
              {
                title: 'Educational Value',
                description: 'Each story includes age-appropriate lessons about kindness, courage, and problem-solving.',
                icon: '📚'
              },
              {
                title: 'Beautiful Narration',
                description: 'Professional voice actors bring the stories to life with engaging voices and sound effects.',
                icon: '🎭'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#171c3f] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#171c3f] to-[#0f1328]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Start Creating Magical Moments Today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of parents who are making bedtime special with personalized stories.
            </p>
            <Button
              onClick={handleGetStarted}
              isLoading={isLoading}
              size="lg"
              fullWidth
            >
              Create Your First Story
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 