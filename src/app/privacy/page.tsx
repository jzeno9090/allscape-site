import type { Metadata } from 'next';
import { business } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `${business.name} privacy policy.`,
};

export default function PrivacyPage() {
  return (
    <section className="bg-paper py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-xs tracking-widest uppercase text-green font-bold mb-4">Legal</div>
        <h1 className="font-display text-4xl md:text-5xl text-green-ink leading-[1.05] mb-8">Privacy Policy</h1>
        <p className="text-gray-warm leading-relaxed mb-6">
          {business.legalName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting it through this Privacy Policy.
        </p>
        <p className="text-gray-warm leading-relaxed mb-6">
          [Privacy policy content to be finalized — placeholder for legal review.]
        </p>
        <p className="text-gray-warm leading-relaxed">
          If you have questions, contact us at <a href={`mailto:${business.email}`} className="text-green font-semibold underline">{business.email}</a>.
        </p>
      </div>
    </section>
  );
}
