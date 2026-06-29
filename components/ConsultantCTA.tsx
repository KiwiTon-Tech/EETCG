'use client';

import Link from 'next/link';
import { trackConsultantContact, trackCTAClick } from '../utils/analytics';

interface ConsultantCTAProps {
  consultantName: string;
  consultantId: string;
}

export function ConsultantCTA({ consultantName, consultantId }: ConsultantCTAProps) {
  const firstName = consultantName.split(' ')[0];
  
  return (
    <section className="py-16 bg-light-gray">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold">Work With {firstName}</h2>
        <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
          Interested in working with {firstName} on your next project? Contact us today to schedule a consultation.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Link 
            href="/contact" 
            className="btn bg-[color:var(--color-navy)] text-white hover:bg-opacity-90"
            onClick={() => {
              trackConsultantContact(consultantName, 'consultation_request');
              trackCTAClick(`Schedule Consultation - ${consultantName}`, '/contact');
            }}
          >
            Schedule a Consultation
          </Link>
          <Link 
            href="/consultants" 
            className="btn bg-transparent border-2 border-[color:var(--color-navy)] text-[color:var(--color-navy)] hover:bg-[color:var(--color-navy)] hover:text-white"
            onClick={() => trackCTAClick('View All Consultants', '/consultants')}
          >
            View All Consultants
          </Link>
        </div>
      </div>
    </section>
  );
}
