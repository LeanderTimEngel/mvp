'use client';

import { useState, useEffect } from 'react';

const processSteps = [
  {
    id: 1,
    title: "Your Input",
    description: "Child's details, interests, and preferences",
    icon: "👶",
    details: ["Name & Age", "Favorite Character", "Hobbies", "Story Category"],
    gradient: 'from-[#fa6565] to-[#f2c955]'
  },
  {
    id: 2,
    title: "AI Processing",
    description: "Our AI crafts a unique story tailored to your child",
    icon: "🤖",
    details: ["Story Generation", "Character Development", "Plot Creation", "Age-Appropriate Content"],
    gradient: 'from-[#f2c955] to-[#1da448]'
  },
  {
    id: 3,
    title: "Voice Generation",
    description: "Professional AI narration brings the story to life",
    icon: "🎙️",
    details: ["Text-to-Speech", "Natural Voice", "Perfect Pacing", "Clear Pronunciation"],
    gradient: 'from-[#1da448] to-[#fa6565]'
  },
  {
    id: 4,
    title: "Story Delivery",
    description: "Your personalized story arrives in your inbox",
    icon: "📧",
    details: ["Email Delivery", "Audio File", "Written Story", "Ready to Enjoy"],
    gradient: 'from-[#fa6565] to-[#f2c955]'
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => prev === 4 ? 1 : prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#fafaf8] via-white to-[#f8f9ff] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#fa6565]/5 to-[#f2c955]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tr from-[#f2c955]/5 to-[#1da448]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-xl text-[#171c3f] px-6 py-3 rounded-full text-sm font-semibold shadow-lg border border-[#fa6565]/15 mb-8">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#fa6565] to-[#f2c955] rounded-full mr-3 animate-pulse"></div>
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#171c3f] mb-6 leading-tight">
            From Input to 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fa6565] to-[#f2c955] mt-2">
              Magical Story
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#171c3f]/70 max-w-3xl mx-auto font-medium">
            Watch how your child&apos;s details transform into a personalized adventure in just minutes
          </p>
        </div>

        {/* Process Flow Visualization */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa6565]/10 to-transparent transform -translate-y-1/2 z-0"></div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative transition-all duration-500 transform ${
                  activeStep === step.id 
                    ? 'scale-105 -translate-y-3' 
                    : 'scale-100 translate-y-0'
                }`}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                {/* Step Card */}
                <div className={`group bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border transition-all duration-500 overflow-hidden ${
                  activeStep === step.id 
                    ? 'border-[#fa6565]/20 shadow-2xl bg-white' 
                    : 'border-white/50 hover:border-[#fa6565]/10'
                }`}>
                  {/* Step Number Badge */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl text-white font-black text-xl mb-6 shadow-lg transition-all duration-500 bg-gradient-to-br ${step.gradient} ${
                    activeStep === step.id ? 'scale-110' : 'scale-100'
                  }`}>
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`text-5xl mb-4 transition-transform duration-500 filter ${
                    activeStep === step.id ? 'scale-125 drop-shadow-md' : 'scale-100'
                  }`}>
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-extrabold mb-3 transition-colors duration-500 ${
                    activeStep === step.id ? 'text-[#171c3f]' : 'text-[#171c3f]/80'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#171c3f]/70 text-sm mb-6 font-medium">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className={`space-y-3 transition-all duration-500 ${
                    activeStep === step.id ? 'opacity-100' : 'opacity-60'
                  }`}>
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-xs text-[#171c3f]/60 font-medium">
                        <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-500 bg-gradient-to-r ${
                          activeStep === step.id ? step.gradient : 'from-gray-300 to-gray-400'
                        }`}></div>
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Active indicator */}
                  {activeStep === step.id && (
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} transform origin-left animate-scale-x`}></div>
                  )}
                </div>

                {/* Arrow (hidden on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 items-center">
                    <div className={`w-8 h-8 transition-all duration-500 ${
                      activeStep === step.id || activeStep === step.id + 1
                        ? 'text-[#fa6565] scale-110' 
                        : 'text-gray-300 scale-100'
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
          <div className="flex space-x-3 bg-white/80 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  activeStep === step.id 
                    ? 'bg-gradient-to-r from-[#fa6565] to-[#f2c955] scale-150 shadow-md' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-125'
                }`}
                aria-label={`View step ${step.id}: ${step.title}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/50 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-[#fa6565] to-[#f2c955] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-3xl text-white filter drop-shadow-md">🚀</span>
            </div>
            <h3 className="text-3xl font-black text-[#171c3f] mb-4">
              Ready to Create Your Child&apos;s Story?
            </h3>
            <p className="text-[#171c3f]/70 mb-8 max-w-2xl mx-auto font-medium">
              The entire process takes just a few minutes, and your child will have a personalized story they&apos;ll treasure forever.
            </p>
            <button
              onClick={() => {
                const storyForm = document.getElementById('story-form');
                if (storyForm) {
                  storyForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative inline-flex items-center justify-center rounded-2xl text-lg font-bold transition-all duration-300 bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-white hover:shadow-2xl hover:shadow-[#fa6565]/30 hover:scale-105 h-16 px-12 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f2c955] to-[#fa6565] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative mr-3 text-xl group-hover:scale-110 transition-transform duration-300">✨</span>
              <span className="relative font-extrabold">Start Creating Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 