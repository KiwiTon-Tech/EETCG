export interface Consultant {
  id: string;
  name: string;
  title: string;
  firm?: string;
  clearance?: string;
  certifications: string[];
  education: string[];
  experience: string[];
  specialties: string[];
  shortBio: string;
  fullBio: string;
  image: string;
}

export const consultants: Consultant[] = [
  {
    id: 'carla',
    name: 'Carla Monroe, PMP',
    title: 'Director, Project Management Office · Owner',
    firm: 'Elite Enterprise (EETCG)',
    clearance: 'Q clearance (prior)',
    certifications: ['PMP', 'CSM', 'CSPO', 'ITIL', 'Six Sigma Black Belt', 'Prosci'],
    education: ['Life Purpose Institute', 'UCLA Extension Advanced Showrunner Course'],
    experience: [
      'Director, PMO · EETCG / IT Connect / Holloway partnership',
      'Senior Contractor Assurance Specialist · Savannah River National Laboratory (Q clearance)',
      'State of New Mexico — MMISR modernization',
      'Santa Fe Public Schools PMO',
      '20+ years across DOE National Laboratories',
    ],
    specialties: ['Project Management', 'Program Management', 'PMO Stand-up', 'Contractor Assurance', 'Strategic Planning'],
    shortBio:
      '20+ years across DOE National Laboratories, the State of New Mexico (MMISR modernization), and Santa Fe Public Schools. Senior Contractor Assurance Specialist at SRNL.',
    fullBio: `Carla Monroe, PMP, is the owner of Elite Enterprise Transformation Consulting Group and serves as Director of the Project Management Office for the EETCG / IT Connect / Holloway Consulting Group partnership. Based local to the Savannah River National Laboratory in Augusta, GA, Carla brings 20+ years of experience standing up and operating PMOs across federal, state, and enterprise environments.

Her career includes work across DOE National Laboratories (Senior Contractor Assurance Specialist at SRNL, Q clearance at the time), the State of New Mexico's MMISR modernization program, and the Santa Fe Public Schools PMO. Carla holds PMP, CSM, CSPO, ITIL, Six Sigma Black Belt, and Prosci change management credentials.

Carla leads engagements where governance, compliance, and audit pressure require a real PMO — not a performative one. She specializes in establishing operating models, RAID logs, executive dashboards, and steering committee cadence that survive contact with executives and auditors alike.

Let's connect to bring rigorous program management to your most complex initiatives.`,
    image: '/images/consultants/carla-monroe.jpeg',
  },
  {
    id: 'yuquan-holloway',
    name: 'Yuquan Holloway, PMP',
    title: 'Principal · Holloway Consulting Group',
    firm: 'Holloway Consulting Group (Partner)',
    certifications: ['PMP', 'Master Black Belt', 'Lean Six Sigma Black Belt'],
    education: ['Adjunct Professor, Kennesaw State University'],
    experience: [
      'Founder · Holloway Consulting Group (Black-woman-owned)',
      'Directive PMO Stand-up · Oldcastle Infrastructure',
      'IT PMO & Service Management · The Coca-Cola Company',
      'Apptio deployment managing $500M+ in IT spend',
      'Cloud migration across 22 bottlers in 24 countries',
    ],
    specialties: ['PMO Stand-up', 'IT Service Management', 'Process Reengineering', 'Program Management'],
    shortBio:
      'Built the directive PMO at Oldcastle Infrastructure. Led IT PMO and Service Management at The Coca-Cola Company, including Apptio deployment managing $500M+ in IT spend.',
    fullBio: `Yuquan Holloway, PMP, is the founder of Holloway Consulting Group, a Black-woman-owned PMO build and Organizational Change Management practice, and a partner in the EETCG / IT Connect / Holloway Consulting Group PMO-as-a-Service partnership.

Yuquan stood up the directive PMO at Oldcastle Infrastructure for a multi-billion-dollar enterprise and transitioned it to internal staff once the operating model was proven. At The Coca-Cola Company, she led IT PMO and Service Management, including Apptio deployment managing $500M+ in IT spend, IT Service Management strategy, and an Application Rationalization roadmap covering cloud migration across 22 bottlers in 24 countries that contributed to a 40% reduction in CTO infrastructure budget.

A Master Black Belt and Lean Six Sigma Black Belt, Yuquan also serves as an Adjunct Professor at Kennesaw State. She brings deep expertise in PMO stand-up, ITSM, OCM, and process reengineering at enterprise scale.`,
    image: '/images/consultants/place-holder.jpg',
  },
  {
    id: 'brillyance-ramsey',
    name: 'Brillyance Ramsey, MSPM',
    title: 'Program Analyst',
    firm: 'Partnership Bench',
    clearance: 'Public Trust',
    certifications: ['CSM', 'CSPO', 'Lean Six Sigma Green Belt', 'FAC P/PM I', 'COR'],
    education: ["Master's in Project Management (MSPM)"],
    experience: [
      'Program Analyst · General Services Administration (GSA)',
      'Dashboards in Alteryx and MicroStrategy',
      'Federal acquisition support (FAC P/PM I, COR certified)',
    ],
    specialties: ['Program Analysis', 'Reporting & Dashboards', 'Federal Acquisition Support'],
    shortBio:
      'GSA program analyst with active Public Trust clearance. Builds dashboards in Alteryx and MicroStrategy. FAC P/PM I and COR certified.',
    fullBio: `Brillyance Ramsey, MSPM, is a program analyst on our combined partnership bench with active Public Trust clearance and prior General Services Administration program analyst experience. She specializes in program reporting, KPI rollups, and executive dashboards built in Alteryx and MicroStrategy.

Brillyance holds a Master's in Project Management and a portfolio of credentials including CSM, CSPO, Lean Six Sigma Green Belt, FAC P/PM I, and COR — making her a strong fit for federal program offices that require both delivery rigor and acquisition fluency.`,
    image: '/images/consultants/place-holder.jpg',
  },
  {
    id: 'jessica',
    name: 'Jessica Shaw, PMP',
    title: 'Technical Program Manager',
    firm: 'Elite Enterprise (EETCG)',
    clearance: 'Active TS Clearance',
    certifications: ['PMP'],
    education: ['Bachelor of Science in Computer Science / Systems Engineering'],
    experience: [
      'Technical Program Manager · Elite Enterprise',
      'Savannah River National Laboratory (HPC)',
      'Los Alamos National Laboratory',
      'Identity, access & authentication modernization (44% security rule reduction)',
      'SharePoint and Power BI governance platforms',
    ],
    specialties: ['Technical Program Management', 'Infrastructure Modernization', 'Identity & Access', 'Data & Analytics'],
    shortBio:
      '11+ years leading infrastructure modernization. Former SRNL (HPC) and LANL. Drove identity, access, and authentication modernization reducing security rules 44%.',
    fullBio: `Jessica Shaw, PMP, is a Technical Program Manager with active Top Secret clearance and 11+ years leading infrastructure modernization across federal, national laboratory, and enterprise environments.

Her prior work includes positions at the Savannah River National Laboratory (high-performance computing) and Los Alamos National Laboratory. Jessica drove identity, access, and authentication modernization that reduced security rules by 44%, and built SharePoint and Power BI governance platforms supporting executive program reporting.

Jessica brings a results-oriented systems engineering mindset to PMO and program management work — translating complex technical challenges into streamlined, governable delivery plans with clear success criteria and reporting.`,
    image: '/images/consultants/jessica-shaw.jpeg',
  },
  {
    id: 'zander',
    name: 'Alex Bolyanatz, PMP',
    title: 'Senior Technical Program Manager',
    firm: 'Elite Enterprise (EETCG)',
    certifications: ['PMP'],
    education: ['Healthcare IT Specialization'],
    experience: [
      'Senior Technical Program Manager · Elite Enterprise',
      'Program Manager · City of Santa Fe enterprise AI initiative',
      '$5M city-wide portfolio across 15+ concurrent projects',
      'Healthcare data warehousing',
      'Board Member · Civilian Police Oversight Agency',
    ],
    specialties: ['Program Management', 'Enterprise AI', 'Healthcare Data', 'Portfolio Management', 'Vendor Management'],
    shortBio:
      'Program manager for the City of Santa Fe enterprise AI initiative. Led $5M city-wide portfolio across 15+ concurrent projects.',
    fullBio: `Alex Bolyanatz, PMP, is a Senior Technical Program Manager with 12+ years across healthcare, government, and data engagements, based in the Albuquerque-Santa Fe Metropolitan Area.

Alex serves as program manager for the City of Santa Fe enterprise AI initiative and has led a $5M city-wide portfolio spanning 15+ concurrent projects. His earlier career in healthcare data warehousing built deep expertise in data architecture, vendor coordination, and aligning technology delivery with measurable business outcomes.

At Elite Enterprise, Alex guides clients through digital and AI transformations, building program structures that keep complex multi-vendor portfolios on track. He also serves on the board of the Civilian Police Oversight Agency, reinforcing a commitment to transparent stakeholder engagement.`,
    image: '/images/consultants/zander-bolyanatz.jpeg',
  },
  {
    id: 'john-lawrence',
    name: 'John Lawrence II, PMP',
    title: 'ePMO Governance Lead',
    firm: 'Partnership Bench',
    certifications: ['PMP', 'PSM I'],
    education: ['Advanced Project Management'],
    experience: [
      'ePMO Governance Lead · Partnership',
      'Santa Fe County M365 migration (400+ users)',
      'RECC data center relocation',
      'Department of Treasury',
      'Enterprise PMO stand-ups (CMMI L3, ISO 9001:2015)',
    ],
    specialties: ['ePMO Governance', 'Federal Frameworks (CMMI, ISO 9001)', 'Migrations', 'Quality Management'],
    shortBio:
      'Federal ePMO frameworks (CMMI L3, ISO 9001). Led Santa Fe County M365 migration (400+ users) and RECC data center relocation.',
    fullBio: `John Lawrence II, PMP, PSM I, is our ePMO Governance Lead with over two decades of experience leading enterprise program management across federal agencies and state/local government.

John led the Santa Fe County M365 migration covering 400+ employees and the Regional Emergency Communications Center (RECC) data center relocation. He has stood up enterprise PMOs aligned to CMMI Level 3 and ISO 9001:2015-compliant quality systems, and supported mission-critical work at organizations including the Department of Treasury.

John specializes in ePMO governance frameworks, quality management, and process reengineering for engagements with rigorous federal compliance requirements.`,
    image: '/images/consultants/place-holder.jpg',
  },
  {
    id: 'angela-willis-clay',
    name: 'Angela Willis-Clay',
    title: 'Senior Consultant',
    certifications: ['Project Management Professional (PMP)', 'Certified ScrumMaster (CSM)', 'Certified Scrum Product Owner (CSPO)'],
    education: ['Project Management Certification'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Senior Consultant',
      'Florida PALM Project',
      'Cloud migrations for state agencies',
      '25+ years of experience in enterprise-wide initiatives',
    ],
    specialties: ['Project Management', 'Process Reengineering', 'Organizational Transformation'],
    shortBio:
      'Certified Project Management Professional (PMP) with over 25 years of experience driving enterprise-wide initiatives to success.',
    fullBio: `Hello, I'm Angela Willis-Clay, a senior consultant at Elite Enterprise Transformation Consulting Group, based in Tallahassee, Florida, with over 25 years of experience driving enterprise-wide initiatives to success. As a Certified Project Management Professional (PMP), Certified ScrumMaster (CSM), and Certified Scrum Product Owner (CSPO), I specialize in delivering strategic solutions in project management, process reengineering, and organizational transformation. My passion lies in streamlining complex challenges into actionable, results-driven strategies that empower organizations to achieve their goals.

At Elite Enterprise Transformation Consulting Group, I leverage my expertise in program planning, data analysis, and stakeholder engagement to deliver high-impact outcomes across industries, including government, education, and healthcare. My work on projects like the Florida PALM Project and cloud migrations for state agencies demonstrates my ability to manage multi-million-dollar portfolios, foster cross-functional collaboration, and ensure compliance with rigorous standards. With a commitment to excellence and a diplomatic leadership style, I'm dedicated to building strong partnerships and driving measurable success. Let's connect to explore how I can help your organization thrive!`,
    image: '/images/consultants/angela-willis-clay.jpeg',
  },
  {
    id: 'pagie-ramsey',
    name: 'Paige Ramsey',
    title: 'Consultant',
    certifications: ['Project Management Professional (PMP)', 'Certified ScrumMaster (CSM)', 'Lean Six Sigma Green Belt'],
    education: ["Master's in Project Management from The Citadel"],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Consultant',
      'General Services Administration',
      'State of New Mexico',
      'Broadband expansion initiatives',
      'Enterprise system optimizations',
    ],
    specialties: ['Project Management', 'Program Management', 'Lean Six Sigma'],
    shortBio:
      'Certified Project Management Professional (PMP) with over a decade of experience in delivering strategic IT project and program management solutions.',
    fullBio: `Hello, I'm Paige Ramsey, a consultant at Elite Enterprise Transformation Consulting Group, based in the Charleston, South Carolina, Metropolitan Area. As a Certified Project Management Professional (PMP), Certified ScrumMaster (CSM), and Lean Six Sigma Green Belt, I bring over a decade of experience in delivering strategic IT project and program management solutions. My passion lies in optimizing processes, leveraging data-driven insights, and driving innovative technology initiatives to achieve business excellence.

With a Master's in Project Management from The Citadel and a robust background in managing mission-critical projects for organizations like the General Services Administration and the State of New Mexico, I specialize in full-lifecycle project execution, risk management, and stakeholder engagement. My work, including broadband expansion initiatives and enterprise system optimizations, reflects my ability to navigate complex challenges and deliver measurable results. Committed to fostering collaboration and excellence, I'm eager to help organizations transform through strategic, technology-focused solutions. Let's connect to drive your success!`,
    image: '/images/consultants/pagie-ramsey.jpeg',
  },
  {
    id: 'patti-jordan',
    name: 'Patti Jordan',
    title: 'Consultant',
    certifications: ['Project Management Professional (PMP)', 'Certified Scrum Product Owner (CSPO)', 'Certified ScrumMaster (CSM)'],
    education: ['MBA from Haslam College of Business'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Consultant',
      'Los Alamos National Laboratory',
      'ServiceNow HRSD product roadmap (40% higher adoption, 25% lower operational costs)',
    ],
    specialties: ['Project Management', 'Agile Methodologies', 'IT Solutions'],
    shortBio:
      'Project Management Professional (PMP) with expertise in delivering high-impact IT solutions using Agile and Waterfall methodologies.',
    fullBio: `Hello, I'm Patti Jordan, a consultant at Elite Enterprise Transformation Consulting Group, based in the United States. As a Project Management Professional (PMP), Certified Scrum Product Owner (CSPO), and Certified ScrumMaster (CSM) with an MBA from the Haslam College of Business, I bring extensive experience in delivering high-impact IT solutions using Agile and Waterfall methodologies. My passion lies in transforming complex IT challenges into streamlined, value-driven outcomes that exceed stakeholder expectations.

With a proven track record at organizations like Los Alamos National Laboratory, I've led initiatives such as the ServiceNow HRSD product roadmap, achieving 40% higher adoption and 25% lower operational costs. My expertise in stakeholder management, risk mitigation, and change management enables me to drive cross-functional collaboration and deliver projects on time and within budget. Committed to fostering innovation and operational excellence, I'm eager to help organizations achieve strategic goals through tailored, technology-focused solutions. Let's connect to elevate your business success!`,
    image: '/images/consultants/patti-jordan.jpeg',
  },
  {
    id: 'stephanie-shaw',
    name: 'Stephanie D. Shaw',
    title: 'Consultant',
    certifications: ['Product Management Certification'],
    education: ['Product Management Training'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Consultant',
      'Experienced Product Manager',
      'Cross-functional collaboration specialist',
      'Technical requirements analysis',
    ],
    specialties: ['Product Management', 'Innovation', 'User-Centric Solutions'],
    shortBio:
      'Experienced Product Manager specializing in transforming complex technical challenges into user-centric products that align with strategic business goals.',
    fullBio: `Consultant, Elite Enterprise Transformation Consulting Group

Hello, I'm Stephanie D. Shaw, a consultant for Elite Enterprise Transformation Consulting Group based in the Aiken, South Carolina area, passionate about driving innovation and delivering impactful solutions. As an experienced Product Manager, I specialize in transforming complex technical challenges into user-centric products that align with strategic business goals. My ability to quickly adapt to new environments, combined with my expertise in product development and cross-functional collaboration, positions me to excel as a consultant, helping organizations solve problems and achieve measurable outcomes.

With a proven track record of breaking down technical requirements into actionable strategies, I ensure products meet user needs while driving business value. Recognized for building consensus among diverse stakeholders and communicating effectively with both technical and non-technical audiences, I thrive in fast-paced settings, delivering results through analytical rigor and a collaborative spirit. Let's connect to explore how I can bring my strategic insight and product expertise to empower your organization with transformative solutions!`,
    image: '/images/consultants/stephanie-shaw.jpeg',
  },
  {
    id: 'marilyn-ortiz',
    name: 'Marilyn Ortiz',
    title: 'Senior Consultant',
    certifications: ['Strategic Planning Certification'],
    education: ['Business Strategy and Analytics'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Senior Consultant',
      'Diverse industry experience',
      'Data-driven strategy implementation',
      'Stakeholder alignment specialist',
    ],
    specialties: ['Project Management', 'Strategic Planning', 'AI Consulting', 'Vendor Management', 'Data & Analytics'],
    shortBio:
      'Dynamic consultant with expertise in driving organizational success through innovative strategies and human-centered solutions.',
    fullBio: `Welcome to the journey of transformation with Marilyn Ortiz, a dynamic Senior Consultant at Elite Enterprise Transformation Consulting Group. With a passion for driving organizational success through innovative strategies and human-centered solutions, Marilyn brings expertise in Project Management, Strategic Planning, and AI Consulting.

Marilyn's approach is rooted in the power of connection and collaboration, blending analytical precision with creative problem-solving to deliver measurable results. Her professional journey spans diverse industries, where she has honed her ability to navigate complex challenges, foster stakeholder alignment, and implement data-driven strategies that propel businesses forward. Whether guiding organizations through transformative change or leveraging cutting-edge AI tools to unlock new opportunities, Marilyn is dedicated to crafting tailored solutions that resonate with clients' unique goals.

With a deep commitment to empowering organizations, Marilyn excels at translating vision into action. Her expertise in Vendor Management and Data & Analytics Consulting strengthens her ability to deliver impactful, sustainable growth for clients across sectors.`,
    image: '/images/consultants/place-holder.jpg',
  },
  {
    id: 'laura-ashley-shaw',
    name: 'Laura-Ashley Shaw',
    title: 'Consultant',
    certifications: ['Six Sigma Green Belt'],
    education: [
      "Associate's degree in Interdisciplinary Studies - Central New Mexico Community College",
      "Bachelor's in Psychology (in progress) - Western Governors University",
    ],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Consultant',
      'Administrative Assistant - 7+ years experience',
      'Budget management',
      'Process improvement specialist',
    ],
    specialties: ['Administrative Support', 'Process Improvement', 'Organizational Skills'],
    shortBio:
      'Administrative professional with over seven years of experience providing high-level support to senior executives and managing confidential information.',
    fullBio: `Hello, I'm Laura-Ashley Shaw, a consultant at Elite Enterprise Transformation Consulting Group, based in the Albuquerque, New Mexico area. With over seven years of experience as an Administrative Assistant, I specialize in providing high-level support to senior executives, managing calendars, organizing meetings, and handling confidential documents with discretion. My passion lies in fostering effective communication with internal and external stakeholders to drive organizational success.

Equipped with an Associate's degree in Interdisciplinary Studies from Central New Mexico Community College and pursuing a Bachelor's in Psychology at Western Governors University, I bring strong organizational skills, a Six Sigma Green Belt certification, and a proven ability to work independently or as part of a team. My experience in budget management and process improvement enables me to deliver tailored administrative solutions that enhance operational efficiency and support strategic goals. Let's connect to explore how I can help streamline your organization's administrative processes!`,
    image: '/images/consultants/laura-ashley-shaw.jpeg',
  },
  {
    id: 'tamoy-monroe',
    name: 'Tamoy Monroe',
    title: 'Consultant',
    certifications: ['Talent Acquisition Specialist'],
    education: ['University of California, San Diego'],
    experience: [
      'Elite Enterprise Transformation Consulting Group - Consultant',
      'Microsoft - Talent Acquisition',
      'Leadership recruitment',
      'Professional mentoring',
    ],
    specialties: ['Talent Acquisition', 'Leadership Recruitment', 'Team Building'],
    shortBio:
      'Talent acquisition specialist with extensive experience in fostering diverse, high-performing teams and driving organizational success.',
    fullBio: `Hello, I'm Tamoy Monroe, a consultant at Elite Enterprise Transformation Consulting Group, based in the Irvine area. With a strong background in talent acquisition and leadership recruitment from my time at Microsoft, I specialize in fostering diverse, high-performing teams and driving organizational success. My passion lies in building meaningful connections and delivering strategic solutions that align with business goals.

With a degree from the University of California, San Diego, and extensive experience mentoring professionals, I bring a customer-focused approach to consulting, emphasizing collaboration and innovative problem-solving. My expertise in navigating complex hiring landscapes and supporting leadership development enables me to deliver tailored strategies for clients. Let's connect to explore how I can help your organization thrive through people-centric solutions!`,
    image: '/images/consultants/tamoy-monroe.jpeg',
  },
];
