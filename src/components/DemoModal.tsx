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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in-fast"
      aria-labelledby="demo-modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose} // Close modal on overlay click
        aria-hidden="true"
      ></div>
      
      {/* Modal Content */}
      <div className="relative z-[101] bg-white rounded-2xl p-6 max-w-4xl w-full shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute -top-3 -right-3 md:-top-5 md:-right-5 text-white bg-[${COLORS.dark}]/70 rounded-full p-1.5 hover:bg-[${COLORS.dark}] transition-colors duration-300`}
          aria-label="Close demo video modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Video Embed */}
        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
          <iframe
            className="w-full h-full"
            src={DEMO_VIDEO_URL} // Use constant for URL
            title="Magical Stories Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        {/* Optional Caption */}
        <div className="mt-4 text-center">
          <p id="demo-modal-title" className={`text-sm text-[${COLORS.dark}]/70`}>Watch how Magical Stories brings imagination to life!</p>
        </div>
      </div>
    </div>
  );
} 