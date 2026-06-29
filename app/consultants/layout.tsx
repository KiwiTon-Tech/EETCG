import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Consultants | Elite Enterprise Transformation Consulting Group',
  description: 'Meet the EETCG bench — 13 cleared, credentialed project managers, program managers, and change leads spanning federal labs, national programs, and enterprise PMOs.',
};

export default function ConsultantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
