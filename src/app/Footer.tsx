"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaFileContract, FaShieldAlt, FaMoneyCheckAlt } from 'react-icons/fa';

export default function Footer() {
  const pathname = usePathname();
  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <footer className="pt-8 pb-4 px-4 mt-auto w-full shadow-inner" style={{ backgroundColor: 'rgb(54, 54, 54)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        {/* Left: Home Icon */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link 
            href="/" 
            onClick={handleHomeClick} 
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors duration-300 text-2xl font-bold"
          >
            <FaHome size={28} />
            <span className="hidden md:inline font-bold text-lg">Home</span>
          </Link>
        </div>
        {/* Center: Navigation Links with Icons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base font-serif justify-center items-center">
          <Link 
            href="/aboutus" 
            className="flex items-center gap-1 hover:text-yellow-300 transition-colors duration-200 font-semibold"
          >
            <span className="hidden sm:inline"><FaInfoCircle size={18} /></span> About Us
          </Link>
          <Link 
            href="/contactus" 
            className="flex items-center gap-1 hover:text-yellow-300 transition-colors duration-200 font-semibold"
          >
            <span className="hidden sm:inline"><FaPhoneAlt size={18} /></span> Contact Us
          </Link>
          <Link 
            href="/terms" 
            className="flex items-center gap-1 hover:text-yellow-300 transition-colors duration-200 font-semibold"
          >
            <span className="hidden sm:inline"><FaFileContract size={18} /></span> Terms &amp; Conditions
          </Link>
          <Link 
            href="/privacypolicy" 
            className="flex items-center gap-1 hover:text-yellow-300 transition-colors duration-200 font-semibold"
          >
            <span className="hidden sm:inline"><FaShieldAlt size={18} /></span> Privacy Policy
          </Link>
          <Link 
            href="/refundpolicy" 
            className="flex items-center gap-1 hover:text-yellow-300 transition-colors duration-200 font-semibold"
          >
            <span className="hidden sm:inline"><FaMoneyCheckAlt size={18} /></span> Refund Policy
          </Link>
        </div>
      </div>
      <hr className="w-full border-t border-dotted border-white/40 my-6 block" />
      <div className="text-sm font-serif text-center text-white/80">Copyrights © 2025 Geek Services. All Rights Reserved</div>
      <div className="text-center text-2xl font-bold mt-2 font-serif text-yellow-300 tracking-wide">Geek Services</div>
    </footer>
  );
} 