'use client'; // Headers often need client-side interactivity (e.g., mobile menu)

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[#171c3f]'
                    : 'text-gray-600 hover:text-[#171c3f]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/create"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#fa6565] to-[#f2c955] rounded-full hover:opacity-90 transition-opacity"
            >
              Create Story
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#171c3f] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#171c3f]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href
                  ? 'text-[#171c3f] bg-gray-50'
                  : 'text-gray-600 hover:text-[#171c3f] hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/create"
            className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-[#fa6565] to-[#f2c955] hover:opacity-90 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Create Story
          </Link>
        </div>
      </div>
    </header>
  );
} 