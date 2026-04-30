import Link from 'next/link';
import type { Metadata } from 'next';
import { business, services, gallery } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { GalleryGrid } from './GalleryGrid';

export const metadata: Metadata = {
  title: 'Project Gallery',
  description: `Recent landscape lighting, holiday lighting, and outdoor service projects by Allscape Services across Northern Illinois & Southern Wisconsin.`,
  alternates: {
    canonical: `${business.url}/gallery`,
  },
};

function imageGallerySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${business.name} Project Gallery`,
    description: `Recent outdoor service projects by ${business.name} across Northern Illinois & Southern Wisconsin.`,
    url: `${business.url}/gallery`,
    image: gallery.map((item) => ({
      '@type': 'ImageObject',
      contentUrl: `${business.url}${item.src}`,
      description: item.alt,
    })),
  };
}

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={[
          imageGallerySchema(),
          breadcrumbSchema([
            { name: 'Home', url: business.url },
            { name: 'Gallery', url: `${business.url}/gallery` },
          ]),
        ]}
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Project Gallery</div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-green-ink leading-[1.05] mb-6 max-w-4xl">
            Recent work across Northern Illinois &amp; Southern Wisconsin.
          </h1>
          <p className="text-lg text-gray-warm max-w-2xl leading-relaxed">
            A selection of recent landscape lighting, holiday lighting, and outdoor service projects.
            New photos added throughout the season.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm py-16 border-t border-line">
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid items={gallery} services={services} />
        </div>
      </section>

      <section className="bg-green py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl mb-5">
            Want to see your project here?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Request a free quote and let&apos;s talk about how we can help with your outdoor project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-green px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md shadow-lg hover:bg-green-ink hover:text-white transition-all">
              Request a Quote
            </a>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green transition-all">
              Browse Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
