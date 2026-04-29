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

  return {
    title: `Lawn Irrigation, Landscape Lighting & Paver Restoration in ${city.name}, IL`,
    description: `Sprinkler systems, landscape lighting, holiday lighting, and paver restoration for ${city.name}, ${city.county} County homeowners. Established outdoor service experts since ${business.established}.`,
    alternates: {
      canonical: `${business.url}/service-areas/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  // Find 5 nearby cities (excluding this one) for internal linking
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
      <section className="bg-paper py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="text-xs uppercase tracking-widest text-gray-warm mb-8">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-3">/</span>
            <Link href="/service-areas" className="hover:text-navy">Service Areas</Link>
            <span className="mx-3">/</span>
            <span className="text-navy">{city.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-gold" />
                <span className="text-xs tracking-widest uppercase text-gold font-semibold">
                  {city.county} County · Northern Illinois
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05] mb-8">
                Lawn Irrigation, Landscape Lighting &amp; Paver Restoration in {city.name}, IL
              </h1>

              <p className="text-lg text-gray-warm leading-relaxed max-w-2xl mb-10">
                Sprinkler systems, landscape lighting, holiday lighting, and paver restoration — done right. Serving
                {' '}{city.name} homeowners since {business.established}.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="text-navy font-semibold border-b-2 border-gold pb-1 hover:text-navy-soft"
                >
                  {business.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-paper-warm border border-line p-8">
                <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-4">Trusted in {city.name}</div>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <div className="font-serif text-3xl text-navy font-semibold">{business.yearsInBusiness}+</div>
                    <div className="text-sm text-gray-warm">years serving Northern Illinois</div>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <div className="font-serif text-3xl text-navy font-semibold">{business.customerCount}</div>
                    <div className="text-sm text-gray-warm">Northern Illinois homeowners served</div>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <div className="font-serif text-3xl text-navy font-semibold">{business.rating} ★</div>
                    <div className="text-sm text-gray-warm">average customer rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for this city */}
      <section className="bg-paper-warm py-24 border-t border-line">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-4">
                Services in {city.name}
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy leading-[1.1]">
                Four specialties.<br />
                <em className="font-light">Done right.</em>
              </h2>
            </div>
          </div>

          <div className="border-t border-line">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group border-b border-line py-10 hover:bg-paper transition-colors"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-1 service-num text-3xl">{service.romanNumeral}.</div>
                  <div className="lg:col-span-4">
                    <h3 className="font-serif text-3xl text-navy leading-tight">{service.title}</h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-gray-warm leading-relaxed">{service.shortDescription}</p>
                  </div>
                  <div className="lg:col-span-1 flex justify-end">
                    <svg
                      className="w-6 h-6 text-navy transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities for internal linking & local SEO */}
      {nearbyCities.length > 0 && (
        <section className="bg-paper py-20 border-t border-line">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-4">Nearby Service Areas</div>
            <h2 className="font-serif text-3xl text-navy mb-10">Also serving {city.county} County</h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/service-areas/${nearby.slug}`}
                  className="border border-line bg-paper-warm hover:bg-navy hover:text-white text-navy px-5 py-3 text-sm font-medium transition-colors"
                >
                  {nearby.name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="text-navy font-semibold border-b-2 border-gold px-2 py-3 text-sm uppercase tracking-wider hover:text-navy-soft"
              >
                View all {cities.length} cities →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-navy text-white py-24">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-6">{city.name} homeowners</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">
            Request a free quote in <em className="font-light">{city.name}</em>.
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10">
            No pressure. No obligation. Just an honest conversation about your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-gold text-navy px-8 py-4 text-sm tracking-wider font-semibold uppercase hover:bg-gold-soft transition-colors">
              Schedule Online
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="border border-white text-white px-8 py-4 text-sm tracking-wider font-semibold uppercase hover:bg-white hover:text-navy transition-colors"
            >
              {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
