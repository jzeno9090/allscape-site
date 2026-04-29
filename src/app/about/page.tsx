import type { Metadata } from 'next';
import Link from 'next/link';
import { business } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Allscape Services',
  description: `Established in ${business.established}, Allscape Services is a Northern Illinois &amp; Southern Wisconsin outdoor services company serving ${business.customerCount} homeowners.`,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: business.url },
          { name: 'About', url: `${business.url}/about` },
        ])}
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Our Story</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-green-ink leading-[1.05] mb-10">
            About Allscape Services.
          </h1>

          <div className="space-y-6">
            <p className="text-xl text-gray-warm leading-relaxed">
              Allscape Services was founded in {business.established} as a specialty outdoor services company.
              Today we focus on services: lawn irrigation, landscape lighting, holiday lighting, and paver
              restoration.
            </p>
            <p className="text-lg text-gray-warm leading-relaxed">
              For {business.yearsInBusiness}+ years we&apos;ve served homeowners across Northern Illinois &amp;
              Southern Wisconsin from our shop in Lakemoor, IL. Most of our work comes from referrals and repeat
              customers.
            </p>
            <p className="text-lg text-gray-warm leading-relaxed">
              We&apos;re licensed and insured.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <div className="bg-white rounded-xl border border-line p-6">
              <div className="font-display text-4xl text-green-ink mb-1">{business.yearsInBusiness}+</div>
              <div className="text-sm text-gray-warm">Years in business</div>
            </div>
            <div className="bg-white rounded-xl border border-line p-6">
              <div className="font-display text-4xl text-green-ink mb-1">{business.customerCount}</div>
              <div className="text-sm text-gray-warm">Homeowners served</div>
            </div>
            <div className="bg-white rounded-xl border border-line p-6">
              <div className="font-display text-4xl text-green-ink mb-1">{business.rating} ★</div>
              <div className="text-sm text-gray-warm">Average customer rating</div>
            </div>
            <div className="bg-white rounded-xl border border-line p-6">
              <div className="font-display text-4xl text-green-ink mb-1">70+</div>
              <div className="text-sm text-gray-warm">Cities in service area</div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">How we work</div>
            <div className="space-y-5">
              <p className="text-lg text-gray-warm leading-relaxed">
                Same crew, same standards, since {business.established}. Our techs build long-term relationships
                with their customers — many of our regulars know our team on a first-name basis.
              </p>
              <p className="text-lg text-gray-warm leading-relaxed">
                We supply our own commercial-grade materials and we service systems we didn&apos;t install. We
                work on referrals and repeat customers more than ads, which keeps us focused on doing the work
                right the first time.
              </p>
            </div>
          </div>

          <div className="border-t border-line pt-10 mt-16">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
