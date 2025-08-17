import { MetadataRoute } from 'next';
import { siteConfig } from './metadata.config';

// Import consultant data from the data file
import { consultants } from './consultants/data';

// Required for static export compatibility
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  
  // Core static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/consultants',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
  
  // Dynamic consultant pages
  const consultantPages = consultants.map(c => ({
    url: `${baseUrl}/consultants/${c.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Service detail pages
  const servicePages = [
    '/services/project-management',
    '/services/program-management',
    '/services/strategic-planning',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  return [...staticPages, ...consultantPages, ...servicePages];
}
