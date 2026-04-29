import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-paper py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="font-display text-green text-3xl mb-4">404</div>
        <h1 className="font-display text-5xl md:text-6xl text-green-ink leading-[1.05] mb-6">
          Page not found.
        </h1>
        <p className="text-lg text-gray-warm leading-relaxed mb-10">
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
