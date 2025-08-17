'use client';

import { siteConfig } from '../app/metadata.config';
import Script from 'next/script';

// Organization JSON-LD
export function OrganizationJsonLd() {
  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteConfig.name,
          "url": siteConfig.url,
          "logo": `${siteConfig.url}/images/logo.png`,
          "description": siteConfig.description,
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Georgia",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://www.linkedin.com/company/elite-enterprise-transformation-consulting-group",
          ]
        })
      }}
    />
  );
}

// Consultant Person JSON-LD
export function ConsultantJsonLd({ consultant }: { consultant: any }) {
  return (
    <Script
      id={`consultant-jsonld-${consultant.id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": consultant.name,
          "jobTitle": consultant.title,
          "description": consultant.shortBio,
          "image": `${siteConfig.url}${consultant.image}`,
          "worksFor": {
            "@type": "Organization",
            "name": siteConfig.name,
            "url": siteConfig.url
          },
          "knowsAbout": consultant.specialties
        })
      }}
    />
  );
}

// Local Business JSON-LD
export function LocalBusinessJsonLd() {
  return (
    <Script
      id="localbusiness-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": siteConfig.name,
          "url": siteConfig.url,
          "image": `${siteConfig.url}/images/logo.png`,
          "description": siteConfig.description,
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Georgia",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.4717",
            "longitude": "-82.1340"
          },
          "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
          "telephone": "",
          "priceRange": "$$",
          "servesCuisine": "Consulting Services"
        })
      }}
    />
  );
}

// Service JSON-LD
export function ServiceJsonLd({ 
  name, 
  description, 
  url 
}: { 
  name: string; 
  description: string; 
  url: string;
}) {
  return (
    <Script
      id={`service-jsonld-${name.replace(/\s+/g, '-').toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": name,
          "description": description,
          "provider": {
            "@type": "Organization",
            "name": siteConfig.name,
            "url": siteConfig.url
          },
          "url": `${siteConfig.url}${url}`
        })
      }}
    />
  );
}

// FAQ JSON-LD
export function FAQJsonLd({ 
  questions 
}: { 
  questions: Array<{ question: string; answer: string }> 
}) {
  return (
    <Script
      id="faq-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": questions.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        })
      }}
    />
  );
}

// BreadcrumbList JSON-LD
export function BreadcrumbJsonLd({ 
  items 
}: { 
  items: Array<{ name: string; item: string }> 
}) {
  return (
    <Script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${siteConfig.url}${item.item}`
          }))
        })
      }}
    />
  );
}
