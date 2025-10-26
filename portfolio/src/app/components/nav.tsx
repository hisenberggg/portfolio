"use client";
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from './theme-context';
import { FaSun, FaMoon } from 'react-icons/fa';


export function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const [activePath, setActivePath] = useState(usePathname());
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Hide navbar on individual project and blog pages
  const shouldHideNavbar = pathname?.match(/\/(projects|blogs)\/[^/]+$/);

  useEffect(() => {
    if (shouldHideNavbar) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // Always show at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, shouldHideNavbar]);

  const handleClick = useCallback((path: string) => {
    setActivePath(path);
  }, []);

  const linkClasses = useCallback(
    (path: string) => `px-3 py-2 text-sm font-medium transition-colors hover:text-[var(--accent)] ${activePath === path ? 'text-[var(--accent)]' : 'text-[var(--text)]'}`,
    [activePath]
  );

  // Don't render navbar on individual project/blog pages
  if (shouldHideNavbar) return null;

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}`}>
      <nav className="bg-[var(--surface)] rounded-2xl shadow-lg border border-gray-300 backdrop-blur-sm">
        <div className="flex items-center justify-between h-14 px-4 md:px-6">
          {/* Navigation Links - Always visible on all screens */}
          <div className="flex items-center space-x-2 md:space-x-4 flex-1 justify-center">
            <Link 
              href="/" 
              onClick={() => handleClick('/')} 
              className={linkClasses('/')}
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              onClick={() => handleClick('/projects')} 
              className={linkClasses('/projects')}
            >
              Projects
            </Link>
            <Link 
              href="/blogs" 
              onClick={() => handleClick('/blogs')} 
              className={linkClasses('/blogs')}
            >
              Blogs
            </Link>
            <a 
              href="/#contact" 
              className={linkClasses('/')}
            >
              Contact
            </a>
          </div>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-[var(--bg)] transition ml-2"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <FaMoon className="text-[var(--text)]" /> : <FaSun className="text-[var(--text)]" />}
          </button>
        </div>
      </nav>
    </div>
  );
}