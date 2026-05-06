'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-[color:var(--color-navy)]">EETCG</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
          <Link href="/" className="font-medium hover:text-[color:var(--color-gold)]">
            Home
          </Link>
          <Link href="/about" className="font-medium hover:text-[color:var(--color-gold)]">
            About
          </Link>
          <Link href="/services" className="font-medium hover:text-[color:var(--color-gold)]">
            Services
          </Link>
          <Link href="/consultants" className="font-medium hover:text-[color:var(--color-gold)]">
            Consultants
          </Link>
          <Link href="/partnerships" className="font-medium hover:text-[color:var(--color-gold)]">
            Partnerships
          </Link>
          <Link href="/contact" className="font-medium hover:text-[color:var(--color-gold)]">
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
          <div className="absolute left-0 w-full p-4 bg-white shadow-lg top-16 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium hover:text-[color:var(--color-gold)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium hover:text-[color:var(--color-gold)]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="font-medium hover:text-[color:var(--color-gold)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/consultants"
                className="font-medium hover:text-[color:var(--color-gold)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Consultants
              </Link>
              <Link
                href="/partnerships"
                className="font-medium hover:text-[color:var(--color-gold)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Partnerships
              </Link>
              <Link
                href="/contact"
                className="font-medium hover:text-[color:var(--color-gold)]"
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
