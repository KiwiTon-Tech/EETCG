'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { consultants, type Consultant } from '@/data/consultants';


// Consultant card component
const ConsultantCard = ({ consultant }: { consultant: Consultant }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="relative w-full aspect-[3/4] bg-gray-100">
        {/* Actual image from public directory */}
        <Image
          src={consultant.image}
          alt={`${consultant.name} - ${consultant.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{consultant.name}</h3>
        <p className="mb-1 text-sm font-semibold text-[color:var(--color-navy)]">{consultant.title}</p>
        {consultant.firm && (
          <p className="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase">{consultant.firm}</p>
        )}
        {(consultant.clearance || (consultant.certifications && consultant.certifications.length > 0)) && (
          <div className="flex flex-wrap gap-1 mb-3">
            {consultant.clearance && (
              <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[color:var(--color-gold)] text-[color:var(--color-navy)]">
                {consultant.clearance}
              </span>
            )}
            {consultant.certifications?.map((cert) => (
              <span key={cert} className="px-2 py-0.5 text-xs rounded bg-gray-100 text-gray-700 border border-gray-200">
                {cert}
              </span>
            ))}
          </div>
        )}
        <p className="mb-4 text-gray-600">{consultant.shortBio}</p>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {consultant.specialties.map((specialty, index) => (
              <span key={index} className="px-2 py-1 text-xs text-white rounded-full bg-[color:var(--color-navy)]">
                {specialty}
              </span>
            ))}
          </div>
        </div>
        <Link href={`/consultants/${consultant.id}`} className="inline-block px-4 py-2 text-white rounded bg-[color:var(--color-navy)] hover:bg-opacity-90">
          View Profile
        </Link>
      </div>
    </div>
  );
};

// Filter component
const SpecialtyFilter = ({ 
  specialties, 
  selectedSpecialty, 
  setSelectedSpecialty 
}: { 
  specialties: string[], 
  selectedSpecialty: string, 
  setSelectedSpecialty: (specialty: string) => void 
}) => {
  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold">Filter by Specialty:</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedSpecialty('')}
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            selectedSpecialty === '' 
              ? 'bg-[color:var(--color-navy)] text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {specialties.map((specialty) => (
          <button
            key={specialty}
            onClick={() => setSelectedSpecialty(specialty)}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              selectedSpecialty === specialty 
                ? 'bg-[color:var(--color-navy)] text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {specialty}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Consultants() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  
  // Get unique specialties for filter
  const allSpecialties = Array.from(
    new Set(consultants.flatMap(consultant => consultant.specialties))
  ).sort();
  
  // Filter consultants based on selected specialty
  const filteredConsultants = selectedSpecialty 
    ? consultants.filter(consultant => consultant.specialties.includes(selectedSpecialty))
    : consultants;

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Consultants</h1>
          <p className="max-w-2xl mx-auto text-xl">
            Meet our team of experienced consultants dedicated to transforming your business with expert guidance and innovative solutions.
          </p>
        </div>
      </section>

      {/* Consultants Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          {/* Filter */}
          <SpecialtyFilter 
            specialties={allSpecialties} 
            selectedSpecialty={selectedSpecialty} 
            setSelectedSpecialty={setSelectedSpecialty} 
          />
          
          {/* Consultants Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredConsultants.map((consultant) => (
              <ConsultantCard key={consultant.id} consultant={consultant} />
            ))}
          </div>
          
          {/* No results message */}
          {filteredConsultants.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-lg text-gray-600">No consultants found with the selected specialty.</p>
              <button 
                onClick={() => setSelectedSpecialty('')}
                className="mt-4 text-navy hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Work With Our Experts?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Contact us today to discuss how our consultants can help transform your business and drive sustainable growth.
          </p>
          <Link href="/contact" className="btn bg-gold text-navy hover:bg-opacity-90">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
