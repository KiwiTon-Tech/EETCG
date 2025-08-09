'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Consultant data
const consultants = [
  {
    id: 'carla',
    name: 'Carla Monroe',
    title: 'Owner & Principal Consultant',
    specialties: ['Project Management', 'Program Management', 'Strategic Planning', 'Data & Analytics', 'Vendor Management', 'AI Consulting'],
    shortBio: 'Certified life coach, seasoned storyteller, and business strategist passionate about empowering organizations to achieve their full potential through transformative solutions.',
    fullBio: `Hello, I'm Carla Monroe, the owner and principal consultant of Elite Enterprise Transformation Consulting Group. As a certified life coach, seasoned storyteller, and business strategist, I am passionate about empowering organizations to achieve their full potential through transformative solutions. Based in Beech Island, I lead a woman and minority owned consulting firm dedicated to driving success in Project Management, Program Management, Strategic Planning, Data & Analytics Consulting, Vendor Management, and AI Consulting.

With certifications as a Life Coach and Spiritual Coach from the Life Purpose Institute (recognized by the International Coaching Federation), I bring a unique blend of empathy, creativity, and strategic insight to every client engagement. My approach is rooted in storytelling—crafting narratives that align your business goals with actionable strategies to inspire growth and change.

My professional journey spans diverse industries, from coordinating production for Disney's live-action and VFX teams to shaping educational initiatives at Tree of Life International Charter School. These experiences have honed my ability to manage complex projects, foster collaboration, and deliver results under pressure. Additionally, my training through UCLA Extension's Advanced Showrunner course has equipped me to create impactful, data-driven solutions that resonate with stakeholders.

As a problem-solver and leader, I thrive in dynamic environments. Whether guiding businesses through strategic transformations or leveraging AI to unlock new opportunities, I am committed to delivering tailored solutions that drive measurable success. My work is fueled by a belief in the power of human connection, education, and innovation to create lasting impact.

Let's connect to transform your business and write the next chapter of your success together!`,
    image: '/images/consultants/carla-monroe.jpeg',
  },
  {
    id: 'jessica',
    name: 'Jessica Shaw',
    title: 'Senior Consultant',
    specialties: ['Project Management', 'Data & Analytics Consulting', 'AI Consulting'],
    shortBio: 'Results-oriented Systems Engineer with over nine years of experience in enterprise systems, specializing in delivering innovative solutions.',
    fullBio: `Hello, I'm Jessica Shaw, a consultant at Elite Enterprise Transformation Consulting Group, based in Beech Island, South Carolina. As a results-oriented Systems Engineer with over nine years of experience in enterprise systems, I specialize in delivering innovative solutions in Project Management, Data & Analytics Consulting, and AI Consulting. My passion lies in transforming complex technical challenges into streamlined, impactful strategies that drive organizational success.

My expertise spans designing and implementing robust enterprise systems, optimizing data architectures, and leveraging AI to enhance business processes. At Elite Enterprise Transformation Consulting Group, I work closely with clients to develop tailored solutions that align technology with strategic goals, ensuring operational efficiency and measurable outcomes. My analytical approach and proven track record in managing large-scale projects enable me to deliver high-value results in dynamic, fast-paced environments.

With a background rooted in systems engineering and a commitment to excellence, I thrive on solving intricate problems and fostering collaboration across teams. My work is driven by a dedication to empowering businesses through data-driven insights and cutting-edge technology.

Let's connect to explore how we can elevate your organization with strategic, technology-focused solutions that deliver lasting impact!`,
    image: '/images/consultants/jessica-shaw.jpeg',
  },
  {
    id: 'zander',
    name: 'Alex (Zander) Bolyanatz, PMP',
    title: 'Senior Consultant',
    specialties: ['Project Management', 'Program Management', 'Strategic Planning', 'Data & Analytics', 'Vendor Management', 'AI Consulting'],
    shortBio: 'Certified Project Management Professional (PMP) with over a decade of experience in healthcare IT and project management.',
    fullBio: `Hello, I'm Alex (Zander) Bolyanatz, PMP, a senior consultant at Elite Enterprise Transformation Consulting Group, based in the Albuquerque-Santa Fe Metropolitan Area. With over a decade of experience in healthcare IT and project management, I specialize in delivering transformative solutions in Project Management, Program Management, Strategic Planning, Data & Analytics Consulting, Vendor Management, and AI Consulting. As a certified Project Management Professional (PMP), I am passionate about aligning innovative technology with business goals to drive operational excellence and measurable impact.

My career has been defined by leading complex, high-impact projects in healthcare IT, where I've honed my expertise in optimizing data systems, managing cross-functional teams, and implementing strategic initiatives. At Elite Enterprise Transformation Consulting Group, I guide clients through digital transformations, leveraging AI and analytics to unlock new opportunities and streamline operations. My recent work includes spearheading enterprise-wide IT initiatives, enhancing vendor partnerships, and delivering projects that improve organizational efficiency and outcomes.

Beyond consulting, I serve as a board member of the Civilian Police Oversight Agency, advocating for transparency and community engagement. This role strengthens my ability to foster trust and collaboration with diverse stakeholders, a skill I bring to every client engagement.

At Elite Enterprise Transformation Consulting Group, I work alongside our team to deliver tailored strategies that elevate your organization. Let's connect to explore how we can drive your business forward with innovative, results-driven solutions.`,
    image: '/images/consultants/zander-bolyanatz.jpeg',
  },
  {
    id: 'angela-willis-clay',
    name: 'Angela Willis-Clay',
    title: 'Senior Consultant',
    specialties: ['Project Management', 'Process Reengineering', 'Organizational Transformation'],
    shortBio: 'Certified Project Management Professional (PMP) with over 25 years of experience driving enterprise-wide initiatives to success.',
    fullBio: `Hello, I'm Angela Willis-Clay, a senior consultant at Elite Enterprise Transformation Consulting Group, based in Tallahassee, Florida, with over 25 years of experience driving enterprise-wide initiatives to success. As a Certified Project Management Professional (PMP), Certified ScrumMaster (CSM), and Certified Scrum Product Owner (CSPO), I specialize in delivering strategic solutions in project management, process reengineering, and organizational transformation. My passion lies in streamlining complex challenges into actionable, results-driven strategies that empower organizations to achieve their goals.

At Elite Enterprise Transformation Consulting Group, I leverage my expertise in program planning, data analysis, and stakeholder engagement to deliver high-impact outcomes across industries, including government, education, and healthcare. My work on projects like the Florida PALM Project and cloud migrations for state agencies demonstrates my ability to manage multi-million-dollar portfolios, foster cross-functional collaboration, and ensure compliance with rigorous standards. With a commitment to excellence and a diplomatic leadership style, I'm dedicated to building strong partnerships and driving measurable success. Let's connect to explore how I can help your organization thrive!`,
    image: '/images/consultants/angela-willis-clay.jpeg',
  },
  {
    id: 'pagie-ramsey',
    name: 'Paige Ramsey',
    title: 'Consultant',
    specialties: ['Project Management', 'Program Management', 'Lean Six Sigma'],
    shortBio: 'Certified Project Management Professional (PMP) with over a decade of experience in delivering strategic IT project and program management solutions.',
    fullBio: `Hello, I'm Paige Ramsey, a consultant at Elite Enterprise Transformation Consulting Group, based in the Charleston, South Carolina, Metropolitan Area. As a Certified Project Management Professional (PMP), Certified ScrumMaster (CSM), and Lean Six Sigma Green Belt, I bring over a decade of experience in delivering strategic IT project and program management solutions. My passion lies in optimizing processes, leveraging data-driven insights, and driving innovative technology initiatives to achieve business excellence.

With a Master's in Project Management from The Citadel and a robust background in managing mission-critical projects for organizations like the General Services Administration and the State of New Mexico, I specialize in full-lifecycle project execution, risk management, and stakeholder engagement. My work, including broadband expansion initiatives and enterprise system optimizations, reflects my ability to navigate complex challenges and deliver measurable results. Committed to fostering collaboration and excellence, I'm eager to help organizations transform through strategic, technology-focused solutions. Let's connect to drive your success!`,
    image: '/images/consultants/pagie-ramsey.jpeg',
  },
  {
    id: 'patti-jordan',
    name: 'Patti Jordan',
    title: 'Consultant',
    specialties: ['Project Management', 'Agile Methodologies', 'IT Solutions'],
    shortBio: 'Project Management Professional (PMP) with expertise in delivering high-impact IT solutions using Agile and Waterfall methodologies.',
    fullBio: `Hello, I'm Patti Jordan, a consultant at Elite Enterprise Transformation Consulting Group, based in the United States. As a Project Management Professional (PMP), Certified Scrum Product Owner (CSPO), and Certified ScrumMaster (CSM) with an MBA from the Haslam College of Business, I bring extensive experience in delivering high-impact IT solutions using Agile and Waterfall methodologies. My passion lies in transforming complex IT challenges into streamlined, value-driven outcomes that exceed stakeholder expectations.

With a proven track record at organizations like Los Alamos National Laboratory, I've led initiatives such as the ServiceNow HRSD product roadmap, achieving 40% higher adoption and 25% lower operational costs. My expertise in stakeholder management, risk mitigation, and change management enables me to drive cross-functional collaboration and deliver projects on time and within budget. Committed to fostering innovation and operational excellence, I'm eager to help organizations achieve strategic goals through tailored, technology-focused solutions. Let's connect to elevate your business success!`,
    image: '/images/consultants/patti-jordan.jpeg',
  },
  {
    id: 'stephanie-shaw',
    name: 'Stephanie D. Shaw',
    title: 'Consultant',
    specialties: ['Product Management', 'Innovation', 'User-Centric Solutions'],
    shortBio: 'Experienced Product Manager specializing in transforming complex technical challenges into user-centric products that align with strategic business goals.',
    fullBio: `Consultant, Elite Enterprise Transformation Consulting Group

Hello, I'm Stephanie D. Shaw, a consultant for Elite Enterprise Transformation Consulting Group based in the Aiken, South Carolina area, passionate about driving innovation and delivering impactful solutions. As an experienced Product Manager, I specialize in transforming complex technical challenges into user-centric products that align with strategic business goals. My ability to quickly adapt to new environments, combined with my expertise in product development and cross-functional collaboration, positions me to excel as a consultant, helping organizations solve problems and achieve measurable outcomes.

With a proven track record of breaking down technical requirements into actionable strategies, I ensure products meet user needs while driving business value. Recognized for building consensus among diverse stakeholders and communicating effectively with both technical and non-technical audiences, I thrive in fast-paced settings, delivering results through analytical rigor and a collaborative spirit. Let's connect to explore how I can bring my strategic insight and product expertise to empower your organization with transformative solutions!`,
    image: '/images/consultants/stephanie-shaw.jpeg',
  },
  {
    id: 'marilyn-ortiz',
    name: 'Marilyn Ortiz',
    title: 'Senior Consultant',
    specialties: ['Project Management', 'Strategic Planning', 'AI Consulting', 'Vendor Management', 'Data & Analytics'],
    shortBio: 'Dynamic consultant with expertise in driving organizational success through innovative strategies and human-centered solutions.',
    fullBio: `About Marilyn Ortiz

Senior Consultant, Elite Enterprise Transformation Consulting Group

Welcome to the journey of transformation with Marilyn Ortiz, a dynamic Senior Consultant at Elite Enterprise Transformation Consulting Group. With a passion for driving organizational success through innovative strategies and human-centered solutions, Marilyn brings a wealth of expertise in Project Management, Strategic Planning, and AI Consulting to our woman and minority owned firm based in Beech Island.

Marilyn's approach is rooted in the power of connection and collaboration, blending analytical precision with creative problem-solving to deliver measurable results. Her professional journey spans diverse industries, where she has honed her ability to navigate complex challenges, foster stakeholder alignment, and implement data-driven strategies that propel businesses forward. Whether guiding organizations through transformative change or leveraging cutting-edge AI tools to unlock new opportunities, Marilyn is dedicated to crafting tailored solutions that resonate with clients' unique goals.

With a deep commitment to empowering organizations, Marilyn excels at translating vision into actionable roadmaps, ensuring that each step of the transformation journey is purposeful and impactful. Her expertise in Vendor Management and Data & Analytics further enhances her ability to optimize resources and extract meaningful insights that drive informed decision-making.

Beyond her professional achievements, Marilyn is known for her authentic leadership style, creating environments where innovation thrives and teams excel. Her ability to listen deeply, communicate effectively, and adapt to evolving needs makes her a trusted advisor for clients seeking to navigate today's complex business landscape.

Partner with Marilyn and Elite Enterprise Transformation Consulting Group to unlock your organization's full potential and embark on a journey of meaningful transformation. Together, we'll build strategies that not only address immediate challenges but also position your business for sustainable success in an ever-changing world.`,
    image: '/images/consultants/place-holder.jpg',
  },
  {
    id: 'laura-ashley-shaw',
    name: 'Laura-Ashley Shaw',
    title: 'Consultant',
    specialties: ['Administrative Support', 'Process Improvement', 'Organizational Skills'],
    shortBio: 'Administrative professional with over seven years of experience providing high-level support to senior executives and managing confidential information.',
    fullBio: `Hello, I'm Laura-Ashley Shaw, a consultant at Elite Enterprise Transformation Consulting Group, based in the Albuquerque, New Mexico area. With over seven years of experience as an Administrative Assistant, I specialize in providing high-level support to senior executives, managing calendars, organizing meetings, and handling confidential documents with discretion. My passion lies in fostering effective communication with internal and external stakeholders to drive organizational success.

Equipped with an Associate's degree in Interdisciplinary Studies from Central New Mexico Community College and pursuing a Bachelor's in Psychology at Western Governors University, I bring strong organizational skills, a Six Sigma Green Belt certification, and a proven ability to work independently or as part of a team. My experience in budget management and process improvement enables me to deliver tailored administrative solutions that enhance operational efficiency and support strategic goals. Let's connect to explore how I can help streamline your organization's administrative processes!`,
    image: '/images/consultants/laura-ashley-shaw.jpeg',
  },
  {
    id: 'tamoy-monroe',
    name: 'Tamoy Monroe',
    title: 'Consultant',
    specialties: ['Talent Acquisition', 'Leadership Recruitment', 'Team Building'],
    shortBio: 'Talent acquisition specialist with extensive experience in fostering diverse, high-performing teams and driving organizational success.',
    fullBio: `Hello, I'm Tamoy Monroe, a consultant at Elite Enterprise Transformation Consulting Group, based in the Irvine area. With a strong background in talent acquisition and leadership recruitment from my time at Microsoft, I specialize in fostering diverse, high-performing teams and driving organizational success. My passion lies in building meaningful connections and delivering strategic solutions that align with business goals.

With a degree from the University of California, San Diego, and extensive experience mentoring professionals, I bring a customer-focused approach to consulting, emphasizing collaboration and innovative problem-solving. My expertise in navigating complex hiring landscapes and supporting leadership development enables me to deliver tailored strategies for clients. Let's connect to explore how I can help your organization thrive through people-centric solutions!`,
    image: '/images/consultants/tamoy-monroe.jpeg',
  },
  {
    id: 'john-lawrence',
    name: 'John E. Lawrence II',
    title: 'Senior Consultant',
    specialties: ['Project Management', 'Program Management', 'Process Reengineering', 'Quality Management'],
    shortBio: 'Project Management Professional (PMP) and Professional Scrum Master (PSM I) with over two decades of experience leading enterprise program management.',
    fullBio: `Hello, I'm John E. Lawrence II, a senior consultant at Elite Enterprise Transformation Consulting Group, based in the Washington, DC, Metropolitan Area. As a Project Management Professional (PMP) and Professional Scrum Master (PSM I) with over two decades of experience, I specialize in leading enterprise program management and delivering strategic IT and business solutions. My passion lies in driving organizational success through process reengineering, quality management, and collaborative leadership.

With a robust background at organizations like WhirlWind Technologies and the Department of Treasury, I've spearheaded initiatives such as establishing enterprise PMOs, implementing ISO 9001:2015-compliant quality systems, and managing mission-critical projects for federal agencies. My expertise in Agile and Waterfall methodologies, coupled with a proven ability to foster cross-functional collaboration, enables me to deliver tailored solutions that drive measurable results. Let's connect to explore how I can help your organization achieve its strategic goals through effective program management and process optimization!`,
    image: '/images/consultants/place-holder.jpg',
  },
];

// Consultant card component
const ConsultantCard = ({ consultant }: { consultant: typeof consultants[0] }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="relative w-full h-64">
        {/* Actual image from public directory */}
        <Image 
          src={consultant.image}
          alt={`${consultant.name} - ${consultant.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{consultant.name}</h3>
        <p className="mb-1 text-sm font-semibold text-navy">{consultant.title}</p>
        <p className="mb-4 text-gray-600">{consultant.shortBio}</p>
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {consultant.specialties.map((specialty, index) => (
              <span key={index} className="px-2 py-1 text-xs text-white rounded-full bg-navy">
                {specialty}
              </span>
            ))}
          </div>
        </div>
        <Link href={`/consultants/${consultant.id}`} className="inline-block px-4 py-2 text-white rounded bg-navy hover:bg-opacity-90">
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
              ? 'bg-navy text-white' 
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
                ? 'bg-navy text-white' 
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
