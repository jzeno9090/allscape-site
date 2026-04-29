import type { Metadata } from 'next';
import Link from 'next/link';
import { business } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Us · Request a Free Quote',
  description: `Contact Allscape Services for a free quote on lawn irrigation, landscape lighting, holiday lighting, or paver restoration. Call ${business.phone} or schedule online.`,
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: business.url },
          { name: 'Contact', url: `${business.url}/contact` },
        ])}
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-gold" />
                <span className="text-xs tracking-widest uppercase text-gold font-semibold">Contact</span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl text-navy leading-[1.05] mb-8">
                Request a free<br />
                <em className="font-light">quote.</em>
              </h1>
              <p className="text-lg text-gray-warm leading-relaxed max-w-xl mb-12">
                Tell us a little about your project. We&apos;ll follow up within one business day to schedule a free
                on-site consultation.
              </p>

              <form className="space-y-6 max-w-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full border-b border-line bg-transparent py-2 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full border-b border-line bg-transparent py-2 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-line bg-transparent py-2 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full border-b border-line bg-transparent py-2 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">
                    City *
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    className="w-full border-b border-line bg-transparent py-2 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full border-b border-line bg-transparent py-2 focus:outline-none focus:border-gold appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="lawn-irrigation">Lawn Irrigation</option>
                    <option value="landscape-lighting">Landscape Lighting</option>
                    <option value="holiday-lighting">Holiday Lighting</option>
                    <option value="paver-restoration">Paver Restoration</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-navy font-semibold mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full border border-line bg-transparent p-3 focus:outline-none focus:border-gold"
                  />
                </div>

                <button type="submit" className="btn-primary mt-4">
                  Send Request
                </button>
              </form>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="bg-paper-warm border border-line p-8 sticky top-32">
                <div className="text-xs tracking-widest uppercase text-gold font-semibold mb-6">Or contact directly</div>
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-warm mb-2">Phone</div>
                    <a href={`tel:${business.phoneRaw}`} className="font-serif text-2xl text-navy hover:text-navy-soft">
                      {business.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-warm mb-2">Email</div>
                    <a href={`mailto:${business.email}`} className="font-serif text-xl text-navy hover:text-navy-soft break-all">
                      {business.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-warm mb-2">Office</div>
                    <div className="text-navy">
                      {business.address.street}
                      <br />
                      {business.address.city}, {business.address.state} {business.address.zip}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-warm mb-2">Hours</div>
                    <div className="text-navy text-sm">
                      {business.hours.weekday}
                      <br />
                      {business.hours.saturday}
                      <br />
                      {business.hours.sunday}
                    </div>
                  </div>
                </div>
                <div className="border-t border-line pt-6">
                  <Link
                    href="/service-areas"
                    className="text-navy font-semibold border-b-2 border-gold pb-1 text-sm uppercase tracking-wider"
                  >
                    See all service areas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
