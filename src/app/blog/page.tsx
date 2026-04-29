import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, guides, and insights on lawn irrigation, landscape lighting, holiday lighting, and paver restoration in Northern Illinois & Southern Wisconsin.',
};

export default function BlogPage() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Blog</div>
        <h1 className="font-display text-5xl md:text-6xl text-green-ink leading-[1.05] mb-6">
          Coming soon.
        </h1>
        <p className="text-lg text-gray-warm leading-relaxed mb-10">
          Tips, guides, and insights on outdoor services in Northern Illinois & Southern Wisconsin — coming soon.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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
    </section>
  );
}
