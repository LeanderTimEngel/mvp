import { COLORS } from '@/lib/constants';
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
    },
    {
      title: 'Monthly Subscription',
      badgeLabel: 'Coming Soon',
      badgeColorClass: 'bg-yellow-200 text-yellow-800',
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
    },
    {
      title: 'Ultra Premium',
      badgeLabel: 'On Request',
      badgeColorClass: 'bg-indigo-200 text-indigo-800',
      price: 'On Request',
      description: 'Experience stories in a personalized voice crafted just for you.',
      features: [
        { icon: '🎙️', text: 'Custom voice narration' },
        { icon: '💼', text: 'Exclusive storyline design' },
        { icon: '🔒', text: 'Limited availability' },
        { icon: '⏳', text: 'On-demand scheduling' },
      ],
      action: { label: 'Request Now', href: '/ultra-premium' },
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-[#f9f9f7] to-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-[${COLORS.dark}] mb-4`}>Simple, Transparent Pricing</h2>
          <p className={`text-lg text-[${COLORS.dark}]/80 max-w-xl mx-auto`}>Choose the plan that sparks the most joy and imagination for your family.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pricingCards.map((card, idx) => (
            <PricingCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
} 