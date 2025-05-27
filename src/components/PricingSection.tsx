import PricingCard from '@/components/PricingCard';

export default function PricingSection() {
  const pricingCards = [
    {
      title: 'One-Time Story',
      description: 'Perfect for trying out or special occasions.',
      price: '$0.99',
      unit: '/ story',
      priceSubText: 'Currently Free!',
      features: [
        { icon: '✨', text: 'One personalized story' },
        { icon: '🎧', text: 'High-quality audio narration' },
        { icon: '✉️', text: 'Delivered straight to your email' },
      ],
      action: { label: 'Create Your Story', href: '#story-form' },
      featured: false,
    },
    {
      title: 'Monthly Subscription',
      badgeLabel: 'Coming Soon',
      badgeColorClass: 'bg-gradient-to-r from-[#f2c955]/20 to-[#f2c955]/10 text-[#171c3f] border border-[#f2c955]/30',
      price: '$4.99',
      unit: '/ month',
      description: 'Best value for unlimited story creation.',
      features: [
        { icon: '✨', text: 'Unlimited personalized stories' },
        { icon: '🎧', text: 'High-quality audio narration' },
        { icon: '📚', text: 'Access to all story categories' },
        { icon: '⏳', text: 'Priority story generation (coming soon)' },
      ],
      action: { label: 'Notify Me (Coming Soon)', href: '#', disabled: true },
      featured: true,
    },
    {
      title: 'Ultra Premium',
      badgeLabel: 'On Request',
      badgeColorClass: 'bg-gradient-to-r from-[#1da448]/20 to-[#1da448]/10 text-[#171c3f] border border-[#1da448]/30',
      price: 'On Request',
      description: 'Experience stories in a personalized voice crafted just for you.',
      features: [
        { icon: '🎙️', text: 'Custom voice narration' },
        { icon: '💼', text: 'Exclusive storyline design' },
        { icon: '🔒', text: 'Limited availability' },
        { icon: '⏳', text: 'On-demand scheduling' },
      ],
      action: { label: 'Request Now', href: '/ultra-premium' },
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-20 sm:py-28 bg-gradient-to-br from-[#fafaf8] via-white to-[#f8f9ff] overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#fa6565]/5 via-[#f2c955]/5 to-[#fa6565]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tr from-[#f2c955]/5 via-[#1da448]/5 to-[#f2c955]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-xl text-[#171c3f] px-6 py-3 rounded-full text-sm font-semibold shadow-lg border border-[#fa6565]/15 mb-8">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#fa6565] to-[#f2c955] rounded-full mr-3 animate-pulse"></div>
            Simple Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#171c3f] mb-6 leading-tight">
            Choose Your 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fa6565] to-[#f2c955] mt-2">
              Story Plan
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#171c3f]/70 max-w-2xl mx-auto font-medium">
            Start with a free story, then upgrade anytime to create unlimited magical adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingCards.map((card, idx) => (
            <PricingCard key={idx} {...card} />
          ))}
        </div>

        {/* Trust message */}
        <div className="text-center mt-16">
          <p className="text-[#171c3f]/60 text-sm font-medium">
            All plans include secure payment processing and instant email delivery
          </p>
        </div>
      </div>
    </section>
  );
} 