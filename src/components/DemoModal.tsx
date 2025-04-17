'use client';

import { useEffect } from 'react';
import { COLORS, DEMO_VIDEO_URL } from '@/lib/constants';

interface DemoModalProps {
  show: boolean;
  onClose: () => void;
}

export default function DemoModal({ show, onClose }: DemoModalProps) {
  // Handle Escape key press for closing
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    if (show) {
      window.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when modal closes
      document.body.style.overflow = 'auto';
    }

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleEscape);
      // Ensure body scroll is restored if component unmounts while open
      document.body.style.overflow = 'auto'; 
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose} // Close on backdrop click
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true"></div>
      
      {/* Modal Content */}
      <div 
        className={`relative bg-white rounded-xl shadow-2xl w-full max-w-3xl mx-4 transition-all duration-300 ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-full bg-white/50 hover:bg-gray-100 z-10"
          aria-label="Close demo video"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Embed Area - Replace with Loom code */}
        <div className="aspect-video overflow-hidden rounded-xl"> {/* Maintain aspect ratio */} 
          {/* Replace previous iframe/placeholder with Loom div and iframe */}
          <div style={{position: 'relative', paddingBottom: '56.25%', height: 0}}>
            <iframe 
              src="https://www.loom.com/embed/b0f9157b0ee04dbabc66bbbc4d0aefe7?sid=a89e0ca1-8279-43dd-94ee-789fc76c8871" 
              frameBorder="0" 
              allowFullScreen 
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 