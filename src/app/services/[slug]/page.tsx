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

const heroImages: Record<string, string> = {
  'lawn-irrigation': '/images/card-irrigation.jpg',
  'landscape-lighting': '/images/card-landscape-lighting.jpg',
  'holiday-lighting': '/images/card-holiday-lighting.jpg',
  'paver-restoration': '/images/card-paver-restoration.jpg',
};

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

      {/* Hero with photo */}
      <section className="relative bg-green-ink overflow-hidden min-h-[480px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImages[service.slug] ?? '/images/card-irrigation.jpg'}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-ink/85 via-green-ink/65 to-green-ink/40" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <nav className="text-xs uppercase tracking-widest text-white/70 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-3">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-3">/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="text-xs tracking-widest uppercase text-green-soft font-bold mb-4">
              Service · Northern Illinois & Southern Wisconsin
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6 drop-shadow">
              {service.h1}
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">{service.tagline}</p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <a
                href={`tel:${business.phoneRaw}`}
                className="bg-white/10 backdrop-blur border-2 border-white text-white px-7 py-3.5 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green-ink transition-all"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Important note */}
      {service.important_note && (
        <section className="bg-green-soft/40 border-t border-b border-green/30 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-4 max-w-4xl">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h.01a1 1 0 100-2H10v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-green-ink leading-relaxed font-medium">{service.important_note}</p>
            </div>
          </div>
        </section>
      )}

      {/* Subheadings */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-xs tracking-widest uppercase text-green font-bold mb-3">What we do</div>
              <h2 className="font-display text-3xl md:text-4xl text-green-ink leading-[1.1] lg:sticky lg:top-32">
                The full scope.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-8">
                {service.subheadings.map((sub, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-7 shadow-md border-l-4 border-green">
                    <div className="font-display text-3xl text-green-soft mb-2">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-display text-2xl text-green-ink mb-3">{sub.title}</h3>
                    <p className="text-gray-warm leading-relaxed">{sub.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-paper-warm py-20 border-t border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="text-xs tracking-widest uppercase text-green font-bold mb-3">FAQs</div>
              <h2 className="font-display text-3xl md:text-4xl text-green-ink leading-[1.1]">
                Common questions.
              </h2>
            </div>
            <div className="lg:col-span-8 bg-white rounded-xl shadow-md divide-y divide-line">
              {service.faqs.map((faq, idx) => (
                <details key={idx} className="group p-6">
                  <summary className="flex justify-between items-start gap-6 cursor-pointer list-none">
                    <h3 className="font-display text-xl text-green-ink leading-tight pr-4">{faq.question}</h3>
                    <span className="flex-shrink-0 mt-1 text-green transition-transform group-open:rotate-45 text-2xl leading-none">
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
      <section className="bg-green py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Request a free {service.shortTitle.toLowerCase()} quote.
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            No pressure, no obligation. We&apos;ll come on-site and walk through your project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md shadow-lg hover:bg-green-ink hover:text-white transition-all">
              Request a Quote
            </Link>
            <a href={`tel:${business.phoneRaw}`} className="border-2 border-white text-white px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green transition-all">
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
