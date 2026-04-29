import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import { business } from '@/lib/content';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} — Lawn Irrigation, Landscape Lighting & Paver Restoration in Northern Illinois & Southern Wisconsin`,
    template: `%s | ${business.name}`,
  },
  description: business.tagline,
  applicationName: business.name,
  authors: [{ name: business.legalName }],
  creator: business.legalName,
  publisher: business.legalName,
  keywords: [
    'lawn irrigation',
    'sprinkler systems',
    'landscape lighting',
    'holiday lighting',
    'Christmas lighting',
    'paver restoration',
    'paver sealing',
    'paver cleaning',
    'Northern Illinois & Southern Wisconsin',
    'Lake County IL',
    'McHenry County IL',
    'Cook County IL',
    'Kane County IL',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: business.url,
    siteName: business.name,
    title: `${business.name} — Outdoor Services in Northern Illinois & Southern Wisconsin`,
    description: business.tagline,
  },
  twitter: {
    card: 'summary_large_image',
    title: business.name,
    description: business.tagline,
  },
  verification: {
    // google: '', // add your Google Search Console verification code when ready
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
