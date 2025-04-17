import Link from 'next/link';
import { COLORS } from '@/lib/constants';

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#fafaf8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#fceded] via-[#fdf1e2] to-[#f4f8fd] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-lg border border-gray-100">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.03] pointer-events-none" />
          <h2 className={`text-3xl sm:text-4xl font-bold text-[${COLORS.dark}] mb-4 relative`}>
            Ready to Create Some Magic?
          </h2>
          <p className={`text-lg sm:text-xl text-[${COLORS.dark}]/80 mb-8 sm:mb-10 max-w-2xl mx-auto relative`}>
            Give your child the gift of imagination. Generate their unique, personalized audio story today and make storytime unforgettable.
          </p>
          <Link
            href="#story-form"
            className={`inline-block bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-8 py-3.5 rounded-xl hover:opacity-95 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            Create a Story Now
          </Link>
        </div>
      </div>
    </section>
  );
} 