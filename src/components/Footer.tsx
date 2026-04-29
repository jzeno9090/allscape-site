import Link from 'next/link';
import { business, services } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-navy text-white/70 py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
           <div className="mb-6">
              <div className="bg-white/95 inline-block p-3 rounded">
                <img
                  src="/images/logo.webp"
                  alt="Allscape Services"
                  className="h-16 w-auto"
                />
              </div>
              <div className="text-[10px] tracking-widest uppercase text-gold mt-3">
                Services · Est. {business.established}
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Outdoor service experts serving Northern Illinois homeowners since {business.established}. Lawn
              irrigation, landscape lighting, holiday lighting, and paver restoration.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-5">Services</div>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-white">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-5">Contact</div>
            <div className="space-y-2 text-sm">
              <div>
                <a href={`tel:${business.phoneRaw}`} className="font-medium text-white hover:text-gold">
                  {business.phone}
                </a>
              </div>
              <div>{business.address.street}</div>
              <div>
                {business.address.city}, {business.address.state} {business.address.zip}
              </div>
              <div className="pt-3 text-xs">
                {business.hours.weekday}
                <br />
                {business.hours.saturday}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-wrap justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}