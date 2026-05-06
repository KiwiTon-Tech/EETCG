'use client';

import Link from 'next/link';

export default function Partnerships() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Partnerships</h1>
          <p className="max-w-3xl mx-auto text-xl">
            Three small businesses, one integrated delivery team. PMO-as-a-Service
            built for federal, state, and enterprise clients.
          </p>
        </div>
      </section>

      {/* When This Engagement Fits */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">When This Engagement Fits</h2>
            <p className="text-gray-600">
              Our partnership is purpose-built for organizations facing these realities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Governance, Compliance, or Audit Pressure</h3>
              <p className="text-gray-600">
                PMO maturity isn&apos;t matching reporting requirements. Steering committees,
                risk logs, and executive dashboards need to be real, not performative.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">Internal Capacity Gaps</h3>
              <p className="text-gray-600">
                Your IT team is delivering, but project management is a side-of-desk role.
                You need experienced PMs without permanent FTE headcount.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold">PMO Stand-up or Maturity Uplift</h3>
              <p className="text-gray-600">
                You want a PMO. You don&apos;t want to spend a year building one. We bring
                the templates, frameworks, and operating model on day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Partnership */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">The Partnership</h2>
            <p className="text-gray-600">
              Three small businesses, one integrated delivery team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white rounded bg-navy">
                PRIME
              </div>
              <h3 className="mb-2 text-xl font-bold">IT Connect, Inc.</h3>
              <p className="mb-3 text-sm font-semibold text-gray-700">
                Minority-owned IT services firm · New Mexico
              </p>
              <p className="text-gray-600">
                Active engagements with Los Alamos National Laboratory, the State of
                New Mexico, Santa Fe County, the City of Santa Fe, and Santa Fe Public
                Schools. Federal contract vehicles include 8(a), GSA, and PSFA.
              </p>
            </div>

            <div className="p-6 bg-white border-2 rounded-lg shadow-md border-gold">
              <div className="inline-block px-3 py-1 mb-3 text-xs font-bold rounded bg-gold text-navy">
                EETCG
              </div>
              <h3 className="mb-2 text-xl font-bold">Elite Enterprise (EETCG)</h3>
              <p className="mb-3 text-sm font-semibold text-gray-700">
                Woman- and minority-owned · Augusta, GA (local to SRNL)
              </p>
              <p className="text-gray-600">
                Project and program management firm led by Carla Monroe (PMP, CSM,
                CSPO, ITIL, Six Sigma Black Belt). Prior DOE National Laboratory work
                included Senior Contractor Assurance Specialist (Q clearance), HR
                transformation, and Six Sigma deployment.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="inline-block px-3 py-1 mb-3 text-xs font-bold text-white rounded bg-navy">
                PARTNER
              </div>
              <h3 className="mb-2 text-xl font-bold">Holloway Consulting Group</h3>
              <p className="mb-3 text-sm font-semibold text-gray-700">
                Black-woman-owned · PMO build &amp; OCM practice
              </p>
              <p className="text-gray-600">
                Founded by Yuquan Holloway (PMP, Lean Six Sigma Black Belt, Master
                Black Belt). Stood up the directive PMO at Oldcastle Infrastructure.
                Led IT PMO and Service Management at The Coca-Cola Company, including
                Apptio deployment managing $500M+ in IT spend.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-600">
            Comfortable engaging directly, through BSRA, or as a sub to an existing prime.
          </p>
        </div>
      </section>

      {/* The People */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">The People</h2>
            <p className="mb-6 text-gray-600">
              Active and prior federal clearances on team (TS, Q, Public Trust). Broader
              bench includes 10+ project managers, business analysts, change leads, and
              engineers across the three partner firms.
            </p>
            <div className="flex flex-col items-center justify-center mb-4 space-y-2 md:flex-row md:space-y-0 md:space-x-3">
              <Link href="/consultants" className="btn btn-primary">
                Meet the Bench
              </Link>
            </div>
            <p className="text-sm text-gray-500">Resumes available on request.</p>
          </div>
        </div>
      </section>

      {/* What We Bring on Day One */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">What We Bring on Day One</h2>
            <p className="text-gray-600">
              A library of proven, customizable PMO artifacts — refined across federal,
              enterprise, and government engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Governance', body: 'Charters, RACI, decision rights, steering committee operating models' },
              { title: 'Risk & Issues', body: 'RAID logs, risk scoring, escalation paths, mitigation playbooks' },
              { title: 'Schedule', body: 'Integrated master schedule, vendor coordination, milestone baselines' },
              { title: 'Change Control', body: 'Change request flow, impact assessment, CCB, version control' },
              { title: 'Reporting', body: 'Executive dashboards, weekly status, KPI rollups, portfolio views' },
              { title: 'Process & OCM', body: 'Process maps, training plans, stakeholder analysis, communication plans' },
            ].map((c) => (
              <div key={c.title} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-xl font-bold text-navy">{c.title}</h3>
                <p className="text-gray-600">{c.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-gray-700">
            <span className="font-semibold">Time to value: weeks, not months.</span>{' '}
            Templates are the starting point. Every artifact is tailored to the engagement.
          </p>
        </div>
      </section>

      {/* Representative Engagements */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Representative Engagements</h2>
            <p className="text-gray-600">Active and recent work across our combined bench.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: 'City of Santa Fe — Utility Billing Modernization',
                tag: 'Multi-vendor PMO running end-to-end',
                body: 'Active engagement. Seven-person program management office coordinating multiple vendors across configuration, data conversion, testing, IVR, and SharePoint.',
              },
              {
                title: 'Santa Fe County — M365 Migration & RECC Data Center Relocation',
                tag: 'Mission-critical cutover delivered',
                body: 'County-wide migration of 400+ employees and infrastructure relocation supporting Regional Emergency Communications Center.',
              },
              {
                title: 'Oldcastle Infrastructure — Directive PMO Stand-up',
                tag: 'PMO transitioned to client ownership',
                body: 'Built the PMO for a multi-billion-dollar enterprise. Transitioned to internal staff after operating model was proven.',
              },
              {
                title: 'The Coca-Cola Company — IT PMO and Service Management',
                tag: '$500M+ IT spend; 40% CTO infra budget cut',
                body: 'IT Service Management strategy, Apptio deployment, and Application Rationalization roadmap. Cloud migration across 22 bottlers in 24 countries.',
              },
              {
                title: 'Santa Fe Public Schools — IT PMO Stand-up & Operations',
                tag: 'PMO stood up and operated',
                body: 'Built and staffed the IT PMO. Led tech installations across new schools (VoIP, video security, switches, servers) on a $7M+ budget.',
              },
              {
                title: 'DOE National Laboratory — Contractor Assurance & HR Transformation',
                tag: '100+ HR staff trained; 2x productivity gains',
                body: 'Senior Contractor Assurance Specialist supporting KPI and Balanced Scorecard development. Six Sigma Black Belt deployment across HR (Q clearance at the time).',
              },
            ].map((e) => (
              <div key={e.title} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-lg font-bold">{e.title}</h3>
                <p className="mb-3 text-sm font-semibold text-gold">{e.tag}</p>
                <p className="text-gray-600">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Business & Contracting */}
      <section className="py-16 bg-light-gray">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Small Business & Contracting Posture</h2>
            <p className="text-gray-600">
              Built to support SRNL&apos;s small and diverse business participation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-bold">Designations</h3>
              <ul className="space-y-3 text-gray-600">
                <li><span className="font-semibold">IT Connect, Inc.</span> — Minority-owned business · 8(a) certified</li>
                <li><span className="font-semibold">Elite Enterprise (EETCG)</span> — Woman- and minority-owned · Augusta, GA (local to SRNL)</li>
                <li><span className="font-semibold">Holloway Consulting Group</span> — Black-woman-owned business</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-xl font-bold">Contracting Posture</h3>
              <ul className="space-y-3 text-gray-600">
                <li><span className="font-semibold">Direct engagement</span> — Where contract vehicles permit, IT Connect engages directly as prime.</li>
                <li><span className="font-semibold">Through BSRA</span> — Comfortable engaging through Battelle Savannah River Alliance as a subcontractor.</li>
                <li><span className="font-semibold">Sub to existing prime</span> — Available as a sub to an incumbent prime already on contract at SRNL.</li>
                <li><span className="font-semibold">Federal vehicles</span> — GSA, 8(a), PSFA, NM and AZ statewide vehicles available through IT Connect.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How an Engagement Starts */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">How an Engagement Starts</h2>
            <p className="text-gray-600">
              A typical first 90 days. Adjusted to scope, vendor landscape, and clearance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { days: 'Days 1–14', title: 'Discovery', body: 'Stakeholder interviews, current-state portfolio review, RAID baseline, governance assessment.' },
              { days: 'Days 15–30', title: 'Foundation', body: 'Charter, operating model, schedule baseline, reporting cadence, change-control framework.' },
              { days: 'Days 31–60', title: 'Stand-up', body: 'PMO tools live, vendor coordination running, first executive dashboard published, OCM plan in motion.' },
              { days: 'Days 61–90', title: 'Steady State', body: 'PMO operating, first milestone delivered or recovered, retrospective and roadmap to month four onward.' },
            ].map((p) => (
              <div key={p.title} className="p-6 bg-white rounded-lg shadow-md">
                <p className="mb-2 text-sm font-bold text-gold">{p.days}</p>
                <h3 className="mb-2 text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-gray-600">
            <span className="font-semibold">Engagement length:</span> typical PMO operate
            phase runs 6 to 18 months. Stand-up only engagements run 90 to 120 days.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white bg-navy">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Let&apos;s Talk</h2>
          <p className="mb-2 text-xl">Carla Monroe, PMP</p>
          <p className="mb-6 text-gray-300">
            Director, Project Management Office · Elite Enterprise
          </p>
          <div className="flex flex-col items-center justify-center mb-8 space-y-2 md:flex-row md:space-y-0 md:space-x-6">
            <a href="mailto:cmonroe@itconnectinc.com" className="hover:text-gold">
              cmonroe@itconnectinc.com
            </a>
            <a href="tel:+15055048240" className="hover:text-gold">
              (505) 504-8240
            </a>
          </div>

          <div className="max-w-2xl pt-6 mx-auto border-t border-white/20">
            <p className="mb-3 text-sm font-semibold tracking-wider text-gold">PARTNERS</p>
            <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
              <a href="https://www.itconnectinc.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                IT Connect, Inc.
              </a>
              <a href="https://hollowaycg.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Holloway Consulting Group
              </a>
              <a href="https://eliteenterprisetcg.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                Elite Enterprise
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/contact" className="btn bg-gold text-navy hover:bg-opacity-90">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
