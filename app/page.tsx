'use client';

import Link from 'next/link';
import Image from 'next/image';
import { consultants } from '@/data/consultants';

// Service card component
const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
    <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-[color:var(--color-navy)]">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="mb-4 text-gray-600">{description}</p>
    <Link href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-[color:var(--color-teal)] hover:text-[color:var(--color-navy)]">
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
            <Link href="/contact" className="btn btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="btn btn-outline bg-transparent text-white border-white">
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
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By / Credibility Strip */}
      <section className="py-12 bg-[color:var(--color-light-gray)]">
        <div className="container px-4 mx-auto text-center">
          <p className="mb-6 text-sm font-semibold tracking-wider text-gray-500 uppercase">
            Trusted across federal, state, and enterprise engagements
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base font-semibold text-gray-700 md:text-lg">
            <span>DOE National Laboratories</span>
            <span className="text-gray-300">•</span>
            <span>SRNL</span>
            <span className="text-gray-300">•</span>
            <span>LANL</span>
            <span className="text-gray-300">•</span>
            <span>State of New Mexico</span>
            <span className="text-gray-300">•</span>
            <span>City &amp; County of Santa Fe</span>
            <span className="text-gray-300">•</span>
            <span>Santa Fe Public Schools</span>
            <span className="text-gray-300">•</span>
            <span>The Coca-Cola Company</span>
            <span className="text-gray-300">•</span>
            <span>Oldcastle Infrastructure</span>
          </div>
        </div>
      </section>

      {/* Featured Partnership */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="p-8 text-white lg:col-span-2 bg-[color:var(--color-navy)]">
                <p className="mb-2 text-sm font-semibold tracking-wider text-[color:var(--color-gold)]">
                  FEATURED PARTNERSHIP
                </p>
                <h2 className="mb-4 text-3xl font-bold">PMO-as-a-Service</h2>
                <p className="mb-6 text-gray-200">
                  Three small businesses, one integrated delivery team. Stand up a real
                  PMO in weeks, not months — backed by federal clearances and proven
                  artifacts on day one.
                </p>
                <Link
                  href="/partnerships"
                  className="btn bg-[color:var(--color-gold)] text-[color:var(--color-navy)] hover:bg-opacity-90"
                >
                  Explore the Partnership
                </Link>
              </div>
              <div className="p-8 lg:col-span-3">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div>
                    <p className="mb-1 text-xs font-bold tracking-wider text-gray-500">PRIME</p>
                    <h3 className="mb-1 text-lg font-bold">IT Connect, Inc.</h3>
                    <p className="text-sm text-gray-600">Minority-owned · 8(a) · GSA · PSFA</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold tracking-wider text-[color:var(--color-gold)]">EETCG</p>
                    <h3 className="mb-1 text-lg font-bold">Elite Enterprise</h3>
                    <p className="text-sm text-gray-600">Woman- &amp; minority-owned · Augusta, GA · Local to SRNL</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-bold tracking-wider text-gray-500">PARTNER</p>
                    <h3 className="mb-1 text-lg font-bold">Holloway Consulting Group</h3>
                    <p className="text-sm text-gray-600">Black-woman-owned · PMO build &amp; OCM</p>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Active and prior federal clearances:</span>{' '}
                    TS, Q, Public Trust. Comfortable engaging directly, through BSRA, or as a
                    sub to an existing prime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bench Preview */}
      <section className="py-16 bg-[color:var(--color-light-gray)]">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Meet the Bench</h2>
            <p className="text-gray-600">
              A cleared, credentialed team spanning federal labs, national programs, and enterprise PMOs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {consultants.slice(0, 6).map((consultant) => (
              <Link
                key={consultant.id}
                href={`/consultants/${consultant.id}`}
                className="flex flex-col items-center p-4 text-center transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md"
              >
                <div className="relative w-16 h-16 mb-3 overflow-hidden rounded-full bg-gray-100">
                  <Image
                    src={consultant.image}
                    alt={consultant.name}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mb-0.5 text-sm font-bold leading-tight">{consultant.name.split(',')[0]}</p>
                <p className="mb-2 text-xs text-gray-500 leading-tight">{consultant.title.split(' · ')[0]}</p>
                {consultant.clearance && (
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold rounded bg-[color:var(--color-gold)] text-[color:var(--color-navy)]">
                    {consultant.clearance.replace('Active ', '').replace(' Clearance', '').replace(' (prior)', '*')}
                  </span>
                )}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/consultants" className="btn btn-primary">
              Meet the Full Bench
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
          <Link href="/contact" className="btn bg-[color:var(--color-gold)] text-[color:var(--color-navy)] hover:bg-opacity-90">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
