'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Refund Policy', href: '/refund' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#0c1322] text-white">
      {/* Footer Top Wave - smaller on mobile */}
      <div className="relative h-12 sm:h-16 md:h-24">
        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z" fill="#0f172a"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-8 sm:pb-12">
        {/* Main Footer Content - improved mobile grid */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:gap-y-10 sm:gap-x-8 md:grid-cols-4 mb-8 sm:mb-12">
          {/* Brand Section - full width on smallest screens */}
          <div className="col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
            <div className="mb-1 sm:mb-2">
              <Logo />
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xs">
              Creating magical moments at bedtime with personalized stories that spark your child&apos;s imagination.
            </p>
          </div>

          {/* Quick Links - responsive column */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 inline-flex items-center">
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm inline-flex items-center group">
                    <span className="mr-1 sm:mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal - responsive column */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 inline-flex items-center">
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm inline-flex items-center group">
                    <span className="mr-1 sm:mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 inline-flex items-center">
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact
            </h3>
            
            {/* Contact items - side by side on small mobile */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 md:grid-cols-1">
              <p className="text-gray-300 text-xs sm:text-sm flex items-start">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2 flex-shrink-0 text-[#fa6565]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>hello@magical-stories.fun</span>
              </p>
              <p className="text-gray-300 text-xs sm:text-sm flex items-start">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2 flex-shrink-0 text-[#fa6565]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>123 Storybook Lane<br />Imagination City, IC 12345</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright - more compact on mobile */}
        <div className="border-t border-gray-800/80 pt-6 sm:pt-8 text-center text-gray-400 flex flex-col sm:flex-row sm:justify-between items-center">
          <p className="text-xs sm:text-sm mb-3 sm:mb-0">© {currentYear} Magical Stories. All rights reserved.</p>
          <div className="flex space-x-4 sm:space-x-6 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 