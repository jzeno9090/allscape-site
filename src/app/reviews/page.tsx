import type { Metadata } from 'next';
import Link from 'next/link';
import { business } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: 'Read reviews from Northern Illinois &amp; Southern Wisconsin homeowners who trust Allscape Services.',
};

export default function ReviewsPage() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Customer Voices</div>
        <div className="flex justify-center gap-1 text-3xl mb-6 text-yellow-500">★ ★ ★ ★ ★</div>
        <h1 className="font-display text-5xl md:text-6xl text-green-ink leading-[1.05] mb-6">
          {business.rating} ★ on average.
        </h1>
        <p className="text-lg text-gray-warm leading-relaxed mb-10">
          Reviews from {business.customerCount} Northern Illinois &amp; Southern Wisconsin homeowners.
        </p>
        <p className="text-sm text-gray-warm italic mb-10">
          Live Google Reviews coming soon.
        </p>
        <Link href="/contact" className="btn-primary">
          Become Our Next Review
        </Link>
      </div>
    </section>
  );
}
