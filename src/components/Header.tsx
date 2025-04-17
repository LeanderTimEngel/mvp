'use client'; // Headers often need client-side interactivity (e.g., mobile menu)

import Link from 'next/link';
import Logo from '@/components/Logo';
import { COLORS } from '@/lib/constants';

interface HeaderProps {
  isHomePage?: boolean; // Optional prop to differentiate header content
}

export default function Header({ isHomePage = false }: HeaderProps) {
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
              <a href="#features" className={`text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-200 font-medium hidden sm:inline-block px-1 py-1`}>Features</a>
              <a href="#testimonials" className={`text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-200 font-medium hidden sm:inline-block px-1 py-1`}>Testimonials</a>
              <a href="#pricing" className={`text-[${COLORS.dark}] hover:text-[${COLORS.primary}] transition-colors duration-200 font-medium hidden sm:inline-block px-1 py-1`}>Pricing</a>
              <Link
                href="#story-form"
                className={`bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-5 sm:px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200 font-semibold shadow-sm text-sm sm:text-base`}
              >
                Get Started
              </Link>
            </div>
          ) : (
            // Button for Other Pages
            <Link
              href="/"
              className={`bg-gradient-to-r from-[${COLORS.primary}] to-[${COLORS.secondary}] text-white px-5 sm:px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200 font-semibold shadow-sm text-sm sm:text-base`}
            >
              Back to Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
} 