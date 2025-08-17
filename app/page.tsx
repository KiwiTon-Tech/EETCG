'use client';

import Link from 'next/link';
import Image from 'next/image';
import { OrganizationJsonLd, LocalBusinessJsonLd } from '../components/JsonLd';

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

// Testimonial card component
const TestimonialCard = ({ quote, author, position, company }: { quote: string; author: string; position: string; company: string }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <div className="mb-4 text-[color:var(--color-gold)]">
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>
    <p className="mb-4 italic text-gray-600">{quote}</p>
    <div>
      <p className="font-bold">{author}</p>
      <p className="text-sm text-gray-500">
        {position}, {company}
      </p>
    </div>
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

  // Testimonials data
  const testimonials = [
    {
      quote: "Elite Enterprise Transformation Consulting Group's strategic planning services helped us pivot our business model during challenging times. Their insights were invaluable.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechInnovate Inc."
    },
    {
      quote: "The project management expertise provided by EETCG ensured our product launch was smooth and successful. They exceeded our expectations at every turn.",
      author: "Michael Chen",
      position: "COO",
      company: "Global Solutions Ltd."
    },
    {
      quote: "Working with EETCG on our data analytics initiative transformed how we make decisions. Their team's knowledge and professionalism are unmatched.",
      author: "Priya Patel",
      position: "CIO",
      company: "DataDrive Systems"
    }
  ];

  return (
    <>
      {/* Add JSON-LD structured data */}
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      
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

      {/* Highlights Section */}
      <section className="py-16 bg-[color:var(--color-light-gray)]">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">Our Impact</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Completed Projects */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-[color:var(--color-navy)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-4xl font-bold text-[color:var(--color-gold)]">100+</h3>
              <p className="text-gray-600">Completed Projects</p>
            </div>

            {/* Satisfied Clients */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-[color:var(--color-navy)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="mb-2 text-4xl font-bold text-[color:var(--color-gold)]">99+</h3>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>

            {/* Team Members */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-[color:var(--color-navy)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-4xl font-bold text-[color:var(--color-gold)]">25+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
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

      {/* Testimonials */}
      <section className="py-16 bg-[color:var(--color-light-gray)]">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Client Testimonials</h2>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
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
