'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white py-4 lg:py-1 px-6 flex items-center justify-between shadow-md relative z-50">
      {/* Location & Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/location.png"
          alt="Location Icon"
          width={20}
          height={20}
          className="object-contain animate-pulse"
        />
        <p className="text-sm text-gray-900">Edapally, Kochi</p>
      </div>

      {/* Center Logo */}
      <div className="flex items-center justify-center">
        <Image
          src="/daily-wages-logo.png"
          alt="Dailywages"
          width={80}
          height={40}
          className="hidden md:block object-contain"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-4">
        <Link
          href="/become-a-tasker"
          className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-4 py-2 rounded-md text-sm font-semibold shadow-sm"
        >
          Sign up / Log in
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-gray-700 hover:text-orange-500 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark background */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.div
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white z-50 shadow-xl p-6 flex flex-col gap-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              {[
                { href: '/', label: 'Home' },
                { href: '/become-a-tasker', label: 'Become a Tasker' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800 hover:text-orange-500 text-base font-medium transition-all"
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
