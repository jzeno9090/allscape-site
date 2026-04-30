import Link from 'next/link';
import Image from 'next/image';
import { business, services } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

const cardImages: Record<string, string> = {
  'lawn-irrigation': '/images/card-irrigation.jpg',
  'landscape-lighting': '/images/card-landscape-lighting.jpg',
  'holiday-lighting': '/images/card-holiday-lighting.jpg',
  'paver-restoration': '/images/card-paver-restoration.jpg',
  'drainage': '/images/card-drainage.jpg',
  'gardens': '/images/card-gardens.jpg',
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: business.url }])} />

      {/* HERO — full-bleed video/photo background, like the live site */}
      <section className="relative bg-green-ink overflow-hidden min-h-[680px] flex items-center">
        {/*
          Drop your hero video file in /public/videos/hero.mp4 (and optionally hero.webm).
          Until then, the poster image is shown.
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/card-irrigation.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark green overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-ink/55 via-green-ink/35 to-green-ink/75" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 w-full text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] drop-shadow-lg font-bold">
            Lawn Irrigation, Landscape Lighting, Holiday Lighting, Paver Restoration, Drainage &amp; Raised Gardens
          </h1>

          <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto mt-7 leading-relaxed drop-shadow">
            Serving Northern Illinois &amp; Southern Wisconsin since {business.established}.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Request Service
            </a>
            <a
              href="/contact"
              className="bg-white/10 backdrop-blur border-2 border-white text-white px-7 py-3.5 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green-ink transition-all"
            >
              Request a Quote
            </a>
            <a
              href={`tel:${business.phoneRaw}`}
              className="bg-white/10 backdrop-blur border-2 border-white text-white px-7 py-3.5 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green-ink transition-all"
            >
              Call {business.phone}
            </a>
          </div>
        </div>

        <div className="hero-divider" />
      </section>

      {/* SERVICES — photo cards */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs tracking-widest uppercase text-green font-bold mb-3">Our Services</div>
            <h2 className="font-display text-4xl md:text-5xl text-green-ink">
              Specialized work since {business.established}.
            </h2>
            <p className="text-gray-warm mt-5 max-w-2xl mx-auto leading-relaxed">
              {business.yearsInBusiness}+ years across Northern Illinois &amp; Southern Wisconsin, backed by a workmanship
              guarantee.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-green-soft relative">
                  <Image
                    src={cardImages[service.slug] ?? '/images/card-irrigation.jpg'}
                    alt={`${service.title} — ${service.shortDescription}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-green-ink mb-2 group-hover:text-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-warm text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-green font-bold text-sm uppercase tracking-wide">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-green-ink text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="text-xs tracking-widest uppercase text-green-soft font-bold mb-3">Why Allscape</div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.1] mb-6">
                {business.yearsInBusiness} years of trust in Northern Illinois &amp; Southern Wisconsin.
              </h2>
              <p className="text-white/75 leading-relaxed mb-7">
                We&apos;re not the cheapest. We&apos;re not the biggest. We&apos;re the team Northern Illinois &amp; Southern Wisconsin homeowners come back
                to, year after year, because we do the work the way it should be done.
              </p>
              <Link href="/about" className="btn-primary">
                Read Our Story
              </Link>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { num: '01', title: 'Established 2000', body: `Same team, same standards, since ${business.established}. Not a franchise. Not a chain.` },
                { num: '02', title: 'Licensed & Insured', body: 'Fully licensed, insured, and bonded. Documented and verifiable.' },
                { num: '03', title: 'Local Expertise', body: 'Northern Illinois & Southern Wisconsin soil, climate, and freeze-thaw cycles. We know what works here.' },
                { num: '04', title: 'Inception Certified', body: 'Certified installer of permanent year-round holiday lighting systems.' },
              ].map((item) => (
                <div key={item.num} className="bg-white/5 backdrop-blur p-6 rounded-lg border border-white/10">
                  <div className="font-display text-4xl text-green-soft mb-2">{item.num}</div>
                  <div className="font-bold text-lg mb-2">{item.title}</div>
                  <div className="text-white/65 text-sm leading-relaxed">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-paper py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-widest uppercase text-green font-bold mb-6">Customer Voices</div>
          <div className="flex justify-center gap-1 text-2xl mb-6 text-yellow-500">
            ★ ★ ★ ★ ★
          </div>
          <p className="font-display text-2xl md:text-3xl text-green-ink leading-[1.4] mb-8">
            &ldquo;I spoke to Joe about renovating a very old sprinkler system, their team came out to install today.
            I can see why they have so many 5 star reviews. A great install team, very thorough and made sure I
            understood how everything worked before they left. Thanks for the great job and excellent customer
            service!&rdquo;
          </p>
          <div className="font-bold text-green-ink">Rebecca Wiegman</div>
          <div className="text-gray-warm text-sm">June 2025</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green py-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl mb-5">
            Ready to begin?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            No pressure. No obligation. Just a conversation about how we can help with your outdoor project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-green px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md shadow-lg hover:bg-green-ink hover:text-white transition-all">
              Request Service
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green transition-all">
              Request a Quote
            </a>
            <a href={`tel:${business.phoneRaw}`} className="border-2 border-white text-white px-8 py-4 text-sm tracking-wide font-bold uppercase rounded-md hover:bg-white hover:text-green transition-all">
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
