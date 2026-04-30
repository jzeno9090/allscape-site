export interface Business {
  name: string;
  legalName: string;
  tagline: string;
  shortTagline: string;
  established: number;
  yearsInBusiness: number;
  customerCount: string;
  rating: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  social: {
    facebook: string;
    instagram: string;
    google: string;
  };
  domain: string;
  url: string;
  areaServed: string;
  counties: string[];
  certifications: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceSubheading {
  title: string;
  body: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface Plumber {
  name: string;
  phone: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  romanNumeral: string;
  tagline: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge?: string;
  subheadings: ServiceSubheading[];
  important_note?: string;
  faqs: ServiceFAQ[];
}

export interface City {
  slug: string;
  name: string;
  county: string;
  state?: string;
  lat: number;
  lng: number;
  intro?: string;
}

export interface Review {
  name: string;
  date: string;
  body: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  categories: string[];
  width?: number;
  height?: number;
}
