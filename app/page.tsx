'use client';

import Link from 'next/link';
import { trackCTAClick, trackServiceInterest } from '../utils/analytics';

// Service card component
const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
    <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-[color:var(--color-navy)]">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="mb-4 text-gray-600">{description}</p>
    <Link 
      href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`} 
      className="text-[color:var(--color-teal)] hover:text-[color:var(--color-navy)]"
      onClick={() => trackServiceInterest(title, 'service_card_click')}
    >
      Learn more &rarr;
    </Link>
  </div>
);

export default function Home() {
  // Services data
  const services = [
    {
      title: 'Project Management',
      description: 'Expert project management services to ensure your initiatives are delivered on time and within budget.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: 'Program Management',
      description: 'Comprehensive program management to align multiple projects with your strategic business objectives.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: 'Strategic Planning',
      description: 'Forward-thinking strategic planning to help your organization define and achieve its long-term goals.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-20 text-white bg-[color:var(--color-navy)]">
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Transform Your Business with <span className="text-[color:var(--color-gold)]">Elite Expertise</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Professional consulting services to elevate your business strategy, operations, and technology.
          </p>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center">
            <Link 
              href="/contact" 
              className="btn btn-primary"
              onClick={() => trackCTAClick('Schedule Consultation - Hero', '/contact')}
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/services" 
              className="btn btn-outline bg-transparent text-white border-white"
              onClick={() => trackCTAClick('Explore Services - Hero', '/services')}
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of consulting services to help your business thrive in today's competitive landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link 
              href="/services" 
              className="btn btn-primary"
              onClick={() => trackCTAClick('View All Services', '/services')}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-[color:var(--color-navy)]">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Schedule a consultation with our expert team to discuss how we can help you achieve your business goals.
          </p>
          <Link 
            href="/contact" 
            className="btn bg-[color:var(--color-gold)] text-[color:var(--color-navy)] hover:bg-opacity-90"
            onClick={() => trackCTAClick('Get Started Today - Bottom CTA', '/contact')}
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
