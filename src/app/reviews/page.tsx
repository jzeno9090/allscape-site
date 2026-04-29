import type { Metadata } from 'next';
import Link from 'next/link';
import { business, reviews } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: `Read reviews from Northern Illinois & Southern Wisconsin homeowners who trust ${business.name}.`,
};

const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });
const formatDate = (iso: string) => dateFormatter.format(new Date(iso));

export default function ReviewsPage() {
  const sorted = [...reviews].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="bg-paper py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Customer Voices</div>
          <div className="flex justify-center gap-1 text-3xl mb-6 text-yellow-500">★ ★ ★ ★ ★</div>
          <h1 className="font-display text-5xl md:text-6xl text-green-ink leading-[1.05] mb-6">
            {business.rating} ★ on average.
          </h1>
          <p className="text-lg text-gray-warm leading-relaxed">
            Reviews from {business.customerCount} Northern Illinois &amp; Southern Wisconsin homeowners.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm py-16 lg:py-20 border-t border-line">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {sorted.map((review) => (
              <article
                key={`${review.name}-${review.date}`}
                className="bg-white rounded-xl border border-line shadow-sm p-7 md:p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="font-bold text-green-ink">{review.name}</div>
                    <div className="text-xs text-gray-warm mt-1">{formatDate(review.date)}</div>
                  </div>
                  <div className="text-yellow-500 text-sm whitespace-nowrap">★ ★ ★ ★ ★</div>
                </div>
                <p className="text-green-ink leading-relaxed">{review.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green py-16">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl mb-5">
            Become our next review.
          </h2>
          <p className="text-white/90 mb-8">
            Free quotes. No pressure. We&apos;ll come out and tell you exactly what we&apos;d do.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-green px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md shadow-lg hover:bg-green-ink hover:text-white transition-all"
            >
              Request Service
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
