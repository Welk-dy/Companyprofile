'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header({ children }) { // Accept children prop
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Function to close the menu

  return (
    <div>
      <nav className="flex h-[100px] w-full items-center justify-between px-6 py-4 md:px-8">
        {/* Left: Company Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/company_logo.png"
            alt="Company Logo"
            width={120}
            height={60}
          />
        </Link>

        {/* Hamburger Button (Visible on small screens) */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (Always visible on desktop) */}
        <div className="hidden md:flex md:items-center font-medium md:space-x-8">
          <Link href="about-us" className="text-gray-700 text-lg hover:underline">
            About Us
          </Link>
          <Link href="service" className="text-gray-700 text-lg hover:underline">
            Service
          </Link>
          <Link href="team" className="text-gray-700 text-lg hover:underline">
            Team
          </Link>
        </div>

        {/* Full-Screen Overlay for Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-9 right-5 text-gray-700 focus:outline-none"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links for Mobile */}
            <nav className="flex flex-col space-y-10 text-lg font-medium">
              <Link href="about-us" className="text-gray-700 text-3xl hover:underline" onClick={closeMenu}>
                About Us
              </Link>
              <Link href="service" className="text-gray-700 text-3xl hover:underline" onClick={closeMenu}>
                Service
              </Link>
              <Link href="team" className="text-gray-700 text-3xl hover:underline" onClick={closeMenu}>
                Team
              </Link>
            </nav>
          </div>
        )}
      </nav>
      {children}
      </div>   
  );
}