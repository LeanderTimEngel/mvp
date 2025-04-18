'use client'; // Headers often need client-side interactivity (e.g., mobile menu)

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '@/components/Logo';
import { COLORS } from '@/lib/constants';

interface HeaderProps {
  isHomePage?: boolean; // Optional prop to differentiate header content
}

export default function Header({ isHomePage = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/80 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" aria-label="Back to Homepage">
            <Logo />
          </Link>
          
          {/* Conditional Navigation Links/Buttons */}
          {isHomePage ? (
            // Navigation for Home Page
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="hidden sm:flex items-center space-x-8">
                <a href="#features" className={`text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-200 font-medium px-1 py-1`}>Features</a>
                <a href="#testimonials" className={`text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-200 font-medium px-1 py-1`}>Testimonials</a>
                <a href="#pricing" className={`text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-200 font-medium px-1 py-1`}>Pricing</a>
              </div>
              <Link
                href="#story-form"
                className={`bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-5 sm:px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200 font-semibold shadow-sm text-sm sm:text-base`}
              >
                Get Started
              </Link>
              <button 
                onClick={toggleMobileMenu}
                className="sm:hidden flex flex-col justify-center items-center ml-2 z-50"
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 mb-1.5 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 mt-1.5 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          ) : (
            // Button for Other Pages
            <div className="flex items-center">
              <Link
                href="/"
                className={`bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-5 sm:px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200 font-semibold shadow-sm text-sm sm:text-base`}
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isHomePage && (
        <div 
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-sm transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'} sm:hidden`}
          style={{ top: '80px', height: 'calc(100vh - 80px)' }}
        >
          <div className="flex flex-col items-center justify-start h-full pt-16 pb-8 space-y-8">
            <a 
              href="#features" 
              className={`text-xl text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-200 font-medium`}
              onClick={toggleMobileMenu}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className={`text-xl text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-200 font-medium`}
              onClick={toggleMobileMenu}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className={`text-xl text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-200 font-medium`}
              onClick={toggleMobileMenu}
            >
              Pricing
            </a>
            <Link
              href="#story-form"
              className={`bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 font-semibold shadow-sm text-lg mt-4`}
              onClick={toggleMobileMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 