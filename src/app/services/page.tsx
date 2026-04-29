import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { business, services } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional lawn irrigation, landscape lighting, holiday lighting, and paver restoration services in Northern Illinois & Southern Wisconsin.',
};

const cardImages: Record<string, string> = {
  'lawn-irrigation': '/images/card-irrigation.jpg',
  'landscape-lighting': '/images/card-landscape-lighting.jpg',
  'holiday-lighting': '/images/card-holiday-lighting.jpg',
  'paver-restoration': '/images/card-paver-restoration.jpg',
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Our Services</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-green-ink leading-[1.05] mb-6 max-w-4xl">
            Lawn irrigation, landscape lighting, holiday lighting, and paver restoration.
          </h1>
          <p className="text-lg text-gray-warm max-w-2xl leading-relaxed">
            Serving Northern Illinois &amp; Southern Wisconsin homeowners since {business.established}.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm py-20 border-t border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-green-soft relative">
                  <Image
                    src={cardImages[service.slug] ?? '/images/card-irrigation.jpg'}
                    alt={`${service.title} — ${service.shortDescription}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl text-green-ink mb-2 group-hover:text-green transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-warm text-sm leading-relaxed">{service.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-green font-bold text-sm uppercase tracking-wide">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Ready to begin?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free, no-pressure quote on any of our services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-white text-green px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md shadow-lg hover:bg-green-ink hover:text-white transition-all">
              Request Service
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green transition-all">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
