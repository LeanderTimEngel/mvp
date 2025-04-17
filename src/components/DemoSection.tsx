'use client';

import { COLORS } from '@/lib/constants';

interface DemoSectionProps {
  openDemo: () => void;
}

export default function DemoSection({ openDemo }: DemoSectionProps) {
  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-3xl font-bold text-[${COLORS.dark}] mb-4`}>See Magical Stories in Action!</h2>
          <p className={`text-lg text-[${COLORS.dark}]/80 mb-8 max-w-2xl mx-auto`}>
            Watch our quick demo to see how easy it is to create personalized audio adventures 
            that your child will love.
          </p>
          
          {/* You could add a preview image here if desired */}
          {/* <div className="relative aspect-video max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg"> */}
          {/*   <Image src="/images/demo-preview.jpg" alt="Demo video preview" layout="fill" objectFit="cover" /> */}
          {/*   <div className="absolute inset-0 bg-black/30 flex items-center justify-center"> */}
          {/*     Play Button Icon */}
          {/*   </div> */}
          {/* </div> */}

          <button
            onClick={openDemo}
            type="button"
            className={`inline-flex items-center justify-center gap-2 bg-[${COLORS.secondary}] text-[${COLORS.dark}] px-8 py-3 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg`}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo Video
          </button>
        </div>
      </div>
    </div>
  );
} 