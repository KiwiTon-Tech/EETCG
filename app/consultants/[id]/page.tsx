import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ConsultantViewTracker } from '../../../components/ConsultantViewTracker';
import { ConsultantCTA } from '../../../components/ConsultantCTA';

// Consultant data - same as in the main consultants page
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
    certifications: ['Certified Life Coach', 'Certified Spiritual Coach'],
    education: ['Life Purpose Institute', 'UCLA Extension Advanced Showrunner Course'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Owner & Principal Consultant',
      'Disney - Production Coordinator (Live-action and VFX teams)',
      'Tree of Life International Charter School - Educational Initiatives'
    ]
  },
  {
    id: 'jessica',
    name: 'Jessica Shaw',
    title: 'Senior Consultant',
    specialties: ['Project Management', 'Data & Analytics Consulting', 'AI Consulting'],
    shortBio: 'Results-oriented Systems Engineer with over nine years of experience in enterprise systems, specializing in delivering innovative solutions.',
    fullBio: `Hello, I'm Jessica Shaw, a senior consultant at Elite Enterprise Transformation Consulting Group, based in Beech Island, South Carolina. As a results-oriented Systems Engineer with over nine years of experience in enterprise systems, I specialize in delivering innovative solutions in Project Management, Data & Analytics Consulting, and AI Consulting. My passion lies in transforming complex technical challenges into streamlined, impactful strategies that drive organizational success.

My expertise spans designing and implementing robust enterprise systems, optimizing data architectures, and leveraging AI to enhance business processes. At Elite Enterprise Transformation Consulting Group, I work closely with clients to develop tailored solutions that align technology with strategic goals, ensuring operational efficiency and measurable outcomes. My analytical approach and proven track record in managing large-scale projects enable me to deliver high-value results in dynamic, fast-paced environments.

With a background rooted in systems engineering and a commitment to excellence, I thrive on solving intricate problems and fostering collaboration across teams. My work is driven by a dedication to empowering businesses through data-driven insights and cutting-edge technology.

Let's connect to explore how we can elevate your organization with strategic, technology-focused solutions that deliver lasting impact!`,
    image: '/images/consultants/jessica-shaw.jpeg',
    certifications: ['Systems Engineering Professional'],
    education: ['Bachelor of Science in Computer Science'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Senior Consultant',
      '9+ years of experience in enterprise systems',
      'Expertise in data architecture optimization'
    ]
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
    certifications: ['Project Management Professional (PMP)'],
    education: ['Healthcare IT Specialization'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Senior Consultant',
      '10+ years of experience in healthcare IT',
      'Board Member - Civilian Police Oversight Agency'
    ]
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
    certifications: ['Project Management Professional (PMP)', 'Certified ScrumMaster (CSM)', 'Certified Scrum Product Owner (CSPO)'],
    education: ['Project Management Certification'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Senior Consultant',
      'Florida PALM Project',
      'Cloud migrations for state agencies',
      '25+ years of experience in enterprise-wide initiatives'
    ]
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
    certifications: ['Project Management Professional (PMP)', 'Certified ScrumMaster (CSM)', 'Lean Six Sigma Green Belt'],
    education: ['Master\'s in Project Management from The Citadel'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Consultant',
      'General Services Administration',
      'State of New Mexico',
      'Broadband expansion initiatives',
      'Enterprise system optimizations'
    ]
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
    certifications: ['Project Management Professional (PMP)', 'Certified Scrum Product Owner (CSPO)', 'Certified ScrumMaster (CSM)'],
    education: ['MBA from Haslam College of Business'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Consultant',
      'Los Alamos National Laboratory',
      'ServiceNow HRSD product roadmap (40% higher adoption, 25% lower operational costs)'
    ]
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
    certifications: ['Product Management Certification'],
    education: ['Product Management Training'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Consultant',
      'Experienced Product Manager',
      'Cross-functional collaboration specialist',
      'Technical requirements analysis'
    ]
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

With a deep commitment to empowering organizations, Marilyn excels at translating vision into action. Her ability to weave compelling narratives ensures that strategies not only achieve outcomes but also inspire teams and stakeholders to embrace change. Her expertise in Vendor Management and Data & Analytics Consulting further strengthens her ability to deliver impactful, sustainable growth for clients across sectors.

Marilyn's collaborative spirit and strategic insight make her an invaluable partner in writing the next chapter of your organization's success. Join her in transforming challenges into opportunities and unlocking your business's full potential.

Let's connect to explore how Marilyn and the Elite Enterprise Transformation Consulting Group can drive your vision forward!`,
    image: '/images/consultants/placeholder-image.jpeg',
    certifications: ['Strategic Planning Certification'],
    education: ['Business Strategy and Analytics'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Senior Consultant',
      'Diverse industry experience',
      'Data-driven strategy implementation',
      'Stakeholder alignment specialist'
    ]
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
    certifications: ['Six Sigma Green Belt'],
    education: [
      'Associate\'s degree in Interdisciplinary Studies - Central New Mexico Community College',
      'Bachelor\'s in Psychology (in progress) - Western Governors University'
    ],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Consultant',
      'Administrative Assistant - 7+ years experience',
      'Budget management',
      'Process improvement specialist'
    ]
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
    certifications: ['Talent Acquisition Specialist'],
    education: ['University of California, San Diego'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Consultant',
      'Microsoft - Talent Acquisition',
      'Leadership recruitment',
      'Professional mentoring'
    ]
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
    certifications: ['Project Management Professional (PMP)', 'Professional Scrum Master (PSM I)'],
    education: ['Advanced Project Management'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Senior Consultant',
      'WhirlWind Technologies',
      'Department of Treasury',
      'Enterprise PMO establishment',
      'ISO 9001:2015-compliant quality systems implementation'
    ]
  }
];

// Generate static params for all consultant IDs
export async function generateStaticParams() {
  return consultants.map((consultant) => ({
    id: consultant.id,
  }));
}

interface ConsultantPageProps {
  params: Promise<{ id: string }>;
}

export default async function ConsultantProfile({ params }: ConsultantPageProps) {
  const { id } = await params;
  
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
      <ConsultantViewTracker consultantName={consultant.name} consultantId={consultant.id} />
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
      <ConsultantCTA consultantName={consultant.name} consultantId={consultant.id} />
    </>
  );
}
