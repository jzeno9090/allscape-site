import businessData from '@/content/business.json';
import servicesData from '@/content/services.json';
import citiesData from '@/content/cities.json';
import reviewsData from '@/content/reviews.json';
import plumbersData from '@/content/plumbers.json';
import type { Business, Service, City, Review, Plumber } from './types';

export type { Business, Service, City, Review, Plumber } from './types';

export const business: Business = businessData;
export const services: Service[] = servicesData.services;
export const cities: City[] = citiesData.cities;
export const reviews: Review[] = reviewsData.reviews;
export const plumbersByCity: Record<string, Plumber[]> = plumbersData.plumbers_by_city;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByCounty(county: string): City[] {
  return cities.filter((c) => c.county === county);
}

export function getCountiesList(): string[] {
  return Array.from(new Set(cities.map((c) => c.county))).sort();
}
