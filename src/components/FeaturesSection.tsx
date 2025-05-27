// Feature data
const features = [
  {
    icon: '⭐',
    title: 'Your Child is the Hero',
    description: "Unlike generic audiobooks, your child becomes the main character in every adventure, making stories more engaging and memorable.",
    gradient: 'from-[#fa6565] to-[#f2c955]'
  },
  {
    icon: '🎭',
    title: 'Stories That Captivate & Encourage',
    description: 'Each story is crafted to match your child&apos;s interests and age, ensuring they stay engaged from start to finish.',
    gradient: 'from-[#f2c955] to-[#1da448]'
  },
  {
    icon: '🎙️',
    title: 'Professional Narration',
    description: 'High-quality voice narration brings stories to life with perfect pacing and clear pronunciation for bedtime or anytime.',
    gradient: 'from-[#1da448] to-[#fa6565]'
  },
  {
    icon: '⚡',
    title: 'Ready in Minutes',
    description: 'No waiting weeks for custom books. Get your personalized audio story delivered to your email in just minutes.',
    gradient: 'from-[#fa6565] to-[#f2c955]'
  },
  {
    icon: '🎯',
    title: 'Age-Perfect Content',
    description: 'Stories are automatically tailored to your child&apos;s age group (4-10 years) with appropriate themes and vocabulary.',
    gradient: 'from-[#f2c955] to-[#1da448]'
  },
  {
    icon: '💝',
    title: 'Builds Confidence',
    description: 'When children hear themselves as the hero overcoming challenges, it naturally boosts their self-esteem and courage.',
    gradient: 'from-[#1da448] to-[#fa6565]'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-gradient-to-br from-white via-[#fafaf8] to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#fa6565]/5 to-[#f2c955]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#f2c955]/5 to-[#1da448]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-xl text-[#171c3f] px-6 py-3 rounded-full text-sm font-semibold shadow-lg border border-[#fa6565]/15 mb-8">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#fa6565] to-[#f2c955] rounded-full mr-3 animate-pulse"></div>
            Why We&apos;re Different
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#171c3f] mb-6 leading-tight">
            Stories That 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fa6565] to-[#f2c955] mt-2">
              Actually Engage
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#171c3f]/70 max-w-3xl mx-auto leading-relaxed font-medium">
            Unlike generic audiobooks, we create personalized adventures where your child is always the hero, 
            making bedtime stories more engaging and meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#fa6565]/20 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl text-white filter drop-shadow-md">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#171c3f] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#171c3f]/70 leading-relaxed text-base font-medium">
                  {feature.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-5 rotate-12 group-hover:rotate-6 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 