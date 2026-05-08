/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 301 redirects from old Squarespace URLs to preserve SEO
  async redirects() {
    return [
      { source: '/lawn-drainage', destination: '/services/drainage', permanent: true },

      // Old Squarespace booking URL → Jobber public request form
      {
        source: '/request-an-appointment',
        destination:
          'https://clienthub.getjobber.com/hubs/92f3f5ef-eaaa-4f2c-9178-35059701f70a/public/requests/426161/new',
        permanent: true,
      },

      // Service URL renames
      { source: '/lawn-irrigation-systems', destination: '/services/lawn-irrigation', permanent: true },
      { source: '/landscape-lighting', destination: '/services/landscape-lighting', permanent: true },
      { source: '/christmas-lights', destination: '/services/holiday-lighting', permanent: true },
      { source: '/hardscapes', destination: '/services/paver-restoration', permanent: true },

      // City URL anomaly
      { source: '/landscape-services-algonquin', destination: '/service-areas/algonquin', permanent: true },

      // All other city URLs → /service-areas/[city]
      { source: '/algonquin', destination: '/service-areas/algonquin', permanent: true },
      { source: '/antioch', destination: '/service-areas/antioch', permanent: true },
      { source: '/arlington-heights', destination: '/service-areas/arlington-heights', permanent: true },
      { source: '/barrington', destination: '/service-areas/barrington', permanent: true },
      { source: '/barrington-hills', destination: '/service-areas/barrington-hills', permanent: true },
      { source: '/bartlett', destination: '/service-areas/bartlett', permanent: true },
      { source: '/buffalo-grove', destination: '/service-areas/buffalo-grove', permanent: true },
      { source: '/bull-valley', destination: '/service-areas/bull-valley', permanent: true },
      { source: '/cary', destination: '/service-areas/cary', permanent: true },
      { source: '/crystal-lake', destination: '/service-areas/crystal-lake', permanent: true },
      { source: '/deer-park', destination: '/service-areas/deer-park', permanent: true },
      { source: '/deerfield', destination: '/service-areas/deerfield', permanent: true },
      { source: '/evanston', destination: '/service-areas/evanston', permanent: true },
      { source: '/fox-lake', destination: '/service-areas/fox-lake', permanent: true },
      { source: '/glencoe', destination: '/service-areas/glencoe', permanent: true },
      { source: '/glenview', destination: '/service-areas/glenview', permanent: true },
      { source: '/grayslake', destination: '/service-areas/grayslake', permanent: true },
      { source: '/green-oaks', destination: '/service-areas/green-oaks', permanent: true },
      { source: '/gurnee', destination: '/service-areas/gurnee', permanent: true },
      { source: '/hawthorn-woods', destination: '/service-areas/hawthorn-woods', permanent: true },
      { source: '/highland-park', destination: '/service-areas/highland-park', permanent: true },
      { source: '/highwood', destination: '/service-areas/highwood', permanent: true },
      { source: '/hoffman-estates', destination: '/service-areas/hoffman-estates', permanent: true },
      { source: '/ingleside', destination: '/service-areas/ingleside', permanent: true },
      { source: '/inverness', destination: '/service-areas/inverness', permanent: true },
      { source: '/island-lake', destination: '/service-areas/island-lake', permanent: true },
      { source: '/ivanhoe', destination: '/service-areas/ivanhoe', permanent: true },
      { source: '/johnsburg', destination: '/service-areas/johnsburg', permanent: true },
      { source: '/kenilworth', destination: '/service-areas/kenilworth', permanent: true },
      { source: '/kildeer', destination: '/service-areas/kildeer', permanent: true },
      { source: '/lake-barrington', destination: '/service-areas/lake-barrington', permanent: true },
      { source: '/lake-bluff', destination: '/service-areas/lake-bluff', permanent: true },
      { source: '/lake-forest', destination: '/service-areas/lake-forest', permanent: true },
      { source: '/lake-in-the-hills', destination: '/service-areas/lake-in-the-hills', permanent: true },
      { source: '/lake-villa', destination: '/service-areas/lake-villa', permanent: true },
      { source: '/lake-zurich', destination: '/service-areas/lake-zurich', permanent: true },
      { source: '/lakewood', destination: '/service-areas/lakewood', permanent: true },
      { source: '/libertyville', destination: '/service-areas/libertyville', permanent: true },
      { source: '/lincolnshire', destination: '/service-areas/lincolnshire', permanent: true },
      { source: '/lincolnwood', destination: '/service-areas/lincolnwood', permanent: true },
      { source: '/lindenhurst', destination: '/service-areas/lindenhurst', permanent: true },
      { source: '/long-grove', destination: '/service-areas/long-grove', permanent: true },
      { source: '/mchenry', destination: '/service-areas/mchenry', permanent: true },
      { source: '/morton-grove', destination: '/service-areas/morton-grove', permanent: true },
      { source: '/mt-prospect', destination: '/service-areas/mt-prospect', permanent: true },
      { source: '/mundelein', destination: '/service-areas/mundelein', permanent: true },
      { source: '/niles', destination: '/service-areas/niles', permanent: true },
      { source: '/north-barrington', destination: '/service-areas/north-barrington', permanent: true },
      { source: '/northbrook', destination: '/service-areas/northbrook', permanent: true },
      { source: '/northfield', destination: '/service-areas/northfield', permanent: true },
      { source: '/palatine', destination: '/service-areas/palatine', permanent: true },
      { source: '/park-ridge', destination: '/service-areas/park-ridge', permanent: true },
      { source: '/prospect-heights', destination: '/service-areas/prospect-heights', permanent: true },
      { source: '/richmond', destination: '/service-areas/richmond', permanent: true },
      { source: '/riverwoods', destination: '/service-areas/riverwoods', permanent: true },
      { source: '/rolling-meadows', destination: '/service-areas/rolling-meadows', permanent: true },
      { source: '/round-lake', destination: '/service-areas/round-lake', permanent: true },
      { source: '/schaumburg', destination: '/service-areas/schaumburg', permanent: true },
      { source: '/skokie', destination: '/service-areas/skokie', permanent: true },
      { source: '/south-elgin', destination: '/service-areas/south-elgin', permanent: true },
      { source: '/spring-grove', destination: '/service-areas/spring-grove', permanent: true },
      { source: '/streamwood', destination: '/service-areas/streamwood', permanent: true },
      { source: '/st-charles', destination: '/service-areas/st-charles', permanent: true },
      { source: '/tower-lakes', destination: '/service-areas/tower-lakes', permanent: true },
      { source: '/vernon-hills', destination: '/service-areas/vernon-hills', permanent: true },
      { source: '/volo', destination: '/service-areas/volo', permanent: true },
      { source: '/wadsworth', destination: '/service-areas/wadsworth', permanent: true },
      { source: '/wauconda', destination: '/service-areas/wauconda', permanent: true },
      { source: '/waukegan', destination: '/service-areas/waukegan', permanent: true },
      { source: '/wheeling', destination: '/service-areas/wheeling', permanent: true },
      { source: '/wilmette', destination: '/service-areas/wilmette', permanent: true },
      { source: '/winnetka', destination: '/service-areas/winnetka', permanent: true },
      { source: '/zion', destination: '/service-areas/zion', permanent: true },
    ];
  },
};

module.exports = nextConfig;
