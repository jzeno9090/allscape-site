import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about lawn irrigation, landscape lighting, holiday lighting, and paver restoration.',
};

export default function FaqsPage() {
  return (
    <>
      <section className="bg-paper py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-gold" />
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">FAQs</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-navy leading-[1.05] mb-8">
            Common questions.
          </h1>
        </div>
      </section>

      <section className="bg-paper-warm py-20 border-t border-line">
        <div className="max-w-4xl mx-auto px-8">
          {services.map((service) => (
            <div key={service.slug} className="mb-16 last:mb-0">
              <h2 className="font-serif text-3xl text-navy mb-8">{service.title}</h2>
              <div className="divide-y divide-line border-t border-b border-line">
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
              <div className="mt-6">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-navy font-semibold border-b-2 border-gold pb-1 text-sm uppercase tracking-wider"
                >
                  Learn more about {service.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
