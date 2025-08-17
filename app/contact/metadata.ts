import { Metadata } from 'next';
import { siteConfig } from '../metadata.config';

// Export metadata for the contact page
export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: 'Get in touch with Elite Enterprise Transformation Consulting Group. Schedule a consultation with our expert team to discuss how we can help you achieve your business goals.',
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: 'Get in touch with Elite Enterprise Transformation Consulting Group. Schedule a consultation with our expert team to discuss how we can help you achieve your business goals.',
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `Contact Us | ${siteConfig.name}`,
      }
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact Us | ${siteConfig.name}`,
    description: 'Get in touch with Elite Enterprise Transformation Consulting Group. Schedule a consultation with our expert team to discuss how we can help you achieve your business goals.',
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  keywords: [...siteConfig.keywords, 'contact us', 'consulting services', 'business consultation', 'schedule consultation'],
};
