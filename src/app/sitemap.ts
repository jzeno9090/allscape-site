import type { MetadataRoute } from 'next';
import { business, services, cities } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: business.url, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${business.url}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${business.url}/service-areas`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${business.url}/about`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${business.url}/reviews`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${business.url}/faqs`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${business.url}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${business.url}/blog`, priority: 0.6, changeFrequency: 'weekly' as const },
  ].map((p) => ({ ...p, lastModified: now }));

  const servicePages = services.map((service) => ({
    url: `${business.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const cityPages = cities.map((city) => ({
    url: `${business.url}/service-areas/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
