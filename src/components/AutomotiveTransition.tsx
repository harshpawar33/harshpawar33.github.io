import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Layers, Activity, Cpu, ShieldCheck } from 'lucide-react';
import { animateSectionHeader, animateCardsStagger } from '../utils/animations';

export const AutomotiveTransition: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cleanupHeader: (() => void) | undefined;
    let cleanupCards: (() => void) | undefined;

    if (headerRef.current) {
      cleanupHeader = animateSectionHeader(headerRef.current);
    }
    if (cardsRef.current) {
      cleanupCards = animateCardsStagger(cardsRef.current, '.gsap-transition-card');
    }

    return () => {
      if (cleanupHeader) cleanupHeader();
      if (cleanupCards) cleanupCards();
    };
  }, []);

  const marqueeItems = [
    'NVH & ACOUSTIC MODAL ANALYSIS',
    'HYBRID POWERTRAIN GT-SUITE',
    '4-DOF SUSPENSION DYNAMICS',
    'BIDIRECTIONAL V2G POWER ELECTRONICS',
    'COMPOSITE BATTERY ENCLOSURE CRASH',
    'FORMULA STUDENT UK AI WINNER 2026',
    'PACEJKA TYRE MODEL FITTING',
  ];

  return (
    <section
      id="selected-work"
      className="relative bg-[#111318] text-white py-16 overflow-hidden border-y border-white/10"
    >
      {/* Background Engineering Blueprint Grid */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-30 pointer-events-none" />

      {/* Infinite Motion Marquee Ticker Bar */}
      <div className="w-full bg-[#1677FF]/10 border-y border-[#1677FF]/20 py-2.5 overflow-hidden whitespace-nowrap mb-12">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="inline-flex items-center gap-8 text-xs font-mono tracking-widest text-[#1677FF] uppercase font-bold"
        >
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#1677FF]">
            <Layers className="w-3.5 h-3.5" />
            <span>AUTOMOTIVE SYSTEMS ENGINEERING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Engineering Systems & Evidence
          </h2>
          <p className="text-sm sm:text-base text-[#727982] max-w-2xl mx-auto leading-relaxed">
            Simulation-led work across noise and vibration, electrified powertrains, vehicle dynamics, power electronics and lightweight structures.
          </p>
        </div>

        {/* Subdiscipline Architecture Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <a
            href="#nvh-acoustics"
            className="gsap-transition-card bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1677FF] rounded-2xl p-5 transition-all group flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3 text-[#1677FF]">
              <Activity className="w-5 h-5" />
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1677FF]/20 text-[#1677FF]">
                01
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white group-hover:text-[#1677FF] transition-colors">
                NVH & Acoustics
              </h3>
              <p className="text-xs text-[#727982] font-mono mt-1">
                Sound quality, acoustic modal testing, acoustic transfer functions & noise attenuation.
              </p>
            </div>
          </a>

          <a
            href="#ev-powertrain"
            className="gsap-transition-card bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1677FF] rounded-2xl p-5 transition-all group flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3 text-[#1677FF]">
              <Cpu className="w-5 h-5" />
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1677FF]/20 text-[#1677FF]">
                02
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white group-hover:text-[#1677FF] transition-colors">
                EV Powertrain
              </h3>
              <p className="text-xs text-[#727982] font-mono mt-1">
                Motor performance mapping, thermal management, transmission ratio optimization.
              </p>
            </div>
          </a>

          <a
            href="#power-electronics"
            className="gsap-transition-card bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1677FF] rounded-2xl p-5 transition-all group flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3 text-[#1677FF]">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1677FF]/20 text-[#1677FF]">
                03
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white group-hover:text-[#1677FF] transition-colors">
                Power Electronics
              </h3>
              <p className="text-xs text-[#727982] font-mono mt-1">
                Inverter efficiency, SiC switching dynamics, PCB thermal analysis & EMI shielding.
              </p>
            </div>
          </a>

          <a
            href="#cae-crash"
            className="gsap-transition-card bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1677FF] rounded-2xl p-5 transition-all group flex flex-col justify-between hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3 text-[#1677FF]">
              <Layers className="w-5 h-5" />
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1677FF]/20 text-[#1677FF]">
                04
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white group-hover:text-[#1677FF] transition-colors">
                CAE & Crash Impact
              </h3>
              <p className="text-xs text-[#727982] font-mono mt-1">
                Composite impact energy absorption, crashworthiness, non-linear FEA simulation.
              </p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
