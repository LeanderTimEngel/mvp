import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#171c3f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Magical Stories</h3>
            <p className="text-[#ffffff]/80">Creating magical moments through personalized stories for children.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[#ffffff]/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Refund Policy', href: '/refund' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[#ffffff]/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@magicalstories.com" className="text-[#ffffff]/80 hover:text-white transition-colors">
                  hello@magicalstories.com
                </a>
              </li>
              <li className="text-[#ffffff]/80">123 Story Lane, Imagination City</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#ffffff]/20 text-center text-[#ffffff]/60">
          <p>&copy; {new Date().getFullYear()} Magical Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 