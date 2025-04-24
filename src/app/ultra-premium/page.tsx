import { Metadata } from "next";
import { COLORS } from '@/lib/constants';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import UltraPremiumForm from '@/components/UltraPremiumForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Ultra Premium | Parents&apos; Voices | Magical Stories",
  description: "Give your child the ultimate storytelling experience with stories narrated in your own voice.",
};

export default function UltraPremiumPage() {
  // Process steps and benefits data
  const steps = [
    { number: '1', text: 'You record voice samples using our simple guide' },
    { number: '2', text: 'Our technology creates a perfect voice model' },
    { number: '3', text: 'Choose from our library of customizable stories' },
    { number: '4', text: 'Receive finished stories narrated in your voice' },
  ];
  const benefits = [
    { icon: '🎙️', text: 'Stories narrated in your own voice' },
    { icon: '💫', text: 'Personalized storylines featuring your child' },
    { icon: '🔄', text: 'Update your voice model anytime' },
    { icon: '🎁', text: 'Perfect gift for parents who travel or live apart' },
  ];
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <div className="pt-20">
        <div className="relative pt-32 pb-24 bg-gradient-to-b from-white to-[#fafaf8] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fa6565]/5 to-[#f2c955]/5 opacity-40"></div>
          {/* Decorative background gradient */}
          {/* removed individual circle elements for simpler markup */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block mb-8 bg-white/80 shadow-md rounded-full">
              <span className="inline-block bg-gradient-to-r from-[#fa6565] to-[#f2c955] text-base font-semibold px-4 py-1.5 rounded-full text-white">Ultra Premium Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5">Stories in Your <span className="text-[#fa6565]">Voice</span></h1>
            <p className="text-xl text-gray-600 mb-8">
              The most magical bedtime experience - personalized stories narrated in <span className="font-semibold">your own voice</span>, creating a special connection even when you can&apos;t be there.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#fa6565] to-[#f2c955] mx-auto rounded-full mb-12"></div>
            
            <div className="flex justify-center mb-12 transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative w-full max-w-3xl h-72 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200/50">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 z-10"></div>
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
        <div className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
              {/* Features & Process List */}
              <div className="mb-16 lg:mb-0 lg:pr-8">
                <h2 className={`text-3xl sm:text-4xl font-semibold text-[${COLORS.dark}] mb-8`}>Why Parents&apos; Voices Matter</h2>
                <p className="text-lg text-gray-700 mb-12">
                  Children find comfort and security in their parents&apos; voices. Our Ultra Premium service lets you create an emotional connection through storytelling, even when you can&apos;t be physically present.
                </p>
                
                <h3 className={`text-2xl font-semibold text-[${COLORS.dark}] mb-6`}>How It Works</h3>
                <ol className="space-y-5 text-gray-700 mb-12">
                  {steps.map((step) => (
                    <li key={step.number} className="flex items-center p-2 transition-all duration-300">
                      <span className="flex items-center justify-center text-white bg-gradient-to-r from-[#fa6565] to-[#f2c955] w-8 h-8 rounded-full mr-4 font-bold text-sm shadow-md">{step.number}</span>
                      <span className="text-lg pt-1.5">{step.text}</span>
                    </li>
                  ))}
                </ol>
                
                <h3 className={`text-2xl font-semibold text-[${COLORS.dark}] mb-6`}>Ultra Premium Benefits</h3>
                <ul className="space-y-4 text-gray-700 mb-12">
                  {benefits.map((b) => (
                    <li key={b.text} className="flex items-center bg-white p-4 rounded-lg hover:shadow-sm border border-gray-200">
                      <span className="text-xl mr-3 text-[${COLORS.primary}]">{b.icon}</span>
                      <span className="text-lg">{b.text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100 shadow-sm transition-all duration-500 hover:shadow-md">
                  <p className="text-base italic text-blue-800">
                    &quot;My daughter&apos;s face lights up when she hears my voice telling her stories. As a military mom who deploys, this service has been incredibly meaningful for our family.&quot;
                  </p>
                  <p className="text-sm font-semibold text-blue-900 mt-3">— Amanda T., Navy Lieutenant</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="sticky top-24 bg-white p-8 rounded-2xl shadow-xl border border-gray-200/80">
                <h2 className={`text-3xl font-semibold text-[${COLORS.dark}] mb-5 text-center lg:text-left`}>Request Your Ultra Premium Plan</h2>
                <p className="text-gray-600 mb-8 text-center lg:text-left">
                  This exclusive service is available on request. Fill out the form below and our team will contact you to arrange voice recording and story selection.
                </p>
                <UltraPremiumForm />
                <p className="text-xs text-gray-500 mt-6 text-center">
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