import type { Metadata } from 'next';
import Link from 'next/link';
import { business } from '@/lib/content';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { JobberRequestForm } from '@/components/JobberRequestForm';

const JOBBER_CLIENT_LOGIN =
  'https://clienthub.getjobber.com/client_hubs/92f3f5ef-eaaa-4f2c-9178-35059701f70a/login/new';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description: `Request a free quote from Allscape Services for lawn irrigation, landscape lighting, holiday lighting, or paver restoration. Call ${business.phone} or fill out our request form.`,
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

      <section className="bg-paper py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Request a Quote</div>
              <h1 className="font-display text-5xl md:text-6xl text-green-ink leading-[1.05] mb-6">
                Request a free quote.
              </h1>
              <p className="text-lg text-gray-warm leading-relaxed max-w-xl mb-10">
                Tell us a little about your project. We&apos;ll follow up within one business day to schedule a free
                on-site consultation.
              </p>

              <div className="bg-white rounded-xl border border-line shadow-md p-6 md:p-8">
                <JobberRequestForm />
              </div>

              <div className="mt-8 bg-green-soft/40 border border-green/30 rounded-xl p-6">
                <div className="text-xs tracking-widest uppercase text-green font-bold mb-2">Already a customer?</div>
                <p className="text-green-ink mb-4">
                  Existing customers can log in to your client hub to request service, view quotes, and manage your
                  account.
                </p>
                <a
                  href={JOBBER_CLIENT_LOGIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green font-bold border-b-2 border-green pb-1 text-sm uppercase tracking-wider hover:text-green-deep"
                >
                  Existing Customer Login →
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="bg-white rounded-xl border border-line shadow-lg p-8 sticky top-32">
                <div className="text-xs tracking-widest uppercase text-green font-bold mb-6">Or contact directly</div>
                <div className="space-y-5 mb-7">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-warm mb-1">Phone</div>
                    <a href={`tel:${business.phoneRaw}`} className="font-display text-2xl text-green-ink hover:text-green">
                      {business.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-warm mb-1">Email</div>
                    <a href={`mailto:${business.email}`} className="font-display text-lg text-green-ink hover:text-green break-all">
                      {business.email}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-warm mb-1">Office</div>
                    <div className="text-green-ink">
                      {business.address.street}
                      <br />
                      {business.address.city}, {business.address.state} {business.address.zip}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-warm mb-1">Hours</div>
                    <div className="text-green-ink text-sm">
                      {business.hours.weekday}
                      <br />
                      {business.hours.saturday}
                      <br />
                      {business.hours.sunday}
                    </div>
                  </div>
                </div>
                <div className="border-t border-line pt-5">
                  <Link
                    href="/service-areas"
                    className="text-green font-bold border-b-2 border-green pb-1 text-sm uppercase tracking-wider"
                  >
                    See all service areas →
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
