import { ImageResponse } from 'next/og';
import { siteConfig } from './metadata.config';

// Required for static export compatibility
export const dynamic = 'force-static';

// Required for static export with dynamic routes
export function generateStaticParams() {
  return [{ __metadata_id__: 'og-image' }];
}

export function generateImageMetadata() {
  return [
    {
      contentType: 'image/png',
      size: { width: 1200, height: 630 },
      id: 'og-image',
    },
  ];
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: '#001F3F',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 32,
        }}
      >
        <div style={{ fontWeight: 'bold' }}>
          Elite Enterprise Transformation
        </div>
        <div style={{ fontSize: 36, marginTop: 16 }}>
          Consulting Group
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
