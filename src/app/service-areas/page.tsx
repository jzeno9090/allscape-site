import Link from 'next/link';
import type { Metadata } from 'next';
import { business, cities } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: `Allscape Services serves ${cities.length}+ cities across Northern Illinois &amp; Southern Wisconsin.`,
};

export default function ServiceAreasPage() {
  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: business.url },
          { name: 'Service Areas', url: `${business.url}/service-areas` },
        ])}
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Where we work</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-green-ink leading-[1.05] mb-6 max-w-4xl">
            {cities.length}+ cities across Northern Illinois &amp; Southern Wisconsin.
          </h1>
          <p className="text-lg text-gray-warm max-w-2xl leading-relaxed">
            We serve homeowners throughout Northern Illinois &amp; Southern Wisconsin. If you&apos;re in our service area,
            you&apos;ll get our full attention.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm py-20 border-t border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
              {sortedCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="text-green-ink hover:text-green font-medium transition-colors py-1.5"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
