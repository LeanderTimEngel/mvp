import { COLORS } from '@/lib/constants';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function PrivacyPolicy() {
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
            <h1 className={`text-4xl sm:text-5xl font-bold text-[${COLORS.dark}] mb-4`}>Privacy Policy</h1>
            <p className="text-xl text-gray-600 mb-6">Your privacy is important to us.</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Policy Content */}
        <div className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-gray-700 prose-headings:text-[${COLORS.dark}] prose-headings:font-semibold prose-a:text-[${COLORS.primary}] hover:prose-a:text-[${COLORS.primary}]/80 prose-strong:text-gray-800">
            {/* --- START PRIVACY POLICY CONTENT --- */}
            {/* Existing content will be placed here */}
            <p>Effective Date: [Insert Date]</p>

            <p>Welcome to Magical Stories! This Privacy Policy describes how Magical Stories (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and discloses your information when you use our website and services (collectively, the &quot;Service&quot;).</p>
            
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you use the Service, such as:</p>
            <ul>
              <li><strong>Personalization Details:</strong> Child&apos;s name, age, favorite character, and hobby to generate personalized stories.</li>
              <li><strong>Contact Information:</strong> Parent&apos;s email address to deliver the story and communicate regarding the Service.</li>
              <li><strong>Payment Information:</strong> If you make a purchase, our payment processor (e.g., Stripe) collects your payment details. We do not store your full payment card information.</li>
              <li><strong>Communications:</strong> Information you provide when you contact us for support or feedback.</li>
            </ul>
            <p>We may also automatically collect certain information when you use the Service:</p>
            <ul>
              <li><strong>Usage Information:</strong> Details about how you interact with the Service, such as pages visited, features used, and time spent.</li>
              <li><strong>Device Information:</strong> Information about the device you use to access the Service, including IP address, browser type, operating system, and device identifiers.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain the Service.</li>
              <li>Generate and deliver personalized stories.</li>
              <li>Process payments and manage subscriptions.</li>
              <li>Communicate with you, including responding to inquiries and sending service-related updates.</li>
              <li>Improve and personalize the Service.</li>
              <li>Monitor and analyze usage and trends.</li>
              <li>Prevent fraudulent activity and ensure the security of the Service.</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With third-party vendors and service providers who perform services on our behalf, such as AI model providers (OpenAI), email delivery services (Resend), payment processors (Stripe), and hosting providers. These providers only have access to the information necessary to perform their functions and are obligated to protect your information.</li>
              <li><strong>Legal Requirements:</strong> If required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of Magical Stories, our users, or others.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>

            <h2>4. Data Retention</h2>
            <p>We retain personalization details only as long as necessary to generate and deliver your story. Parent email addresses may be retained for communication and account management purposes unless you request deletion. Usage and device information may be retained for analytical purposes.</p>

            <h2>5. Security</h2>
            <p>We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

            <h2>6. Children&apos;s Privacy</h2>
            <p>While our service creates stories for children, it is intended for use by parents or legal guardians. We collect children&apos;s information (name, age, interests) solely for the purpose of story personalization, with the consent of the parent providing the information. We do not knowingly collect personal information directly from children under the age of 13 (or relevant age in other jurisdictions) without parental consent.</p>

            <h2>7. Your Choices</h2>
            <p>You can typically access and update your account information (if applicable). You may opt-out of promotional emails by following the unsubscribe instructions in those emails. You can request deletion of your account and associated personal information by contacting us.</p>

            <h2>8. Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website or through other communication channels. Your continued use of the Service after such changes constitutes your acceptance of the new policy.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@magicalstories.com">hello@magicalstories.com</a> or via our <Link href="/contact">Contact Page</Link>.</p>
            
            {/* --- END PRIVACY POLICY CONTENT --- */}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 