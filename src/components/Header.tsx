import Link from 'next/link';
import { business } from '@/lib/content';

const JOBBER_CLIENT_LOGIN =
  'https://clienthub.getjobber.com/client_hubs/92f3f5ef-eaaa-4f2c-9178-35059701f70a/login/new';

export function Header() {
  return (
    <>
      {/* Top utility bar */}
      <div className="bg-green-ink text-white text-xs relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center gap-4">
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
          <div className="flex items-center gap-5">
            <a
              href={JOBBER_CLIENT_LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block text-white/80 hover:text-green-soft transition-colors"
            >
              Existing Customer
            </a>
            <a
              href={`tel:${business.phoneRaw}`}
              className="font-semibold tracking-wide hover:text-green-soft transition-colors"
            >
              CALL {business.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-line sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center group">
            <img
              src="/images/logo.webp"
              alt="Allscape Services"
              className="h-20 md:h-24 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/service-areas" className="nav-link">Service Areas</Link>
            <Link href="/gallery" className="nav-link">Gallery</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/reviews" className="nav-link">Reviews</Link>
            <Link href="/faqs" className="nav-link">FAQs</Link>
          </nav>

          <a href="/contact" className="btn-primary text-xs md:text-sm">
            Request Service
          </a>
        </div>
      </header>
    </>
  );
}
