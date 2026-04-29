import type { Metadata } from 'next';
import Link from 'next/link';
import { business } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: 'Read reviews from Northern Illinois homeowners who trust Allscape Services.',
};

export default function ReviewsPage() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-px bg-gold" />
          <span className="text-xs tracking-widest uppercase text-gold font-semibold">Customer Voices</span>
          <div className="w-10 h-px bg-gold" />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-navy leading-[1.05] mb-8">
          {business.rating} ★ <em className="font-light">on average.</em>
        </h1>
        <p className="text-lg text-gray-warm leading-relaxed mb-12">
          Reviews from {business.customerCount} Northern Illinois homeowners.
        </p>
        <Link
          href="/contact"
          className="btn-primary"
        >
          Become Our Next Review
        </Link>
      </div>
    </section>
  );
}
