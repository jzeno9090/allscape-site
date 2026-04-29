import Link from 'next/link';
import { business, services } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: 'Home', url: business.url }])}
      />

      {/* HERO */}
      <section className="bg-paper relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-10 animate-fade-in">
                <div className="w-10 h-px bg-gold" />
                <span className="text-xs tracking-widest uppercase text-gold font-semibold">
                  Northern Illinois · Since {business.established}
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-navy mb-8 animate-fade-in">
                Outdoor service<br />
                you can <span className="accent-mark">trust.</span>
              </h1>

              <p className="text-lg text-gray-warm leading-relaxed max-w-xl mb-10 animate-fade-in">
                Sprinkler systems, landscape lighting, holiday lighting, and paver restoration. Established outdoor
                service experts serving Northern Illinois homeowners for over {business.yearsInBusiness} years.
              </p>

              <div className="flex flex-wrap items-center gap-5 animate-fade-in">
                <Link href="/contact" className="btn-primary">
                  Get Your Free Quote
                </Link>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="text-navy font-semibold border-b-2 border-gold pb-1 hover:text-navy-soft transition-colors"
                >
                  {business.phone}
                </a>
              </div>

              <div className="mt-16 pt-10 border-t border-line grid grid-cols-3 gap-6 animate-fade-in">
                <div>
                  <div className="font-serif text-3xl text-navy font-semibold">{business.yearsInBusiness}+</div>
                  <div className="text-xs uppercase tracking-wider text-gray-warm mt-1">Years</div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-navy font-semibold">{business.customerCount}</div>
                  <div className="text-xs uppercase tracking-wider text-gray-warm mt-1">Customers</div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-navy font-semibold">{business.rating} ★</div>
                  <div className="text-xs uppercase tracking-wider text-gray-warm mt-1">Rated</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] bg-navy overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/hero-irrigation.webp')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 bg-paper p-6">
                  <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-2">
                    Featured Service
                  </div>
                  <div className="font-serif text-xl text-navy leading-snug">
                    Custom irrigation systems designed for Northern Illinois soils &amp; climate.
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 w-24 h-24 border-t border-r border-gold opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-paper-warm py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-4">
              <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-4">Our Services</div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy leading-[1.1]">
                Four specialties.<br />
                <em className="font-light">Mastered over decades.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 flex items-end">
              <p className="text-gray-warm leading-relaxed text-lg">
                We don&apos;t try to be everything. We specialize in four outdoor services and do them better than
                anyone in Northern Illinois. Each backed by {business.yearsInBusiness}+ years of refinement, local
                expertise, and a workmanship guarantee.
              </p>
            </div>
          </div>

          <div className="border-t border-line">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group border-b border-line py-10 hover:bg-paper transition-colors"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-1 service-num text-3xl">{service.romanNumeral}.</div>
                  <div className="lg:col-span-4">
                    <h3 className="font-serif text-3xl text-navy leading-tight">{service.title}</h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-gray-warm leading-relaxed">{service.tagline}</p>
                  </div>
                  <div className="lg:col-span-1 flex justify-end">
                    <svg
                      className="w-6 h-6 text-navy transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-navy text-white py-24 lg:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, #c9a449 0%, transparent 40%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-4">Why Allscape</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">
                The work behind <em className="font-light">{business.yearsInBusiness} years</em> of trust.
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                We&apos;re not the cheapest. We&apos;re not the biggest. We&apos;re the team Northern Illinois homeowners come back
                to, year after year, because we do the work the way it should be done.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-gold font-semibold tracking-wide text-sm uppercase hover:text-gold-soft transition-colors"
              >
                Read our story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10">
              <div className="bg-navy p-8">
                <div className="font-serif text-5xl text-gold mb-3">01</div>
                <div className="font-semibold text-lg mb-2">Established 2000</div>
                <div className="text-white/60 text-sm leading-relaxed">
                  Same team, same standards, since {business.established}. Not a franchise. Not a chain.
                </div>
              </div>
              <div className="bg-navy p-8">
                <div className="font-serif text-5xl text-gold mb-3">02</div>
                <div className="font-semibold text-lg mb-2">Licensed &amp; Insured</div>
                <div className="text-white/60 text-sm leading-relaxed">
                  Fully licensed, insured, and bonded. Documented and verifiable.
                </div>
              </div>
              <div className="bg-navy p-8">
                <div className="font-serif text-5xl text-gold mb-3">03</div>
                <div className="font-semibold text-lg mb-2">Local Expertise</div>
                <div className="text-white/60 text-sm leading-relaxed">
                  Northern Illinois soil, climate, and freeze-thaw cycles. We know what works here.
                </div>
              </div>
              <div className="bg-navy p-8">
                <div className="font-serif text-5xl text-gold mb-3">04</div>
                <div className="font-semibold text-lg mb-2">Inception Certified</div>
                <div className="text-white/60 text-sm leading-relaxed">
                  Certified installer of permanent year-round holiday lighting systems.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-8">Customer Voices</div>
          <svg className="w-12 h-12 text-gold mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="font-serif text-3xl md:text-4xl text-navy leading-[1.3] mb-10 italic font-light">
            &ldquo;We&apos;ve used Allscape for irrigation, lighting, and our paver patio restoration. Reliable, professional,
            and they treat your yard like their own. Wouldn&apos;t use anyone else.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="flex gap-0.5 text-gold text-lg">★ ★ ★ ★ ★</div>
          </div>
          <div className="font-semibold text-navy">M. Davidson</div>
          <div className="text-gray-warm text-sm">Lake Forest · Customer since 2018</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-warm py-24 border-t border-line">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-4">Ready to begin?</div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy leading-[1.1]">
                Request a free quote today.
              </h2>
              <p className="text-gray-warm mt-6 leading-relaxed">
                No pressure. No obligation. Just a conversation about how we can help with your outdoor project.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Schedule Online
              </Link>
              <a href={`tel:${business.phoneRaw}`} className="btn-secondary text-center">
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
