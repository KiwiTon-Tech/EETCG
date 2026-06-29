import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Elite Enterprise Transformation Consulting Group',
  description: 'Reach out to schedule a consultation with the EETCG team. Project management, PMO stand-up, and transformation services for federal, state, and enterprise clients.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
