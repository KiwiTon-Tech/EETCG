import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-[color:var(--color-navy)] focus:font-semibold focus:rounded focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
