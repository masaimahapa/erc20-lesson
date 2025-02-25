'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-xl">TokenMaster</span>
          </div>

    
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition">Home</Link>
            <Link href="#learn" className="text-gray-600 hover:text-gray-900 transition">Learn</Link>
            <Link href="#examples" className="text-gray-600 hover:text-gray-900 transition">Examples</Link>
          </div>

          <div className="hidden md:block">
            <Link href="#" className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-md font-medium transition">
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-4 pt-2 pb-4 space-y-1 border-t">
            <Link href="/" className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100 transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#learn" className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100 transition" onClick={() => setIsOpen(false)}>
              Learn
            </Link>
            <Link href="#examples" className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100 transition" onClick={() => setIsOpen(false)}>
              Examples
            </Link>
            <Link href="#resources" className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100 transition" onClick={() => setIsOpen(false)}>
              Resources
            </Link>
            <Link href="#contact" className="px-3 py-2 rounded text-gray-600 hover:bg-gray-100 border border-gray-300 transition text-center mt-2" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}