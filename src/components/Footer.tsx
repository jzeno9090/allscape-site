import Link from 'next/link';
import { business, services } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-green-ink text-white/80 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <div className="bg-white inline-block p-3 rounded-md mb-5">
              <img
                src="/images/logo.webp"
                alt="Allscape Services"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Outdoor service experts serving Northern Illinois &amp; Southern Wisconsin homeowners since {business.established}. Lawn
              irrigation, landscape lighting, holiday lighting, and paver restoration.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-green-soft font-bold mb-5">Services</div>
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
            <div className="text-xs uppercase tracking-widest text-green-soft font-bold mb-5">Company</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
              <li><Link href="/service-areas" className="hover:text-white">Service Areas</Link></li>
              <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-widest text-green-soft font-bold mb-5">Contact</div>
            <div className="space-y-2 text-sm">
              <div>
                <a href={`tel:${business.phoneRaw}`} className="font-semibold text-white hover:text-green-soft text-base">
                  {business.phone}
                </a>
              </div>
              <div>{business.address.street}</div>
              <div>{business.address.city}, {business.address.state} {business.address.zip}</div>
              <div className="pt-3 text-xs text-white/60">
                {business.hours.weekday}
                <br />
                {business.hours.saturday}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-wrap justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
