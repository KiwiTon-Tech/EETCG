'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = (href: string) =>
    `font-medium transition-colors ${
      pathname === href
        ? 'text-[color:var(--color-gold)] border-b-2 border-[color:var(--color-gold)] pb-0.5'
        : 'hover:text-[color:var(--color-gold)]'
    }`;

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logo/EETCG_logo.svg"
            alt="Elite Enterprise Transformation Consulting Group"
            width={160}
            height={48}
            className="object-contain"
            style={{ height: '48px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link href="/" className={navLinkClass('/')}>
            Home
          </Link>
          <Link href="/about" className={navLinkClass('/about')}>
            About
          </Link>
          <Link href="/services" className={navLinkClass('/services')}>
            Services
          </Link>
          <Link href="/consultants" className={navLinkClass('/consultants')}>
            Consultants
          </Link>
          <Link href="/partnerships" className={navLinkClass('/partnerships')}>
            Partnerships
          </Link>
          <Link href="/contact" className={navLinkClass('/contact')}>
            Contact
          </Link>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn btn-primary">
            Schedule a Consultation
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="absolute left-0 w-full p-4 bg-white shadow-lg top-20 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={navLinkClass('/')}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={navLinkClass('/about')}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className={navLinkClass('/services')}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/consultants"
                className={navLinkClass('/consultants')}
                onClick={() => setIsMenuOpen(false)}
              >
                Consultants
              </Link>
              <Link
                href="/partnerships"
                className={navLinkClass('/partnerships')}
                onClick={() => setIsMenuOpen(false)}
              >
                Partnerships
              </Link>
              <Link
                href="/contact"
                className={navLinkClass('/contact')}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
