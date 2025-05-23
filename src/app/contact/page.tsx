import { Metadata } from "next";
import { COLORS } from '@/lib/constants';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

// Metadata remains here in the Server Component
export const metadata: Metadata = {
  title: "Contact Us | Magical Stories",
  description: "Get in touch with the Magical Stories team. We&apos;d love to hear from you!",
};

// The main page component is now a Server Component
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Replace Navigation with Header */}
      <Header /> {/* No prop needed, defaults to false */}

      {/* Main Content Wrapper */}
      <div className="pt-20">
        {/* Contact Hero Section */}
        <div className="relative pt-24 pb-16 bg-gradient-to-b from-white to-[#fafaf8]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 opacity-50"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className={`text-4xl sm:text-5xl font-bold text-[${COLORS.dark}] mb-4`}>Get in Touch</h1>
            <p className="text-xl text-gray-600 mb-6">
              We&apos;d love to hear from you! Whether you have a question about our stories, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Contact Content Area */}
        <div className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Render the Client Component for the form and FAQs */}
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 