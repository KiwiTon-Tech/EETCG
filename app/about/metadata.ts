import { Metadata } from 'next';
import { siteConfig } from '../metadata.config';

// Export metadata for the about page
export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: 'Learn about Elite Enterprise Transformation Consulting Group, a woman and minority owned consulting firm dedicated to transforming businesses through expert guidance and innovative solutions.',
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: 'Learn about Elite Enterprise Transformation Consulting Group, a woman and minority owned consulting firm dedicated to transforming businesses through expert guidance and innovative solutions.',
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `About Us | ${siteConfig.name}`,
      }
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Us | ${siteConfig.name}`,
    description: 'Learn about Elite Enterprise Transformation Consulting Group, a woman and minority owned consulting firm dedicated to transforming businesses through expert guidance and innovative solutions.',
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  keywords: [...siteConfig.keywords, 'about us', 'consulting firm', 'mission', 'vision', 'values', 'woman owned', 'minority owned'],
};
