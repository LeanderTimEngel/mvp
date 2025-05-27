'use client';

import { useState, useEffect } from 'react';
import { COLORS } from '@/lib/constants';

const processSteps = [
  {
    id: 1,
    title: "Your Input",
    description: "Child's details, interests, and preferences",
    icon: "👶",
    details: ["Name & Age", "Favorite Character", "Hobbies", "Story Category"],
    color: COLORS.primary
  },
  {
    id: 2,
    title: "AI Processing",
    description: "Our AI crafts a unique story tailored to your child",
    icon: "🤖",
    details: ["Story Generation", "Character Development", "Plot Creation", "Age-Appropriate Content"],
    color: COLORS.secondary
  },
  {
    id: 3,
    title: "Voice Generation",
    description: "Professional AI narration brings the story to life",
    icon: "🎙️",
    details: ["Text-to-Speech", "Natural Voice", "Perfect Pacing", "Clear Pronunciation"],
    color: COLORS.success
  },
  {
    id: 4,
    title: "Story Delivery",
    description: "Your personalized story arrives in your inbox",
    icon: "📧",
    details: ["Email Delivery", "Audio File", "Written Story", "Ready to Enjoy"],
    color: COLORS.primary
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep(prev => prev === 4 ? 1 : prev + 1);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#171c3f] mb-4">
            How We Create Your Story
          </h2>
          <p className="text-xl text-[#171c3f]/80 max-w-3xl mx-auto">
            Watch how your child&apos;s details transform into a magical, personalized story in just minutes
          </p>
        </div>

        {/* Process Flow Visualization */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-y-1/2 z-0"></div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-500 transform ${
                  activeStep === step.id 
                    ? 'scale-105 -translate-y-2' 
                    : 'scale-100 translate-y-0'
                } ${isAnimating && activeStep === step.id ? 'animate-pulse' : ''}`}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                {/* Step Card */}
                <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                  activeStep === step.id 
                    ? `border-[${step.color}] shadow-xl` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg mb-4 ${
                    activeStep === step.id 
                      ? `bg-[${step.color}] animate-bounce` 
                      : 'bg-gray-400'
                  }`}>
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`text-4xl mb-3 transition-transform duration-300 ${
                    activeStep === step.id ? 'scale-110' : 'scale-100'
                  }`}>
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                    activeStep === step.id ? `text-[${step.color}]` : 'text-[#171c3f]'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#171c3f]/70 text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className={`space-y-2 transition-all duration-300 ${
                    activeStep === step.id ? 'opacity-100 max-h-32' : 'opacity-70 max-h-20'
                  } overflow-hidden`}>
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-xs text-[#171c3f]/60">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                          activeStep === step.id ? `bg-[${step.color}]` : 'bg-gray-400'
                        }`}></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (hidden on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className={`w-8 h-8 transition-colors duration-300 ${
                      activeStep === step.id || activeStep === step.id + 1
                        ? 'text-[#171c3f]' 
                        : 'text-gray-400'
                    }`}>
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === step.id 
                    ? `bg-[${step.color}] scale-125` 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View step ${step.id}: ${step.title}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#fa6565]/10 to-[#f2c955]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#171c3f] mb-4">
              Ready to Create Your Child&apos;s Story?
            </h3>
            <p className="text-[#171c3f]/80 mb-6 max-w-2xl mx-auto">
              The entire process takes just a few minutes, and your child will have a personalized story they&apos;ll treasure forever.
            </p>
            <button
              onClick={() => {
                const storyForm = document.getElementById('story-form');
                if (storyForm) {
                  storyForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:opacity-90 hover:scale-105 h-12 px-8 text-lg shadow-lg"
            >
              <span className="mr-2">✨</span>
              Start Creating Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 