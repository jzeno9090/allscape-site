import { business, services, cities, reviews, type City } from './content';
import type { Service, Review } from './types';

/**
 * Distinct service-area regions, derived from cities.json so adding a new
 * county/state automatically appears in JSON-LD without code changes.
 */
function serviceAreas(): { '@type': 'AdministrativeArea'; name: string }[] {
  const seen = new Set<string>();
  for (const c of cities) {
    seen.add(`${c.county} County, ${c.state ?? 'IL'}`);
  }
  return [...seen].sort().map((name) => ({
    '@type': 'AdministrativeArea',
    name,
  }));
}

/**
 * Base LocalBusiness schema for the homepage and global usage.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${business.url}/#business`,
    name: business.name,
    legalName: business.legalName,
    description: business.tagline,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    foundingDate: String(business.established),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: serviceAreas(),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      reviewCount: String(reviews.length),
      bestRating: '5',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Outdoor Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription,
          url: `${business.url}/services/${service.slug}`,
        },
      })),
    },
  };
}

/**
 * Per-city LocalBusiness schema with city-specific areaServed and geo override.
 */
export function citySchema(city: City) {
  const stateCode = city.state ?? 'IL';
  const stateName = stateCode === 'WI' ? 'Wisconsin' : 'Illinois';
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${business.url}/service-areas/${city.slug}/#business`,
    name: `${business.name} — ${city.name}, ${stateCode}`,
    description: `${business.name} provides lawn irrigation, landscape lighting, holiday lighting, paver restoration, drainage, and raised garden services to homeowners in ${city.name}, ${stateName}.`,
    url: `${business.url}/service-areas/${city.slug}`,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${city.county} County, ${stateName}`,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.lat,
        longitude: city.lng,
      },
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
  };
}

/**
 * Service page schema (Service + FAQPage).
 */
export function serviceSchema(service: Service) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.tagline,
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${business.url}/#business`,
        name: business.name,
      },
      areaServed: serviceAreas(),
      url: `${business.url}/services/${service.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];
}

/**
 * /reviews page — CollectionPage that bundles individual Review objects
 * tied to the LocalBusiness. Each review is treated as 5 stars (matches
 * the on-page rendering, since reviews.json doesn't carry per-review
 * ratings).
 */
export function reviewsPageSchema(items: Review[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${business.url}/reviews`,
    url: `${business.url}/reviews`,
    name: `Customer Reviews · ${business.name}`,
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${business.url}/#business`,
      name: business.name,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: business.rating,
        reviewCount: String(items.length),
        bestRating: '5',
      },
      review: items.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.name },
        datePublished: r.date,
        reviewBody: r.body,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
      })),
    },
  };
}

/**
 * /faqs page — single FAQPage schema combining FAQs from every service.
 */
export function faqsPageSchema(allServices: Service[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${business.url}/faqs`,
    url: `${business.url}/faqs`,
    mainEntity: allServices.flatMap((service) =>
      service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    ),
  };
}

/**
 * BreadcrumbList schema for any page.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
