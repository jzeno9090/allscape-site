import type { Metadata } from 'next';
import Link from 'next/link';
import { business } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `Terms & Conditions for JZ Allscape Services LLC.`,
};

const LEGAL_ENTITY = 'JZ Allscape Services LLC';
const LEGAL_EMAIL = 'joezeno@allscapeservices.com';

export default function TermsPage() {
  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Legal</div>
        <h1 className="font-display text-4xl md:text-5xl text-green-ink leading-[1.05] mb-3">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-gray-warm mb-10">{LEGAL_ENTITY}</p>

        <div className="space-y-6 text-green-ink leading-relaxed">
          <p>
            By using the services of {LEGAL_ENTITY} (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) or opting in to receive SMS communications from our company, you agree to the
            following Terms and Conditions.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">1. Services</h2>
          <p>
            {LEGAL_ENTITY} provides landscaping, irrigation, property maintenance, and related outdoor services.
            Service details, pricing, and availability may change from time to time based on scheduling, seasonal
            conditions, or operational requirements.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">2. SMS Messaging Program</h2>
          <p>
            {LEGAL_ENTITY} communicates with customers via SMS (text messaging) regarding services that have been
            requested or scheduled.
          </p>
          <p>These messages may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Appointment confirmations</li>
            <li>Scheduling reminders</li>
            <li>Technician arrival notifications</li>
            <li>Weather-related service delays</li>
            <li>Service updates</li>
            <li>Urgent service communications</li>
          </ul>
          <p>
            These messages are transactional and service-related. SMS messages sent by {LEGAL_ENTITY} are strictly
            related to customer care and service operations and do not include marketing or promotional content
            unless separately consented to.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">3. Message Frequency</h2>
          <p>
            Message frequency varies depending on service activity, appointment scheduling, and customer
            interaction. Customers may receive multiple SMS messages related to a single service appointment or
            project.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">4. Message and Data Rates</h2>
          <p>
            Message and data rates may apply depending on your mobile carrier plan. Customers are responsible for
            any charges incurred from their mobile carrier for SMS messages.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">5. Opt-In Consent</h2>
          <p>
            Customers may opt in to receive SMS communications from {LEGAL_ENTITY} by voluntarily providing their
            mobile phone number during interactions related to requesting or receiving services.
          </p>
          <p>This may occur when a customer:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Submits a service request form on our website</li>
            <li>Provides their phone number when scheduling service with our office</li>
            <li>Communicates with our company regarding services by phone, email, or SMS</li>
            <li>Initiates a text message conversation with our business phone number</li>
          </ul>
          <p>
            By providing their phone number during these interactions, customers consent to receive service-related
            SMS messages regarding appointments, scheduling, service updates, and operational notifications.
          </p>
          <p>Consent to receive SMS messages is not a condition of purchasing services.</p>

          <h2 className="font-display text-2xl text-green-ink pt-6">6. Opt-Out Instructions</h2>
          <p>
            Customers may opt out of receiving SMS messages at any time by replying with any of the following
            keywords:
          </p>
          <ul className="list-none pl-0 space-y-1 font-mono text-sm">
            <li>STOP</li>
            <li>CANCEL</li>
            <li>END</li>
            <li>UNSUBSCRIBE</li>
            <li>QUIT</li>
          </ul>
          <p>
            After opting out, you will receive a confirmation message and no further SMS messages will be sent
            unless you re-initiate communication or provide consent again.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">7. Help &amp; Customer Support</h2>
          <p>
            Customers may reply HELP to any SMS message for assistance or contact us directly using the information
            below:
          </p>
          <p>
            {LEGAL_ENTITY}
            <br />
            Phone:{' '}
            <a href={`tel:${business.phoneRaw}`} className="text-green underline">
              {business.phone}
            </a>
            <br />
            Email:{' '}
            <a href={`mailto:${LEGAL_EMAIL}`} className="text-green underline">
              {LEGAL_EMAIL}
            </a>
            <br />
            Website:{' '}
            <a href={business.url} className="text-green underline">
              {business.url}
            </a>
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">8. Privacy Policy</h2>
          <p>
            Your personal information is handled according to our Privacy Policy, which explains how we collect,
            use, and protect customer information.
          </p>
          <p>
            View our Privacy Policy here:{' '}
            <Link href="/privacy" className="text-green underline">
              {business.url}/privacy
            </Link>
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">9. Carrier Disclaimer</h2>
          <p>Mobile carriers are not liable for delayed or undelivered messages.</p>

          <h2 className="font-display text-2xl text-green-ink pt-6">10. Scheduling &amp; Cancellations</h2>
          <p>
            Scheduling is subject to availability, weather conditions, and operational requirements. Services may
            be rescheduled if necessary to ensure safety and service quality.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">11. Property Access</h2>
          <p>
            Customers are responsible for providing safe access to service areas. {LEGAL_ENTITY} is not responsible
            for damage or delays resulting from unmarked or hidden hazards on the property.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">12. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {LEGAL_ENTITY}&apos;s liability shall not exceed the amount
            paid for the service provided. We are not liable for indirect, incidental, or consequential damages
            arising from the use of our services.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">13. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of the state in which {LEGAL_ENTITY} operates.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">14. Updates to These Terms</h2>
          <p>
            We may update these Terms and Conditions periodically. Updated versions will be posted on this page
            with the revised effective date. Continued use of our services after updates constitutes acceptance of
            the revised Terms.
          </p>

          <p className="pt-8 text-sm text-gray-warm">
            See also:{' '}
            <Link href="/privacy" className="text-green underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
