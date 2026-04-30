import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { business, services, gallery } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Project Gallery',
  description: `Recent landscape lighting, holiday lighting, and outdoor service projects by Allscape Services across Northern Illinois & Southern Wisconsin.`,
  alternates: {
    canonical: `${business.url}/gallery`,
  },
};

const categoryOrder = [
  'lawn-irrigation',
  'landscape-lighting',
  'holiday-lighting',
  'paver-restoration',
  'drainage',
  'gardens',
];

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
  const categoriesPresent = categoryOrder.filter((slug) =>
    gallery.some((item) => item.categories.includes(slug))
  );

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
          <div className="text-xs tracking-widest uppercase text-green font-bold mb-6">Filter by service</div>
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#all"
              className="bg-green text-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-md shadow-sm"
            >
              All Projects
            </a>
            {categoriesPresent.map((slug) => {
              const service = services.find((s) => s.slug === slug);
              if (!service) return null;
              return (
                <a
                  key={slug}
                  href={`#${slug}`}
                  className="bg-white border border-line text-green-ink hover:bg-green hover:text-white hover:border-green px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-md transition-colors"
                >
                  {service.title}
                </a>
              );
            })}
          </div>

          <div id="all" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((item, idx) => (
              <a
                key={item.src}
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-green-soft relative">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={idx < 6}
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.categories.map((catSlug) => {
                      const service = services.find((s) => s.slug === catSlug);
                      if (!service) return null;
                      return (
                        <span
                          key={catSlug}
                          className="bg-green-soft text-green-ink text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded"
                        >
                          {service.shortTitle}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </a>
            ))}
          </div>
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
