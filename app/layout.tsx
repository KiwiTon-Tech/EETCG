import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GoogleAnalytics } from '../components/GoogleAnalytics';
import { fontClasses } from './services/fonts';

export const metadata: Metadata = {
  title: 'Elite Enterprise Transformation Consulting Group',
  description: 'Professional consulting services specializing in Project Management, Program Management, Strategic Planning, Data & Analytics, Vendor Management, and AI Consulting.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
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
        <GoogleAnalytics />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
