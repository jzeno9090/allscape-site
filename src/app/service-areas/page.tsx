import Link from 'next/link';
import type { Metadata } from 'next';
import { business, cities, getCountiesList, getCitiesByCounty } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: `Allscape Services serves ${cities.length}+ cities across Lake, McHenry, Cook, and Kane counties in Northern Illinois.`,
};

export default function ServiceAreasPage() {
  const counties = getCountiesList();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: business.url },
          { name: 'Service Areas', url: `${business.url}/service-areas` },
        ])}
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-gold" />
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Where we work</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.05] mb-8 max-w-4xl">
            {cities.length}+ cities across<br />
            <em className="font-light">Northern Illinois.</em>
          </h1>
          <p className="text-lg text-gray-warm max-w-2xl leading-relaxed">
            We serve homeowners throughout Lake, McHenry, Cook, and Kane counties. If you&apos;re in our service area,
            you&apos;ll get our full attention.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm py-20 border-t border-line">
        <div className="max-w-7xl mx-auto px-8">
          {counties.map((county) => {
            const countyCities = getCitiesByCounty(county);
            return (
              <div key={county} className="mb-16 last:mb-0">
                <div className="flex items-baseline gap-4 mb-8">
                  <h2 className="font-serif text-3xl text-navy">{county} County</h2>
                  <span className="text-xs uppercase tracking-widest text-gray-warm">
                    {countyCities.length} cities
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 border-t border-line pt-8">
                  {countyCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="text-navy hover:text-gold-dark transition-colors py-1"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
