import Link from 'next/link';
import { business } from '@/lib/content';

export function Header() {
  return (
    <>
      {/* Top utility bar */}
      <div className="bg-navy text-white text-xs relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="trust-dot" />
              Licensed &amp; Insured
            </span>
            <span className="hidden md:inline-flex items-center gap-2">
              <span className="trust-dot" />
              Established {business.established}
            </span>
            <span className="hidden lg:inline-flex items-center gap-2">
              <span className="trust-dot" />
              {business.customerCount} Customers Served
            </span>
          </div>
          <a href={`tel:${business.phoneRaw}`} className="font-medium tracking-wide hover:text-gold transition-colors">
            CALL {business.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-paper/95 border-b border-line sticky top-0 z-40 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <img
              src="/images/logo.png"
              alt="Allscape Services — Lawn Irrigation, Landscape Lighting, Holiday Lighting & Paver Restoration in Northern Illinois"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-[10px] tracking-widest uppercase text-gray-warm font-medium">
                Services · Est. {business.established}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/service-areas" className="nav-link">
              Service Areas
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/reviews" className="nav-link">
              Reviews
            </Link>
            <Link href="/faqs" className="nav-link">
              FAQs
            </Link>
          </nav>

          <Link
            href="/contact"
            className="bg-navy text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-navy-soft transition-colors"
          >
            REQUEST A QUOTE
          </Link>
        </div>
      </header>
    </>
  );
}
