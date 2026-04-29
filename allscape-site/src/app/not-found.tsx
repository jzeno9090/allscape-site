import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-paper py-32">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <div className="font-serif italic text-gold text-2xl mb-4">404</div>
        <h1 className="font-serif text-5xl md:text-6xl text-navy leading-[1.05] mb-8">
          Page <em className="font-light">not found.</em>
        </h1>
        <p className="text-lg text-gray-warm leading-relaxed mb-12">
          The page you&apos;re looking for doesn&apos;t exist. Maybe try one of these instead:
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">Go Home</Link>
          <Link href="/services" className="btn-secondary">View Services</Link>
        </div>
      </div>
    </section>
  );
}
