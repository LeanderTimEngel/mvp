import { COLORS } from '@/lib/constants';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[${COLORS.dark}]/10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
              <Logo />
            </Link>
            <Link
              href="/"
              className={`bg-[${COLORS.primary}] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:opacity-90 transition-all duration-300 font-medium`}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper with Padding for Fixed Header */}
      <div className="pt-20"> 
        
        {/* Hero Section */}
        <div className="relative pt-24 pb-16 bg-gradient-to-b from-white to-[#fafaf8]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 opacity-50"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className={`text-4xl sm:text-5xl font-bold text-[${COLORS.dark}] mb-4`}>Refund Policy</h1>
            <p className="text-xl text-gray-600 mb-6">Understanding our policy on refunds.</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Policy Content */}
        <div className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-gray-700 prose-headings:text-[${COLORS.dark}] prose-headings:font-semibold prose-a:text-[${COLORS.primary}] hover:prose-a:text-[${COLORS.primary}]/80 prose-strong:text-gray-800">
            {/* --- START REFUND POLICY CONTENT --- */}
            {/* Replace this placeholder content with your actual Refund Policy */}
            
            <h2>Overview</h2>
            <p>
              We strive to ensure customer satisfaction with our personalized story generation service. 
              This policy outlines the conditions under which refunds may be granted.
            </p>

            <h2>One-Time Story Purchases</h2>
            <p>
              Due to the personalized and digital nature of our one-time story purchases, refunds are generally not 
              provided once a story has been generated and delivered. However, exceptions may be considered under 
              the following circumstances:
            </p>
            <ul>
              <li><strong>Technical Issues:</strong> If there was a verifiable technical error during the story generation or delivery process that prevented you from receiving or accessing your story.</li>
              <li><strong>Significant Content Errors:</strong> If the generated story contains significant errors directly related to the personalization details provided (e.g., completely wrong name used throughout, major deviation from the selected theme) that render the story unusable. Minor grammatical errors or stylistic preferences do not qualify.</li>
            </ul>
            <p>
              To request a refund under these exceptions, please contact our support team at <a href="mailto:hello@magicalstories.com">hello@magicalstories.com</a> within 7 days of purchase, providing your order details and a clear explanation of the issue.
            </p>

            <h2>Monthly Subscriptions</h2>
            <p>
              For monthly subscriptions, you can cancel at any time. Your cancellation will take effect at the end of the current billing cycle, and you will not be charged for subsequent months. Refunds for partial months or unused portions of a subscription term are typically not provided.
            </p>
            <p>
              If you experience significant technical issues preventing you from using the service for an extended period during your active subscription, please contact support to discuss potential pro-rated refunds or credits.
            </p>
            
            <h2>Refund Process</h2>
            <p>
              All refund requests are reviewed on a case-by-case basis. If a refund is approved, it will be processed back to the original payment method within 5-10 business days, depending on your bank or payment provider.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Refund Policy, please contact us through our <Link href="/contact">Contact Page</Link> or email us directly at <a href="mailto:hello@magicalstories.com">hello@magicalstories.com</a>.
            </p>

            <p><em>Last Updated: [Insert Date]</em></p>

            {/* --- END REFUND POLICY CONTENT --- */}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 