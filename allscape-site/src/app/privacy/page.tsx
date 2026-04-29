import type { Metadata } from 'next';
import { business } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `${business.name} privacy policy.`,
};

export default function PrivacyPage() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-navy leading-[1.05] mb-8">Privacy Policy</h1>
        <p className="text-gray-warm leading-relaxed mb-6">
          {business.legalName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting it through this Privacy Policy.
        </p>
        <p className="text-gray-warm leading-relaxed mb-6">
          [Privacy policy content to be finalized — placeholder for legal review.]
        </p>
        <p className="text-gray-warm leading-relaxed">
          If you have questions, contact us at <a href={`mailto:${business.email}`} className="underline">{business.email}</a>.
        </p>
      </div>
    </section>
  );
}
