import type { Metadata } from 'next';
import Link from 'next/link';
import { business } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for JZ Allscape Services LLC — how we collect, use, and protect your information.`,
};

const LEGAL_ENTITY = 'JZ Allscape Services LLC';
const LEGAL_EMAIL = 'joezeno@allscapeservices.com';

export default function PrivacyPage() {
  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Legal</div>
        <h1 className="font-display text-4xl md:text-5xl text-green-ink leading-[1.05] mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-warm mb-10">{LEGAL_ENTITY}</p>

        <div className="space-y-6 text-green-ink leading-relaxed">
          <p>
            {LEGAL_ENTITY} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is
            committed to protecting your personal information. This Privacy Policy explains how we collect, use,
            and safeguard your information when you interact with our services.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">1. Information We Collect</h2>
          <p>We collect personal information necessary to provide services and manage customer accounts. This may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Property address</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Service history and appointment details</li>
          </ul>
          <p>This information may be collected when you:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Request service</li>
            <li>Submit a form on our website</li>
            <li>Communicate with us</li>
            <li>Provide your contact information during scheduling</li>
            <li>Contact us by phone, email, or SMS</li>
          </ul>

          <h2 className="font-display text-2xl text-green-ink pt-6">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Schedule and manage services</li>
            <li>Send appointment reminders</li>
            <li>Provide estimates and invoices</li>
            <li>Communicate service updates</li>
            <li>Respond to customer inquiries</li>
            <li>Improve service delivery</li>
          </ul>
          <p>We do not use your personal information for unrelated marketing without your consent.</p>

          <h2 className="font-display text-2xl text-green-ink pt-6">3. Email Communications</h2>
          <p>We may send emails related to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Estimates</li>
            <li>Invoices</li>
            <li>Service confirmations</li>
            <li>Scheduling notifications</li>
            <li>Seasonal reminders</li>
            <li>Account updates</li>
          </ul>
          <p>
            You may unsubscribe from marketing emails at any time using the &ldquo;Unsubscribe&rdquo; link included
            in those communications. Transactional emails related to active services may still be sent when
            necessary.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">4. SMS / Text Message Communications</h2>
          <p>
            By providing your mobile phone number and consenting to receive messages, you agree to receive SMS
            communications from {LEGAL_ENTITY} related to your services.
          </p>
          <p>These messages may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Appointment confirmations</li>
            <li>Scheduling updates</li>
            <li>Technician arrival notifications</li>
            <li>Weather-related service delays</li>
            <li>Service reminders</li>
            <li>Urgent service communications</li>
          </ul>
          <p className="font-semibold">SMS Disclosure:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Message frequency varies based on service activity</li>
            <li>Message and data rates may apply</li>
            <li>Reply STOP to opt out at any time</li>
            <li>Reply HELP for assistance</li>
          </ul>
          <p>Consent to receive SMS messages is not required as a condition of purchasing services.</p>
          <p>You may also contact us directly if you would like to be removed from SMS communications.</p>

          <h2 className="font-display text-2xl text-green-ink pt-6">5. How Consent Is Obtained</h2>
          <p>
            Customers provide consent to receive SMS communications when they voluntarily provide their phone
            number during interactions related to requesting or receiving services.
          </p>
          <p>This may occur when a customer:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Submits a service request form on our website</li>
            <li>Provides their phone number while scheduling service with our office</li>
            <li>Communicates with our company regarding services by phone, email, or SMS</li>
            <li>Initiates communication by sending a text message to our business phone number</li>
          </ul>
          <p>
            Service request forms on our website include a disclosure informing customers that by providing their
            phone number they agree to receive SMS messages related to their services. These messages may include
            appointment reminders, technician arrival notifications, service scheduling reminders, and other
            service-related communications.
          </p>
          <p>
            By submitting their phone number after viewing this disclosure, customers consent to receive
            transactional SMS communications from {LEGAL_ENTITY}.
          </p>
          <p>
            Consent applies only to service-related communications and does not include marketing or promotional
            messaging unless separately consented to.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">6. No Sharing of Mobile Information</h2>
          <p>
            {LEGAL_ENTITY} does not sell, rent, or share customer information with third parties for marketing or
            promotional purposes.
          </p>
          <p>
            No mobile information or phone numbers will be shared with third parties or affiliates for marketing
            or promotional purposes.
          </p>
          <p>Your information is used solely to support the business relationship between you and {LEGAL_ENTITY}.</p>

          <h2 className="font-display text-2xl text-green-ink pt-6">7. Data Security</h2>
          <p>
            We take reasonable steps to protect your personal information from unauthorized access, misuse, or
            disclosure using industry-standard administrative and technical safeguards.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">8. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to provide services, maintain business
            records, and comply with legal obligations.
          </p>

          <h2 className="font-display text-2xl text-green-ink pt-6">9. Your Rights</h2>
          <p>You may request to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal information</li>
            <li>Update your information</li>
            <li>Delete your information</li>
            <li>Opt out of communications</li>
          </ul>
          <p>To make a request, please contact us using the information provided below.</p>

          <h2 className="font-display text-2xl text-green-ink pt-6">10. Carrier Disclaimer</h2>
          <p>Mobile carriers are not liable for delayed or undelivered messages.</p>

          <h2 className="font-display text-2xl text-green-ink pt-6">11. Contact Information</h2>
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

          <h2 className="font-display text-2xl text-green-ink pt-6">12. Policy Updates</h2>
          <p>
            We may update this Privacy Policy periodically. Updates will be posted on this page along with the
            revised effective date.
          </p>

          <p className="pt-8 text-sm text-gray-warm">
            See also:{' '}
            <Link href="/terms" className="text-green underline">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
