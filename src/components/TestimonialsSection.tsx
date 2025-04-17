import Image from 'next/image'; // Import next/image
import { COLORS } from '@/lib/constants';

// Testimonial data (Consider moving to a constants file if used elsewhere)
const testimonials = [
  {
    quote: "My daughter asks for her personalized story every night! It's become our favorite bedtime ritual.",
    author: "Sarah K.",
    role: "Mom of 2",
    color: `bg-[${COLORS.primary}]/10`,
    avatarUrl: '/images/customer2.jpeg', 
  },
  {
    quote: "The creativity is amazing! My son loves hearing his own name and adventures in the stories.",
    author: "David L.",
    role: "Dad of Leo (age 5)",
    color: `bg-[${COLORS.secondary}]/10`,
    avatarUrl: '/images/customer3.jpeg', 
  },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold text-[${COLORS.dark}] mb-4`}>Loved by Parents Everywhere</h2>
          <p className={`text-lg text-[${COLORS.dark}]/80 max-w-2xl mx-auto`}>Don&apos;t just take our word for it. Hear what real parents have to say about their children&apos;s magical story experiences.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`p-6 sm:p-8 rounded-2xl shadow-lg ${testimonial.color} border border-gray-100 flex flex-col`}>
              <svg className="w-10 h-10 text-gray-300 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 4 1 8.314 1 13.028c0 5.088 3.07 9.356 6.898 11.528l.272.162a1 1 0 001.158-.125l.173-.217A1 1 0 009.23 24.198C8.468 22.864 8 21.33 8 19.788c0-3.866 3.134-7 7-7h.5a1 1 0 001-1V4.5A.5.5 0 0016 4H9.352zm16 0c-4.896 0-8.352 4.314-8.352 9.028 0 5.088 3.07 9.356 6.898 11.528l.272.162a1 1 0 001.158-.125l.173-.217A1 1 0 0025.23 24.198c-.762-1.334-1.23-2.868-1.23-4.41 0-3.866 3.134-7 7-7h.5a1 1 0 001-1V4.5a.5.5 0 00-.5-.5H25.352z" />
              </svg>
              <blockquote className="flex-grow">
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">&quot;{testimonial.quote}&quot;</p>
              </blockquote>
              <figcaption className="flex items-center pt-6 border-t border-gray-200/60">
                <Image
                  src={testimonial.avatarUrl}
                  alt={`Avatar of ${testimonial.author}`}
                  width={48} // w-12
                  height={48} // h-12
                  className="w-12 h-12 rounded-full mr-4 object-cover bg-gray-200"
                />
                <div>
                  <div className={`text-base font-semibold text-[${COLORS.dark}]`}>{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 