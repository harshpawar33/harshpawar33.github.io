import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownRight, Download, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { animateHeroSection } from '../utils/animations';

export const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const cleanup = animateHeroSection(heroRef.current);
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between bg-[#F5F4F0] bg-grid-pattern overflow-hidden">
      {/* Decorative Technical Grid Overlay Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1677FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 text-[10px] font-mono text-[#727982]/40 tracking-widest pointer-events-none hidden lg:block">
        SYS.VER: 2026.07 // AUTONOMOUS & ELECTRIFIED POWERTRAIN SPECS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6 z-10">
            {/* Status Pill */}
            <div className="hero-status-pill inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111318] text-white rounded-full text-xs font-mono w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
              <Calendar className="w-3.5 h-3.5 text-[#1677FF]" />
              <span className="text-[#F5F4F0] font-medium">
                Open to UK engineering opportunities from October 2026
              </span>
            </div>

            {/* Name & Title */}
            <div className="hero-title space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#111318] font-display tracking-tight leading-[1.05]">
                Harsh Pawar
              </h1>
              <p className="text-base sm:text-lg font-semibold text-[#1677FF] font-mono uppercase tracking-wider">
                Automotive Engineer <span className="text-[#727982] mx-1">•</span> NVH <span className="text-[#727982] mx-1">•</span> EV Powertrain <span className="text-[#727982] mx-1">•</span> CAE & Simulation
              </p>
            </div>

            {/* Primary Statement */}
            <div className="hero-quote">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#062A52] font-display italic leading-tight border-l-4 border-[#1677FF] pl-4 py-1">
                “Engineer the quiet. Electrify the drive.”
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="hero-desc text-base sm:text-lg text-[#111318]/80 font-normal leading-relaxed max-w-2xl">
              Automotive engineer combining six years of vehicle assessment, technical operations and workshop experience with simulation-led development in NVH, electrified powertrains, vehicle dynamics and CAE.
            </p>

            {/* Action Buttons */}
            <div className="hero-buttons flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#selected-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1677FF] hover:bg-[#062A52] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <span>View Selected Work</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/Harsh-Pawar-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#111318] hover:bg-[#1677FF] text-white text-sm font-bold rounded-xl transition-all shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="hero-stats grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#111318]/10 text-xs font-mono">
              <div>
                <span className="text-[#727982] block">EXPERIENCE</span>
                <span className="font-bold text-[#111318]">6 Years Automotive</span>
              </div>
              <div>
                <span className="text-[#727982] block">EDUCATION</span>
                <span className="font-bold text-[#111318]">MSc Oxford Brookes</span>
              </div>
              <div>
                <span className="text-[#727982] block">MOTORSPORT</span>
                <span className="font-bold text-[#111318]">FSUK AI 2026 Winner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Oversized Mechanical Visor/Panel Revealed Portrait */}
          <div className="lg:col-span-5 relative flex justify-center items-center z-10">
            <div className="hero-portrait relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden bg-[#111318] shadow-2xl border border-[#111318]/20 group">
              {/* Image itself */}
              <img
                src="/assets/harsh-portrait.webp"
                alt="Harsh Pawar - Automotive Engineer"
                onLoad={() => setImageLoaded(true)}
                className="w-full h-full object-cover object-center transition-all duration-700 scale-105 group-hover:scale-100"
              />

              {/* Technical Drawing Border Overlay */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none m-3" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#111318]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className="text-[#1677FF] font-bold">HARSH PAWAR</span>
                </div>
                <p className="text-xs text-slate-300 font-sans">
                  NVH • EV Powertrain • CAE • Vehicle Dynamics
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
