import Link from 'next/link';

export default function PricingSection() {
  return (
    <div id="pricing" className="py-12 sm:py-24 bg-gradient-to-b from-[#FFF5F5] to-[#F0F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171c3f] mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-[#171c3f]/80">Choose the perfect plan for your family</p>
        </div>

        <div className="mt-8 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* One-Time Story */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#171c3f]/5">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#171c3f]">One-Time Story</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-[#171c3f]">$9.99</span>
                <span className="text-[#171c3f]/60">/story</span>
              </div>
              <p className="mt-4 text-[#171c3f]/80">Perfect for special occasions</p>
            </div>
            <ul className="mt-8 space-y-4">
              {["Personalized story", "High-quality audio", "Email delivery"].map((item, i) => (
                <li key={i} className="flex items-center">
                  <svg className="h-5 w-5 text-[#fa6565]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-[#171c3f]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="#story-form"
                className="block w-full bg-[#171c3f] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 text-center font-medium shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Monthly Subscription */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#171c3f]/5 relative">
            <div className="absolute top-0 right-0 bg-[#fa6565] text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-medium">
              Most Popular
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#171c3f]">Monthly Subscription</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-[#171c3f]">$19.99</span>
                <span className="text-[#171c3f]/60">/month</span>
              </div>
              <p className="mt-4 text-[#171c3f]/80">Unlimited stories for your little one</p>
            </div>
            <ul className="mt-8 space-y-4">
              {[
                "4 stories per month",
                "Priority processing",
                "Story library access",
                "Cancel anytime"
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <svg className="h-5 w-5 text-[#fa6565]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-[#171c3f]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="#story-form"
                className="block w-full bg-[#fa6565] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 text-center font-medium shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 