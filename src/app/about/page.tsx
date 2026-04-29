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
            {business.yearsInBusiness} years of doing it right.
          </h1>

          <div className="space-y-6">
            <p className="text-xl text-gray-warm leading-relaxed">
              Allscape Services was founded in {business.established} with a simple idea: do a few things, do them
              better than anyone else, and treat every yard like it&apos;s our own.
            </p>
            <p className="text-lg text-gray-warm leading-relaxed">
              For over {business.yearsInBusiness} years, we&apos;ve focused on four outdoor specialties — lawn irrigation,
              landscape lighting, holiday lighting, and paver restoration — and refused to dilute our work with
              services we don&apos;t do as well. The result is a small business that {business.customerCount} Northern
              Illinois homeowners come back to, year after year.
            </p>
            <p className="text-lg text-gray-warm leading-relaxed">
              We&apos;re licensed, insured, Inception certified for permanent holiday lighting, and proud to serve over
              70 cities across Lake, McHenry, Cook, and Kane counties.
            </p>
          </div>

          <div className="border-t border-line pt-10 mt-12">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
