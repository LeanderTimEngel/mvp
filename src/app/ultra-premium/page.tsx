import { Metadata } from "next";
import { COLORS } from '@/lib/constants';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import UltraPremiumForm from '@/components/UltraPremiumForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Ultra Premium | Parents' Voices | Magical Stories",
  description: "Give your child the ultimate storytelling experience with stories narrated in your own voice.",
};

export default function UltraPremiumPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <div className="pt-20">
        <div className="relative pt-28 pb-20 bg-gradient-to-b from-white to-[#fafaf8] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 opacity-50"></div>
          {/* Premium decorative elements */}
          <div className="absolute top-12 left-12 w-64 h-64 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-12 right-12 w-64 h-64 bg-gradient-to-r from-pink-300/20 to-red-300/20 rounded-full blur-3xl"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block mb-8 bg-white/80 shadow-md rounded-full">
              <span className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-base font-semibold px-4 py-1.5 rounded-full text-white">Ultra Premium Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5">Stories in Your <span className="text-[#fa6565]">Voice</span></h1>
            <p className="text-xl text-gray-600 mb-6">
              The most magical bedtime experience - personalized stories narrated in <span className="font-semibold">your own voice</span>, creating a special connection even when you can't be there.
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] mx-auto rounded-full mb-10"></div>
            
            <div className="flex justify-center mb-12 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="relative w-full max-w-3xl h-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 z-10"></div>
                <Image 
                  src="/images/parent-reading.jpg" 
                  alt="Parent reading to child" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent z-20">
                  <p className="text-white text-lg font-medium">Create lasting memories with your child</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details & Request Form */}
        <div className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute top-0 right-0 -mt-8 mr-8 text-right hidden lg:block z-10">
              <div className="bg-white px-6 py-3 rounded-lg border border-[#fa6565] shadow-md">
                <span className="text-sm font-semibold text-[#fa6565]">Premium Experience</span>
                <p className="text-gray-700 text-lg font-medium mt-1">Starting at $29.99/month</p>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              {/* Features & Process List */}
              <div className="mb-12 lg:mb-0 lg:pr-6">
                <h2 className={`text-2xl sm:text-3xl font-semibold text-[${COLORS.dark}] mb-6`}>Why Parents' Voices Matter</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Children find comfort and security in their parents' voices. Our Ultra Premium service lets you create an emotional connection through storytelling, even when you can't be physically present.
                </p>
                
                <h3 className={`text-xl font-semibold text-[${COLORS.dark}] mb-4`}>How It Works</h3>
                <ol className="space-y-6 text-gray-700 mb-10">
                  {[
                    { number: "1", text: "You record voice samples using our simple guide" },
                    { number: "2", text: "Our technology creates a perfect voice model" },
                    { number: "3", text: "Choose from our library of customizable stories" },
                    { number: "4", text: "Receive finished stories narrated in your voice" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                      <span className="flex items-center justify-center text-white bg-[#fa6565] w-10 h-10 rounded-full mr-4 flex-shrink-0 font-bold shadow-md">{item.number}</span>
                      <span className="text-lg pt-1.5">{item.text}</span>
                    </li>
                  ))}
                </ol>
                
                <h3 className={`text-xl font-semibold text-[${COLORS.dark}] mb-4`}>Ultra Premium Benefits</h3>
                <ul className="space-y-3 text-gray-700 mb-10">
                  {[
                    { icon: "🎙️", text: "Stories narrated in your own voice" },
                    { icon: "💫", text: "Personalized storylines featuring your child" },
                    { icon: "🔄", text: "Update your voice model anytime" },
                    { icon: "🎁", text: "Perfect gift for parents who travel or live apart" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:shadow-sm border border-gray-100">
                      <span className={`text-2xl mr-3 mt-0.5 text-[${COLORS.primary}]`}>{item.icon}</span>
                      <span className="text-lg">{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100 shadow-sm transition-all duration-500 hover:shadow-md">
                  <p className="text-sm italic text-indigo-700">
                    "My daughter's face lights up when she hears my voice telling her stories. As a military mom who deploys, this service has been incredibly meaningful for our family."
                  </p>
                  <p className="text-sm font-semibold text-indigo-800 mt-2">— Amanda T., Navy Lieutenant</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 relative">
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#fa6565]/20 rounded-tl-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#fa6565]/20 rounded-tr-3xl pointer-events-none"></div>
                <h2 className={`text-2xl sm:text-3xl font-semibold text-[${COLORS.dark}] mb-6 text-center lg:text-left`}>Request Your Ultra Premium Plan</h2>
                <p className="text-gray-600 mb-6">
                  This exclusive service is available on request. Fill out the form below and our team will contact you to arrange voice recording and story selection.
                </p>
                <UltraPremiumForm />
                <p className="text-sm text-gray-500 mt-6 text-center">
                  All voice data is securely stored and used exclusively for your stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}