import { Metadata } from 'next';
import { siteConfig } from '../metadata.config';

// Export metadata for the services page
export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.name}`,
  description: 'Comprehensive consulting solutions including Project Management, Program Management, Strategic Planning, and more to transform your business and drive sustainable growth.',
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: `Our Services | ${siteConfig.name}`,
    description: 'Comprehensive consulting solutions including Project Management, Program Management, Strategic Planning, and more to transform your business and drive sustainable growth.',
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `Our Services | ${siteConfig.name}`,
      }
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Our Services | ${siteConfig.name}`,
    description: 'Comprehensive consulting solutions including Project Management, Program Management, Strategic Planning, and more to transform your business and drive sustainable growth.',
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  keywords: [...siteConfig.keywords, 'consulting services', 'project management', 'program management', 'strategic planning', 'business analysis', 'organizational change management'],
};
