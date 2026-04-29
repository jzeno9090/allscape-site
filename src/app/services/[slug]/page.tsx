import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { business, services, getServiceBySlug } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${business.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          ...serviceSchema(service),
          breadcrumbSchema([
            { name: 'Home', url: business.url },
            { name: 'Services', url: `${business.url}/services` },
            { name: service.title, url: `${business.url}/services/${service.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-8">
          <nav className="text-xs uppercase tracking-widest text-gray-warm mb-8">
            <Link href="/" className="hover:text-navy">Home</Link>
            <span className="mx-3">/</span>
            <Link href="/services" className="hover:text-navy">Services</Link>
            <span className="mx-3">/</span>
            <span className="text-navy">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-px bg-gold" />
                <span className="text-xs tracking-widest uppercase text-gold font-semibold">
                  {service.romanNumeral}. Service
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy leading-[1.05] mb-8">
                {service.h1}
              </h1>

              <p className="text-xl text-gray-warm leading-relaxed max-w-3xl">{service.tagline}</p>

              <div className="flex flex-wrap items-center gap-5 mt-10">
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
          </div>
        </div>
      </section>

      {/* Important note (e.g. paver restoration scope) */}
      {service.important_note && (
        <section className="bg-paper-warm border-t border-b border-gold/30 py-10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex gap-4 max-w-4xl">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.01a1 1 0 100-2H10v-3a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-navy leading-relaxed">{service.important_note}</p>
            </div>
          </div>
        </section>
      )}

      {/* Subheadings / sections */}
      <section className="bg-paper-warm py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-4">What we do</div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy leading-[1.1] sticky top-32">
                The full scope.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {service.subheadings.map((sub, idx) => (
                  <div key={idx} className="border-l-2 border-gold pl-8">
                    <div className="font-serif italic text-gold text-xl mb-3">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-serif text-2xl text-navy mb-3">{sub.title}</h3>
                    <p className="text-gray-warm leading-relaxed">{sub.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-4">FAQs</div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy leading-[1.1]">
                Common questions.
              </h2>
            </div>
            <div className="lg:col-span-8 divide-y divide-line border-t border-b border-line">
              {service.faqs.map((faq, idx) => (
                <details key={idx} className="group py-6">
                  <summary className="flex justify-between items-start gap-6 cursor-pointer list-none">
                    <h3 className="font-serif text-xl text-navy leading-tight pr-4">{faq.question}</h3>
                    <span className="flex-shrink-0 mt-1 text-gold transition-transform group-open:rotate-45 text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-warm leading-relaxed pr-12">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-24">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-6">Ready to begin?</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">
            Request a free <em className="font-light">{service.shortTitle.toLowerCase()}</em> quote.
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-gold text-navy px-8 py-4 text-sm tracking-wider font-semibold uppercase hover:bg-gold-soft transition-colors">
              Schedule Online
            </Link>
            <a
              href={`tel:${business.phoneRaw}`}
              className="border border-white text-white px-8 py-4 text-sm tracking-wider font-semibold uppercase hover:bg-white hover:text-navy transition-colors"
            >
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
