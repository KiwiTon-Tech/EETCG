'use client';

import Link from 'next/link';
import Image from 'next/image';
import { OrganizationJsonLd } from '../../components/JsonLd';

export default function About() {
  return (
    <>
      {/* Add JSON-LD structured data */}
      <OrganizationJsonLd />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 text-white bg-[color:var(--color-navy)]">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="max-w-2xl mx-auto text-xl">
            A woman and minority owned consulting firm dedicated to transforming businesses through expert guidance and innovative solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Mission */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-[color:var(--color-navy)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="mb-4 text-gray-600">
                To empower organizations through transformative consulting services that drive operational excellence, strategic growth, and sustainable success.
              </p>
              <p className="text-gray-600">
                We are committed to delivering exceptional value by combining industry expertise, innovative methodologies, and a client-centered approach to address complex business challenges.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mb-6 text-white rounded-full bg-[color:var(--color-navy)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
              <p className="mb-4 text-gray-600">
                To be recognized as the premier consulting partner that inspires and enables organizations to achieve their highest potential through transformative strategies and solutions.
              </p>
              <p className="text-gray-600">
                We envision a business landscape where diverse leadership and innovative thinking drive exceptional outcomes for organizations of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-[color:var(--color-light-gray)]">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">Our Story</h2>
            <div className="p-8 bg-white rounded-lg shadow-md">
              <p className="mb-4 text-gray-600">
                Elite Enterprise Transformation Consulting Group was founded in Beech Island with a vision to bring world-class consulting services to organizations seeking transformative change. As a woman and minority owned business, we bring a unique perspective and diverse approach to solving complex business challenges.
              </p>
              <p className="mb-4 text-gray-600">
                Our founder recognized a gap in the consulting industry: the need for a firm that combines deep technical expertise with a genuine understanding of the human elements that drive organizational success. This insight led to the creation of EETCG, a firm dedicated to delivering holistic transformation solutions.
              </p>
              <p className="text-gray-600">
                Today, we serve clients across industries, helping them navigate change, optimize operations, and achieve sustainable growth. Our team of expert consultants brings decades of combined experience and a passion for excellence to every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Excellence */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-[color:var(--color-navy)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering exceptional quality in everything we do, exceeding expectations and setting new standards in the consulting industry.
              </p>
            </div>

            {/* Integrity */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-[color:var(--color-navy)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical conduct in all our interactions, building trust and long-lasting relationships with our clients.
              </p>
            </div>

            {/* Innovation */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-[color:var(--color-navy)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and forward-thinking approaches to solve complex problems, constantly seeking new and better ways to deliver value to our clients.
              </p>
            </div>

            {/* Diversity */}
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-[color:var(--color-navy)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Diversity</h3>
              <p className="text-gray-600">
                We celebrate and leverage diverse perspectives, backgrounds, and experiences, recognizing that inclusion drives innovation and better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 bg-[color:var(--color-light-gray)]">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Team</h2>
            <p className="text-gray-600">
              Meet our diverse team of experienced consultants dedicated to helping your business succeed.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md">
            <p className="mb-6 text-gray-600">
              At Elite Enterprise Transformation Consulting Group, our team consists of seasoned professionals with diverse backgrounds and expertise across various industries. Our consultants bring a wealth of knowledge and experience to every client engagement, ensuring that we deliver tailored solutions that address your unique challenges.
            </p>
            <p className="mb-6 text-gray-600">
              Our team members hold advanced degrees and certifications in their respective fields, including Project Management Professional (PMP), Certified Scrum Master (CSM), Six Sigma Black Belt, and more. This expertise allows us to apply best practices and proven methodologies to drive successful outcomes for our clients.
            </p>
            <p className="mb-8 text-gray-600">
              We pride ourselves on our collaborative approach, working closely with your team to understand your business objectives and develop strategies that align with your vision. Our consultants are not just advisors but partners in your success journey.
            </p>
            <div className="text-center">
              <Link href="/consultants" className="btn btn-primary">
                Meet Our Consultants
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-[color:var(--color-navy)]">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Let's discuss how our team can help you achieve your business goals through our expert consulting services.
          </p>
          <Link href="/contact" className="btn bg-[color:var(--color-gold)] text-[color:var(--color-navy)] hover:bg-opacity-90">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
