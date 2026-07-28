import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Work', href: '#selected-work' },
    { name: 'FSUK AI 2026', href: '#fsuk-2026' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F4F0]/90 backdrop-blur-md border-b border-[#111318]/10 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 bg-[#111318] text-white flex items-center justify-center font-display font-bold text-sm tracking-wider rounded-lg group-hover:bg-[#1677FF] transition-colors">
            HP
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base text-[#111318] tracking-tight group-hover:text-[#1677FF] transition-colors">
              HARSH PAWAR
            </span>
            <span className="text-[10px] font-mono text-[#727982] uppercase tracking-wider">
              Automotive Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-[#111318]/80 hover:text-[#1677FF] rounded-md transition-colors font-sans tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Harsh-Pawar-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#111318] hover:bg-[#1677FF] text-white text-xs font-semibold rounded-lg transition-all shadow-xs hover:shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111318] hover:bg-[#111318]/5 rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F4F0] border-b border-[#111318]/10 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-[#111318] hover:bg-[#111318]/5 rounded-lg transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#727982]" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#111318]/10">
            <a
              href="/Harsh-Pawar-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[#111318] text-white text-xs font-semibold rounded-lg hover:bg-[#1677FF] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
