import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { fontClasses } from './services/fonts';
import { siteConfig } from './metadata.config';

export const metadata: Metadata = {
  title: 'Elite Enterprise Transformation Consulting Group',
  description: 'Professional consulting services specializing in Project Management, Program Management, Strategic Planning, Data & Analytics, Vendor Management, and AI Consulting.',
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontClasses}>
      {/* Using system fonts defined in globals.css */}
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
