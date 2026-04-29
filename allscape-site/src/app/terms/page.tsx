import type { Metadata } from 'next';
import { business } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `${business.name} terms of service.`,
};

export default function TermsPage() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-navy leading-[1.05] mb-8">Terms of Service</h1>
        <p className="text-gray-warm leading-relaxed mb-6">
          [Terms of service content to be finalized — placeholder for legal review.]
        </p>
        <p className="text-gray-warm leading-relaxed">
          If you have questions, contact us at <a href={`mailto:${business.email}`} className="underline">{business.email}</a>.
        </p>
      </div>
    </section>
  );
}
