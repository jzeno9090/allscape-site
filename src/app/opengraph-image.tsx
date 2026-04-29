import { ImageResponse } from 'next/og';
import { business } from '@/lib/content';

// Next.js file-based metadata: this file is automatically picked up as
// the OpenGraph image for the site (and also surfaces as the Twitter
// card image). Renders at build time, served as a static asset.

export const runtime = 'edge';
export const alt = `${business.name} — ${business.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background:
            'linear-gradient(135deg, #0d2818 0%, #1a4d2a 60%, #4ea03c 100%)',
          color: 'white',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#c5e2b3',
            }}
          />
          <div
            style={{
              fontSize: '24px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: '#c5e2b3',
            }}
          >
            Northern Illinois &amp; Southern Wisconsin · Since {business.established}
          </div>
        </div>

        <div
          style={{
            fontSize: '88px',
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: '32px',
          }}
        >
          {business.name}
        </div>

        <div
          style={{
            fontSize: '40px',
            fontWeight: 500,
            lineHeight: 1.2,
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '900px',
          }}
        >
          Lawn Irrigation · Landscape Lighting · Holiday Lighting · Paver Restoration
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            paddingTop: '40px',
            borderTop: '2px solid rgba(197, 226, 179, 0.4)',
            fontSize: '28px',
            fontWeight: 600,
            color: '#c5e2b3',
          }}
        >
          {business.phone} · {business.domain}
        </div>
      </div>
    ),
    { ...size },
  );
}
