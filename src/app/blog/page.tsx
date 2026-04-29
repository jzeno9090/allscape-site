import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, guides, and insights on lawn irrigation, landscape lighting, holiday lighting, and paver restoration in Northern Illinois.',
};

export default function BlogPage() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-px bg-gold" />
          <span className="text-xs tracking-widest uppercase text-gold font-semibold">Blog</span>
          <div className="w-10 h-px bg-gold" />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-navy leading-[1.05] mb-8">
          Coming soon.
        </h1>
        <p className="text-lg text-gray-warm leading-relaxed">
          Tips, guides, and insights on outdoor services in Northern Illinois — coming soon.
        </p>
      </div>
    </section>
  );
}
