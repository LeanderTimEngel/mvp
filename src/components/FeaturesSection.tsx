// Feature data (Consider moving to a constants file if used elsewhere)
const features = [
  {
    icon: '⭐',
    title: 'Your Child is the Hero',
    description: "Unlike generic audiobooks, your child becomes the main character in every adventure, making stories more engaging and memorable.",
    color: 'bg-[#fa6565]/10'
  },
  {
    icon: '🎭',
    title: 'Stories That Captivate & Encourage',
    description: 'Each story is crafted to match your child&apos;s interests and age, ensuring they stay engaged from start to finish.',
    color: 'bg-[#f2c955]/10'
  },
  {
    icon: '🎙️',
    title: 'Professional Narration',
    description: 'High-quality voice narration brings stories to life with perfect pacing and clear pronunciation for bedtime or anytime.',
    color: 'bg-[#1da448]/10'
  },
  {
    icon: '⚡',
    title: 'Ready in Minutes',
    description: 'No waiting weeks for custom books. Get your personalized audio story delivered to your email in just minutes.',
    color: 'bg-[#fa6565]/10'
  },
  {
    icon: '🎯',
    title: 'Age-Perfect Content',
    description: 'Stories are automatically tailored to your child&apos;s age group (4-10 years) with appropriate themes and vocabulary.',
    color: 'bg-[#f2c955]/10'
  },
  {
    icon: '💝',
    title: 'Builds Confidence',
    description: 'When children hear themselves as the hero overcoming challenges, it naturally boosts their self-esteem and courage.',
    color: 'bg-[#1da448]/10'
  }
];

export default function FeaturesSection() {
  return (
    <div id="features" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171c3f]">
            Why Our Stories Are Different
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-[#171c3f]/80 max-w-3xl mx-auto leading-relaxed">
            Unlike generic audiobooks, we create personalized adventures where your child is always the hero, 
            making bedtime stories more engaging and meaningful.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#171c3f]/5 hover:border-[#fa6565]/20">
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#171c3f] mb-3">{feature.title}</h3>
              <p className="text-[#171c3f]/80 leading-relaxed text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 