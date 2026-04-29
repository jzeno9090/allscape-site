import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { business, services, cities, getCityBySlug } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { citySchema, breadcrumbSchema } from '@/lib/schema';

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return { title: 'City Not Found' };
  }

  const st = city.state ?? 'IL';
  return {
    title: `Lawn Irrigation, Landscape Lighting & Paver Restoration in ${city.name}, ${st}`,
    description: `Sprinkler systems, landscape lighting, holiday lighting, and paver restoration for ${city.name}, ${st} homeowners. Established outdoor service experts since ${business.established}.`,
    alternates: {
      canonical: `${business.url}/service-areas/${city.slug}`,
    },
  };
}

const cardImages: Record<string, string> = {
  'lawn-irrigation': '/images/card-irrigation.jpg',
  'landscape-lighting': '/images/card-landscape-lighting.jpg',
  'holiday-lighting': '/images/card-holiday-lighting.jpg',
  'paver-restoration': '/images/card-paver-restoration.jpg',
};

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const nearbyCities = cities
    .filter((c) => c.slug !== city.slug && c.county === city.county)
    .slice(0, 5);

  return (
    <>
      <JsonLd
        data={[
          citySchema(city),
          breadcrumbSchema([
            { name: 'Home', url: business.url },
            { name: 'Service Areas', url: `${business.url}/service-areas` },
            { name: city.name, url: `${business.url}/service-areas/${city.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-paper py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-xs uppercase tracking-widest text-gray-warm mb-6">
            <Link href="/" className="hover:text-green">Home</Link>
            <span className="mx-3">/</span>
            <Link href="/service-areas" className="hover:text-green">Service Areas</Link>
            <span className="mx-3">/</span>
            <span className="text-green-ink">{city.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs tracking-widest uppercase text-green font-bold mb-3">
                Northern Illinois &amp; Southern Wisconsin
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-green-ink leading-[1.05] mb-6">
                Lawn Irrigation, Landscape Lighting &amp; Paver Restoration in {city.name}, {city.state ?? 'IL'}
              </h1>

              <p className="text-lg text-gray-warm leading-relaxed max-w-2xl mb-8">
                Sprinkler systems, landscape lighting, holiday lighting, and paver restoration — done right. Serving
                {' '}{city.name} homeowners since {business.established}.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Request Service
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-green text-green px-7 py-3 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-green hover:text-white transition-all"
                >
                  Request a Quote
                </Link>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="text-green-ink font-bold border-b-2 border-green pb-1 hover:text-green"
                >
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl border border-line shadow-lg p-8">
                <div className="text-xs tracking-widest uppercase text-green font-bold mb-5">Trusted in {city.name}</div>
                <div className="space-y-5">
                  <div className="flex items-baseline gap-4">
                    <div className="font-display text-4xl text-green-ink">{business.yearsInBusiness}+</div>
                    <div className="text-sm text-gray-warm">years serving Northern Illinois &amp; Southern Wisconsin</div>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <div className="font-display text-4xl text-green-ink">{business.customerCount}</div>
                    <div className="text-sm text-gray-warm">homeowners served</div>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <div className="font-display text-4xl text-green-ink">{business.rating} ★</div>
                    <div className="text-sm text-gray-warm">average customer rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for this city */}
      <section className="bg-paper-warm py-20 border-t border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs tracking-widest uppercase text-green font-bold mb-3">
              Services in {city.name}
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-green-ink leading-[1.1]">
              Four specialties. Done right.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-green-soft">
                  <img
                    src={cardImages[service.slug] ?? '/images/card-irrigation.jpg'}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-green-ink mb-2 group-hover:text-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-warm text-sm leading-relaxed">{service.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="bg-paper py-16 border-t border-line">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs tracking-widest uppercase text-green font-bold mb-3">Nearby Service Areas</div>
            <h2 className="font-display text-3xl text-green-ink mb-8">Other communities we serve</h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/service-areas/${nearby.slug}`}
                  className="bg-white border border-line hover:bg-green hover:text-white hover:border-green text-green-ink px-5 py-3 text-sm font-medium rounded-md transition-colors shadow-sm"
                >
                  {nearby.name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="text-green font-bold border-b-2 border-green px-2 py-3 text-sm uppercase tracking-wider hover:text-green-deep"
              >
                View all {cities.length} cities →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-green py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <div className="text-xs tracking-widest uppercase text-green-soft font-bold mb-4">{city.name} homeowners</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
            Request a free quote in {city.name}.
          </h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8">
            No pressure. No obligation. Just an honest conversation about your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md shadow-lg hover:bg-green-ink hover:text-white transition-all">
              Request Service
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green transition-all">
              Request a Quote
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="border-2 border-white text-white px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green transition-all"
            >
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
