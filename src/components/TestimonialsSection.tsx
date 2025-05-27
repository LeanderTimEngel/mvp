import Image from 'next/image'; // Import next/image

// Testimonial data
const testimonials = [
  {
    quote: "My daughter asks for her personalized story every night! It's become our favorite bedtime ritual.",
    author: "Sarah K.",
    role: "Mom of 2",
    gradient: 'from-[#fa6565] to-[#f2c955]',
    avatarUrl: '/images/customer2.jpeg',
    rating: 5
  },
  {
    quote: "The creativity is amazing! My son loves hearing his own name and adventures in the stories.",
    author: "David L.",
    role: "Dad of Leo (age 5)",
    gradient: 'from-[#f2c955] to-[#1da448]',
    avatarUrl: '/images/customer3.jpeg',
    rating: 5
  },
  // Add more testimonials as needed
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-gradient-to-br from-[#fafaf8] via-white to-[#f8f9ff] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-[#fa6565]/5 to-[#f2c955]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-tr from-[#f2c955]/5 to-[#1da448]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/90 backdrop-blur-xl text-[#171c3f] px-6 py-3 rounded-full text-sm font-semibold shadow-lg border border-[#fa6565]/15 mb-8">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#fa6565] to-[#f2c955] rounded-full mr-3 animate-pulse"></div>
            Parent Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#171c3f] mb-6 leading-tight">
            Loved by 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa6565] to-[#f2c955]"> Parents </span>
            Everywhere
          </h2>
          <p className="text-lg sm:text-xl text-[#171c3f]/70 max-w-2xl mx-auto font-medium">
            Don&apos;t just take our word for it. Hear what real parents have to say about their children&apos;s magical story experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#fa6565]/20 overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`}></div>
              
              {/* Quote icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 4 1 8.314 1 13.028c0 5.088 3.07 9.356 6.898 11.528l.272.162a1 1 0 001.158-.125l.173-.217A1 1 0 009.23 24.198C8.468 22.864 8 21.33 8 19.788c0-3.866 3.134-7 7-7h.5a1 1 0 001-1V4.5A.5.5 0 0016 4H9.352zm16 0c-4.896 0-8.352 4.314-8.352 9.028 0 5.088 3.07 9.356 6.898 11.528l.272.162a1 1 0 001.158-.125l.173-.217A1 1 0 0025.23 24.198c-.762-1.334-1.23-2.868-1.23-4.41 0-3.866 3.134-7 7-7h.5a1 1 0 001-1V4.5a.5.5 0 00-.5-.5H25.352z" />
                </svg>
              </div>

              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>

              <blockquote className="flex-grow mb-8">
                <p className="text-lg sm:text-xl text-[#171c3f]/90 leading-relaxed font-medium">
                  &quot;{testimonial.quote}&quot;
                </p>
              </blockquote>

              <figcaption className="flex items-center pt-6 border-t border-[#171c3f]/10">
                <div className="relative">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={`Avatar of ${testimonial.author}`}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-2xl object-cover shadow-md"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br ${testimonial.gradient} rounded-lg flex items-center justify-center`}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-base font-extrabold text-[#171c3f]">{testimonial.author}</div>
                  <div className="text-sm text-[#171c3f]/60 font-medium">{testimonial.role}</div>
                </div>
              </figcaption>

              {/* Decorative element */}
              <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} rounded-3xl opacity-5 rotate-12 group-hover:rotate-6 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-lg border border-[#1da448]/15">
            <span className="text-2xl">🌟</span>
            <span className="text-[#171c3f] font-bold">Join thousands of happy families</span>
          </div>
        </div>
      </div>
    </section>
  );
} 