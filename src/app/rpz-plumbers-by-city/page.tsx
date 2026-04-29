import type { Metadata } from 'next';
import Link from 'next/link';
import { business, plumbersByCity } from '@/lib/content';

export const metadata: Metadata = {
  title: 'RPZ Plumbers by City',
  description:
    'List of licensed plumbers we have worked with for RPZ backflow testing across Northern Illinois & Southern Wisconsin, organized by city.',
};

export default function RpzPlumbersPage() {
  const cities = Object.keys(plumbersByCity).sort((a, b) => a.localeCompare(b));

  return (
    <>
      <section className="bg-paper py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-xs uppercase tracking-widest text-gray-warm mb-6">
            <Link href="/" className="hover:text-green-ink">Home</Link>
            <span className="mx-3">/</span>
            <Link href="/services/lawn-irrigation" className="hover:text-green-ink">Lawn Irrigation</Link>
            <span className="mx-3">/</span>
            <span className="text-green-ink">RPZ Plumbers by City</span>
          </nav>

          <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Backflow Testing Referrals</div>
          <h1 className="font-display text-5xl md:text-6xl text-green-ink leading-[1.05] mb-6">
            RPZ Plumbers by City.
          </h1>
          <p className="text-lg text-gray-warm leading-relaxed max-w-2xl mb-3">
            Illinois requires annual RPZ backflow testing on any property with an irrigation system. The test must
            be performed by a licensed plumber with a CCDI license — they file the paperwork with your municipality.
            We don&apos;t do RPZ testing in-house.
          </p>
          <p className="text-sm text-gray-warm leading-relaxed max-w-2xl">
            Below is the list of plumbers we&apos;ve worked with in each city. Call us at{' '}
            <a href={`tel:${business.phoneRaw}`} className="text-green-ink font-bold border-b border-green hover:text-green">
              {business.phone}
            </a>{' '}
            if you have questions.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm py-16 lg:py-20 border-t border-line">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {cities.map((city) => (
              <div key={city} className="bg-white rounded-xl p-6 shadow-sm border border-line">
                <h2 className="font-display text-xl text-green-ink mb-3">{city}</h2>
                <ul className="space-y-2 text-sm">
                  {plumbersByCity[city].map((p) => {
                    const tel = p.phone.replace(/[^\d]/g, '');
                    return (
                      <li key={`${p.name}-${p.phone}`} className="flex justify-between gap-3">
                        <span className="text-green-ink">{p.name}</span>
                        <a
                          href={`tel:${tel}`}
                          className="text-gray-warm hover:text-green whitespace-nowrap font-mono text-xs"
                        >
                          {p.phone}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-warm italic mt-10 max-w-2xl">
            Listing a plumber here is not an endorsement, certification, or guarantee. Allscape Services is not
            responsible for work performed by these companies. Verify licensing and pricing directly with the
            plumber before scheduling.
          </p>
        </div>
      </section>
    </>
  );
}
