import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { siteConfig } from '../../metadata.config';
import { ConsultantJsonLd } from '../../../components/JsonLd';
import { consultants } from '../data';

// Generate static params for all consultant IDs
export async function generateStaticParams() {
  return consultants.map((consultant) => ({
    id: consultant.id,
  }));
}

// Generate metadata for each consultant page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const consultant = consultants.find(c => c.id === params.id);
  
  if (!consultant) {
    return {
      title: 'Consultant Not Found',
    };
  }
  
  return {
    title: `${consultant.name} - ${consultant.title} | Elite Enterprise TCG`,
    description: consultant.shortBio,
    alternates: {
      canonical: `${siteConfig.url}/consultants/${params.id}`,
    },
    openGraph: {
      title: `${consultant.name} - Elite Enterprise TCG`,
      description: consultant.shortBio,
      url: `${siteConfig.url}/consultants/${params.id}`,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${consultant.image}`,
          width: 800,
          height: 600,
          alt: `${consultant.name} - ${consultant.title}`,
        }
      ],
      locale: siteConfig.locale,
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${consultant.name} - Elite Enterprise TCG`,
      description: consultant.shortBio,
      images: [`${siteConfig.url}${consultant.image}`],
    },
    keywords: [...siteConfig.keywords, consultant.name, consultant.title, ...consultant.specialties],
  };
}

// Use type 'any' to bypass the PageProps constraint
export default function Page(props: any) {
  const { id } = props.params;
  
  // Find the consultant by ID
  const consultant = consultants.find(c => c.id === id);
  
  // If consultant not found, return 404
  if (!consultant) {
    notFound();
  }

  // Format the full bio with paragraphs
  const formattedBio = consultant.fullBio.split('\n\n').filter(p => p.trim() !== '');

  return (
    <>
      {/* Add JSON-LD structured data */}
      <ConsultantJsonLd consultant={consultant} />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 text-white bg-navy">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            {/* Profile Image */}
            <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full md:mr-8 md:mb-0">
              <Image 
                src={consultant.image}
                alt={`${consultant.name} - ${consultant.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-cover"
                priority
              />
            </div>
            
            {/* Profile Info */}
            <div>
              <h1 className="mb-2 text-3xl font-bold md:text-4xl">{consultant.name}</h1>
              <p className="mb-4 text-xl font-semibold text-[color:var(--color-gold)]">{consultant.title}</p>
              <div className="flex flex-wrap gap-2">
                {consultant.specialties.map((specialty, index) => (
                  <span key={index} className="px-3 py-1 text-sm bg-white rounded-full text-[color:var(--color-navy)]">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Bio */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-3xl font-bold">About {consultant.name.split(' ')[0]}</h2>
              {formattedBio.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Certifications */}
              <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Certifications</h3>
                <ul className="space-y-2">
                  {consultant.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-[color:var(--color-navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Education */}
              <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Education</h3>
                <ul className="space-y-2">
                  {consultant.education.map((edu, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-[color:var(--color-navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Experience */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold">Experience</h3>
                <ul className="space-y-2">
                  {consultant.experience.map((exp, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-[color:var(--color-navy)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Work With {consultant.name.split(' ')[0]}</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
            Interested in working with {consultant.name.split(' ')[0]} on your next project? Contact us today to schedule a consultation.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <Link href="/contact" className="btn bg-[color:var(--color-navy)] text-white hover:bg-opacity-90">
              Schedule a Consultation
            </Link>
            <Link href="/consultants" className="btn bg-transparent border-2 border-[color:var(--color-navy)] text-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)] hover:text-white">
              View All Consultants
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
