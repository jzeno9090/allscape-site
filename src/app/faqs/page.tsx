import type { Metadata } from 'next';
import Link from 'next/link';
import { business, services } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqsPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about lawn irrigation, landscape lighting, holiday lighting, and paver restoration.',
};

export default function FaqsPage() {
  return (
    <>
      <JsonLd
        data={[
          faqsPageSchema(services),
          breadcrumbSchema([
            { name: 'Home', url: business.url },
            { name: 'FAQs', url: `${business.url}/faqs` },
          ]),
        ]}
      />

      <section className="bg-paper py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">FAQs</div>
          <h1 className="font-display text-5xl md:text-6xl text-green-ink leading-[1.05] mb-6">
            Common questions.
          </h1>
          <p className="text-lg text-gray-warm leading-relaxed max-w-2xl">
            Answers to what we get asked most. Don&apos;t see your question? Give us a call.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm py-16 border-t border-line">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-xl shadow-md p-8">
              <h2 className="font-display text-3xl text-green-ink mb-6 pb-4 border-b-2 border-green-soft">{service.title}</h2>
              <div className="divide-y divide-line">
                {service.faqs.map((faq, idx) => (
                  <details key={idx} className="group py-5">
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
              <div className="mt-6">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-green font-bold border-b-2 border-green pb-1 text-sm uppercase tracking-wider hover:text-green-deep"
                >
                  Learn more about {service.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
