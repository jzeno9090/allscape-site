import Link from 'next/link';
import type { Metadata } from 'next';
import { business, services } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional lawn irrigation, landscape lighting, holiday lighting, and paver restoration services in Northern Illinois.',
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: business.url },
          { name: 'Services', url: `${business.url}/services` },
        ])}
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-gold" />
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Our Services</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.05] mb-8 max-w-4xl">
            Four specialties.<br />
            <em className="font-light">Done right.</em>
          </h1>
          <p className="text-lg text-gray-warm max-w-2xl leading-relaxed">
            We focus on four outdoor services and refuse to dilute that with anything else. After {business.yearsInBusiness}+
            years, this is what we do better than anyone in Northern Illinois.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm py-24 border-t border-line">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-px bg-line">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-paper p-12 group hover:bg-paper-warm transition-colors"
              >
                <div className="service-num text-3xl mb-6">{service.romanNumeral}.</div>
                <h2 className="font-serif text-3xl text-navy mb-4 leading-tight">{service.title}</h2>
                <p className="text-gray-warm leading-relaxed mb-8">{service.tagline}</p>
                <div className="inline-flex items-center gap-3 text-navy font-semibold text-sm uppercase tracking-wider">
                  Learn more
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
