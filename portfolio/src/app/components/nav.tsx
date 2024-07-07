"use client";
import Link from 'next/link';
import { useState, useCallback } from 'react';


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activePath, setActivePath] = useState('/');
  const handleClick = useCallback((path: string) => {
    setActivePath(path);
    setIsOpen(false); // Close the menu on link click in mobile view
  }, []);

  const linkClasses = useCallback(
    (path: string) => `px-3 py-2 rounded-md text-sm font-medium ${activePath === path ? 'border-b-4 border-[#3471d6]' : ''}`,
    [activePath]
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center px-3 py-2 rounded-md text-sm font-medium">
            <div className="hidden sm:block sm:ml-6 ">
              <div className="flex space-x-4">
                <Link href="/" onClick={() => handleClick('/')} className={linkClasses('/')}>Home</Link>
                <Link href="/projects" onClick={() => handleClick('/projects')} className={linkClasses('/projects')}>Projects</Link>
                <Link href="/blogs" onClick={() => handleClick('/blogs')} className={linkClasses('/blogs')}>Blogs</Link>
                <Link href="/contact" onClick={() => handleClick('/contact')} className={linkClasses('/contact')}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
          <Link href="/blogs" className="block px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
}