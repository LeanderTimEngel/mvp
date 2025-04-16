import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl p-8 shadow-framer">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Child&apos;s name and age</li>
              <li>Story preferences and customization details</li>
              <li>Email address for story delivery</li>
              <li>Payment information (processed securely through our payment provider)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Generate personalized stories</li>
              <li>Deliver stories to your email</li>
              <li>Process payments</li>
              <li>Improve our service</li>
              <li>Communicate with you about our service</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our service is designed for parents to create stories for their children. We do not knowingly collect personal information directly from children under 13.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We use third-party services for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Payment processing (Stripe)</li>
              <li>Email delivery (SendGrid)</li>
              <li>AI story generation (OpenAI)</li>
              <li>Text-to-speech conversion (ElevenLabs)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Access your personal information</li>
              <li>Request correction of your information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@magicalstories.com
            </p>

            <p className="text-lg text-[#171c3f]/80">
              We take your child&apos;s privacy seriously. Our privacy policy outlines how we collect, use, and protect your information.
            </p>

            <p className="text-lg text-[#171c3f]/80">
              We&apos;ll never share your child&apos;s information with third parties without your explicit consent.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 