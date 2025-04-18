import Link from 'next/link';
import { COLORS } from '@/lib/constants';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-[#f9f9f7] to-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-[${COLORS.dark}] mb-4`}>Simple, Transparent Pricing</h2>
          <p className={`text-lg text-[${COLORS.dark}]/80 max-w-xl mx-auto`}>Choose the plan that sparks the most joy and imagination for your family.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* One-Time Story Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col">
            <h3 className={`text-xl font-semibold text-[${COLORS.dark}] mb-4`}>One-Time Story</h3>
            <div className="mb-2">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                $0.99 <span className="text-base font-normal text-gray-500">/ story</span>
              </p>
              <p className={`text-lg font-semibold text-green-600 mt-1`}>Currently Free!</p>
            </div>
            <p className="text-gray-600 mb-6 text-sm">Perfect for trying out or special occasions.</p>
            
            {/* Features List */}
            <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
              {[
                { icon: "✨", text: "One personalized story" },
                { icon: "🎧", text: "High-quality audio narration" },
                { icon: "✉️", text: "Delivered straight to your email" },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <Link 
              href="#story-form" 
              className={`w-full text-center bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold shadow-md hover:shadow-lg`}
            >
              Create Your Story
            </Link>
          </div>

          {/* Monthly Subscription Card - Adding Coming Soon */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col relative overflow-hidden">
            {/* Badge added here */}
            <div className="flex justify-between items-start mb-4">
              <h3 className={`text-xl font-semibold text-[${COLORS.dark}]`}>Monthly Subscription</h3>
              <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase">Coming Soon</span>
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              $4.99 <span className="text-base font-normal text-gray-500">/ month</span>
            </p>
            <p className="text-gray-600 mb-6 text-sm">Best value for unlimited story creation.</p>
            
            {/* Features List */}
            <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
              {[
                { icon: "✨", text: "Unlimited personalized stories" },
                { icon: "🎧", text: "High-quality audio narration" },
                { icon: "📚", text: "Access to all story categories" },
                { icon: "⏳", text: "Priority story generation (coming soon)" },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-lg mr-2.5 mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Call to Action Button - disabled */}
            <Link 
              href="#"
              className={`w-full text-center bg-gradient-to-r from-gray-400 to-gray-500 text-white py-3 px-6 rounded-xl font-semibold shadow-md opacity-60 cursor-not-allowed`}
              aria-disabled={true}
              onClick={(e) => e.preventDefault()}
            >
              Notify Me (Coming Soon)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 