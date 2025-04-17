import Link from 'next/link';

export default function CtaSection() {
  return (
    <div className="py-12 sm:py-20 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f2c955] rounded-3xl p-8 sm:p-12 text-center text-[#171c3f] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 relative">Ready to Create Magic?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 relative">Join thousands of parents who&apos;re making bedtime magical.</p>
          <Link
            href="#story-form"
            className="inline-block bg-[#fa6565] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
} 