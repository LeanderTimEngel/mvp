import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl p-8 shadow-framer">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-lg text-[#171c3f]/80">
              Welcome to Magical Stories. By accessing or using our service, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>&quot;Service&quot; refers to our AI-powered story generation platform</li>
              <li>&quot;User&quot; refers to any individual or entity using our Service</li>
              <li>&quot;Content&quot; refers to any stories, audio, or other materials generated through our Service</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              Users are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Providing accurate information for story generation</li>
              <li>Maintaining the security of their account</li>
              <li>Using the Service in compliance with all applicable laws</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are owned by Magical Stories and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Magical Stories shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Changes to Terms</h2>
            <p className="text-lg text-[#171c3f]/80">
              We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date at the top of these terms.
            </p>
            <p className="text-lg text-[#171c3f]/80">
              Your continued use of the service constitutes acceptance of any changes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: support@magicalstories.com
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Additional Terms</h2>
            <p className="text-lg text-[#171c3f]/80">
              We&apos;re not responsible for any &quot;magical mishaps&quot; that may occur during story time.
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