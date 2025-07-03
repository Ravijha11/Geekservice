"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-header-blue text-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Brand */}
        <Link 
          href="/" 
          className="text-xl sm:text-2xl font-bold font-serif hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
          style={{ letterSpacing: '1px' }}
          onClick={handleClick}
        >
          Geek Services
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-wrap gap-4 lg:gap-6 text-sm lg:text-base font-serif items-center">
          <Link 
            href="/" 
            className="hover:text-yellow-300 transition-colors duration-200 font-semibold" 
            onClick={handleClick}
          >
            Home
          </Link>
          <Link 
            href="/aboutus" 
            className="hover:text-yellow-300 transition-colors duration-200 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contactus" 
            className="hover:text-yellow-300 transition-colors duration-200 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link 
            href="/terms" 
            className="hover:text-yellow-300 transition-colors duration-200 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Terms &amp; Conditions
          </Link>
          <Link 
            href="/privacypolicy" 
            className="hover:text-yellow-300 transition-colors duration-200 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link 
            href="/refundpolicy" 
            className="hover:text-yellow-300 transition-colors duration-200 font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Refund Policy
          </Link>
          <a 
            href="tel:+18335732428" 
            className="flex items-center gap-2 bg-yellow-400 text-header-blue font-bold px-3 lg:px-4 py-2 rounded-lg shadow hover:bg-yellow-300 transition ml-2 text-sm lg:text-base"
          >
            <span role="img" aria-label="US Flag">🇺🇸</span>
            <span>+1 (833) 573-2428</span>
          </a>
        </nav>
        
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl sm:text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-header-blue text-white px-4 sm:px-8 pb-6 flex flex-col gap-4 animate-fade-in-down">
          <Link 
            href="/" 
            className="font-semibold hover:text-yellow-300 transition-colors duration-200 py-2" 
            onClick={handleClick}
          >
            Home
          </Link>
          <Link 
            href="/aboutus" 
            className="font-semibold hover:text-yellow-300 transition-colors duration-200 py-2"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contactus" 
            className="font-semibold hover:text-yellow-300 transition-colors duration-200 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
          <Link 
            href="/terms" 
            className="font-semibold hover:text-yellow-300 transition-colors duration-200 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Terms &amp; Conditions
          </Link>
          <Link 
            href="/privacypolicy" 
            className="font-semibold hover:text-yellow-300 transition-colors duration-200 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link 
            href="/refundpolicy" 
            className="font-semibold hover:text-yellow-300 transition-colors duration-200 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Refund Policy
          </Link>
          <a 
            href="tel:+18335732428" 
            className="flex items-center gap-2 bg-yellow-400 text-header-blue font-bold px-4 py-3 rounded-lg shadow hover:bg-yellow-300 transition mt-2"
          >
            <span role="img" aria-label="US Flag">🇺🇸</span>
            <span>+1 (833) 573-2428</span>
          </a>
        </nav>
      )}
    </header>
  );
} 